import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'
import Card from './Card'

const Projects = () => {
  return (
    <section className="py-20" id='projects'>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='mb-12 text-4xl font-bold text-center text-white md:text-5xl uppercase tracking-tighter'
      >
        Projects
      </motion.h2>
      <div className='max-w-7xl mx-auto px-4'>
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
          {PROJECTS.map((project, index) => (
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
    </section>
  )
}

export default Projects