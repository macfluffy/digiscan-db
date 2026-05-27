const expressPort = process.env.EXPRESS_PORT;
const databaseDialect = process.env.DATABASE_DIALECT

const databaseURI = process.env.DATABASE_URI;
const databaseName = process.env.DATABASE_NAME;
const databaseUser = process.env.DATABASE_USER;
const databasePassword = process.env.DATABASE_PASSWORD;
const databaseHost = process.env.DATABASE_HOST;
const databasePort = process.env.DATABASE_PORT;

const testDatabaseURI = process.env.TEST_DATABASE_URI;
const testDatabaseName = process.env.TEST_DATABASE_NAME;
const testDatabaseUser = process.env.DATABASE_TESTER;
const testDatabasePassword = process.env.DATABASE_TESTER_PASSWORD;
const testDatabaseHost = process.env.TEST_DATABASE_HOST;
const testDatabasePort = process.env.TEST_DATABASE_PORT;

const developmentDatabaseURI = process.env.DEVELOPMENT_DATABASE_URI;
const developmentDatabaseName = process.env.DEVELOPMENT_DATABASE_NAME;
const developmentDatabaseUser = process.env.DATABASE_DEVELOPER;
const developmentDatabasePassword = process.env.DATABASE_DEVELOPER_PASSWORD;
const developmentDatabaseHost = process.env.DEVELOPMENT_DATABASE_HOST;
const developmentDatabasePort = process.env.DEVELOPMENT_DATABASE_PORT;

// Validate express port is a number if provided
if (expressPort && isNaN(Number(expressPort))) {
    console.error('Error: Express Port must be a valid number.');
    process.exit(1);
}

export const config = {
    serverPort: Number(expressPort) || 3000,
    
    database: {
        URI: databaseURI,
        name: databaseName,
        user: databaseUser,
        password: databasePassword,
        port: Number(databasePort) || 5432,
        host: databaseHost,
        dialect: databaseDialect,
    },

    development: {
        URI: developmentDatabaseURI,
        name: developmentDatabaseName,
        user: developmentDatabaseUser,
        password: developmentDatabasePassword,
        port: Number(developmentDatabasePort) || 5432,
        host: developmentDatabaseHost,
        dialect: databaseDialect,
    },

    test: {
        URI: testDatabaseURI,
        name: testDatabaseName,
        user: testDatabaseUser,
        password: testDatabasePassword,
        port: Number(testDatabasePort) || 5432,
        host: testDatabaseHost,
        dialect: databaseDialect,
    }
};