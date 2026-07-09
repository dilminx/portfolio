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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm" : "bg-transparent py-5"
      }`}>
      {/* Desktop menu */}
      <div className="container flex items-center justify-between px-6 mx-auto max-w-7xl">
        <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="group">
          <h2 className="text-2xl font-black tracking-tighter text-slate-900">
            <span className="text-gradient">PASINDU</span> DILMIN
          </h2>
        </a>
        <ul className="hidden gap-8 lg:flex items-center">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                target={item.label === "Download Resume" ? "_blank" : "_self"}
                rel={item.label === "Download Resume" ? "noopener noreferrer" : ""}
                className={`text-sm font-semibold uppercase tracking-widest text-slate-600 transition-all hover:text-blue-600 ${item.label === "Download Resume"
                    ? "px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white hover:shadow-lg hover:shadow-blue-500/20"
                    : "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-sky-400 after:transition-all hover:after:w-full"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="p-2.5 text-slate-700 lg:hidden glass rounded-xl border-slate-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-2xl font-bold uppercase tracking-widest ${item.label === "Download Resume"
                      ? "px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white"
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
