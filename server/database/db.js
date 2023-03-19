import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.l24nkel.mongodb.net/test/?retryWrites=true&w=majority`
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    }