// // //
import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProductInfo,
} from "../controllers/productController.js";

const pruductRouter = express.Router();

pruductRouter.post("/add", addProduct);
pruductRouter.post("/remove", removeProduct);
pruductRouter.post("/singleProductInfo", singleProductInfo);
pruductRouter.get("/list", listProduct);

export default pruductRouter;
