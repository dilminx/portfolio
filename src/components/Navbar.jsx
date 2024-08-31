import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleClick = (e, href) => {
    if (href === cv) {
      return;
    }

    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-lg">
      {/* Desktop menu */}
      <div className="items-center justify-between hidden max-w-6xl px-4 py-2 mx-auto lg:flex">
        <a href="#">
          <h2 className="text-2xl font-bold text-yellow-100">PASINDU DILMIN</h2>
        </a>
        <ul className="flex gap-6">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block text-xl font-semibold text-white transition duration-300 hover:text-yellow-500 ${
                  item.label === "Download Resume"
                    ? "bg-yellow-400 text-black  py-2 px-4 rounded"
                    : ""
                }`}
                download={item.label === "Resume"}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className="p-4 lg:hidden">
        <div className="flex items-center justify-between">
          <a href="#">
            <h1 className="text-2xl">PASINDU DILMIN</h1>
          </a>
          <button
            className="text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <ul className="flex flex-col gap-4 mt-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`block text-xl font-semibold text-white transition duration-300 hover:text-yellow-500 ${
                    item.label === "Download Resume"
                      ? "bg-yellow-400 text-black  hover:text-red-600 py-2 px-4 rounded"
                      : ""
                  }`}
                  download={item.label === "Resume"}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
