import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../screens/Home";
import About from "../screens/About";
import Services from "../screens/Services";
import Contact from "../screens/Contact";
import Portfolio from "../screens/Portfolio";
// const Home = () => <div>Home Page</div>;
// const About = () => <div>About Us</div>;
// const Services = () => <div>Our Services</div>;
// const Contact = () => <div>Contact Us</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
