import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

import { Cards } from './cards';
import { EvolutionTypes } from './evolutionTypes';

// This associates the way a Digimon can evolve
export class EvolutionMethods extends Model {}

EvolutionMethods.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        evolutionId: {
            type: DataTypes.INTEGER,
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

// Define the many-to-many relationship between cards and cost types
Cards.belongsToMany(EvolutionTypes, { through: EvolutionMethods });
EvolutionTypes.belongsToMany(Cards, { through: EvolutionMethods });