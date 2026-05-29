import { sequelize } from "../../../config/database.js";
import { EvolutionTypes } from "../../../models/evolutionTypes.js";

const seedData = [
    { evolutionType: 'normal' },
    { evolutionType: 'name' },
    { evolutionType: 'trait' },
    { evolutionType: 'warp' },
    { evolutionType: 'tamer' },
    { evolutionType: 'DNA' },
    { evolutionType: 'appFusion' },
    { evolutionType: 'arts' },
];

export const seedCardEvolutionTypesData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ force: true });
        console.log("Forcing synchronization.");

        await EvolutionTypes.bulkCreate(seedData);
        console.log("Evolution Types table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Evolution Types Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCardEvolutionTypesData();