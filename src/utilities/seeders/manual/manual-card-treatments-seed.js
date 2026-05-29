import { sequelize } from "../../../config/database.js";
import { CardTreatments } from "../../../models/cardTreatments.js";

const seedData = [
    { treatment: 'regular' },
    { treatment: 'alternate art' },
    { treatment: 'silver' },
    { treatment: 'gold' },
    { treatment: 'one star' },
    { treatment: 'two star' },
    { treatment: 'three star' },
    { treatment: 'signature' },
    { treatment: 'SP' },
];

export const seedCardTreatmentsData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ force: true });
        console.log("Forcing synchronization.");

        await CardTreatments.bulkCreate(seedData);
        console.log("Card Treatments table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Card Treatments Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedCardTreatmentsData();