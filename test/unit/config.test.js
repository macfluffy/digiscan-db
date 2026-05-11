import { config } from '../../src/config';

test('Configuration should match the variables in the environment file', () => {
    expect(config.serverPort).toEqual(Number(process.env.EXPRESS_PORT));
    expect(config.databaseURI).toBe(process.env.DATABASE_URI);
    expect(config.databaseName).toBe(process.env.DATABASE_NAME);
    expect(config.databaseUser).toBe(process.env.DATABASE_USER);
    expect(config.databasePassword).toBe(process.env.DATABASE_PASSWORD);
    expect(config.databasePort).toEqual(Number(process.env.DATABASE_PORT));
    expect(config.databaseHost).toBe(process.env.DATABASE_HOST);
});