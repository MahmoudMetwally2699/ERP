import React from "react";
import Login from "../../Pages/Login/Login";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const VisitorInterface = () => {
  const storageToken = localStorage.getItem("token");
  const token = useSelector((state) => state.login.token);
  return storageToken ? <Navigate to="/admin/dashboard" /> : <Login />;
};

export default VisitorInterface;
