import React from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../constants/index.jsx";
import ProfilePic from "../assets/profpic.jpg";

const HeroSections = () => {
  return (
    <section 
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden"
      id="hero"
    >
      {/* Background blobs for depth */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center text-center"
      >
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           className="relative p-1 mb-8 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-500"
        >
          <img
            src={ProfilePic}
            alt={PROFILE.name}
            className="object-cover w-32 h-32 rounded-full border-4 border-slate-950 md:w-40 md:h-40"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-4 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient font-black">{PROFILE.name}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-2xl text-lg font-medium text-slate-400 md:text-xl"
        >
          {PROFILE.info} — Building the future of the web with <span className="text-white">Laravel</span> & <span className="text-white">React</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <a 
            href="#projects"
            className="px-8 py-3 font-semibold text-white transition-all rounded-full bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            Explore Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSections;
