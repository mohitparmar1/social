import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function ProtectedRoute() {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? <Outlet /> : <Navigate to="/" replace />; // Redirect to login page if not authenticated
}

export default ProtectedRoute;
