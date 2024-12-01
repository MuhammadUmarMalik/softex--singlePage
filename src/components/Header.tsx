import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
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
      <section id="services" className="py-16">
        <Services />
      </section>
    </div>
  );
};

export default App;
