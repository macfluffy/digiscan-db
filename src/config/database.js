import { config } from "./index.js";
import { Sequelize } from "sequelize";

const maxNumberOfClients = 10;
const tenMinutesTimeout = 600000;
const fiveMinutesTimeout = 300000;

// Connect to the database using Sequelize
export const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect,
        port: config.database.port,
        pool: {
            max: maxNumberOfClients,
            idle: tenMinutesTimeout,
            acquire: fiveMinutesTimeout,
        },
    }
);

export const development = config.development;
export const production = config.database;
export const test = config.test;