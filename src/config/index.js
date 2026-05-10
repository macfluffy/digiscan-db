const expressPort = process.env.EXPRESS_PORT;
const databaseURI = process.env.DATABASE_URI;
const databaseName = process.env.DATABASE_NAME;
const databaseUser = process.env.DATABASE_USER;
const databasePassword = process.env.DATABASE_PASSWORD;
const databaseHost = process.env.DATABASE_HOST;
const databasePort = process.env.DATABASE_PORT;

// Validate express port is a number if provided
if (expressPort && isNaN(Number(expressPort))) {
    console.error('Error: Express Port must be a valid number.');
    process.exit(1);
}

export const config = {
    serverPort: Number(expressPort) || 3000,
    databaseURI: databaseURI,
    databaseName: databaseName,
    databaseUser: databaseUser,
    databasePassword: databasePassword,
    databasePort: Number(databasePort) || 5432,
    databaseHost: databaseHost,
};