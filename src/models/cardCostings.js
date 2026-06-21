import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import { Cards } from './cards.js';
import { CostTypes } from './costTypes.js';

// This associates the way a card is played or used. 
// It also describes how much memory is needed to 
// play or use a card
export class CardCostings extends Model {}

CardCostings.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        costId: {
            type: DataTypes.INTEGER,
            references: {
                model: CostTypes,
                key: 'id',
            },
        },
        cardCost: {
            type: DataTypes.INTEGER,
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardCostings',
        underscored: true,
    },
);