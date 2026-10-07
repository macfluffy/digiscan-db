import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import { Cards } from './cards.js';
import { Colours } from './colours.js';

// This defines all the colours a card is. A card can be a 
// single colour or many colours. This will depend on the 
// number of times a card appears in this table
export class CardColourIdentity extends Model {}

CardColourIdentity.init(
    {
        // Model attributes:
        // Both card and colour need to have PK to form the composite key
        cardId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        colourId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Colours,
                key: 'id',
            },
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardColourIdentity',
        timestamps: false,
        underscored: true,
    },
);