import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';



export const addToCartController = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Find the product to get the price
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const price = product.productprice;

    // Find or create the cart for the user
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [{ product: productId, quantity, price }],
      });
    } else {
      // Check if the product is already in the cart
      const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
      if (itemIndex > -1) {
        // Update quantity if item already exists
        cart.items[itemIndex].quantity += quantity;
        cart.items[itemIndex].price = price;
      } else {
        // Add new item to the cart
        cart.items.push({ product: productId, quantity, price });
      }
    }

    await cart.save();

    // Populate the cart items with product details
    await cart.populate('items.product');

    res.status(200).json({ message: 'Item added to cart successfully', cart });
  } catch (error) {
    console.error('Error adding to cart:', error.message);
    res.status(500).json({ message: 'Internal server error while adding to cart' });
  }
};

  export const getCartController = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find the cart for the user
      const cart = await Cart.findOne({ user: userId }).populate('items.product');
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      res.status(200).json({ cart });
    } catch (error) {
      console.error('Error fetching cart:', error.message);
      res.status(500).json({ message: 'Internal server error while fetching cart' });
    }
  };
  

  export const updateCartController = async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;
  
      // Find the cart for the user
      const cart = await Cart.findOne({ user: userId });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      // Find the item in the cart
      const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
      if (itemIndex === -1) {
        return res.status(404).json({ message: 'Product not found in cart' });
      }
  
      // Update quantity
      cart.items[itemIndex].quantity = quantity;
  
      await cart.save();
  
      res.status(200).json({ message: 'Cart updated successfully', cart });
    } catch (error) {
      console.error('Error updating cart:', error.message);
      res.status(500).json({ message: 'Internal server error while updating cart' });
    }
  };
  