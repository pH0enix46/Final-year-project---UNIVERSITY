//
import express from "express";
import cors from "cors";
import "dotenv/config";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import useRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import contactRouter from "./routes/contactRoute.js";

// APP CONFIG ----------------//
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Match your CORS settings
    methods: ["GET", "POST"],
  },
});
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
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("API Working!!...");
});

// SOCKET.IO SETUP ----------//
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // Handle chat messages
  socket.on("chat_message", (message) => {
    // Simple automated responses for common questions
    let response = "";

    if (
      message.toLowerCase().includes("hi") ||
      message.toLowerCase().includes("hello")
    ) {
      response = "Hello! How can I help you today?";
    } else if (
      message.toLowerCase().includes("open") ||
      message.toLowerCase().includes("hours")
    ) {
      response =
        "Our shop is open Monday to Friday, 9 AM to 6 PM, and Saturday from 10 AM to 4 PM.";
    } else if (
      message.toLowerCase().includes("location") ||
      message.toLowerCase().includes("address")
    ) {
      response = "We are located at 123 Fashion Street, Dhaka, Bangladesh.";
    } else if (
      message.toLowerCase().includes("contact") ||
      message.toLowerCase().includes("phone")
    ) {
      response =
        "You can reach us at +880 123-456-7890 or email us at support@varsity.com";
    } else {
      response =
        "Thank you for your message. For specific inquiries, please contact us directly or visit our Contact page.";
    }

    // Send response back to the client
    socket.emit("chat_response", response);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// START SERVER ------------//
httpServer.listen(port, () => console.log(`Server started on PORT: ${port}`));
