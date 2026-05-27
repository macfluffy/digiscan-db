import express from 'express';

const app = express();

// Middlewares
app.use(express.json()); // Parse JSON bodies

app.get('/', (request, response) => {
    response.send('Hello World!');
});

export default app;