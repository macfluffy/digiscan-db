import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

// These are the different printings of a card
export class CardTreatments extends Model {}

CardTreatments.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        treatment: {
            type: DataTypes.ENUM,
            values: [
                'regular',
                'alternate art',
                'silver',
                'gold',
                'one star',
                'two star',
                'three star',
                'signature',
                'SP'
            ],
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardTreatments',
    },
);