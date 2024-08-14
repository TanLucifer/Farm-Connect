import express from "express";
import env from "dotenv"
import userAuthRouter from "../router/userAuthRouter.js"
import { mongooseConn } from "../config/mongo-connection.js";
const app = express();

env.config()
const port = process.env.PORT || 8000 ;
mongooseConn(process.env.MONGO_URI)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user/auth",userAuthRouter)

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
    
})