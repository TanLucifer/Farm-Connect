import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/Dashboard/ProductCard";
import Aside from "../../components/Dashboard/Aside";
import Header from "../../components/Dashboard/Header";
import SearchBar from "../../components/Dashboard/SearchBar";
import SeeMore from "../../components/Dashboard/SeeMore";
import ViewLess from "../../components/Dashboard/ViewLess";
import Dropdown from "../../components/Dashboard/Dropdown";

const placeholderImage = "https://via.placeholder.com/150";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email");
    const username = params.get("username");

    if (email && username) {
      localStorage.setItem("email", email);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);
    }
  }, [location]);

  const initialProducts = [
    {
      image: placeholderImage,
      title: "Snacker's Special Granola",
      price: 350,
      rating: 5,
    },
    {
      image: placeholderImage,
      title: "Wooden Cutlery Set of 7",
      price: 1200,
      rating: 4,
    },
    {
      image: placeholderImage,
      title: "Jute Cotton Basket",
      price: 399,
      rating: 4,
    },
    {
      image: placeholderImage,
      title: "Premium Woolen Shawls",
      price: 5000,
      rating: 5,
    },
  ];

  const moreProducts = [
    {
      image: placeholderImage,
      title: "Eco-Friendly Notebook",
      price: 250,
      rating: 4,
    },
    {
      image: placeholderImage,
      title: "Bamboo Toothbrush Set",
      price: 150,
      rating: 5,
    },
    {
      image: placeholderImage,
      title: "Organic Cotton Towels",
      price: 600,
      rating: 4,
    },
    {
      image: placeholderImage,
      title: "Reusable Shopping Bags",
      price: 300,
      rating: 5,
    },
    {
      image: placeholderImage,
      title: "Biodegradable Phone Case",
      price: 450,
      rating: 5,
    },
    {
      image: placeholderImage,
      title: "Recycled Paper Journals",
      price: 200,
      rating: 4,
    },
    {
      image: placeholderImage,
      title: "Glass Water Bottle",
      price: 350,
      rating: 5,
    },
    {
      image: placeholderImage,
      title: "Organic Tea Set",
      price: 750,
      rating: 5,
    },
  ];

  const [products] = useState([...initialProducts, ...moreProducts]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [clicked, setClicked] = useState(0);
  const [showViewLess, setShowViewLess] = useState(false);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleDropdown = (dropdown) => setOpenDropdown(dropdown);
  const handleDropdownLeave = () => setOpenDropdown(null);

  const handleSeeMore = () => {
    if (clicked === 0) {
      setVisibleProducts(visibleProducts + 4);
    } else if (clicked === 1) {
      setVisibleProducts(products.length);
      setShowViewLess(true);
    }
    setClicked(clicked + 1);
  };

  const handleViewLess = () => {
    setVisibleProducts(4);
    setClicked(0);
    setShowViewLess(false);
  };

  const handleLogout = () => {
    try {
      let confirmed = confirm("Are you sure you want to logout?");
      if (confirmed) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("email");
        localStorage.removeItem("username");
        alert("Logout Successfully and safely.");
        navigate("/login");
      } else {
        return;
      }
    } catch (error) {
      alert("Logout Failed. Try Again later");
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fff1e6]">
      {/* Sidebar */}
      <Aside />

      {/* Main Content */}
      <main className="flex-1 p-6 mt-2">
        {/* Header */}
        <Header />

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

        {/* New Today Section */}
        <section>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">New Today</h2>
            <Dropdown
              isOpen={openDropdown === "products"}
              onMouseEnter={() => handleDropdown("products")}
              onMouseLeave={handleDropdownLeave}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, visibleProducts).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            {clicked < 2 && <SeeMore onClick={handleSeeMore} />}
            {showViewLess && <ViewLess onClick={handleViewLess} />}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
