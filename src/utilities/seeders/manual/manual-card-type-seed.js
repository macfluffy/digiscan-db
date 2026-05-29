import { sequelize } from "../../../config/database.js";
import { CardTypes } from "../../../models/cardTypes.js";

const seedData = [
    { cardType: 'digiegg' },
    { cardType: 'digimon' },
    { cardType: 'tamers' },
    { cardType: 'options' },
];

export const seedCardTypesData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ force: true });
        console.log("Forcing synchronization.");

        await CardTypes.bulkCreate(seedData);
        console.log("Card Types table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Card Types Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCardTypesData();