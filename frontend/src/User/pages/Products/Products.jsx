import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [cropType, setCropType] = useState('');
  const [orderStatus, setOrderStatus] = useState({
    purchaseNow: false,
    endingSoonest: false,
    newArrivals: false,
  });
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/product/getallproducts');
        if (response.ok) {
          const data = await response.json();
          console.log('API Response:', data); 
          setProducts(data.products || []); 
        } else {
          console.error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchProducts();
  }, []);
  

  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  return (
    <div className="bg-[#fffde8ff] min-h-screen">
      <div className="container mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-6 flex items-center justify-between">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="ml-2 px-4 py-2 bg-yellow-500 text-green-800 rounded-full hover:bg-yellow-400 transition-colors font-semibold shadow-md">
            Search
          </button>
        </div>

        <header className="mb-6 bg-[#fffac4ff] text-black p-4 rounded-lg shadow-md">
          <button className="mb-2 transition-colors" style={{ fontSize: '16px' }}>&larr;</button>
          <h1 className="text-2xl font-bold">Search results for "{searchQuery || 'Fresh Produce'}"</h1>
          <p className="text-green-100">{products.length} results</p>
        </header>

        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-1/4 bg-[#dbd6bfff] p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="cropType" className="block mb-2 font-semibold text-green-800">Filter by crop type</label>
              <select
                id="cropType"
                className="w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
              >
                <option value="">Select crop type</option>
                {/* Add crop type options */}
              </select>
            </div>

            <div className="mb-4">
              <h3 className="font-bold mb-2 text-green-800">Order status</h3>
              {Object.entries(orderStatus).map(([key, value]) => (
                <div key={key} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={key}
                    checked={value}
                    onChange={() => setOrderStatus(prev => ({ ...prev, [key]: !prev[key] }))}
                    className="mr-2 form-checkbox text-yellow-500 focus:ring-yellow-400"
                  />
                  <label htmlFor={key} className="text-green-700">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</label>
                </div>
              ))}
            </div>
          </aside>

          <main className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product._id} className="bg-[#c2b893ff] border border-green-200 rounded-lg p-4 hover:shadow-lg transition-shadow relative">
                  <button
                    className={`absolute top-2 right-2 ${wishlist.includes(product._id) ? 'text-red-500' : 'text-gray-400'}`}
                    onClick={() => toggleWishlist(product._id)}
                  >
                    <FontAwesomeIcon icon={faHeart} className="h-8 w-8" />
                  </button>
                  <img
                    src={`http://localhost:3000/uploads/${product.productImage}`}
                    alt={product.productname}
                    className="bg-green-100 h-40 mb-2 rounded object-contain w-full"
                  />
                  <h3 className="font-bold text-[black]">{product.productname}</h3>
                  <p className="text-[#fffac4ff] font-semibold">
                    Current price: {product.currency} {product.productprice.toFixed(2)}
                  </p>
                  <p className="text-[#fffac4ff]">Stock: {product.stock}</p>
                  <Link to='/cart'>
                    <button className="mt-4 px-4 py-2 bg-[#fffac4ff] text-green-800 rounded-full hover:bg-yellow-400 transition-colors font-semibold shadow-md">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </main>
        </div>

        <button className="mt-6 px-6 py-2 bg-yellow-500 text-green-800 rounded-full hover:bg-yellow-400 transition-colors font-semibold shadow-md" style={{ marginLeft: '45vw' }}>
          See More
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
