import React from "react";
import TechStack from "./TechStack";

function About() {
  return (
    <React.Fragment>
      <section
        id="about"
        className="px-6 md:flex-col sm:flex-col  sm:px-16 md:px-20 lg:px-16 xl:px-16 py-16 bg-purple-600 flex flex-col items-center"
      >
        <h2 className="text-xl sm:text-4xl md:text-3xl lg:text-6xl font-bold text-white text-center md:text-left">
          About Me
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-4 sm:gap-16 mt-8 w-full">
          {/* Left Section */}
          <div className="text-center sm:text-left justify-center">
            <p className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
              1+
            </p>
            <p className="w-full sm:w-64 text-2xl sm:text-3xl font-bold text-white mt-2 sm:mt-4">
              year of experience
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full sm:w-96 md:w-80 lg:w-96">
            <p className="text-white text-sm sm:text-base md:text-lg mt-2 sm:mt-4">
              I'm Muhammad Umar Malik, a passionate back-end and mobile
              developer.
            </p>

            {/* Details */}
            <div className="space-y-4 mt-4">
              <div className="flex justify-between">
                <span className="text-white text-sm sm:text-lg font-semibold">
                  Name:
                </span>
                <span className="text-white text-sm sm:text-lg font-semibold">
                  M. Umar Malik
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-sm sm:text-lg font-semibold">
                  Email:
                </span>
                <span className="text-white text-sm sm:text-lg font-semibold">
                  umarmalik.cs711@gmail.com
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-sm sm:text-lg font-semibold">
                  Location:
                </span>
                <span className="text-white text-sm sm:text-lg font-semibold">
                  Layyah, Pakistan
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-sm sm:text-lg font-semibold">
                  Phone:
                </span>
                <span className="text-white text-sm sm:text-lg font-semibold">
                  +923171600808
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white text-sm sm:text-lg font-semibold">
                  Designation:
                </span>
                <span className="text-white text-sm sm:text-lg font-semibold">
                  Full Stack Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TechStack />
    </React.Fragment>
  );
}

export default About;
