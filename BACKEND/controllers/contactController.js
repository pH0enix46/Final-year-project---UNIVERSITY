import Contact from "../models/contactModel.js";

// Create a new contact message
const createContact = async (req, res) => {
  try {
    const { username, email, message } = req.body;

    // Validate input
    if (!username || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new contact message
    const newContact = new Contact({
      username,
      email,
      message,
    });

    // Save to database
    const savedContact = await newContact.save();
    
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact: savedContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send message",
      error: error.message,
    });
  }
};

export { createContact };
