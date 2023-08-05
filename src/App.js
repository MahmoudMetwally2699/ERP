import Router from "./Router";

// component
import NavBar from "./UI/Utils/NavBarMA/NavBar";
import Footer from "./UI/Utils/Footer/Footer";
export const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
