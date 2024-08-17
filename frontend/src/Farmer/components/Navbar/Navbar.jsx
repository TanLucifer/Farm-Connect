// src/Navbar.js
import React from 'react';
import logo from '../../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-2xl font-bold mb-2 md:mb-0">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Logo" className="h-[10vh] mr-2" />
            
          </a>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-2 md:mb-0">
          <a href="#" className="text-white hover:text-gray-400">Home</a>
          <a href="#" className="text-white hover:text-gray-400">About</a>
          <a href="#" className="text-white hover:text-gray-400">Contact</a>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
