import express from 'express';
import { Sequelize } from 'sequelize';
import { config } from './config/index.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Connect to the database using Sequelize
export const sequelize = new Sequelize(config.databaseURI);

export default app;