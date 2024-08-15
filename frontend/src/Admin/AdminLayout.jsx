import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import AdminFooter from './components/AdminFooter/AdminFooter';

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
