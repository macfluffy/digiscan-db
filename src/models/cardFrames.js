import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

// This is the border, the frame, or the template of the card 
export class CardFrames extends Model {}

CardFrames.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        cardFrame: {
            type: DataTypes.ENUM,
            values: [
                '2021',
                '2023',
            ],
        },
        frameEffect: {
            // These are the additional cosmetic flares on a card that
            // also reflect the card's type
            types: DataTypes.ENUM,
            values: [
                'regular',
                'ACE',
                'dualCard'
            ],
        },
        releaseDate: {
            // Only need the year, month, and day
            type: DataTypes.DATEONLY,
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardFrames',
    },
);