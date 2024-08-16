import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    SKU:{
    type: String,
    required: true,
    unique: true,
    trim: true, 
    },
    productname: {
      type: String,
      required: true,
      trim: true, 
    },
    productprice: {
      type: Number,
      required: true,
      min: 0,
    },
    productdescription: {
      type: String,
      required: true,
      maxlength: 1000, 
    },
    category: {
      type: String,
      required: true,
      enum: ['Vegetables', 'Fruits', 'Dairy', 'Grains', 'Herbs', 'Other'],
    },
    productImage: {
      type: String,
      required: true,
    },
    currency:{
        type:String,
        default:"INR"
    },
    stock: {
      type: Number,
      default: 100,
      min:100
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
    discountpPrice: {
      type: Number,
      required: true,
      default:0
      
    },
    minOrder:{
        type:Number,
        min:100,
        default:100
    }
    ,
    maxOrder:{
        type:Number,
        min:10
    },
    shippingCost:{
        type: Number,
        default:0
    },
    returnPolicy:{
        type:String,
        required: true,
        enum:['1-2 daysAfterOrder','No damage','NotUsed']
    },
    weight:{
      type:Number,
      min:1,
      max:1000
    },
    status:{
      type: String,
      enum: ['Available', 'Out of Stock', 'Discontinued'],
      default: 'Available'
    },
  
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);
