import { Router } from "express";
import { Sequelize } from "sequelize";
import { owningModelFinder } from "../../utilities/queryHelper.js";

import { Cards } from "../../models/cards.js";
import { CardSets} from "../../models/cardSets.js";
import { CardTraits } from "../../models/cardTraits.js";
import { CardTypes } from "../../models/cardTypes.js";
import { Colours } from "../../models/colours.js";
import { CostTypes } from "../../models/costTypes.js";

export const cardsRouter = Router();

// Transform the value into the correct data type and only
// filter queries by attributes in here
const filterConfig = {
    cardNumber: (value) => value,
    cardName: (value) => value,
    cardText: (value) => value,
    cardType: (value) => value,
    level: (value) => Number(value),
    rarity: (value) => value,
    inheritable: (value) => value,
    power: (value) => Number(value),
    setNumber: (value) => value,
};

// Which models to include in the query
const includedAssociations = 
[
    'card_types', 
    'colours', 
    'card_traits', 
    'card_costs', 
    'card_sets',
];

// Which columns to return per association
const associationAttributeConfig = {
    CardTypes: ['cardType'], 
    Colours: ['colourName'], 
    CardTraits: ['cardTrait'], 
    CostTypes: ['costType'], 
    CardSets: ['setNumber'],
};

// Filterable and readable attributes through junction tables
const throughAttributeConfig = {
    CostTypes: ['cardCost'],
};

const modelFinder = owningModelFinder(Cards);

// CREATE: A new card

// READ: All cards that match these filters. 
//       Returns all cards if no filters present.
cardsRouter.get("/", async (request, response) => {
    try {
        // Filterable attributes from the models they belong to
        const searchParamaters = {};
        const associationParameters = new Map();    // target model -> { attribute: value }
        const throughParameters = new Map();        // target model -> { attribute: value }

        // Add in the search filter parameters
        Object.entries(filterConfig).forEach(([attribute, transform]) => {
            const value = request.query[attribute];
            if (value === undefined) { return; }

            const transformedAttribute = transform(value);
            const owningModel = modelFinder(attribute);
            if (!owningModel) { return; }

            if (owningModel.type === 'primary') {
                searchParamaters[attribute] = transformedAttribute;
            }
            else if (owningModel.type === 'through') {
                if (!throughParameters.has(owningModel.model)) {
                    throughParameters.set(owningModel.model, {});
                }

                throughParameters.get(owningModel.model)[attribute] = transformedAttribute;
            }
            else if (owningModel.type === 'target') {
                if (!associationParameters.has(owningModel.model)) {
                    associationParameters.set(owningModel.model, {});
                }

                associationParameters.get(owningModel.model)[attribute] = transformedAttribute;
            }
        });

        // Include all the relevant data attributes from associated models 
        // in the search result
        const include = Object.values(Cards.associations)
        .filter((association) => { 
            return includedAssociations.includes(association.as); 
        })
        .map((association) => {
            const modelName = association.target.name;
            const targetParams = associationParameters.get(association.target);
            const throughParams = throughParameters.get(association.target);

            const isTargetFilter = !!targetParams && Object.keys(targetParams).length > 0;
            const isThroughFilter = !!throughParams && Object.keys(throughParams).length > 0;

            return {
                model: association.target,
                as: association.as,
                through: { 
                    attributes: throughAttributeConfig[modelName] ?? [],
                    where: isThroughFilter ? throughParams : undefined, 
                },
                attributes: associationAttributeConfig[modelName] ?? undefined,
                where: isTargetFilter ? targetParams : undefined,
                required: isTargetFilter || isThroughFilter,
            }
        });
        
        // Paginate the results
        const firstPage = 1;
        const turnToPage = parseInt(request.query.page);
        const page = Math.max(firstPage, turnToPage || firstPage);
        const cardsPerPage = Math.min(100, Math.max(1, parseInt(request.query.limit) || 10));
        const cardsOnDisplay = (page - firstPage) * cardsPerPage;

        // Build the results
        const { count, rows } = await Cards.findAndCountAll({
            where: searchParamaters,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include,
            limit: cardsPerPage,
            offset: cardsOnDisplay,
            distinct: true,
            subQuery: false,
        });

        // Send out the response
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

cardsRouter.get("/random", async (request, response) => {
    try {
        const minMax = await Cards.findOne({
            attributes: [
                [Sequelize.fn('MIN', Sequelize.col('id')), 'minId'],
                [Sequelize.fn('MAX', Sequelize.col('id')), 'maxId']
            ],
            raw: true
        });

        console.log(minMax);
    }
    catch (error) {
        console.log(error);
        response.status(500).send();
    }
});

// UPDATE: A card

// DELETE: A card