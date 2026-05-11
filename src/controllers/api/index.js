import { Router } from express;
import { cardSetsRouter }  from "./cardSets";

export const apiRouter = Router();

apiRouter.use("/cardsets", cardSetsRouter);