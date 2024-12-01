// import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Services from "../components/Services";

function Home() {
  return (
    <div className="bg-white w-auto justify-center align-middle">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
