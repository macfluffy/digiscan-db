import { config } from "../index.js";
import { Sequelize } from "sequelize";

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
        dialect: config.databaseDialect,
        port: config.databasePort,
        pool: {
            max: maxNumberOfClients,
            idle: tenMinutesTimeout,
            acquire: fiveMinutesTimeout,
        },
    }
);

export const development = {
    "username": config.developmentDatabaseUser,
    "password": config.developmentDatabasePassword,
    "database": config.developmentDatabaseName,
    "host": config.developmentDatabaseHost,
    "dialect": config.databaseDialect
};

export const production = {
    "username": config.databaseUser,
    "password": config.databasePassword,
    "database": config.databaseName,
    "host": config.databaseHost,
    "dialect": config.databaseDialect
};

export const test = {
    "username": config.testDatabaseUser,
    "password": config.testDatabasePassword,
    "database": config.testDatabaseName,
    "host": config.testDatabaseHost,
    "dialect": config.databaseDialect
};