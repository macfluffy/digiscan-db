import { Cards } from "../cards.js";
import { CardTypes } from "../cardTypes.js";
import { Colours } from "../colours.js";
import { CardTraits } from "../cardTraits.js";

import { CardTyping } from "../cardTyping.js";
import { CardColourIdentity } from "../cardColourIdentity.js";
import { CardTraitings } from "../cardTraitings.js";

// Card Typing: Cards can have multiple card types thanks to dual cards
Cards.belongsToMany(CardTypes, 
    { 
        through: CardTyping, 
        as: 'card_types',
        foreignKey: 'cardId', 
        otherKey: 'typeId' ,
        sourceKey: 'id',
        targetKey: 'id' 
    }
);
CardTypes.belongsToMany(Cards, 
    { 
        through: CardTyping, 
        as: 'cards',
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
        as: 'colours',
        foreignKey: 'cardId',
        otherKey: 'colourId',
        sourceKey: 'id',
        targetKey: 'id'
    }
);
Colours.belongsToMany(Cards, 
    { 
        through: CardColourIdentity, 
        as: 'cards',
        foreignKey: 'colourId',
        otherKey: 'cardId',
        sourceKey: 'id',
        targetKey: 'id'
    }
);

// Card Costing: Cards can have multiple costs and ways to pay


// Card Traiting: Cards can have multiple traits
Cards.belongsToMany(CardTraits, 
    { 
        through: CardTraitings,
        as: 'card_traits',
        foreignKey: 'traitId',
        otherKey: 'cardId',
        sourceKey: 'id',
        targetKey: 'id'
    }
);
CardTraits.belongsToMany(Cards, 
    { 
        through: CardTraitings, 
        as: 'cards', 
        foreignKey: 'cardId',
        otherKey: 'traitId',
        sourceKey: 'id',
        targetKey: 'id'
    }
);