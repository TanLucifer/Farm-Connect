import React, { useState } from 'react';

function OrderStatus() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col font-sans">
      {/* Main content */}
      <main className="flex-grow flex flex-col p-8 mt-[13vh] max-w-6xl mx-auto w-full">
        {/* Top banner */}
        <div className="w-full h-32 bg-green-500 mb-8 rounded-lg shadow-lg flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Farm Fresh Delivery</h1>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl p-8">
          {/* Left column */}
          <div className="flex-grow pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-green-800">Order Status</h2>
            
            <div className="space-y-6">
              <StatusItem 
                number={1} 
                title="Almost there!"
                description="Preparing your farm-fresh order."
                active={true}
              />
              <StatusItem 
                number={2} 
                title="Done!"
                description="Your order is on its way to you."
              />
              <StatusItem 
                number={3} 
                title="Delivered!"
                description="Order successfully delivered."
              />
            </div>
          </div>

          {/* Right column */}
          <div className="w-full md:w-64 mt-0 md:mt-[10vh]">
            <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-yellow-600">35 min</span>
                <p className="text-sm text-yellow-700 mt-1">until delivered</p>
              </div>
              <p className="text-sm text-center mb-4 text-yellow-800">
                Your fresh farm produce will be there shortly!
                Track your order for updates.
              </p>
              <button 
                onClick={() => setIsHidden(!isHidden)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              >
                {isHidden ? 'Show' : 'Hide'} order status
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatusItem({ number, title, description, active = false }) {
  return (
    <div className="flex items-start">
      <div className="w-10 mr-4">
        <div className={`${active ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'} rounded-full w-10 h-10 flex items-center justify-center font-bold transition-colors duration-300`}>
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg text-green-700">{title}</h3>
        <p className="text-green-600">{description}</p>
      </div>
    </div>
  );
}

export default OrderStatus;