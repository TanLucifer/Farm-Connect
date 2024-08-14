import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    order: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        default: [],
    }],
    profilePic: {
        type: String,
        default: "",
    },
    bankAccNo: {
        type: Number,
        unique: true,
    },
    bankAccName: {
        type: String,
        uppercase: true,
    },
    bankName: {
        type: String,
        uppercase: true, 
    },
    bankBranch: {
        type: String,
        uppercase: true, 
    },
    IFSC_code: {
        type: String, 
    },
}, {
    timestamps: true, 
});

export default mongoose.model("User", userSchema);
