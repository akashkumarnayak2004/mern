import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import{ toast } from 'react-toastify'; // ✅ Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; 


const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const {storetokenInLs,API}  = useAuth(); // ✅ Proper destructuring

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const { username, email, phone, password } = user;

    if (!username || !email || !phone || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const response = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json(); // ✅ Always read JSON

      if (response.ok) {
        console.log("Register response:", data);
       storetokenInLs(data.token); // ✅ Use token from JSON
       toast.success("Registration successful!");
        navigate("/login");
      } else {
       toast.error(data.message || "Registration failed");
      }

      setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (error) {
      console.error("Error in register:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gradient-to-tr from-purple-300 to-blue-300 flex items-center justify-center p-6">
          <img
            src="/images/register.png"
            alt="Register"
            className="w-3/4 md:w-full object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-6">
            Create Account
          </h2>
          <form onSubmit={handleForm} className="flex flex-col gap-4">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                value={user.username}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={user.phone}
                onChange={handleChange}
                required
                maxLength={10}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleChange}
                required
                minLength={6}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Register
            </button>
            <div className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
