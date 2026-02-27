import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

import { Cards } from './cards';
import { CardTreatments } from './cardTreatments';

// These are the type of art cards are printed with.
// These define if the card is found with only regular 
// art or some special parallel rare art
export class CardSpecialPrinting extends Model {}

CardSpecialPrinting.init(
    {
        // Model attributes:
        cardId: {
            type: DataTypes.INTEGER,
            references: {
                model: Cards,
                key: 'id',
            },
        },
        treatmentId: {
            type: DataTypes.INTEGER,
            references: {
                model: CardTreatments,
                key: 'id',
            },
        },
    },
    {
        // Other model options:
        sequelize,
        modelName: 'CardSpecialPrinting',
    },
);

// Define the many-to-many relationship between cards and card treatments
Cards.belongsToMany(CardTreatments, { through: CardSpecialPrinting });
CardTreatments.belongsToMany(Cards, { through: CardSpecialPrinting });