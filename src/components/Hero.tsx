import React from "react";
import hero from "../assets/images/hero-image.png";

function Hero() {
  return (
    <React.Fragment>
      <section
        id="home"
        className="flex flex-col lg:flex-row items-center justify-between mx-4 md:mx-6 lg:mx-10 xl:mx-16 px-4 py-8 space-y-8 lg:space-y-0"
      >
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
            Hi, I'm M.Umar Malik
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-600 mt-4">
            Back-end & Mobile Developer
          </h2>
          <p className="text-gray-500 mt-6 md:mt-8 lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur. Ligula nunc non commodo
            scelerisque gravida.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/muhammad-umar-malik786/"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clipRule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </a>
            <a
              href="https://github.com/MuhammadUmarMalik"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="px-4 py-2 font-bold text-white bg-gray-700 rounded hover:bg-purple-500"
            >
              GET INTO TOUCH
            </a>
            <a
              href="#"
              className="px-4 py-2 font-bold text-white bg-gray-700 rounded hover:bg-purple-500"
            >
              RESUME
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-end lg:w-1/2">
          <img
            src={hero}
            alt="Profile"
            className="w-full md:w-2/3 lg:w-full xl:w-3/5"
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Hero;
