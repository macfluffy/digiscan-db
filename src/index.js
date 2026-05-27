import express from 'express';
import { mainRouter } from './controllers/index.js';

const app = express();

// Middlewares
app.use(express.json()); // Parse JSON bodies
app.use(mainRouter);

app.get('/', (request, response) => {
    response.send('Hello World!');
});

export default app;