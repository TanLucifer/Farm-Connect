import express from "express"
import { createAdminController, loginAdminController } from "../controllers/adminAuthController.js";

const router = express.Router();

router.post("/createAdmin",createAdminController)
router.post("/adminLogin",loginAdminController)


export default router ;