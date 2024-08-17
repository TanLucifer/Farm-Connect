// src/Dashboard.js

import React from 'react';
// import './index.css'; // Import your Tailwind CSS file here

const Dashboard = () => {
  // Example data for statistics
  const stats = {
    farmerProducts: 120,
    revenue: "$45,000"
  };

  // Example data for customer purchases
  const purchases = [
    { customer: "Alice", product: "Organic Apples", amount: "$50" },
    { customer: "Bob", product: "Fresh Carrots", amount: "$30" },
    { customer: "Charlie", product: "Free-Range Eggs", amount: "$20" }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-xl font-bold">Dashboard</div>
        <nav className="mt-6">
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Home</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Profile</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Settings</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700">Logout</a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="bg-white shadow-md p-4">
          <h1 className="text-2xl font-semibold">Dashboard Header</h1>
        </header>

        {/* Statistics Bar */}
        <section className="p-6 bg-white shadow-md mt-4 mx-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Farmer Products</h3>
              <p className="text-2xl font-bold">{stats.farmerProducts}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Revenue</h3>
              <p className="text-2xl font-bold">{stats.revenue}</p>
            </div>
            {/* Add more statistics cards as needed */}
          </div>
        </section>

        {/* Customer Purchases */}
        <section className="p-6 bg-white shadow-md mt-4 mx-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Customer Purchases</h2>
          <table className="w-full bg-white border border-gray-300 rounded-lg shadow">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((purchase, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{purchase.customer}</td>
                  <td className="py-2 px-4">{purchase.product}</td>
                  <td className="py-2 px-4">{purchase.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Main area */}
        <div className="flex-1 p-6">
          <h2 className="text-xl font-bold mb-4">Main Content</h2>
          <p>This is the content area of your dashboard.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
