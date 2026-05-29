import { sequelize } from "../../../config/database.js";
import { Colours } from "../../../models/colours.js";

const seedData = [
    { colourName: 'red' },
    { colourName: 'blue' },
    { colourName: 'yellow' },
    { colourName: 'green' },
    { colourName: 'black' },
    { colourName: 'purple' },
    { colourName: 'white' },
];

export const seedColoursData = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");

        await sequelize.sync({ force: true });
        console.log("Forcing synchronization.");

        await Colours.bulkCreate(seedData);
        console.log("Colours table seeded.");
    } 
    catch (error) {
        console.error("Could not initialise Colours Table: ", error);
    }
    finally {
        await sequelize.close();
    }
};

seedColoursData();