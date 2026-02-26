import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';


class CardTypes extends Model {}

CardTypes.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        cardType: {
            type: DataTypes.ENUM,
            values: ['digiegg', 'digimon', 'tamers', 'options'],
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardTypes',
    },
);