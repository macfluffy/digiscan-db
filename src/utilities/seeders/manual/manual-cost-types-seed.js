import { sequelize } from "../../../config/database.js";
import { CostTypes } from "../../../models/costTypes.js";

const seedData = [
    { costType: 'play' },
    { costType: 'use' },
];

export const seedCostTypesData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ force: true });
        console.log("Forcing synchronization.");

        await CostTypes.bulkCreate(seedData);
        console.log("Cost Types table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Cost Types Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCostTypesData();