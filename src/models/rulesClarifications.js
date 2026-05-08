import { Model, DataTypes } from "sequelize";
import { sequelize } from "../index";

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
