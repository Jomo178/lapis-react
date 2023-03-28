import { config } from "dotenv";
import mongoose from "mongoose";
config();

if (!process.env.mongooseURI) throw new Error("MONGO_URI is not defined.");

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState == 1) {
    console.log("mongo is already connected!");

    return mongoose.connection.asPromise();
  } else {
    console.log("mongo connected");
    return await mongoose.connect(process.env.mongooseURI);
  }
};
