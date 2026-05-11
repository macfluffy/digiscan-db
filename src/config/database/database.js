import { config } from "..";

const maxNumberOfClients = 10;
const tenMinutesTimeout = 600000;
const fiveMinutesTimeout = 300000;

// Connect to the database using Sequelize
export const sequelize = new Sequelize(
    config.databaseName,
    config.databaseUser,
    config.databasePassword,
    {
        host: config.databaseHost,
        dialect: 'postgres',
        port: config.databasePort,
        pool: {
            max: maxNumberOfClients,
            idle: tenMinutesTimeout,
            acquire: fiveMinutesTimeout,
        },
    }
);