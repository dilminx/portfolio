import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ image, title, subtitle, link }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="m-4"
    >
      <a
        href={link}
        className="group relative block max-w-sm overflow-hidden rounded-2xl glass-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-80 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-wider">{title}</h2>
            <p className="mt-2 text-sm font-medium text-slate-300 line-clamp-2">{subtitle}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default Card;
