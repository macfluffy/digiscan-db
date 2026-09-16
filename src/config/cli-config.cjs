/* 
This file is to shape the database configs setup in config/index.js 
into a shape that sequelize-cli likes. This config is used in the 
seeding and migrations of the digiscan database, using the 
Sequelize-CLI tool.
*/
const dialect = process.env.DATABASE_DIALECT;

if (!dialect) {
    console.error("Error: DATABASE_DIALECT is not set in your environment.");
    process.exit(1);
}

module.exports = {
    development: {
        username: process.env.DATABASE_DEVELOPER,
        password: process.env.DATABASE_DEVELOPER_PASSWORD,
        database: process.env.DEVELOPMENT_DATABASE_NAME,
        host: process.env.DEVELOPMENT_DATABASE_HOST,
        port: Number(process.env.DEVELOPMENT_DATABASE_PORT) || 5432,
        dialect,
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData",
    },
    test: {
        username: process.env.DATABASE_TESTER,
        password: process.env.DATABASE_TESTER_PASSWORD,
        database: process.env.TEST_DATABASE_NAME,
        host: process.env.TEST_DATABASE_HOST,
        port: Number(process.env.TEST_DATABASE_PORT) || 5432,
        dialect,
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData",
    },
    production: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT) || 5432,
        dialect,
        seederStorage: "sequelize",
        seederStorageTableName: "SequelizeData",
    },
};