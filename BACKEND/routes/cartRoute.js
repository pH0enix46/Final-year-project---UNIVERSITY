import express from "express";
import { addProduct } from "../controllers/productController.js";
import authUser from "../middleware/auth.js";
import { getUserCart, updateCart } from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, addProduct);
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
