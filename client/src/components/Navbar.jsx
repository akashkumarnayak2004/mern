import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu,   XCircle } from 'lucide-react'; 
import { useAuth } from '../store/auth'; // Assuming you have an auth context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {isloggedIn, LogoutUser} = useAuth(); // Assuming you have an auth context
  

  return (
    <nav className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-white shadow-md">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold hover:text-gray-300">TECH HUB</Link>
          </div>

          {/* Right: Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
            <li><Link to="/service" className="hover:text-gray-300">Services</Link></li>
              {/* <li><Link to="/service" className="hover:text-gray-300">Services</Link></li> */}
              { isloggedIn ? (
              <li><Link to="/logout" className="hover:text-gray-300" onClick={LogoutUser}>Logout</Link></li>
              ) : (   
                <>
                  <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
            <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
                </>
        
              )}

           
          
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <XCircle size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <ul className="md:hidden mt-2 space-y-2">
            <li><Link to="/" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/contact" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link to="/service" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Services</Link></li>
           
            <li><Link to="/register" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Register</Link></li>
            
            <li><Link to="/login" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Login</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
