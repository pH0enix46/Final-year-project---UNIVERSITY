import express from "express";
const router = express.Router();
import { createContact } from "../controllers/contactController.js";

// Route to handle contact form submissions
router.post("/", createContact);

export default router;
