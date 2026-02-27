import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

import { Cards } from './cards';
import { CostTypes } from './costTypes';

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
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardCostings',
    },
);

// Define the many-to-many relationship between cards and cost types
Cards.belongsToMany(CostTypes, { through: CardCostings });
CostTypes.belongsToMany(Cards, { through: CardCostings });