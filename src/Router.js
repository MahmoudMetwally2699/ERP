import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./UI/Utils/Dashboard/dashboard";
import About from "./Pages/About/About";
import Payments from "./Pages/Payments/Payments";
import Login from "./Pages/Login/Login";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/payments" element={<Payments />} />
    </Routes>
  );
};

export default Router;
