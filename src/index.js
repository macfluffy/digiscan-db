import express from 'express';
import { sequelize } from './config/database.js';
import { config } from './config/index.js';

const app = express();

// Middlewares
app.use(express.json()); // Parse JSON bodies

app.get('/', (request, response) => {
    response.send('Hello World!');
});

// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

export default app;