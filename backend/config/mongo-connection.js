import mongoose from "mongoose";

export const mongooseConn = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log(`MongoDB connected at ${mongoose.connection.host}`);
    })
    .catch((e) => {
      console.log("Error connecting to MongoDB:", e.message);
    });
};
