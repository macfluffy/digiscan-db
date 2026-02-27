import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

// This represents all the modes a digimon can evolve
export class EvolutionTypes extends Model {}

EvolutionTypes.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        evolutionType: {
            type: DataTypes.ENUM,
            value: [
                'normal',
                'name',
                'trait',
                'warp',
                'tamer',
                'DNA',
                'appFusion',
                'arts'
            ],
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'EvolutionTypes',
    },
);