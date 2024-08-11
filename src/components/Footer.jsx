import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className="mt-4 mb-8">
      <div className="flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white">PASINDU DILMIN</h2>
              <div className="w-12 h-3 mb-10 bg-yellow-300"></div>
      </div>

      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a href={link.href} key={index} target="_blank">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
