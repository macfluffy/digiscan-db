import { sequelize } from "../../../config/database.js";
import { CardTraitings } from "../../../models/cardTraitings.js";
import "../../../models/associations/cardAssociations.js";

const seedData = [
    { 
        cardId: 1,
        traitId: 1
    },
    { 
        cardId: 1,
        traitId: 2
    },
    { 
        cardId: 2,
        traitId: 3
    },
    { 
        cardId: 2,
        traitId: 4
    },
    { 
        cardId: 2,
        traitId: 5
    },
    { 
        cardId: 3,
        traitId: 3
    },
    { 
        cardId: 3,
        traitId: 4
    },
    { 
        cardId: 3,
        traitId: 6
    },
    { 
        cardId: 4,
        traitId: 3
    },
    { 
        cardId: 4,
        traitId: 7
    },
    { 
        cardId: 4,
        traitId: 8
    },
    { 
        cardId: 5,
        traitId: 9
    },
    { 
        cardId: 5,
        traitId: 4
    },
    { 
        cardId: 5,
        traitId: 10
    },
    { 
        cardId: 6,
        traitId: 9
    },
    { 
        cardId: 6,
        traitId: 11
    },
    { 
        cardId: 6,
        traitId: 8
    },
    { 
        cardId: 7,
        traitId: 9
    },
    { 
        cardId: 7,
        traitId: 4
    },
    { 
        cardId: 7,
        traitId: 12
    },
    { 
        cardId: 8,
        traitId: 13
    },
    { 
        cardId: 8,
        traitId: 4
    },
    { 
        cardId: 8,
        traitId: 14
    },
    { 
        cardId: 9,
        traitId: 13
    },
    { 
        cardId: 9,
        traitId: 4
    },
    { 
        cardId: 9,
        traitId: 15
    },
    { 
        cardId: 10,
        traitId: 16
    },
    { 
        cardId: 10,
        traitId: 4
    },
    { 
        cardId: 10,
        traitId: 17
    },
    { 
        cardId: 11,
        traitId: 16
    },
    { 
        cardId: 11,
        traitId: 4
    },
    { 
        cardId: 11,
        traitId: 18
    }
];

export const seedCardTraitingsData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ alter: true });
        console.log("Modifying columns to match model.");

        await CardTraitings.bulkCreate(seedData);
        console.log("Card Traitings junction table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Card Traitings Junction Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCardTraitingsData();