import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    buyerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity must be at least 1"], // Ensure quantity is positive
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, "Total price must be a positive number"], // Ensure totalPrice is non-negative
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled", "Delivered"],
      default: "Pending",
    },
    deliveryAddress: {
      type: String,
      required: true,
      trim: true,
     
    },
    paymentMethod: {
      type: String,
      enum: ["Card", "Cash"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Unpaid", "Paid", "Refunded"],
      default: "Unpaid",
    },
    deliveryDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > Date.now();
        },
        message: "Delivery date must be in the future",
      },
    },
    deliveryTime: {
      type: String,
      required: true,
      trim: true,
    },
    trackingId: {
      type: String,
      default: "",
      trim: true,
    },
    order_id: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", orderSchema);
