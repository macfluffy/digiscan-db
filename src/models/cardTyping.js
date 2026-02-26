import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

import { Cards } from './cards';
import { CardTypes } from './cardTypes';

// This is the card type(s) printed on a specific card
// as cards can now have more than one type post BT25 
// set release
export class CardTyping extends Model {}

CardTyping.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        typeId: {
            type: DataTypes.INTEGER,
            references: {
                model: CardTypes,
                key: 'id',
            },
        },
    },
    {
        sequelize,
        modelName: 'CardTyping',
    },
);

// Define the many-to-many relationship between cards and card types
Cards.belongsToMany(CardTypes, { through: CardTyping });
CardTypes.belongsToMany(Cards, { through: CardTyping });