import { sequelize } from "../../../config/database.js";
import { CardTyping } from "../../../models/cardTyping.js";
import "../../../models/associations/cardAssociations.js";

const seedData = [
    { 
        card_id: 1,
        type_id: 1
    },
    { 
        card_id: 1,
        type_id: 2
    },
    { 
        card_id: 2,
        type_id: 3
    },
    { 
        card_id: 2,
        type_id: 4
    },
    { 
        card_id: 2,
        type_id: 5
    },
    { 
        card_id: 3,
        type_id: 3
    },
    { 
        card_id: 3,
        type_id: 4
    },
    { 
        card_id: 3,
        type_id: 6
    },
    { 
        card_id: 4,
        type_id: 3
    },
    { 
        card_id: 4,
        type_id: 7
    },
    { 
        card_id: 4,
        type_id: 8
    },
    { 
        card_id: 5,
        type_id: 9
    },
    { 
        card_id: 5,
        type_id: 4
    },
    { 
        card_id: 5,
        type_id: 10
    },
    { 
        card_id: 6,
        type_id: 9
    },
    { 
        card_id: 6,
        type_id: 11
    },
    { 
        card_id: 6,
        type_id: 8
    },
    { 
        card_id: 7,
        type_id: 9
    },
    { 
        card_id: 7,
        type_id: 4
    },
    { 
        card_id: 7,
        type_id: 12
    },
    { 
        card_id: 8,
        type_id: 13
    },
    { 
        card_id: 8,
        type_id: 4
    },
    { 
        card_id: 8,
        type_id: 14
    },
    { 
        card_id: 9,
        type_id: 13
    },
    { 
        card_id: 9,
        type_id: 4
    },
    { 
        card_id: 9,
        type_id: 15
    },
    { 
        card_id: 10,
        type_id: 16
    },
    { 
        card_id: 10,
        type_id: 4
    },
    { 
        card_id: 10,
        type_id: 17
    },
    { 
        card_id: 11,
        type_id: 16
    },
    { 
        card_id: 11,
        type_id: 4
    },
    { 
        card_id: 11,
        type_id: 18
    }
];

export const seedCardTypingsData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ alter: true });
        console.log("Modifying columns to match model.");

        await CardTyping.bulkCreate(seedData);
        console.log("Card Typings junction table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Card Typings Junction Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCardTypingsData();