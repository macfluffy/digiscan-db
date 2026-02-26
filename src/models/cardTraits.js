import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

// These are the traits that can be found on the bottom of a card.
// There are too many traits being added to the game, using ENUM
// would be impractical
export class CardTraits extends Model {}

CardTraits.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        cardType: {
            type: DataTypes.STRING,
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardTraits',
    },
);