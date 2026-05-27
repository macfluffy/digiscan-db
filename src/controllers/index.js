import { Router } from "express";
import { apiRouter } from "./api/index.js";

export const mainRouter = Router();

mainRouter.use("/api", apiRouter);