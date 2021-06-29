import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./Pages/About/About.js";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./components/Footer";
import Resume from "./Pages/Resume/Resume"

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
      case "Resume":
        return <Resume/>;
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
      <Footer />
    </div>
  );
}

export default App;
///////////////
