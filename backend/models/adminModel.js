import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
admin_id:{
    type:String,
    default:"ntF6hHDnkC"
},
admin_permission:{
    type:String,
    enum:["super_admin"],
    default:"super_admin"
},
username:{
    type:String,
    unique:true,
    required:true
},
password:{
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