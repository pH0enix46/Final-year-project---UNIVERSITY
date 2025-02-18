//

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// APP CONFIG ----------------//
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// MIDDLEWARES ---------------//
app.use(express.json());
app.use(cors());

// API ENDPOINTS --------------//
app.get("/", (req, res) => {
  res.send("API Working!!...");
});

// START SERVER ------------//
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
