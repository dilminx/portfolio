import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ image, title, subtitle, link }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="m-4"
    >
      <a
        href={link}
        className="group relative block w-80 overflow-hidden rounded-2xl gradient-border shadow-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient overlay - light theme uses fading white from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent opacity-100 mix-blend-normal"></div>

          {/* Hover glow overlay */}
          <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-500"></div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
              {title}
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-500 line-clamp-2 group-hover:text-slate-600 transition-colors">
              {subtitle}
            </p>

            {/* View project indicator */}
            <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-blue-600">
              <span className="text-xs font-semibold uppercase tracking-widest">View Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Card;
