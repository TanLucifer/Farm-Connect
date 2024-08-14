import mongoose from "mongoose"

export const mongooseConn = (url)=>{
    mongoose.connect(`${url}/FarmConnect`).then(()=>{
        console.log(`Mongo db connected at ${url}`);
        
    }).catch((e)=>{
        console.log('Error connecting Mongodb ',e.message);
    })
}