import jwt from 'jsonwebtoken';
import Farmer from '../models/farmerModel.js';

export const farmerProtectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        console.log(token);
        
        if (!token) {
            return res.status(401).json({ message: 'Token Not Found' });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        
        const farmer = await Farmer.findOne({ email: decoded.email });
        console.log(farmer)
        if (!farmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        req.farmer = farmer;
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
