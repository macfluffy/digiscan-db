import { Router } from "express";

import { Cards } from "../../models/cards.js";
import { CardTypes } from "../../models/cardTypes.js";
import { Colours } from "../../models/colours.js";
import { CardTraits } from "../../models/cardTraits.js";
import { CostTypes } from "../../models/costTypes.js";

export const cardsRouter = Router();

// CREATE: A new card

// READ: All cards
cardsRouter.get("/", async (request, response) => {
    try {
        const cards = await Cards.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: CardTypes,
                as: 'card_types',
                attributes: ['cardType'],
                required: true,
                through: { attributes: [] }
            }, 
            {
                model: Colours,
                as: 'colours',
                attributes: ['colourName'],
                required: true,
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
            }
        ]
        });
        response.status(200).json(cards);
    }
    catch (error) {
        console.log(error);
        response.status(500).send();
    }
});

// READ: A card

// UPDATE: A card

// DELETE: A card