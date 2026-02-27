import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

import { Cards } from './cards';
import { CardFrames } from './cardFrames';

// This is shows the type of frame that was used on a card
export class CardFraming extends Model {}

CardFraming.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        frameId: {
            type: DataTypes.INTEGER,
            references: {
                model: CardFrames,
                key: 'id',
            },
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardFraming',
    },
);

// Define the many-to-many relationship between cards and card frames
Cards.belongsToMany(CardFrames, { through: CardFraming });
CardFrames.belongsToMany(Cards, { through: CardFraming });