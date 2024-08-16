import express from "express";
import env from "dotenv"
import userAuthRouter from "../router/userAuthRouter.js"
import farmerAuthRouter from "../router/farmerAuthRouter.js"
import createdAdmin from "../router/adminRouter.js"
import productRouter from '../router/productRouter.js'
import orderRouter from "../router/orderRouter.js"
import { mongooseConn } from "../config/mongo-connection.js";
import cookie from 'cookie-parser'
import cors from 'cors'
const app = express();

env.config()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,  // Replace with your React app's URL
  }));
app.use(cookie())
const port = process.env.PORT || 8000 ;
mongooseConn(process.env.MONGO_URI)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user/auth",userAuthRouter)
app.use("/api/farmer/auth",farmerAuthRouter)
app.use("/api/admin",createdAdmin)
app.use("/api/product",productRouter)
app.use("/api/orders",orderRouter)

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
    
})