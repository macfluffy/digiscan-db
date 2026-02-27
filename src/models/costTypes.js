import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

// These are the different costs associated with playing a card,
// referencing the use cost for options and play cost for 
// everything else
export class CostTypes extends Model {}

CostTypes.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        cardType: {
            type: DataTypes.ENUM,
            values: [
                'play', 
                'use'
            ],
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CostTypes',
    },
);