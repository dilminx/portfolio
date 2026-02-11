import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT } from "../constants/index";

const About = () => {
  return (
    <section className="py-20" id="about">
      <div className="max-w-6xl px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center text-white md:text-5xl uppercase tracking-tighter"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col items-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-bold text-gradient text-center md:text-5xl lg:text-6xl"
          >
            {ABOUT.text1}
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl glass-card"
          >
            <p className="max-w-4xl mx-auto text-lg leading-relaxed text-slate-300 md:text-xl lg:text-2xl text-center">
              {ABOUT.text2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
