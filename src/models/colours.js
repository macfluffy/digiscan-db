import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

// This represents all the colours in Digimon
export class Colours extends Model {}

Colours.init(
    {
        // Model attributes:
        // Primary key is already assumed and doesn't need to be defined
        colourName: {
            type: DataTypes.ENUM,
            values: [
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
        timestamps: false,
        underscored: true,
    },
);