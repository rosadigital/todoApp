import express from "express";
const router = express.Router();
import authController from "../controllers/authController.js";

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);

export { router as authRoutes };
