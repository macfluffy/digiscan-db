import express from "express";
import { mainRouter } from "./controllers/index.js";

const app = express();

// Middlewares
app.use(express.json()); // Parse JSON bodies
app.use(mainRouter);

// Load in the model associations
import "./models/associations/cardAssociations.js"; 

app.get('/', (request, response) => {
    response.send('Hello World!');
});

export default app;