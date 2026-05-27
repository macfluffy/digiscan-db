import { Router } from "express";
import { cardSetsRouter }  from "./cardSets.js";

export const apiRouter = Router();

apiRouter.use("/cardsets", cardSetsRouter);