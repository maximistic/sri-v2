import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { workExperiences } from '../constants';

const ExperienceItem = ({ experience, index, inView }) => (
  <motion.div 
    className="mb-16 flex flex-col md:flex-row items-start"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <motion.div 
      className="w-full md:w-1/3 mb-4 md:mb-0 pr-4"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
    >
      <motion.h3 
        className="text-xl font-semibold text-white"
        whileHover={{ scale: 1.05, originX: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {experience.pos}
      </motion.h3>
      <p className="text-sm text-neutral-400 mt-1">{experience.duration}</p>
    </motion.div>
    
    <motion.div 
      className="w-full md:w-2/3 bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-6">
        <motion.h6 
          className="mb-2 font-semibold text-white"
          whileHover={{ scale: 1.05, originX: 0 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {experience.comp}
        </motion.h6>
        <p className="mb-4 text-neutral-400">{experience.title}</p>
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-2 py-1 text-sm font-medium text-green-500 bg-neutral-700 rounded-full"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20 border-b border-neutral-900">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="mb-16 text-center text-4xl text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education and Experience
        </motion.h1>
        <div ref={ref}>
          {workExperiences.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;