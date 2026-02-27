import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

// This represents all the colours in Digimon
export class Colours extends Model {}

Colours.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        colourName: {
            type: DataTypes.ENUM,
            value: [
                'red', 
                'blue', 
                'yellow', 
                'green', 
                'black', 
                'purple', 
                'white'
            ],
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'Colours',
    },
);