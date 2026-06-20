import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database/database';

import { Cards } from './cards';
import { CardTraits } from './cardTraits';

// This the application of traits on a card
export class CardTraitings extends Model {}

CardTraitings.init(
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
        modelName: 'CardTraitings',
        underscored: true,
    },
);