import express from 'express';
import { addToCartController, getCartController, updateCartController } from '../controllers/cartController.js';
 // Import the controller

const router = express.Router();


router.post('/add', addToCartController); // Add item to cart
router.put('/update', updateCartController); // Update item in cart
router.get('/getcart/:userId', getCartController); 

export default router;