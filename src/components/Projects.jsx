import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'
import Card from './Card'

const Projects = () => {
  return (
    <section className="py-20 relative" id='projects'>
      {/* Background accent */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-sky-300 rounded-full filter blur-[150px] opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-4 mb-12"
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50"></div>
        <h2 className='text-4xl font-bold text-center text-slate-900 md:text-5xl uppercase tracking-tighter'>
          Projects
        </h2>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50"></div>
      </motion.div>

      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        {PROJECTS.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 text-2xl font-semibold text-center text-slate-600 md:text-3xl tracking-wide"
            >
              {group.category}
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {},
              }}
              className='flex flex-wrap justify-center gap-6'
            >
              {group.projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 30 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    image={project.image}
                    title={project.title}
                    subtitle={project.subtitle}
                    link={project.href}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects