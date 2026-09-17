import express from "express";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";

import { mainRouter } from "./controllers/index.js";

const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,   // 15 minutes
    limit: 100,                 // Limit each IP 100 requests per window
});

// Middlewares
// Apply security middlewares before the router
app.use(helmet());
app.use(limiter);

// Parse JSON bodies and then attach the router
app.use(express.json()); 
app.use(mainRouter);

// Load in the model associations
import "./models/associations/cardAssociations.js"; 

app.get('/', (request, response) => {
    response.send('Hello World!');
});

export default app;