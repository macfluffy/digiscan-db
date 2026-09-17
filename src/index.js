import express from "express";
import helmet from "helmet";

import { mainRouter } from "./controllers/index.js";

const app = express();

// Middlewares
// Apply security middlewares before the router
app.use(helmet());

// Parse JSON bodies and then attach the router
app.use(express.json()); 
app.use(mainRouter);

// Load in the model associations
import "./models/associations/cardAssociations.js"; 

app.get('/', (request, response) => {
    response.send('Hello World!');
});

export default app;