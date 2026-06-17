import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import { Cards } from './cards.js';
import { CardTypes } from './cardTypes.js';

// This is the card type(s) printed on a specific card
// as cards can now have more than one type post BT25 
// set release
export class CardTyping extends Model {}

CardTyping.init(
    {
        // Model attributes:
        card_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        type_id: {
            type: DataTypes.INTEGER,
            references: {
                model: CardTypes,
                key: 'id',
            },
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardTyping',
        timestamps: false,
    },
);