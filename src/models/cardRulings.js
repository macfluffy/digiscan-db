import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/database/database";

import { Cards } from "./cards";
import { RulesClarifications } from "./rulesClarifications";

// This is the official and unofficial rulings on a card,
// that are released on Bandai's official set release and
// extra clarifications from other members of the 
// community
export class CardRulings extends Model {}

CardRulings.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        rulingsId: {
            type: DataTypes.INTEGER,
            references: {
                model: RulesClarifications,
                key: 'id',
            },
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardRulings',
    },
);

// Define the many-to-many relationship between cards and rules clarifications
Cards.belongsToMany(RulesClarifications, { through: CardRulings });
RulesClarifications.belongsToMany(Cards, { through: CardRulings });