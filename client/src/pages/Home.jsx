import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-10">

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
          <p>
            Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further!
            At <strong>Tech Hub</strong>, we specialize in providing innovative IT services and solutions tailored
            to meet your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Connect Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src="/images/home.png" alt="Home" className="max-w-full h-auto" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-blue-600">50+</h2>
            <p className="mt-2 text-gray-700">Registered Companies</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-blue-600">1200+</h2>
            <p className="mt-2 text-gray-700">Happy Clients</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-blue-600">100+</h2>
            <p className="mt-2 text-gray-700">Well-known Developers</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-blue-600">24/7</h2>
            <p className="mt-2 text-gray-700">Customer Support</p>
          </div>
        </div>
      </div>

      {/* Repeated Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
        <p className='mb-3'>We are here to help you</p>
          <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
          <p>
           Ready to take the first step towards a more efficient and secure IT infrastructure ? Contact Us today for free consultation and lets discuss how Thapa Technical Can Help Your business thrive in the digital age <strong>Tech Hub</strong>, we specialize in providing innovative IT services and solutions tailored
            to meet your unique needs.

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md "
            >
              Connect Now
            </Link>
            <Link
              to="/about"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-300 shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src="/images/design.png" alt="Home" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Home
