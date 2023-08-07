import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Dashboard from "./UI/Utils/Dashboard/dashboard";
import About from "./Pages/About/About";
import Payments from "./Pages/Payments/Payments";
import Login from "./Pages/Login/Login";
import VisitorInterface from "./interfaces/visitorInterface/VisitorInterface";
import AdminInterface from "./interfaces/adminInterface/AdminInterface";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/admin" element={<AdminInterface />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route> */}
      <Route path="/" element={<VisitorInterface />}></Route>

      <Route element={<PrivateRoutes />}>
        <Route path="/admin" element={<AdminInterface />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
