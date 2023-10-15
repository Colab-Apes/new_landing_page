import axios from "axios";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate= useNavigate()
  const token = localStorage.getItem("LoggedIntoken");
  // const url = "";
  // axios
  //   .get(url, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //   .then((res) => {
  //     const safeDocument = typeof document !== "undefined" ? document : {};
  //     const { body } = safeDocument;
  //     if (val) {
  //       body.style.overflow = "";
  //     }
  //     return children;
  //   })
  //   .catch((e) => {
  //     return <Navigate to="/" />;
  //   });
  const safeDocument = typeof document !== "undefined" ? document : {};
  const { body } = safeDocument;
  if (token) {
    body.style.overflow = "";
  }
  return token ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
