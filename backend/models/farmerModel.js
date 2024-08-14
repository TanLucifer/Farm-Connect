import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
        default: Date.now,
    },
    Gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    AdhaarNo: {
        type: Number,
        validate: {
            validator: function(v) {
                return /^\d{12}$/.test(v); // Ensures exactly 12 digits
            },
            message: props => `${props.value} is not a valid 12-digit Adhaar number!`
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Ensures exactly 10 digits
            },
            message: props => `${props.value} is not a valid 10-digit phone number!`
        },
    },
    address: {
        type: String,
    },
    bankName: {
        type: String,
        uppercase: true,
    },
    bankAccNo: {
        type: Number,
        validate: {
            validator: function(v) {
                return /^\d{8,16}$/.test(v); // Ensures 8 to 16 digits
            },
            message: props => `${props.value} is not a valid bank account number!`
        },
        unique: true,
    },
    bankAccName: {
        type: String,
        uppercase: true,
    },
    bankBranch: {
        type: String,
        uppercase: true,
    },
    IFSC_Code: {
        type: String,
    },
    panCard:{
        type:String,
    },
    proofOfAddress:{
        type:String,
    },
    profilePic:{
        type:String,
    }
}, {
    timestamps: true,
});

export default mongoose.model("Farmer", farmerSchema);
