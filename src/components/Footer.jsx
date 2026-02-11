import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-900">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-black tracking-tighter text-white">
              <span className="text-gradient">PASINDU</span> DILMIN
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-500 uppercase tracking-widest">
              Crafting Digital Excellence
            </p>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <a 
                href={link.href} 
                key={index} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 text-slate-400 glass rounded-xl hover:text-white hover:border-indigo-500/50 transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Pasindu Dilmin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
