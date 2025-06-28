import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; // Adjust the import path as necessary

export const authMiddleware = async(req, res, next) => {
const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "No token provided, authorization denied" });
    }
    const jwtToken = token.replace("Bearer", "").trim(); // Assuming the token is in the format "Bearer <token>"
 console.log("JWT Token:", jwtToken);
 try {
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        const userData = await User.findOne({email: decoded.email}).select({
            password: 0, // Exclude password from the user data
            __v: 0 // Exclude version key if using Mongoose 
        }) // Find the user by email from the decoded token
        console.log("User Data from Token:", userData);
        
        req.user = userData; // Attach the decoded user information to the request object
        req.token = jwtToken; // Attach the token to the request object for further use
        req.userId = userData._id; // Attach userId to the request object

        next(); // Call the next middleware or route handler
    
 } catch (error) {
return res.status(401).json({ message: "Invalid token" });
    }
 }
