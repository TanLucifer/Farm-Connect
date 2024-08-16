import express from "express";
import { getMeController, loginController, logoutController, signupController } from "../controllers/userAuthController.js";
import { protectedRoute } from "../middlewares/protectedRoute.js";
const router = express.Router();

router.post("/signup",signupController)
router.post("/login",loginController)
router.get("/me",protectedRoute,getMeController)
router.post("/logout" ,logoutController)


export default router;