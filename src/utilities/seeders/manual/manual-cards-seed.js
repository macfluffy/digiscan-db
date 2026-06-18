import { sequelize } from "../../../config/database.js";
import { Cards } from "../../../models/cards.js";

const seedData = [
    { 
        cardNumber: "ST1-01",
        cardName: "Koromon",
        level: 2,
        power: null,
        cardText: "",
        inheritable: "[Your Turn] While this Digimon has 4 or more digivolution cards, it gets +1000 DP.",
        rarity: "uncommon"
    },
    { 
        cardNumber: "ST1-02",
        cardName: "Biyomon",
        level: 3,
        power: 3000,
        cardText: "",
        inheritable: "-",
        rarity: "common"
    },
    { 
        cardNumber: "ST1-03",
        cardName: "Agumon",
        level: 3,
        power: 2000,
        cardText: "",
        inheritable: "[Your Turn] This Digimon gets +1000 DP.",
        rarity: "uncommon"
    },
    { 
        cardNumber: "ST1-04",
        cardName: "Dracomon",
        level: 3,
        power: 4000,
        cardText: "",
        inheritable: "-",
        rarity: "uncommon"
    },
    { 
        cardNumber: "ST1-05",
        cardName: "Birdramon",
        level: 4,
        power: 5000,
        cardText: "",
        inheritable: "-",
        rarity: "common"
    },
    { 
        cardNumber: "ST1-06",
        cardName: "Coredramon",
        level: 4,
        power: 6000,
        cardText: "<Blocker> [When Attacking] Lose 2 memory.",
        inheritable: "-",
        rarity: "common"
    },
    { 
        cardNumber: "ST1-07",
        cardName: "Greymon",
        level: 4,
        power: 4000,
        cardText: "",
        inheritable: "<Security Attack +1>",
        rarity: "uncommon"
    },
    { 
        cardNumber: "ST1-08",
        cardName: "Garudamon",
        level: 5,
        power: 7000,
        cardText: "[When Digivolving] 1 of your Digimon gets +3000 DP for the turn.",
        inheritable: "-",
        rarity: "uncommon"
    },
    { 
        cardNumber: "ST1-09",
        cardName: "MetalGreymon",
        level: 5,
        power: 7000,
        cardText: "",
        inheritable: "[Your Turn] When this Digimon is blocked, gain 3 memory.",
        rarity: "rare"
    },
    { 
        cardNumber: "ST1-10",
        cardName: "Phoenixmon",
        level: 6,
        power: 12000,
        cardText: "",
        inheritable: "",
        rarity: "rare"
    },
    { 
        cardNumber: "ST1-11",
        cardName: "WarGreymon",
        level: 6,
        power: 12000,
        cardText: "[Your Turn] For every 2 digivolution cards this Digimon has, it gains <Security Attack +1>.",
        inheritable: "",
        rarity: "superRare"
    },
    { 
        cardNumber: "ST1-12",
        cardName: "Tai Kamiya",
        level: null,
        power: null,
        cardText: "[Your Turn] All of your Digimon get +1000 DP.",
        inheritable: "[Security] Play this card without paying its memory cost.",
        rarity: "rare"
    },
    { 
        cardNumber: "ST1-13",
        cardName: "Shadow Wing",
        level: null,
        power: null,
        cardText: "[Main] 1 of your Digimon gets +3000 DP for the turn.",
        inheritable: "[Security] All of your Digimon gain <Security Attack +1> until the end of your next turn.",
        rarity: "common"
    },
    { 
        cardNumber: "ST1-14",
        cardName: "Starlight Explosion",
        level: null,
        power: null,
        cardText: "[Main] All of your Security Digimon get +7000 DP until the end of your opponent's next turn.",
        inheritable: "[Security] All of your Security Digimon get +7000 DP for the turn.",
        rarity: "common"
    },
    { 
        cardNumber: "ST1-15",
        cardName: "Giga Destroyer",
        level: null,
        power: null,
        cardText: "[Main] Delete up to 2 of your opponent's Digimon with 4000 DP or less.",
        inheritable: "[Security] Activate this card's [Main] effect.",
        rarity: "common"
    },
    { 
        cardNumber: "ST1-16",
        cardName: "Gaia Force",
        level: null,
        power: null,
        cardText: "[Main] Delete 1 of your opponent's Digimon.",
        inheritable: "[Security] Activate this card's [Main] effect.",
        rarity: "uncommon"
    },
];

export const seedCardsData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ force: true });
        console.log("Forcing synchronization.");

        await Cards.bulkCreate(seedData);
        console.log("Cards table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Cards Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCardsData();