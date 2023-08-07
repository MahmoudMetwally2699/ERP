import React from "react";
import NavBar from "../../UI/Utils/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../UI/Utils/Footer/Footer";
const AdminInterface = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminInterface;
