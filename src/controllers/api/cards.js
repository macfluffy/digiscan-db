import { Router } from "express";

import { Cards } from "../../models/cards.js";
import { CardTypes } from "../../models/cardTypes.js";

export const cardsRouter = Router();

// CREATE: A new card

// READ: All cards
cardsRouter.get("/", async (request, response) => {
    try {
        const cards = await Cards.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: {
                model: CardTypes,
                as: 'cardtypes',
                attributes: ['cardType'],
                required: true,
                through: { attributes: [] }
            }
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