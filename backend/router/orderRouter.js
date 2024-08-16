import express from 'express'
import { createOrderController } from '../controllers/orderController.js';

const router =  express.Router();

router.post("/createorder",createOrderController)
export default router;