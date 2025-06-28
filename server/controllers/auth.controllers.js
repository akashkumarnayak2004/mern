import User from "../models/user.model.js";  // Use import instead of require
import bcrypt from "bcryptjs";  // Use import instead of require

export const home = async (req, res) => {
  try {
    res.send("Hello World from router");
  } catch (error) {
    console.error(error);
  }
};

export const register = async (req, res) => {
  try {
    const { username, email, phone, password, isAdmin } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      
      return res.status(400).json({ message: "User already exists" });

    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userCreated = await User.create({ username, email, phone, password: hashedPassword, isAdmin });


    const token = userCreated.generateToken();


    return res.status(201).json({
      message: "User registered successfully",
      token,
      userId: userCreated._id.toString(),
    });

  } catch (error) {
    console.log("Error in register", error);
    
    // console.error("Error in register", error);
    // return res.status(500).json({ message: "Error in registration" });
    // Pass the error to the error handling middleware
  }
};

export const login = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or  password" });
    }

    const token = user.generateToken();

    return res.status(200).json({
      message: "Login successful",
      token,
      userId: user._id,
    });

  } catch (error) {
    // console.error("Login Error:", error);
    // return res.status(500).json({ message: "Server error. Please try again later." });
    next(error); // Pass the error to the error handling middleware
  }
};
//to send the user data to the client
// This function is called when the user is authenticated and the authMiddleware is applied
export const user = async (req, res) => {
  try {
   
    const userData = req.user; // Get the user data from the request objec
    console.log("User Data:", userData); // Log the user data for debugging
    return res.status(200).json({
      userData
    })
      
  } catch (error) {
    console.error(error);
  }
}