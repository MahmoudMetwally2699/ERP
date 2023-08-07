import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoutes = () => {
  const token = useSelector((state) => state.login.token);
  const storageToken = localStorage.getItem("token");
  //   const token = true;
  return storageToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
