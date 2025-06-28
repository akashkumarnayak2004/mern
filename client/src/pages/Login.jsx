import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import{ toast } from 'react-toastify'; // ✅ Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; 




const Login = () => {
  const [user, setuser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const  {storetokenInLs,API}  = useAuth();  // ✅ Proper destructuring

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleform = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    if (!email || !password) {
     toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();  // ✅ Always read JSON response first

      if (response.ok) {
        console.log('Login response:', data);
       storetokenInLs(data.token);        // ✅ Correct function call
        toast.success('Login successful!');
        setuser({ email: '', password: '' });
        navigate('/');
      } else {
        alert(data.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
        {/* Image Section */}

        
        <div className="w-full md:w-1/2 bg-gradient-to-tr from-purple-300 to-blue-300 flex items-center justify-center p-6">
          <img
            src="/images/login.png"
            alt="Login"
            className="w-3/4 md:w-full object-contain"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-6">
            Welcome Back
          </h2>
          <form onSubmit={handleform} className="flex flex-col gap-4">
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
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Login
            </button>

            <div className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
