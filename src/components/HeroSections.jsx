import React from "react";
import { PROFILE } from "../constants/index.jsx";
import ProfilePic from "../assets/profpic.jpg";

const HeroSections = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen font-bold text-white lg:pt-4"
      id="hero"
    >
      <img
        src={ProfilePic}
        alt="Profile Picture"
        className="absolute inset-0 object-cover w-full h-full pt-4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-gray-800 from-80%"></div>
      <div className="relative max-w-3xl px-4 text-center pt-44">
        <h1 className="text-5xl font-semibold tracking-wide uppercase md:text-7xl">
          {PROFILE.name}
        </h1>
        <p className="pt-2 text-lg font-semibold md:text-xl">
          {PROFILE.info}
        </p>
      </div>
    </div>
  );
};

export default HeroSections;
