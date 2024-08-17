import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import AdminFooter from '../User/components/Footer/Footer';

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
      <AdminFooter />
    </>
  );
};

export default AdminLayout;
