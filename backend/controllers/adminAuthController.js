import bcrypt from 'bcryptjs';
import Admin from '../models/adminModel.js'; // Update the path as needed
import { adminGenerateToken } from '../utils/adminGenerateToken.js';

export const createAdminController = async (req, res) => {
  try {
   const admin_id= 'aditya2701'
   const admin_permission= 'super_admin'
   const admin_username= 'aditya2701'  
   const admin_password= 'Aditya@2701Shah'

    if (!admin_id || !admin_permission || !admin_username || !admin_password) {
      return res.status(400).json({ message: 'Required fields are missing.' });
    }

    if (!/^[a-zA-Z0-9]{3,}$/.test(admin_id)) {
      return res.status(400).json({ message: 'Invalid admin_id format. It should be alphanumeric and at least 3 characters long.' });
    }

    if (!['super_admin', 'admin', 'user'].includes(admin_permission)) {
      return res.status(400).json({ message: 'Invalid admin_permission. It should be one of: super_admin, admin, user.' });
    }

    if (!/^[a-zA-Z0-9]{3,}$/.test(admin_username)) {
      return res.status(400).json({ message: 'Invalid admin_username format. It should be alphanumeric and at least 3 characters long.' });
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(admin_password)) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long and contain one uppercase letter, one lowercase letter, one number, and one special character.' });
    }

    const existingAdmin = await Admin.findOne({ admin_username });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Unauthorized to become a admin !' });
    }

    const hashedPassword = await bcrypt.hash(admin_password, 10);

    const newAdmin = await Admin.create({
      admin_id,
      admin_permission,
      admin_username,
      admin_password: hashedPassword,
    });

    res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ message: 'Internal server error creating admin.', error: error.message });
  }
};
export const loginAdminController = async (req, res) => {
    try {
      const { admin_username, admin_password } = req.body;
      
      // Check for missing fields
      if (!admin_username || !admin_password) {
        return res.status(400).json({ message: 'Username and password are required.' });
      }
      
      // Find the admin by username
      const admin = await Admin.findOne({ admin_username });
      
      // Check if admin exists
      if (!admin) {
        return res.status(401).json({ message: 'Invalid username or password.' });
      }
      
      // Compare provided password with hashed password
      const isMatch = await bcrypt.compare(admin_password, admin.admin_password);
      
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password.' });
      }
      
      // Generate a JWT token
      const token = adminGenerateToken(admin);
      
      // Send cookie with the token
      res.cookie('admin_access_token', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      });
      
      // Respond with success message and admin data
      res.json({ message: 'Admin logged in successfully.', admin });
      
    } catch (error) {
      console.error('Error logging in admin:', error);
      res.status(500).json({ message: 'Internal server error logging in admin.', error: error.message });
    }
  };



