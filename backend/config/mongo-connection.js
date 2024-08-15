import mongoose from "mongoose"

export const mongooseConn = (url)=>{
    const mongo = `${url}FarmConnect`
    mongoose.connect(`${mongo}`).then(()=>{
        console.log(`Mongo db connected at ${mongo}`);
        
    }).catch((e)=>{
        console.log('Error connecting Mongodb ',e.message);
    })
}