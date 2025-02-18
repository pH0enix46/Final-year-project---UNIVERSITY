//

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  colors: { type: Array, required: true },
  bestSeller: { type: Boolean },
  date: { type: Number, required: true },
});

// This code checks if the Product model already exists; if not, then it creates it
const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
