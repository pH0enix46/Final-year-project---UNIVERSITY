// // //
import express from "express";
import {
  addProduct,
  listProduct,
  removeProduct,
  singleProductInfo,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const pruductRouter = express.Router();

pruductRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);
pruductRouter.post("/remove", removeProduct);
pruductRouter.post("/singleProductInfo", singleProductInfo);
pruductRouter.get("/list", listProduct);

export default pruductRouter;
