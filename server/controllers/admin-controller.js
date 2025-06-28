import  User from '../models/user.model.js';
import Contact from "../models/contact-model.js";


export const getAllUsers = async (req, res) => {
try {
    const users = await User.find({}).select("-password -__v"); // Exclude password and __v field
    console.log("Fetched users:", users); // Log the fetched users for debugging
    
    if (!users || users.length === 0) {
        return res.status(404).json({ message: "No users found" });
    }
   return  res.status(200).json({
      
       users,
    });
} catch (error) {
    console.log(error);
}
}
export const getAllUsersContact = async(req,res)=>{
    try {
        const contacts = await Contact.find({}).select("-__v"); // Exclude __v field
        console.log("Fetched contacts:", contacts); // Log the fetched contacts for debugging
        
        if(!contacts || contacts.length === 0){
            return res.status(404).json({ message: "No contacts found" });
        }
        return res.status(200).json({
            contacts,
        })
        
    } catch (error) {
        console.log(error);
    }
}
//delete user 

export const deletUser=async(req,res)=>{
try {
    const id =req.params.id;
    await User.deleteOne({_id:id})
    return res.status(200).json({message:"user deleted sucessfully"});
    
} catch (error) {
    console.log(error);
    next(error);
    
}
}

export const getUserById=async(req,res)=>{
try {
    const id =req.params.id;
    const user = await User.findOne({_id:id} ).select("-password -__v");
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
} catch (error) {
    console.log(error);
    next(error);
}
}

export const updateUserbyId =async( req,res)=>{
    try {
        const id = req.params.id;
        const updatedData = req.body;
        
        const updateuser = await User.updateOne({_id:id},{
            $set:updatedData,

        });
        return res.status(200).json({updateuser});
        
    } catch (error) {
        console.log(error);
    }

}
