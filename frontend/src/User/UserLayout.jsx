import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserNavbar from "../User/components/UserNavbar/Navbar";
import AdminNavbar from "../Admin/components/AdminNavbar/AdminNavbar";
import Footer from "../User/components/Footer/Footer";



const UserLayout = () => {
   const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? <AdminNavbar /> : <UserNavbar />}
      
      
      <Outlet />
      <Footer />
      
      {!isAdminRoute }
    </>
  );
};

export default UserLayout;