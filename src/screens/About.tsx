import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import TechStack from "../components/TechStack";
import profileImage from "../assets/images/profileImage.jpg";
import aboutBackground from "../assets/images/Typography effect .jpg";

function About() {
  return (
    <React.Fragment>
      <section id="about" className="py-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          About Me
        </h2>
        <p className="text-lg md:text-xl mt-4">
          Hi, I'm M.Umar Malik, a passionate developer focused on building
          robust back-end solutions and mobile applications.
        </p>
        <div className="flex flex-col lg:flex-row items-center mt-12 gap-8">
          <div className="w-1/2 lg:w-1/3 flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-full align-middle justify-center shadow-lg"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I'm a full-stack developer with a focus on back-end technologies
              such as Node.js and mobile app development using React Native. I
              love solving complex problems and building scalable solutions.
              <br />
              <br />
              With a passion for clean, efficient code, I always strive to make
              a positive impact in every project I work on. I enjoy
              collaborating with teams and clients to deliver high-quality
              software that meets user needs.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center">
          <TechStack />
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Let's Work Together
          </h3>
          <p className="text-lg text-gray-600 mt-4">
            If you have a project in mind or just want to say hi, feel free to
            reach out!
          </p>
          <Link to="/Contact">
            <button className="mt-8 px-6 py-3 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default About;
