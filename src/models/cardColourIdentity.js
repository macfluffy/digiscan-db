import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

import { Cards } from './cards';
import { Colours } from './colours';

// This defines all the colours a card is. A card can be a 
// single colour or many colours. This will depend on the 
// number of times a card appears in this table
export class CardColourIdentity extends Model {}

CardColourIdentity.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        colourId: {
            type: DataTypes.INTEGER,
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
    },
);

// Define the many-to-many relationship between cards and colours
Cards.belongsToMany(Colours, { through: CardColourIdentity });
Colours.belongsToMany(Cards, { through: CardColourIdentity });