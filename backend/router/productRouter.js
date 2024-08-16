import express from "express"
import { createProductController } from "../controllers/productController.js";
import { farmerProtectedRoute } from "../middlewares/farmerProtectedRoute.js";
const router = express.Router()


router.post("/createProduct",farmerProtectedRoute,createProductController)

export default router;