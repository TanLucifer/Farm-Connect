
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/pages/Home/Home';
import Auth from './User/pages/Auth/Auth';

import About from './User/pages/About/About';
import Cart from './User/pages/Cart/Cart';
import Order from './User/pages/Cart/Order';
import OrderStatus from './User/pages/Cart/OrderStatus';
import Privacy from "./User/pages/Privacy/Privacy";

import Registration from "./Admin/Pages/Registration/Registration";


const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} /> 
          <Route path="auth" element={<Auth />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={< Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="order" element={<Order />} />
          <Route path="orderStatus" element={<OrderStatus />} />
          <Route path="register" element={<Registration />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>

      </Routes>

    </Router>
  );
};

export default App;