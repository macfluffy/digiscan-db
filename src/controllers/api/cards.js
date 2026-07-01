import { Router } from "express";

import { Cards } from "../../models/cards.js";
import { CardTypes } from "../../models/cardTypes.js";
import { Colours } from "../../models/colours.js";
import { CardTraits } from "../../models/cardTraits.js";
import { CostTypes } from "../../models/costTypes.js";

export const cardsRouter = Router();

const filterConfig = {
    cardNumber: (value) => value,
    cardName: (value) => value,
    cardText: (value) => value,
    level: (value) => Number(value),
    rarity: (value) => value,
    inheritable: (value) => value,
    power: (value) => Number(value),
};

// CREATE: A new card

// READ: All cards that match these filters. 
//       Returns all cards if no filters present.
cardsRouter.get("/", async (request, response) => {
    try {
        const searchParamaters = {};

        // Add in the search filter parameters
        Object.entries(filterConfig).forEach(([attribute, transform]) => {
            const value = request.query[attribute];
            if (value !== undefined) {
                searchParamaters[attribute] = transform(value);
            }
        });
        
        // Paginate the results
        const firstPage = 1;
        const turnToPage = parseInt(request.query.page);
        const page = Math.max(firstPage, turnToPage || firstPage);
        const cardsPerPage = Math.min(100, Math.max(1, parseInt(request.query.limit) || 10));
        const cardsOnDisplay = (page - firstPage) * cardsPerPage;

        const { count, rows } = await Cards.findAndCountAll({
            where: searchParamaters,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: CardTypes,
                as: 'card_types',
                attributes: ['cardType'],
                through: { attributes: [] }
            }, 
            {
                model: Colours,
                as: 'colours',
                attributes: ['colourName'],
                through: { attributes: [] }
            },
            {
                model: CardTraits,
                as: 'card_traits',
                attributes: ['cardTrait'],
                through: { attributes: [] }
            },
            {
                model: CostTypes,
                as: 'card_costs',
                attributes: ['costType'],
                through: { attributes: ['cardCost'] }
            }],
            limit: cardsPerPage,
            offset: cardsOnDisplay,
            distinct: true,
        });

        response.status(200).json({
            success: true,
            data: rows,
            pagination: {
                total: count,
                page,
                cardsPerPage,
                totalPages: Math.ceil(count / cardsPerPage),
            },
        });
    }
    catch (error) {
        console.log(error);
        response.status(500).send();
    }
});

// UPDATE: A card

// DELETE: A card