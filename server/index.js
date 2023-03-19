import express from "express";
import { connectDB } from "./database/db.js";
import cors from "cors";
import Route from "./routes/route.js";

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/',Route);

const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });
