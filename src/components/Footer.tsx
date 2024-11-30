import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-purple-600 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center sm:space-x-12">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Let's connect
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              Shoot me an email to chat about my work or just like to say hey 👋
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row justify-center space-x-6 mb-6 sm:mb-0">
            <a
              href="mailto:umarmalik.cs711@gmail.com"
              className="hover:opacity-75"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://github.com/MuhammadUmarMalik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-umar-malik786/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center text-white hover:text-purple-200 p-2 transition duration-75"
          >
            <span className="mr-2 text-black">Back to top</span>
            <FaArrowUp size={20} />
          </button>
        </div>
      </div>

      <p className="mt-8 text-sm text-purple-400 text-center">
        © Designed and coded by M.Umar Malik
      </p>
    </footer>
  );
}

export default Footer;
