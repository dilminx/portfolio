import React from 'react';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section className='container px-4 py-16 mx-auto' id='skills'>
      <h2 className='mb-12 text-4xl font-bold text-center'>Skills</h2>
      <div className='flex flex-wrap justify-center gap-8 p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-950'>
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full max-w-sm p-4 bg-gray-900 rounded-lg shadow-lg"
          >
            <div className='flex items-center'>
              <div className='mr-4 text-3xl'>{skill.icon}</div>
              <h3 className='text-xl font-semibold'>{skill.name}</h3>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
