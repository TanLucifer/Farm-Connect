import express from "express"
import { createProductController, getAllProduct } from "../controllers/productController.js";
import { farmerProtectedRoute } from "../middlewares/farmerProtectedRoute.js";
const router = express.Router()


router.post("/createProduct",farmerProtectedRoute,createProductController)
router.get("/getallproducts",getAllProduct)

export default router;