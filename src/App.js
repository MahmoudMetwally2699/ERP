import Router from "./Router";

// component
import NavBar from "./UI/Utils/NavBar/NavBar";
import Footer from "./UI/Utils/Footer/Footer";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
export const App = () => {
  const token = useSelector((state) => state.login.token);
  console.log("token:=>", token);
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
