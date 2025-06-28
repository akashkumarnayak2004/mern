import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();
import jwt from "jsonwebtoken";


const Userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

Userschema.pre("save",async function (next){
    if(!this.isModified("password")){
        next();
    }
  try {
  //   const salt= await bcrypt.genSalt(10);
  // const hashedpassword= await bcrypt.hash(this.password,salt);
  //   this.password=hashedpassword;
  } catch (error) {
    next(error);
   
  }
    }
)


Userschema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        isAdmin: this.isAdmin,
        email: this.email,
      },
      process.env.JWT_SECRET, 
      { expiresIn: "30d" }
    );
  } catch (error) {
    console.error("JWT Token Generation Error:", error);
    return null; 
  }
};


const User=mongoose.model("User",Userschema);
export default User; 