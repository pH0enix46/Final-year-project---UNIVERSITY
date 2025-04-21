//
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import useRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// APP CONFIG ----------------//
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// MIDDLEWARES ---------------//
// app.use(
//   cors({
//     origin: "http://localhost:5173", // ✅ allow frontend
//     credentials: true, // ✅ allow cookies if needed
//   })
// );
app.use(
  cors({
    origin: "*", // allow any origin TEMPORARILY for testing
  })
);
app.use(express.json());

// API ENDPOINTS --------------//
app.use("/api/user", useRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working!!...");
});

// START SERVER ------------//
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
