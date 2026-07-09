import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT } from "../constants/index";

const About = () => {
  return (
    <section className="py-20 relative" id="about">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400 rounded-full filter blur-[150px] opacity-20"></div>

      <div className="max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50"></div>
          <h2 className="text-4xl font-bold text-center text-slate-900 md:text-5xl uppercase tracking-tighter">
            About Me
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50"></div>
        </motion.div>

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
            className="p-8 rounded-3xl glass-card-glow gradient-border"
          >
            <p className="max-w-4xl mx-auto text-lg leading-relaxed text-slate-600 md:text-xl lg:text-2xl text-center">
              {ABOUT.text2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
