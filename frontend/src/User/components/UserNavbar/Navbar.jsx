import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-800">FarmConnect</h1>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-green-700 hover:text-green-900">Home</Link>
              <Link to="/" className="text-green-700 hover:text-green-900">Products</Link>
              <Link to="/about" className="text-green-700 hover:text-green-900">About Us</Link>
              <Link to="#" className="text-green-700 hover:text-green-900">Contact</Link>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
              Login
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
