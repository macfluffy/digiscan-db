import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database/database";

export class RulesClarifications extends Model {}

RulesClarifications.init(
    {
        // Model attributes:
        rulingsId: {
            type: DataTypes.INTEGER,
            key: 'id',
        },
        cardRule: {
            type: DataTypes.TEXT,
        },
        source: {
            type: DataTypes.STRING,
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'RulesClarifications',
    },
);
