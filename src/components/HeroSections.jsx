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
      {/* Animated background orbs */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-float"></div>
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-sky-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-float-delayed"></div>
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-float-slow"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.2) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center text-center"
      >
        {/* Profile picture with gradient ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-1 mb-8 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-500 glow-blue"
        >
          <img
            src={ProfilePic}
            alt={PROFILE.name}
            className="object-cover w-32 h-32 border-4 rounded-full border-white md:w-40 md:h-40 shadow-sm"
          />
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 px-4 py-2 rounded-full glass border border-blue-200"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-700">
            ✦ Available for Projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-4 text-5xl font-bold tracking-tight text-slate-900 md:text-7xl lg:text-8xl"
        >
          <span className="font-black text-gradient">{PROFILE.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-2xl text-lg font-medium text-slate-600 md:text-xl"
        >
          {PROFILE.info} — Building the future of the web with{" "}
          <span className="text-blue-600 font-semibold">Laravel</span> &{" "}
          <span className="text-sky-500 font-semibold">Next.js</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 mt-10"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 font-semibold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 animate-pulse-glow"
          >
            Explore Projects
          </a>
          <a
            href="#contactform"
            className="px-8 py-3.5 font-semibold text-slate-700 transition-all rounded-full glass border-slate-300 hover:border-blue-400 hover:text-blue-600"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-blue-400 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSections;
