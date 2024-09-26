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
import ProtectedRoute from './User/components/ProtectedRoute/ProtectedRoute';
import ForgetPassword from './User/pages/ForgetPassword/ForgetPassword';
import AdminLayout from './Admin/AdminLayout';
import AdminPanel from './Admin/Pages/Adminpanel';
import AdminLogin from './Admin/Pages/AdminLogin';
import ProductForm from './Farmer/pages/ProductForm/ProductForm';
import Registration from './Admin/Pages/Registration/Registration';
import Checkout from './User/pages/Cart/Checkout';
import Products from './User/pages/Products/Products';
import ProductDetails from './User/components/Products/ProductDetails';
import Contact from './User/pages/Contact/Contact';
import Privacy from './User/pages/Privacy/Privacy';
import Dashboard from './User/pages/UserDashboard/Dashboard';
import DashboardOrder from './User/pages/UserDashboard/dashboard-order';
import Profile from './User/pages/UserDashboard/ProfilePage';
import DashboardNotifications  from './User/pages/UserDashboard/NotificationPage';
import DashboardWishlist from './User/pages/UserDashboard/dashboard-wishlist';
import FAQ from './User/pages/Faq/Faq';
import Confirm from './User/pages/Confirm/Confirm';
import Error from "./User/pages/Error/Error"
import ReturnPolicy from './User/pages/ReturnPolicy/ReturnPolicy';
import FarmerLayout from './Farmer/FarmerLayout';
import FarmerAuth from './Farmer/pages/Auth/Auth';
import FarmerDashboard  from './Farmer/pages/FarmerDashboard/FarmerDashboard';
import FreelancePortal from './User/pages/free/Free';


// Main App Component
const App = () => {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} /> 
          <Route path="auth" element={<Auth />} />
          <Route path="about" element={<ProtectedRoute element={<About />} />} />
          <Route path="cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="order" element={<ProtectedRoute element={<Order />} />} />
          <Route path="orderStatus" element={<ProtectedRoute element={<OrderStatus />} />} />
          <Route path="help" element={<Help />} />
          <Route path="confirm" element={<Confirm />} />
          <Route path="products" element={<Products />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="*" element={<Error />} /> Catch-all for undefined routes
          <Route path="checkout" element={<Checkout/>} /> 
          <Route path="productDetails" element={<ProductDetails/>} /> 
          <Route path="contact" element={<Contact/>} /> 
          <Route path="privacy" element={<Privacy/>} /> 
          <Route path="dashboard" element={<Dashboard/>} /> 
          <Route path="profile" element={<Profile/>} /> 
          <Route path="dashboard-order" element={<DashboardOrder/>} /> 
          <Route path="dashboard-notifications" element={<DashboardNotifications/>} /> 
          <Route path="dashboard-wishlist" element={<DashboardWishlist/>} /> 
          <Route path="faq" element={< FAQ/>} /> 
          <Route path="return" element={<ReturnPolicy/>} /> 
          <Route path="free" element={<FreelancePortal/>} /> 
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="auth" element={<AdminLogin />} /> 
          {/* <Route path="productform" element={<ProductForm />} /> */}
          <Route path="register" element={<Registration />} />
        </Route>

        {/*Farmer Routes*/ }
        <Route path="/farmer" element={<FarmerLayout />}>
          <Route index element={<FarmerDashboard />} />
          <Route path="auth" element={<FarmerAuth/>} /> 
           <Route path="productform" element={<ProductForm />} />
          <Route path="dashboard" element={<FarmerDashboard />} /> 
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
