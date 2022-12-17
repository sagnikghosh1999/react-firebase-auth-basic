import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
