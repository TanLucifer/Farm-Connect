import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../User/components/UserNavbar/Navbar";
import Footer from "../User/components/Footer/Footer";


const UserLayout = () => {
 
  return (
    <>
      <UserNavbar />
      {/* <ScrollProgressBar /> */}
      <Outlet />
      <Footer />
      {/* <GoToTop /> */}
    
    </>
  );
};

export default UserLayout;