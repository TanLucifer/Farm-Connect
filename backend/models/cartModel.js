import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
    default: 0
  },
  status: {
    type: String,
    enum: ['active', 'ordered', 'canceled'],
    default: 'active'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

cartSchema.pre('save', function (next) {
  this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  this.updatedAt = Date.now();
  next();
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;