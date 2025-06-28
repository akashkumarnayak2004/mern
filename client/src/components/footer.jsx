import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Tech Hub</h2>
          <p className="text-sm text-gray-400">Empowering your business with technology.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:underline text-gray-300">Home</Link>
          <Link to="/about" className="hover:underline text-gray-300">About</Link>
          <Link to="/contact" className="hover:underline text-gray-300">Contact</Link>
          <Link to="/services" className="hover:underline text-gray-300">Services</Link>
        </div>

        {/* Right Section - Socials Placeholder */}
        <div className="text-center md:text-right text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tech Hub. All rights reserved.</p>
          <p>Developed by TECH HUB</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
