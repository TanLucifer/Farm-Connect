import express from "express"
import { createProductController, getAllProduct } from "../controllers/productController.js";
import { farmerProtectedRoute } from "../middlewares/farmerProtectedRoute.js";
import upload from "../config/multer.js";
const router = express.Router()


router.post("/createProduct",upload.single("productImage"),createProductController)
router.get("/getallproducts",getAllProduct)

export default router;