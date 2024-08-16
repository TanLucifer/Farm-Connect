import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
admin_id:{
    type:String,
    default:"ntF6hHDnkC",
    required:true,
    unique:true,
    lowercase: true,
    trim: true
},
admin_permission:{
    type:String,
    enum:["super_admin","admin"],
    default:"super_admin"
},
admin_username:{
    type:String,
    unique:true,
    required:true
},
admin_password:{
    type:String,
    required:true,
},
total_orders:[{
type:mongoose.Schema.Types.ObjectId,
ref:"Order"
}],
payment:{
type:Number,
default:0
},

},{
    timestamps:true
})

const adminCollection =  mongoose.model("Admin",adminSchema)
export default adminCollection;