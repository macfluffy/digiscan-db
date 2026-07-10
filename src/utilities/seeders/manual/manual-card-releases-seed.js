import { sequelize } from "../../../config/database.js";
import { CardReleases } from "../../../models/cardReleases.js";
import "../../../models/associations/cardAssociations.js";

const seedData = [
    { 
        cardId: 1,
        setId: 4
    },
    { 
        cardId: 2,
        setId: 4
    },
    { 
        cardId: 3,
        setId: 4
    },
    { 
        cardId: 4,
        setId: 4
    },
    { 
        cardId: 5,
        setId: 4
    },
    { 
        cardId: 6,
        setId: 4
    },
    { 
        cardId: 7,
        setId: 4
    },
    { 
        cardId: 8,
        setId: 4
    },
    { 
        cardId: 9,
        setId: 4
    },
    { 
        cardId: 10,
        setId: 4
    },
    { 
        cardId: 11,
        setId: 4
    },
    { 
        cardId: 12,
        setId: 4
    },
    { 
        cardId: 13,
        setId: 4
    },
    { 
        cardId: 14,
        setId: 4
    },
    { 
        cardId: 15,
        setId: 4
    },
    { 
        cardId: 16,
        setId: 4
    }
];

export const seedCardReleasesData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ alter: true });
        console.log("Modifying columns to match model.");

        await CardReleases.bulkCreate(seedData);
        console.log("Card Releases junction table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Card Releases Junction Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCardReleasesData();