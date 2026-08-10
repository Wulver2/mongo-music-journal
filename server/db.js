import mongoose from "mongoose"
import 'dotenv/config';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_url);
        console.log("db connected")
    } catch (error) {
        console.error(error.message)
    }
}