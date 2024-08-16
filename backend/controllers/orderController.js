import mongoose from 'mongoose';
import crypto from 'crypto';
import Order from '../models/orderModel.js'; // Adjust the path according to your project structure

export const createOrderController = async (req, res) => {
    try {
        const {
            farmerId,
            product,
            buyerId,
            quantity,
            totalPrice,
            deliveryAddress,
            paymentMethod,
            deliveryDate,
            deliveryTime
        } = req.body;

        // Validate required fields
        if (!farmerId || !mongoose.Types.ObjectId.isValid(farmerId)) {
            return res.status(400).json({ message: 'Invalid or missing farmer ID.' });
        }

        if (!product || !mongoose.Types.ObjectId.isValid(product)) {
            return res.status(400).json({ message: 'Invalid or missing product ID.' });
        }

        if (!buyerId || !mongoose.Types.ObjectId.isValid(buyerId)) {
            return res.status(400).json({ message: 'Invalid or missing buyer ID.' });
        }

        if (!quantity || quantity < 1) {
            return res.status(400).json({ message: 'Quantity must be at least 1.' });
        }

        if (!totalPrice || totalPrice < 0) {
            return res.status(400).json({ message: 'Total price must be a positive number.' });
        }

        if (!deliveryAddress || deliveryAddress.length < 10) {
            return res.status(400).json({ message: 'Delivery address must be at least 10 characters long.' });
        }

        if (!paymentMethod || !['Card', 'Cash'].includes(paymentMethod)) {
            return res.status(400).json({ message: 'Invalid payment method.' });
        }

        if (!deliveryDate || new Date(deliveryDate) <= Date.now()) {
            return res.status(400).json({ message: 'Delivery date must be in the future.' });
        }

        if (!deliveryTime || !deliveryTime.trim()) {
            return res.status(400).json({ message: 'Delivery time is required.' });
        }

        // Generate a unique order ID
        const order_id = crypto.randomBytes(16).toString('hex');

        // Create the order
        const newOrder = new Order({
            farmerId,
            product,
            buyerId,
            quantity,
            totalPrice,
            status: 'Pending',
            deliveryAddress,
            paymentMethod,
            paymentStatus: 'Unpaid',
            deliveryDate,
            deliveryTime,
            trackingId: '',
            order_id
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();

        // Respond with the created order
        res.status(201).json({ message: 'Order created successfully', order: savedOrder });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Internal server error creating order.' });
    }
};
