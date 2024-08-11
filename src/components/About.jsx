import React from 'react';
import { ABOUT } from "../constants/index";

const About = () => {
  return (
    <section className="container px-4 py-16 mx-auto" id="about">
      <div className="text-center">
        <h2 className="mb-4 text-4xl font-semibold">
          ABOUT
        </h2>
        <h3 className="mb-6 text-4xl font-bold uppercase md:text-6xl lg:text-8xl">
          {ABOUT.text1}
        </h3>
        <p className="max-w-4xl mx-auto text-lg leading-loose md:text-xl">
          {ABOUT.text2}
        </p>
      </div>
    </section>
  );
}

export default About;
