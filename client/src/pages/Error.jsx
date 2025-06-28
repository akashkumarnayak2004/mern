import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="images/error.avif"
            alt="404 Error"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Message Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Oops! Page Not Found</h1>
          <p className="text-gray-700 mb-6">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable. Please check the URL or navigate using the buttons below.
          </p>
          <div className="flex gap-4">
            <NavLink
              to="/"
              className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Go to Home
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-purple-500 text-white px-5 py-3 rounded-lg hover:bg-purple-600 transition duration-300"
            >
              Contact Support
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Error;
