import { Router } from "express";
import {
  getActiveQueries,
  getSolvedQueries,
  solveQuery,
  submitQuery,
} from "../controllers/query.controller.js";

const queryRouter = Router();

queryRouter.post("/submit", submitQuery);
queryRouter.post("/solve/:queryId", solveQuery);
queryRouter.get("/active", getActiveQueries);
queryRouter.get("/solved", getSolvedQueries);

export default queryRouter;
