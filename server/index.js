//imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
//configs
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
//Routes
app.use("/api", authRoutes);