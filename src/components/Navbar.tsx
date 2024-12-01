import React, { useState, useCallback } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }, []);

  return (
    <nav className="px-12 top-0 w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="text-purple-800 text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("hero")}
          role="button"
          aria-label="Navigate to Home"
        >
          Softex
        </div>

        <button
          className="md:hidden text-purple-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform transform duration-300"
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
          } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300`}
        >
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "projects", label: "Projects" },
            { id: "services", label: "Services" },
          ].map((item) => (
            <button
              key={item.id}
              className="block text-gray-800 hover:text-purple-600 transition duration-300 py-2 px-4 font-medium md:py-0"
              onClick={() => scrollToSection(item.id)}
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
