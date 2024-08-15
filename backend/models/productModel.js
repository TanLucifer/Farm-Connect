import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, 
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      maxlength: 1000, 
    },
    quantity: {
      type: Number,
      required: true,
      min: 0, 
    },
    category: {
      type: String,
      required: true,
      enum: ['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Meat', 'Other'],
    },
    image: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer",
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmer",
    },
    farmLocation: {
      type: String,
      required: true,
    },
    organic: {
      type: Boolean,
      default: false,
    },
    harvestDate: {
      type: Date,
      required: true, 
    },
    shelfLife: {
      type: Number,
      required: true,
    },
    ratings: [
      {
        buyerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
          maxlength: 500,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    reviews: [
      {
        buyerId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        reviewText: {
          type: String,
          maxlength: 500,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    discount: {
      type: Number,
      min: 0,
      max: 100, 
    },
    views: {
      type: Number,
      default: 0, 
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
