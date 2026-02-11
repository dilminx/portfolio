import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section className='py-20' id='skills'>
      <div className='max-w-7xl px-4 mx-auto'>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mb-16 text-4xl font-bold text-center text-white md:text-5xl uppercase tracking-tighter'
        >
          Expertise
        </motion.h2>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
            hidden: {},
          }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 }
              }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 0.5)' }}
              className="flex items-center gap-4 p-6 glass-card rounded-2xl group cursor-default"
            >
              <div className='text-4xl transition-transform duration-300 group-hover:rotate-12'>{skill.icon}</div>
              <div className="flex flex-col">
                <h3 className='text-lg font-bold text-white'>{skill.name}</h3>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{skill.experience}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
