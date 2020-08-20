import React from 'react';
import Navbar from "./components/Navbar/index";
import Jumbotron from "./components/Jumbotron/index";
import Carousel from "./components/Carousel/index";
import AboutMe from "./components/AboutMe/index";
import Blog from "./components/Blog/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <AboutMe />
      <Carousel />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
