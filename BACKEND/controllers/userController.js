// // //
import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

function createToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

export async function loginUser(req, res) {}

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    // check user already exists or not?
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "User already exist!",
      });
    }

    // valid email format and storng format
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email!",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password!",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // save to our database
    const user = await newUser.save();

    // create token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
}

export async function adminLogin(req, res) {}
