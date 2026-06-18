import { Cards } from "../cards.js";
import { CardTypes } from "../cardTypes.js";
import { Colours } from "../colours.js";

import { CardTyping } from "../cardTyping.js";
import { CardColourIdentity } from "../cardColourIdentity.js";

// Card Typing: Cards can have multiple card types thanks to dual cards
Cards.belongsToMany(CardTypes, 
    { 
        through: CardTyping, 
        foreignKey: 'cardId', 
        otherKey: 'typeId' ,
        sourceKey: 'id',
        targetKey: 'id' 
    }
);
CardTypes.belongsToMany(Cards, 
    { 
        through: CardTyping, 
        foreignKey: 'typeId', 
        otherKey: 'cardId',
        sourceKey: 'id', 
        targetKey: 'id' 
    }
);

// Card Colour Identity: A card can be multi-coloured
Cards.belongsToMany(Colours, 
    { 
        through: CardColourIdentity, 
        foreignKey: 'cardId',
        otherKey: 'colourId',
        sourceKey: 'id',
        targetKey: 'id'
    }
);
Colours.belongsToMany(Cards, 
    { 
        through: CardColourIdentity, 
        foreignKey: 'colourId',
        otherKey: 'cardId',
        sourceKey: 'id',
        targetKey: 'id'
    }
);

// Card Costing: Cards can have multiple costs and ways to pay