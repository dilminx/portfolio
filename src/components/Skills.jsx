import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section className='py-20 relative' id='skills'>
      {/* Background accent */}
      <div className="absolute right-0 top-1/3 w-72 h-72 bg-indigo-300 rounded-full filter blur-[150px] opacity-30"></div>

      <div className='max-w-7xl px-4 mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50"></div>
          <h2 className='text-4xl font-bold text-center text-slate-900 md:text-5xl uppercase tracking-tighter'>
            Expertise
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.06 } },
            hidden: {},
          }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                visible: { opacity: 1, scale: 1, y: 0 },
                hidden: { opacity: 0, scale: 0.9, y: 20 }
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="relative flex items-center gap-4 p-6 glass-card-glow rounded-2xl group cursor-default gradient-border"
            >
              <div className='text-4xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10'>
                {skill.icon}
              </div>
              <div className="flex flex-col relative z-10">
                <h3 className='text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-all'>
                  {skill.name}
                </h3>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {skill.experience}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
