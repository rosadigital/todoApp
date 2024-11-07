<<<<<<< HEAD
=======
// routes/authRoutes.js
>>>>>>> 5a48d96 (Added authentication, loginUser, & logoutUser)
import express from "express";
const router = express.Router();
import authController from "../controllers/authController.js";

<<<<<<< HEAD
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);

export { router as authRoutes };
=======
router.get("/all", authController.getAllUsers);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);

export default router;
>>>>>>> 5a48d96 (Added authentication, loginUser, & logoutUser)
