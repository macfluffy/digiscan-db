import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

// This represents the digimon card object and the many singular values it contains
class Cards extends Model {}

Cards.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        // STRING has 255 character limit, TEXT has unlimited length
        cardNumber: {
            type: DataTypes.STRING,
        },
        cardName: {
            type: DataTypes.STRING,
        },
        level: {
            type: DataTypes.INTEGER,
        },
        power: {
            type: DataTypes.INTEGER,
        },
        cardText: {
            type: DataTypes.TEXT,
        },
        inheritable: {
            type: DataTypes.TEXT,
        },
        rarity: {
            type: DataTypes.ENUM,
            values: [
                'common',
                'uncommon',
                'rare',
                'superRare',
                'ultraRare',
                'secretRare'
            ],
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'Cards',
    },
);