import { sequelize } from "../../../config/database.js";
import { CardCostings } from "../../../models/cardCostings.js";
import "../../../models/associations/cardAssociations.js";

const seedData = [
    { 
        cardId: 2,
        costId: 1,
        cardCost: 2
    },
    { 
        cardId: 3,
        costId: 1,
        cardCost: 3
    },
    { 
        cardId: 4,
        costId: 1,
        cardCost: 3
    },
    { 
        cardId: 5,
        costId: 1,
        cardCost: 4
    },
    { 
        cardId: 6,
        costId: 1,
        cardCost: 5
    },
    { 
        cardId: 7,
        costId: 1,
        cardCost: 5
    },
    { 
        cardId: 8,
        costId: 1,
        cardCost: 6
    },
    { 
        cardId: 9,
        costId: 1,
        cardCost: 7
    },
    { 
        cardId: 10,
        costId: 1,
        cardCost: 10
    },
    { 
        cardId: 11,
        costId: 1,
        cardCost: 12
    },
    { 
        cardId: 12,
        costId: 1,
        cardCost: 2
    },
    { 
        cardId: 13,
        costId: 2,
        cardCost: 1
    },
    { 
        cardId: 14,
        costId: 2,
        cardCost: 2
    },
    { 
        cardId: 15,
        costId: 2,
        cardCost: 6
    },
    { 
        cardId: 16,
        costId: 2,
        cardCost: 8
    }
];

export const seedCardCostingsData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ alter: true });
        console.log("Modifying columns to match model.");

        await CardCostings.bulkCreate(seedData);
        console.log("Card Costings junction table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Card Costings Junction Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCardCostingsData();