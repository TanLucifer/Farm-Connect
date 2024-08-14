import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    category: '',
    orderStatus: [],
    sortBy: [],
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setProducts(response.data.map(product => ({
        ...product,
        category: mapCategory(product.category),
        availableQuantity: Math.floor(Math.random() * 5000) + 1000
      })));
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
      setLoading(false);
    }
  };

  const mapCategory = (category) => {
    const categoryMap = {
      "men's clothing": "Farm landscape",
      "women's clothing": "Fresh produce",
      "electronics": "Organic fruits",
      "jewelery": "Farm animal"
    };
    return categoryMap[category] || category;
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.category === '' || product.category === filters.category)
  );

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  return (
    <div className="bg-green-50 min-h-screen p-4 sm:p-8">
      <header className="mb-8 mt-[10vh]">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">Search results for "Fresh Produce"</h1>
        <input
          type="text"
          placeholder="Filter by crop type"
          className="w-full p-2 border border-green-300 rounded"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Order status</h3>
            {['Purchase now', 'Ending soonest', 'New arrivals'].map(status => (
              <div key={status} className="flex items-center mb-2">
                <input type="checkbox" id={status} className="mr-2" />
                <label htmlFor={status}>{status}</label>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Sort by type</h3>
            {['Photo', 'Illustration', 'Video clip'].map(type => (
              <div key={type} className="flex items-center mb-2">
                <input type="checkbox" id={type} className="mr-2" />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Quality assessment</h3>
            {/* Add quality assessment options here */}
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Product listing</h3>
            {/* Add product listing options here */}
          </div>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Payment method</h3>
            {/* Add payment method options here */}
          </div>
        </aside>

        <main className="md:w-3/4">
          {loading && <p className="text-center text-xl">Loading products...</p>}
          {error && <p className="text-center text-xl text-red-600">{error}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-full h-48 bg-gray-200 mb-4 rounded flex items-center justify-center">
                  <span className="text-gray-500">Image placeholder</span>
                </div>
                <h2 className="text-xl font-semibold text-green-700 truncate">{product.title}</h2>
                <p className="text-yellow-600">{product.category}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-green-800 font-bold">${product.price.toFixed(2)}</span>
                  <span className="text-gray-600">{product.availableQuantity} kg</span>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && !loading && (
            <p className="text-center text-xl mt-8">No products found.</p>
          )}

          <div className="mt-8 text-center">
            <button 
              className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300"
            >
              Filter results
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;