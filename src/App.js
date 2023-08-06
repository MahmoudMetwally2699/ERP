import Router from "./Router";

// component
import NavBar from "./UI/Utils/NavBar/NavBar";
import Footer from "./UI/Utils/Footer/Footer";
import Login from "./Pages/Login/Login";
export const App = () => {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Router />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
