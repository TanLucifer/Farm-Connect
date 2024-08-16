import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Homeill from '../../../assets/home_ill.png';
import Background from '../../../assets/background.svg';
import Navbar from '../../components/UserNavbar/Navbar';


const FarmConnect = () => {
  return (
    <div className="min-h-screen bg-green-50">
      
      <main>
        <section
          className="relative bg-cover bg-center h-screen flex items-center"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"style={{zIndex:'1'}}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 ">
              Cultivate Success with FarmConnect
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join our thriving community of over 5,000 farm products and a network of trusted buyers and sellers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                Start Trading
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                Create Contract
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#151b1fff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: '5k+', label: 'Products', icon: '🌾' },
                { number: '800+', label: 'Partners', icon: '🤝' },
                { number: '150k+', label: 'Transactions', icon: '💼' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-green-50 rounded-lg shadow-md p-6 transition duration-300 hover:shadow-xl"
                >
                  <span className="text-4xl mb-2">{item.icon}</span>
                  <h3 className="text-3xl font-bold text-green-800">{item.number}</h3>
                  <p className="text-lg text-green-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#1a2226ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              Top Sellers This Season
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Alex Harvest', 'Sarah Sprout', 'Kendal Hub', 'Kerstin Mate'].map((seller) => (
                <div
                  key={seller}
                  className="bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-xl"
                >
                  <div className="w-20 h-20 bg-green-200 rounded-full mb-4 mx-auto"></div>
                  <h4 className="text-xl font-semibold text-green-800 mb-2">{seller}</h4>
                  <p className="text-green-600 mb-4">Organic Farming Co.</p>
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full mr-2"></div>
                    <div className="w-8 h-8 bg-green-100 rounded-full mr-2"></div>
                    <span className="text-green-600">+5 products</span>
                  </div>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#151b1fff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                <div className="aspect-w-16 aspect-h-9  rounded-lg shadow-md overflow-hidden">
                  <img src={Homeill} alt="Farm produce" className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-white mb-6">Join Our Growing Community</h3>
                <p className="text-xl text-white mb-8">
                  Access secure and transparent transactions for all your farming needs. Stay updated with the latest trends and opportunities.
                </p>
                <div className="flex flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email for updates"
                    className="flex-grow bg-white border border-green-300 rounded-full px-6 py-3 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 mb-4 sm:mb-0 sm:mr-4"
                  />
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold py-3 px-8 rounded-full transition duration-300">
                    Join Now
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default FarmConnect;
