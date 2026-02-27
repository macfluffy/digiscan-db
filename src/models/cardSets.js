import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

// This is the product or packs in which the cards are found in
// Some items like promo packs do not have a set number
export class CardSets extends Model {}

CardSets.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        setNumber: {
            type: DataTypes.STRING,
        },
        setName: {
            type: DataTypes.STRING,
        },
        blockNumber: {
            type: DataTypes.INTEGER,
        },
        printDate: {
            // Only need the year, month, and day
            type: DataTypes.DATEONLY,
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardSets',
    },
);