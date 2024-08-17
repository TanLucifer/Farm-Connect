import express from 'express';
import Stripe from 'stripe';
import Cart from '../models/cartModel.js';

const router = express.Router();
const stripe = Stripe('sk_test_51KGLCTSFp516J086VZqn6pX66fVcy3rSyeTyNZaDmNYEYXtBMbZZR5EtSQa1k6OTCZ4JBwSKO6iSHLFZj54K5YPU00Tki2YcGi'); // Replace with your actual Stripe secret key

// Endpoint to create a checkout session
router.post('/create-checkout-session/:cartId', async (req, res) => {
    try {
        const { cartId } = req.params; // Extract cartId from route params

        // Retrieve cart details from the database
        const cart = await Cart.findById(cartId).populate('items.product'); // Assuming `items.product` is a reference to a product model
        if (!cart) {
            return res.status(404).json({ error: 'Cart not found' });
        }

        // Map cart items to Stripe line_items
        const lineItems = cart.items.map(item => ({
            price_data: {
                currency: 'usd', // Change to 'inr' if using INR and ensure Stripe supports it
                product_data: {
                    name: item.product.productname,
                    images: [`http://localhost:3000/${item.product.productImage}`], // Update URL as needed
                },
                unit_amount: item.price * 100, // Convert amount to cents (USD)
            },
            quantity: item.quantity,
        }));

        // Create a Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:5173/confirm',
            cancel_url: 'http://localhost:5173/cancel',
        });

        // Send the session ID to the client
        res.json({ id: session.id });

    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
