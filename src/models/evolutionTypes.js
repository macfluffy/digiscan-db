import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

// This represents all the modes a digimon can evolve
class EvolutionTypes extends Model {}

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
                'arts'
            ],
        },
    },
    {
        sequelize,
        modelName: 'EvolutionTypes',
    },
);