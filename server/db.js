import mongoose from "mongoose"
import 'dotenv/config';

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@music-journal.pleozyg.mongodb.net/?appName=music-journal`);
        console.log("db connected")
    } catch (error) {
        console.error(error.message)
    }
}