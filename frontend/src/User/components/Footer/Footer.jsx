import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">FarmConnect</h4>
              <p className="text-green-200">Connecting farmers and buyers since 2024</p>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="#" className="text-green-200 hover:text-white">Home</Link></li>
                <li><Link to="#" className="text-green-200 hover:text-white">About Us</Link></li>
                <li><Link to="#" className="text-green-200 hover:text-white">Products</Link></li>
                <li><Link to="#" className="text-green-200 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white">Facebook</a>
                <a href="#" className="text-green-200 hover:text-white">Twitter</a>
                <a href="#" className="text-green-200 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p className="text-green-200">&copy; 2024 FarmConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
