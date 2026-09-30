import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import { Cards } from './cards.js';
import { CardTraits } from './cardTraits.js';

// This the application of traits on a card
export class CardTraitings extends Model {}

CardTraitings.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            primaryKey: true,           // Both card and trait need to have PK to form the composite key
            references: {
                model: Cards,
                key: 'id',
            },
        },
        traitId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: CardTraits,
                key: 'id',
            },
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardTraitings',
        timestamps: false,
        underscored: true,
    },
);