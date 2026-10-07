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
        // Both card and set need to have PK to form the composite key
        cardId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        setId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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