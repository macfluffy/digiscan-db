import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

import { Cards } from './cards';
import { CardTraits } from './cardTraits';

// This the application of traits on a card
export class CharacterisingCards extends Model {}

CharacterisingCards.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        traitId: {
            type: DataTypes.INTEGER,
            references: {
                model: CardTraits,
                key: 'id',
            },
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CharacterisingCards',
    },
);

// Define the many-to-many relationship between cards and card traits
Cards.belongsToMany(CardTraits, { through: CharacterisingCards });
CardTraits.belongsToMany(Cards, { through: CharacterisingCards });