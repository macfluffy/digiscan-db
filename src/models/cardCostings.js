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
        // Both card and cost need to have PK to form the composite key
        cardId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        costId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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
        timestamps: true,
        underscored: true,
    },
);