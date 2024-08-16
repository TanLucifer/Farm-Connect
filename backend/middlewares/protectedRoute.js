import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        console.log(token);
        
        if (!token) {
            return res.status(401).json({ message: 'Token Not Found' });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        
        const user = await User.findOne({ email: decoded.email });
console.log(user)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ message: 'Invalid token' });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ message: 'Token expired' });
        } else {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
};
