import { sequelize } from "../../../config/database.js";
import { CardSets } from "../../../models/cardSets.js";

const seedData = [
    {
        setNumber: 'BT1',
        setName: 'New Evolution',
        blockNumber: 0,
        printDate: '2020-11-27',
    },
    {
        setNumber: 'BT2',
        setName: 'Ultimate Power',
        blockNumber: 0,
        printDate: '2020-11-27',
    },
    {
        setNumber: 'BT3',
        setName: 'Union Impact',
        blockNumber: 0,
        printDate: '2020-11-27',
    },
    {
        setNumber: 'BT4',
        setName: 'Great Legend',
        blockNumber: 0,
        printDate: '2021-07-11',
    },
    {
        setNumber: 'BT5',
        setName: 'Battle of Omni',
        blockNumber: 0,
        printDate: '2021-08-06',
    },
    {
        setNumber: 'BT6',
        setName: 'Double Diamond',
        blockNumber: 1,
        printDate: '2021-10-15',
    },
    {
        setNumber: 'EX1',
        setName: 'Classic Collection',
        blockNumber: 1,
        printDate: '2021-12-10',
    },
    {
        setNumber: 'BT7',
        setName: 'Next Adventure',
        blockNumber: 1,
        printDate: '2022-03-04',
    },
    {
        setNumber: 'BT8',
        setName: 'New Awakening',
        blockNumber: 1,
        printDate: '2022-05-13',
    },
    {
        setNumber: 'EX2',
        setName: 'Digital Hazard',
        blockNumber: 1,
        printDate: '2022-06-24',
    },
    {
        setNumber: 'BT9',
        setName: 'X Record',
        blockNumber: 1,
        printDate: '2022-07-29',
    },
    {
        setNumber: 'BT10',
        setName: 'Xros Encounter',
        blockNumber: 2,
        printDate: '2022-10-04',
    },
    {
        setNumber: 'EX3',
        setName: 'Draconic Road',
        blockNumber: 2,
        printDate: '2022-11-11',
    },
    {
        setNumber: 'BT11',
        setName: 'Dimensional Phase',
        blockNumber: 2,
        printDate: '2023-02-17',
    },
    {
        setNumber: 'BT12',
        setName: 'Across Time',
        blockNumber: 2,
        printDate: '2023-04-28',
    },
    {
        setNumber: 'EX4',
        setName: 'Alternate Being',
        blockNumber: 2,
        printDate: '2023-06-23',
    },
    {
        setNumber: 'BT13',
        setName: 'Versus Royal Knights',
        blockNumber: 2,
        printDate: '2023-07-21',
    },
    {
        setNumber: 'RB1',
        setName: 'Resurgence Booster',
        blockNumber: 2,
        printDate: '2023-09-23',
    },
    {
        setNumber: 'BT14',
        setName: 'Blast Ace',
        blockNumber: 3,
        printDate: '2023-11-17',
    },
    {
        setNumber: 'EX5',
        setName: 'Animal Colosseum',
        blockNumber: 3,
        printDate: '2024-01-19',
    },
    {
        setNumber: 'BT15',
        setName: 'Exceed Apocalypse',
        blockNumber: 3,
        printDate: '2024-02-16',
    },
    {
        setNumber: 'BT16',
        setName: 'Beginning Observer',
        blockNumber: 3,
        printDate: '2024-05-24',
    },
    {
        setNumber: 'EX6',
        setName: 'Infernal Ascension',
        blockNumber: 3,
        printDate: '2024-06-28',
    },
    {
        setNumber: 'BT17',
        setName: 'Secret Crisis',
        blockNumber: 3,
        printDate: '2024-08-09',
    },
    {
        setNumber: 'EX7',
        setName: 'Digimon Liberator',
        blockNumber: 4,
        printDate: '2024-09-13',
    },
    {
        setNumber: 'BT18',
        setName: 'Elemental Successor',
        blockNumber: 4,
        printDate: '2024-11-01',
    },
    {
        setNumber: 'EX8',
        setName: 'Chain of Liberation',
        blockNumber: 4,
        printDate: '2025-01-10',
    },
    {
        setNumber: 'BT19',
        setName: 'Xros Evolution',
        blockNumber: 4,
        printDate: '2025-02-28',
    },
    {
        setNumber: 'BT20',
        setName: 'Over the X',
        blockNumber: 4,
        printDate: '2025-02-28',
    },
    {
        setNumber: 'BT21',
        setName: 'World Convergence',
        blockNumber: 5,
        printDate: '2025-04-25',
    },
    {
        setNumber: 'EX9',
        setName: 'Versus Monster',
        blockNumber: 5,
        printDate: '2025-06-26',
    },
    {
        setNumber: 'BT22',
        setName: 'Cyber Eden',
        blockNumber: 5,
        printDate: '2025-07-25',
    },
    {
        setNumber: 'EX10',
        setName: 'Sinister Order',
        blockNumber: 5,
        printDate: '2025-09-19',
    },
    {
        setNumber: 'BT23',
        setName: 'Hackers\' Slumber',
        blockNumber: 5,
        printDate: '2025-10-24',
    },
    {
        setNumber: 'BT24',
        setName: 'Time Stranger',
        blockNumber: 5,
        printDate: '2026-01-23',
    },
    {
        setNumber: 'EX11',
        setName: 'Dawn of Liberator',
        blockNumber: 5,
        printDate: '2026-02-13',
    },
    {
        setNumber: 'AD1',
        setName: 'Digimon Generation',
        blockNumber: 5,
        printDate: '2026-03-27',
    },
    {
        setNumber: 'BT25',
        setName: 'Dual Revolution',
        blockNumber: 4,
        printDate: '2025-02-28',
    },
];

export const seedCardSetData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ force: true });
        console.log("Forcing synchronization.");

        await CardSets.bulkCreate(seedData);
        console.log("Card Set table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Card Set Table: ", error);
    } 
    finally {
        await sequelize.close();
    }
};

seedCardSetData();