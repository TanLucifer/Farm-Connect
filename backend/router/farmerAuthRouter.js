import express from 'express'
import { farmerSignupController, getCurrentFarmerController, loginController, logoutController } from '../controllers/farmerAuthController.js';
import {farmerProtectedRoute} from "../middlewares/farmerProtectedRoute.js"
const router = express.Router()


router.post("/signup" ,farmerSignupController)
router.post("/login",loginController)
router.get("/logout",logoutController)
router.get("/getFarmer",farmerProtectedRoute,getCurrentFarmerController)

export default router;