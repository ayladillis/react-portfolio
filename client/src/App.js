import React from 'react';
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
// import PortfolioNav from "./components/PortfolioNav/index";
import AboutMe from "./components/AboutMe/index";
import Blog from "./components/Blog/index";
import Footer from "./components/Footer/index";
import Chart from "./components/Chart/index";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />

      <Chart />
      <AboutMe />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
