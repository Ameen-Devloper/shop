import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

export const connectToDB = async () => {
    if (mongoose.Connection.readyState >= 1) return
    try {
        await mongoose.connect(MONGODB_URI, {
            dbName: "SHOP_CO"
        })
        console.log("Mongo DB connected");

    } catch (err) {
        console.log("Mongo DB connection failed", err);
    }
}