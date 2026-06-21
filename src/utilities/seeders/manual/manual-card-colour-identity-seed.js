import { sequelize } from "../../../config/database.js";
import { CardColourIdentity } from "../../../models/cardColourIdentity.js";
import "../../../models/associations/cardAssociations.js";

const seedData = [
    { 
        cardId: 1,
        colourId: 1
    },
    { 
        cardId: 2,
        colourId: 1
    },
    { 
        cardId: 3,
        colourId: 1
    },
    { 
        cardId: 4,
        colourId: 1
    },
    { 
        cardId: 5,
        colourId: 1
    },
    { 
        cardId: 6,
        colourId: 1
    },
    { 
        cardId: 7,
        colourId: 1
    },
    { 
        cardId: 8,
        colourId: 1
    },
    { 
        cardId: 9,
        colourId: 1
    },
    { 
        cardId: 10,
        colourId: 1
    },
    { 
        cardId: 11,
        colourId: 1
    },
    { 
        cardId: 12,
        colourId: 1
    },
    { 
        cardId: 13,
        colourId: 1
    },
    { 
        cardId: 14,
        colourId: 1
    },
    { 
        cardId: 15,
        colourId: 1
    },
    { 
        cardId: 16,
        colourId: 1
    }
];

export const seedCardColourIdentitiesData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ alter: true });
        console.log("Modifying columns to match model.");

        await CardColourIdentity.bulkCreate(seedData);
        console.log("Card Colour Identity junction table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Card Colour Identity Junction Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCardColourIdentitiesData();