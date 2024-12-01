import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";
import About from "./About";
// import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section id="hero" className="pt-16">
        <Hero />
      </section>
      {/* About Section */}
      <section id="about" className="py-16">
        <About />
      </section>
      <section id="projects" className="py-16">
        <Projects />
      </section>
    </div>
  );
};

export default App;
