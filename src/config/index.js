// Validate express port is a number if provided
if (process.env.EXPRESS_PORT && isNaN(Number(process.env.EXPRESS_PORT))) {
    console.error('Error: Express Port must be a valid number.');
    process.exit(1);
}

export const config = {
    port: Number(process.env.EXPRESS_PORT) || 3000,
    databaseURI: process.env.DATABASE_URI,
};