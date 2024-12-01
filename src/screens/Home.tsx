import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="bg-white w-auto justify-center align-middle">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
