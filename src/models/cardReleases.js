import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import { Cards } from './cards.js';
import { CardSets } from './cardSets.js';

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
        timestamps: false,
        underscored: true,
    },
);