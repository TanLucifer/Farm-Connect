import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tomato from '../../../assets/tomato.jpg';
import lemon from '../../../assets/lemon.jpeg';
import garlic from '../../../assets/garlic.jpeg';

const CartItem = ({ name, price, image, description, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 bg-white p-6 rounded-lg shadow-md">
      <div className="w-full md:w-32 h-32 bg-gray-300 rounded-md flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="flex-grow">
        <p className="font-semibold text-xl text-yellow-900">{name}</p>
        <p className="text-yellow-700">{description}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => handleQuantityChange(-1)} 
            className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded"
          >
            -
          </button>
          <span className="font-semibold">{quantity}</span>
          <button 
            onClick={() => handleQuantityChange(1)} 
            className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded"
          >
            +
          </button>
        </div>
        <p className="font-bold text-xl text-yellow-900">${(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

const DashboardCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Tomato", price: 99, image: tomato, description: "Fresh and organic tomatoes." },
    { id: 2, name: "Lemon", price: 149, image: lemon, description: "Juicy and ripe lemons." },
    { id: 3, name: "Garlic", price: 199, image: garlic, description: "Aromatic and flavorful garlic." },
  ]);

  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, quantity) => {
    setQuantities(prev => ({ ...prev, [id]: quantity }));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * (quantities[item.id] || 1), 0);
  const shipping = 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col md:flex-row">
      {/* Left side - Product list */}
      <div className="md:w-2/3 p-6 md:p-12 overflow-y-auto mt-10">
        <h1 className="text-3xl font-bold mb-8 text-yellow-800">Your Cart</h1>
        <div className="space-y-6">
          {items.map((item) => (
            <CartItem 
              key={item.id} 
              name={item.name} 
              price={item.price}
              image={item.image}
              description={item.description}
              onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
            />
          ))}
        </div>
      </div>

      {/* Right side - Order summary */}
      <div className="md:w-1/3 bg-yellow-100 p-6 md:p-12 flex flex-col justify-between mt-20">
        <div>
          <h2 className="text-2xl font-bold mb-6 text-yellow-800">Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-yellow-700">Subtotal</span>
              <span className="font-semibold text-yellow-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-yellow-700">Shipping</span>
              <span className="font-semibold text-yellow-900">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-yellow-700">Tax</span>
              <span className="font-semibold text-yellow-900">${tax.toFixed(2)}</span>
            </div>
          </div>
          <div className="border-t border-yellow-300 pt-4 mb-6">
            <div className="flex justify-between">
              <span className="text-xl font-bold text-yellow-800">Total</span>
              <span className="text-xl font-bold text-yellow-900">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div>
          <label className="flex items-center space-x-2 text-yellow-800 mb-6">
            <input type="checkbox" className="form-checkbox text-yellow-500" />
            <span>I agree to the Terms of Service</span>
          </label>
          
          <Link to="/checkout">
            <button 
              className="w-full bg-yellow-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardCart;
