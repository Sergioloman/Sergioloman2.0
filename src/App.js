import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./Pages/About/About.js";
import Portfolio from "./Pages/Portfolio/Portfolio";

// we need to render each one of these conditionally on click
function App() {
  const [currentPage, handlePageChange] = useState("About");
  //remember [ state holder, set state function]

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {renderPage(currentPage)}
      </div>
    </div>
  );
}

export default App;
///////////////
