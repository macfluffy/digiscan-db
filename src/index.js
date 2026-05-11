import express from 'express';
import { Sequelize } from 'sequelize';
import { config } from './config/index.js';

const app = express();

// Middlewares
app.use(express.json()); // Parse JSON bodies

app.get('/', (request, response) => {
    response.send('Hello World!');
});

export default app;