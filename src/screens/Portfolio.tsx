import React from "react";
// import Projects from "../components/Projects";
import ProjectShowcase from "../components/ProjectShowcase";

function Portfolio() {
  return (
    <React.Fragment>
      <section id="contact" className="py-16 px-4 md:px-8 lg:px-16">
        {/* Header Section */}
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            My Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4"></p>
        </div>
        <ProjectShowcase />
      </section>
    </React.Fragment>
  );
}

export default Portfolio;
