import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = Boolean(localStorage.getItem('token')); 
  return isAuthenticated ? element : <Navigate to="/auth" />;
};

export default ProtectedRoute;
