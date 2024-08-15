import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/pages/Home/Home';
import Auth from './User/pages/Auth/Auth';
import About from './User/pages/About/About';
import Cart from './User/pages/Cart/Cart';
import Order from './User/pages/Cart/Order';
import OrderStatus from './User/pages/Cart/OrderStatus';
import Registration from './Admin/Pages/Registration/Registration';
import ProductForm from './Admin/Pages/ProductForm/ProductForm';
import ProtectedRoute from '../src/User/components/ProtectedRoute/ProtectedRoute.jsx'; // Adjust the path as necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> {/* Public Route */}
          <Route path="auth" element={<Auth />} /> {/* Public Route */}
          <Route path="productform" element={<ProductForm />} />
          
          {/* Protected Routes */}
          <Route path="about" element={<ProtectedRoute element={<About />} />} />
          <Route path="cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="order" element={<ProtectedRoute element={<Order />} />} />
          <Route path="orderStatus" element={<ProtectedRoute element={<OrderStatus />} />} />
          <Route path="register" element={<ProtectedRoute element={<Registration />} />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
