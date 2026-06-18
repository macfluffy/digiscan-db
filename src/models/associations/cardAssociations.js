import { Cards } from "../cards.js";
import { CardTypes } from "../cardTypes.js";
import { CardTyping } from "../cardTyping.js";

// Card Typing: Cards can have multiple card types
CardTypes.belongsToMany(Cards, 
    { 
        through: CardTyping, 
        foreignKey: 'cardId', 
        otherKey: 'typeId',
        sourceKey: 'id' 
    }
);
Cards.belongsToMany(CardTypes, 
    { 
        through: CardTyping, 
        foreignKey: 'cardId', 
        otherKey: 'typeId' ,
        sourceKey: 'id' 
    }
);

// Card Costing: Cards can have multiple costs and ways to pay