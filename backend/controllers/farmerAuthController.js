import Farmer from '../models/farmerModel.js';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import { generateToken } from "../utils/generateToken.js";

export const farmerSignupController = async (req, res) => {
  try {
    const {
      fullName,
      DOB,
      Gender,
      AdhaarNo,
      email,
      phoneNumber,
      address,
      bankName,
      bankAccNo,
      bankAccName,
      bankBranch,
      IFSC_Code,
      panCard,
      proofOfAddress,
      profilePic,
      username,
      password
    } = req.body;

    if (!fullName || !email || !phoneNumber || !AdhaarNo || !bankAccNo || !password || !username) {
      return res.status(400).json({
        message: 'Missing required fields'
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email format'
      });
    }

    if (!/^\d{12}$/.test(AdhaarNo)) {
      return res.status(400).json({
        message: 'Invalid Adhaar Number. It must be exactly 12 digits.'
      });
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      return res.status(400).json({
        message: 'Invalid phone number. It must be exactly 10 digits.'
      });
    }

    // Validate password before hashing
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.'
      });
    }

    const existingFarmerByEmail = await Farmer.findOne({ email });
    if (existingFarmerByEmail) {
      return res.status(400).json({
        message: 'Email already in use'
      });
    }

    const existingFarmerByUsername = await Farmer.findOne({ username });
    if (existingFarmerByUsername) {
      return res.status(400).json({
        message: 'Username already in use'
      });
    }

    const existingFarmerByAdhaarNo = await Farmer.findOne({ AdhaarNo });
    if (existingFarmerByAdhaarNo) {
      return res.status(400).json({
        message: 'Adhaar Number already registered'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newFarmer = new Farmer({
      fullName,
      DOB,
      Gender,
      AdhaarNo,
      email,
      phoneNumber,
      address,
      bankName,
      bankAccNo,
      bankAccName,
      bankBranch,
      IFSC_Code,
      panCard,
      proofOfAddress,
      profilePic,
      username,
      password: hashedPassword
    });

    await newFarmer.save();

    const token = generateToken(newFarmer);

    res.cookie('access_token', token, {
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000 ,
      secure:process.env.NODE_ENV === 'production'
    });

    res.status(201).json({
      message: 'Farmer registered successfully!',
      farmer: newFarmer
    });
  } catch (error) {
    console.error('Error during signup:', error);

    if (error.code === 11000) {
      return res.status(400).json({
        message: 'Duplicate key error',
        error: error.message
      });
    }

    res.status(500).json({
      message: 'Error registering farmer',
      error: error.message
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format.' });
    }

    const farmer = await Farmer.findOne({ email });
    if (!farmer) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = generateToken(farmer);

    res.cookie('access_token', token, {
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000,
      secure:process.env.NODE_ENV === 'production'

    });

    res.status(200).json({
      message: 'Login successful!',
      farmer
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error during login.' });
  }
};
export const logoutController = (req, res) => {
  try {
    res.clearCookie('token', { path: '/' });
    res.status(200).json({ message: 'Logged out successfully!' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ message: 'Internal server error during logout.' });
  }
};
export const getCurrentFarmerController = async (req, res) => {
  try {
  
const farmer = req.farmer;
    res.status(200).json({ farmer });
  } catch (error) {
    console.error('Error fetching current farmer:', error);
    res.status(500).json({ message: 'Internal server error fetching current farmer.' });
  }
};