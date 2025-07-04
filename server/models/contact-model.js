import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ContactSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;