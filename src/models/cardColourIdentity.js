import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database/database';

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
        underscored: true,
    },
);