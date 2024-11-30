import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white mx-16">
      <div className="container mx-3.5 flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="text-purple-800 text-2xl font-bold">
          <Link to="/">Softex</Link>
        </div>

        <button className="block md:hidden text-black" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-white absolute top-16 left-0 w-full md:relative md:top-0 md:flex md:w-auto md:space-x-4`}
        >
          <Link
            className="block text-black hover:text-purple-600 py-2 px-4 md:inline-block font-medium"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block text-black hover:text-purple-600 py-2 px-4 md:inline-block font-medium"
            to="/about"
          >
            About
          </Link>
          <Link
            className="block text-black hover:text-purple-600 py-2 px-4 md:inline-block font-medium"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="block text-black hover:text-purple-600 py-2 px-4 md:inline-block font-medium"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="block text-black hover:text-purple-600 py-2 px-4 md:inline-block font-medium"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
