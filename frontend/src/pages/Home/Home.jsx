import React from 'react';

const FarmConnect = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">FarmConnect</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect, trade, and transact securely with buyers and sellers
            </h2>
            <p className="text-gray-600 mb-6">
              Platform with over 5,000 farm products and a network of trusted buyers and sellers
            </p>
            
            <div className="flex space-x-4 mb-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Start trading
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Create contract
              </button>
            </div>

            <div className="flex justify-between mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold">5k+</h3>
                <p className="text-gray-600">Products</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">800+</h3>
                <p className="text-gray-600">Partners</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">150k+</h3>
                <p className="text-gray-600">Transactions</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Top sellers this season</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {['Alex Harvest', 'Sarah Sprout', 'Kendal Hub', 'Kerstin Mate'].map((seller) => (
                <div key={seller} className="border rounded-lg p-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
                  <h4 className="font-semibold">{seller}</h4>
                  <p className="text-sm text-gray-600">Farming Co.</p>
                  <div className="mt-2">
                    <div className="w-8 h-8 bg-gray-200 inline-block mr-1"></div>
                    <div className="w-8 h-8 bg-gray-200 inline-block mr-1"></div>
                    <span className="text-sm text-gray-600">+5</span>
                  </div>
                  <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded">
                    Connect
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                Join our platform to access secure and transparent transactions for all your farming needs.
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-grow mr-2 p-2 border rounded"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div>FarmConnect</div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Buyers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sellers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contracts</a>
            </div>
            <div>&copy; FarmConnect 2024</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FarmConnect;