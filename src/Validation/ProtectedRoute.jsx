import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const val = localStorage.getItem("LoggedIntoken");
  const safeDocument = typeof document !== "undefined" ? document : {};
  const { body } = safeDocument;
  if (val) {
    body.style.overflow = "";
  }
  return val ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
