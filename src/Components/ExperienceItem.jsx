import { motion } from 'framer-motion';

const ExperienceItem = ({ experience, index, inView }) => (
  <motion.div
    className="mb-16 flex flex-col md:flex-row items-start"
    whileHover={{ scale: 1.05, rotateY: 15, rotateX: 5 }} // 3D hover effect
    initial={{ opacity: 0, x: -50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: index * 0.2 }}
  >
    <motion.div className="w-full md:w-1/3 mb-4 md:mb-0 pr-4">
      <h3 className="text-xl font-semibold text-white">{experience.pos}</h3>
      <p className="text-sm text-neutral-400">{experience.duration}</p>
    </motion.div>

    <motion.div
      className="grid-container bg-neutral-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div>
        <h6 className="mb-2 font-semibold text-white">{experience.comp}</h6>
        <p className="mb-4 text-neutral-400">{experience.title}</p>
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-sm font-medium text-green-500 bg-neutral-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);
