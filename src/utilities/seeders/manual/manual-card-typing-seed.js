import { sequelize } from "../../../config/database.js";
import { CardTyping } from "../../../models/cardTyping.js";
import "../../../models/associations/cardAssociations.js";

const seedData = [
    { 
        cardId: 1,
        typeId: 1
    },
    { 
        cardId: 2,
        typeId: 2
    },
    { 
        cardId: 3,
        typeId: 2
    },
    { 
        cardId: 4,
        typeId: 2
    },
    { 
        cardId: 5,
        typeId: 2
    },
    { 
        cardId: 6,
        typeId: 2
    },
    { 
        cardId: 7,
        typeId: 2
    },
    { 
        cardId: 8,
        typeId: 2
    },
    { 
        cardId: 9,
        typeId: 2
    },
    { 
        cardId: 10,
        typeId: 2
    },
    { 
        cardId: 11,
        typeId: 2
    },
    { 
        cardId: 12,
        typeId: 3
    },
    { 
        cardId: 13,
        typeId: 4
    },
    { 
        cardId: 14,
        typeId: 4
    },
    { 
        cardId: 15,
        typeId: 4
    },
    { 
        cardId: 16,
        typeId: 4
    }
    // },
    // { 
    //     cardId: 17,
    //     typeId: 1
    // },
    // { 
    //     cardId: 18,
    //     typeId: 2
    // },
    // { 
    //     cardId: 19,
    //     typeId: 2
    // },
    // { 
    //     cardId: 20,
    //     typeId: 2
    // },
    // { 
    //     cardId: 21,
    //     typeId: 2
    // },
    // { 
    //     cardId: 22,
    //     typeId: 2
    // },
    // { 
    //     cardId: 23,
    //     typeId: 2
    // },
    // { 
    //     cardId: 24,
    //     typeId: 2
    // },
    // { 
    //     cardId: 25,
    //     typeId: 2
    // },
    // { 
    //     cardId: 26,
    //     typeId: 2
    // },
    // { 
    //     cardId: 27,
    //     typeId: 2
    // },
    // { 
    //     cardId: 28,
    //     typeId: 3
    // },
    // { 
    //     cardId: 29,
    //     typeId: 4
    // },
    // { 
    //     cardId: 30,
    //     typeId: 4
    // },
    // { 
    //     cardId: 31,
    //     typeId: 4
    // },
    // { 
    //     cardId: 32,
    //     typeId: 4
    // }
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