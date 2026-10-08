import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./firebase";
const ProtectedRoutes = () => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
