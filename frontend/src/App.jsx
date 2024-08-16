import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/pages/Home/Home';
import Auth from './User/pages/Auth/Auth';
import About from './User/pages/About/About';
import Cart from './User/pages/Cart/Cart';
import Order from './User/pages/Cart/Order';
import OrderStatus from './User/pages/Cart/OrderStatus';
import Help from './User/pages/Help/Help';


// Main App Component
const App = () => {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> 
          <Route path="login" element={<Auth />} />
          <Route path="about" element={<ProtectedRoute element={<About />} />} />
          <Route path="cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="order" element={<ProtectedRoute element={<Order />} />} />
          <Route path="orderStatus" element={<ProtectedRoute element={<OrderStatus />} />} />
          <Route path="help" element={<Help />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="*" element={<Error />} /> {/* Catch-all for undefined routes */}
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="adminauth" element={<AdminLogin />} /> 
          <Route path="productform" element={<ProductForm />} />
          <Route path="register" element={<Registration />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
