import React from "react";
import CProgramming from "../assets/images/C Programming.png";
import CPlus from "../assets/images/C++.png";
import CSS3Icon from "../assets/images/CSS3.png";
import HTMLIcon from "../assets/images/Html 5.png";
import JavaScriptIcon from "../assets/images/JavaScript.png";
import Express from "../assets/images/Express Js.png";
import Node from "../assets/images/Nodejs.png";
import ReactNative from "../assets/images/React Native.png";
import Github from "../assets/images/GitHub.png";
import Git from "../assets/images/Git.png";

function TechStack() {
  return (
    <React.Fragment>
      <section
        id="tech-stack"
        className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600">
            My Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-6">
            Technologies I've been working with recently
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6 justify-items-center">
          <img
            src={CPlus}
            alt="C++"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
          <img
            src={CProgramming}
            alt="C Programming"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
          <img
            src={HTMLIcon}
            alt="HTML5"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
          <img
            src={CSS3Icon}
            alt="CSS3"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
          <img
            src={JavaScriptIcon}
            alt="JavaScript"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
          <img
            src={Node}
            alt="Node.js"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
          <img
            src={Express}
            alt="Express.js"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
          <img
            src={Github}
            alt="GitHub"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
          <img
            src={Git}
            alt="Git"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
          <img
            src={ReactNative}
            alt="React Native"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform hover:scale-110"
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default TechStack;
