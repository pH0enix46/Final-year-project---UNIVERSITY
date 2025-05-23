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
    const msgLower = message.toLowerCase();

    // Budget-based server recommendations
    if (
      (msgLower.includes("server") || msgLower.includes("servers")) && 
      (msgLower.includes("budget") || msgLower.includes("recommend") || msgLower.includes("suggestion"))
    ) {
      if (msgLower.includes("low budget") || msgLower.includes("cheap") || msgLower.includes("affordable")) {
        response = "For low budget servers, we recommend our Basic Server package starting at $50/month. Features include: 2GB RAM, 1 CPU core, 20GB SSD storage, and 1TB bandwidth. Perfect for small websites, personal projects, or development environments.";
      } else if (msgLower.includes("mid budget") || msgLower.includes("medium budget") || msgLower.includes("moderate")) {
        response = "For mid-range budget, our Professional Server package at $120/month is ideal. Features include: 8GB RAM, 4 CPU cores, 100GB SSD storage, and 3TB bandwidth. Great for medium-sized businesses, e-commerce sites, and applications with moderate traffic.";
      } else if (msgLower.includes("high budget") || msgLower.includes("premium") || msgLower.includes("enterprise")) {
        response = "For high budget requirements, our Enterprise Server solution starting at $300/month offers: 32GB RAM, 8 CPU cores, 500GB SSD storage, and unlimited bandwidth. Designed for high-traffic websites, enterprise applications, and resource-intensive workloads.";
      } else {
        response = "We offer server solutions for all budgets. Could you specify if you're looking for low, medium, or high budget options? Each tier provides different specifications to meet your specific needs.";
      }
    }
    // Handle existing chat responses
    else if (
      msgLower.includes("hi") ||
      msgLower.includes("hello")
    ) {
      response = "Hello! How can we help you today?";
    } else if (
      msgLower.includes("open") ||
      msgLower.includes("hours")
    ) {
      response =
        "Our shop is open Monday to Friday, 9 AM to 6 PM, and Saturday from 10 AM to 4 PM.";
    } else if (
      msgLower.includes("location") ||
      msgLower.includes("address")
    ) {
      response = "We are located at 123 Fashion Street, Dhaka, Bangladesh.";
    } else if (
      msgLower.includes("contact") ||
      msgLower.includes("phone")
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
