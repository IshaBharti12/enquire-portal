import { Router } from "express";
import { protectRoute } from "../middlewares/protectRoute.js";
import {
  getAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.post("/login", loginAdmin);
adminRouter.post("/logout", protectRoute, logoutAdmin);
adminRouter.get("/", protectRoute, getAdmin);

export default adminRouter;
