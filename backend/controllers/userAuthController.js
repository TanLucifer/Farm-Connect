import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const signupController = async (req, res) => {
   try {
      const { email, password, username } = req.body;

      if (!email || !password || !username) {
         return res.status(400).json({ message: "All fields are required." });
      }

      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
         return res.status(400).json({ message: "User already exists." });
      }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const user = await User.create({
         email,
         password: hash,
         username,
      });

      if (!user) {
         return res.status(500).json({ message: "Something went wrong." });
      }

      const token = generateToken(user);

      res.cookie("access_token", token, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: 'strict',
         path: "/",
      });

      res.status(201).json({ user, token });
   } catch (error) {
      console.log("Error in signupController(User)", error.message);
      res.status(500).json({ message: "Internal server error in signupController" });
   }
};

export const loginController = async (req, res) => {
   try {
      const { username, password } = req.body;

      if (!username || !password) {
         return res.status(400).json({ message: "All fields are required." });
      }

      const user = await User.findOne({ username });
      if (!user) {
         return res.status(400).json({ message: "User not found." });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
         return res.status(400).json({ message: "Username or password incorrect." });
      }

      const token = generateToken(user);
      if (!token) {
         return res.status(500).json({ message: "Failed to generate token." });
      }

      res.cookie("access_token", token, {
         httpOnly: true
      });

      return res.status(200).json({ user, token });

   } catch (error) {
      console.log("Error in loginController", error.message);
      return res.status(500).json({ message: "Internal server error." });
   }
};