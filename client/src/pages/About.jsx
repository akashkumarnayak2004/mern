import React from 'react'
import { Link } from 'react-router-dom'
// import { useAuth } from '../store/auth' 
const About = () => {
  // const { user } = useAuth(); // Accessing user from AuthContext
  return (
        
    <div className="p-4 md:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-700">Welcome </h1>
{/*           <p>Welcome {user.username}</p> */}
          <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
          
          <p className="text-gray-700">We bring years of expertise to deliver modern, scalable, and efficient digital solutions.</p>
          <p className="text-gray-700">Our team is dedicated to developing customized software tailored to your exact business needs.</p>
          <p className="text-gray-700">Customer satisfaction is our priority — we listen, understand, and deliver beyond expectations.</p>
          <p className="text-gray-700">We offer cost-effective solutions without compromising on quality or reliability.</p>
          <p className="text-gray-700">Partner with us for dependable support and future-ready technology strategies.</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <Link
              to="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Connect Now
            </Link>
            <Link
              to="/"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/images/about.png" alt="About" className="max-w-full h-auto rounded-lg" />
        </div>
        
      </div>
    </div>
  )
}

export default About
