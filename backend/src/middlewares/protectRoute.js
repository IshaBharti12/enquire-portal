import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token)
      return res.status(400).json({ message: "Unauthorized request" });

    const decoded = jwt.verify(token, "12345");

    const findAdmin = await Admin.findById(decoded.adminId).select("-password");

    req.admin = findAdmin;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error.message);
  }
};
