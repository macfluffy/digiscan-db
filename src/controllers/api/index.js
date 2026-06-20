import { Router } from "express";
import { cardSetsRouter }  from "./cardSets.js";
import { cardsRouter } from "./cards.js";

export const apiRouter = Router();

apiRouter.use("/cards", cardsRouter);
apiRouter.use("/cardsets", cardSetsRouter);