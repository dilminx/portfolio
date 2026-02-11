import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { NAVIGATION_LINKS } from "../constants";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleClick = (e, href) => {
    if (href.startsWith("http")) return;

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-3" : "bg-transparent py-5"
    }`}>
      {/* Desktop menu */}
      <div className="container flex items-center justify-between px-6 mx-auto max-w-7xl">
        <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="group">
          <h2 className="text-2xl font-black tracking-tighter text-white">
            <span className="text-gradient">PASINDU</span> DILMIN
          </h2>
        </a>
        <ul className="hidden gap-8 lg:flex">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                target={item.label === "Download Resume" ? "_blank" : "_self"}
                rel={item.label === "Download Resume" ? "noopener noreferrer" : ""}
                className={`text-sm font-semibold uppercase tracking-widest text-slate-300 transition-all hover:text-white ${
                  item.label === "Download Resume"
                    ? "px-5 py-2.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20"
                    : "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="p-2 text-white lg:hidden glass rounded-lg"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-2xl font-bold uppercase tracking-widest text-white ${
                    item.label === "Download Resume"
                      ? "px-8 py-4 rounded-full bg-indigo-600"
                      : "text-gradient"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
