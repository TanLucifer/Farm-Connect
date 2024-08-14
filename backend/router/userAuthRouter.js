import express from "express";
import { signup } from "../controllers/userAuthController.js";
const router = express.Router();

router.get("/login",signup)


export default router;