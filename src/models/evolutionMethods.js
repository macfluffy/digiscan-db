import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

import { Cards } from './cards.js';
import { EvolutionTypes } from './evolutionTypes.js';

// This associates the way a Digimon can evolve
export class EvolutionMethods extends Model {}

EvolutionMethods.init(
    {
        // Model attributes:
        // Both card and evolution need to have PK to form the composite key
        cardId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        evolutionId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: EvolutionTypes,
                key: 'id',
            },
        },
        evolutionRequirement: {
            type: DataTypes.STRING,
        },
        evolutionCost: {
            type: DataTypes.INTEGER,
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'EvolutionMethods',
    },
);