import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

import { Cards } from './cards';
import { CardSets } from './cardSets';

// This table is showing where the cards can be 
// obtained or sourced from
export class CardReleases extends Model {}

CardReleases.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        setId: {
            type: DataTypes.INTEGER,
            references: {
                model: CardSets,
                key: 'id',
            },
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardReleases',
    },
);

// Define the many-to-many relationship between cards and card sets
Cards.belongsToMany(CardSets, { through: CardReleases });
CardSets.belongsToMany(Cards, { through: CardReleases });