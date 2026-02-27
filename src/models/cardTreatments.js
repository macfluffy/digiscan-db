import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

// These are the different printings of a card
export class CardTreatments extends Model {}

CardTreatments.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        cardType: {
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