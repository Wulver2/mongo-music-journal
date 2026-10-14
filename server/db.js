import mongoose from "mongoose"
import 'dotenv/config';

//points to a testing database
// later will have to make dev and production databases available
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_url);
        console.log("db connected")
    } catch (error) {
        console.error(error.message)
    }
}