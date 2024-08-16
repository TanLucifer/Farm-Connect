import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger and close icons
import logo from '../../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-[#151c1fff] shadow-md relative w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} style={{ height: '12vh' }} alt="Logo" />
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none absolute right-4 top-10"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-[#fffac4ff]">Home</Link>
            <Link to="/products" className="text-white hover:text-[#fffac4ff]">Products</Link>
            <Link to="/about" className="text-white hover:text-[#fffac4ff]">About Us</Link>
            <Link to="/contact" className="text-white hover:text-[#fffac4ff]">Contact</Link>
          </div>

          {/* Login Button */}
          <Link to="/auth">
            <button className="hidden md:block bg-[#fffac4ff] text-black font-semibold py-2 px-4 transition duration-300 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </header>

      {/* Mobile Menu Items */}
      <div className={`fixed top-0 right-0 w-64 bg-[#151c1fff] h-full z-20 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4">
          <img src={logo} style={{ height: '6vh' }} alt="Logo" />
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-8">
          <Link to="/" className="text-white hover:text-[#fffac4ff] text-xl" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" className="text-white hover:text-[#fffac4ff] text-xl" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/about" className="text-white hover:text-[#fffac4ff] text-xl" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="text-white hover:text-[#fffac4ff] text-xl" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
