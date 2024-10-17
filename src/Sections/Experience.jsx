import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants/index";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1A1A1A",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "12px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", // Increased shadow for depth
      }}
      contentArrowStyle={{ borderRight: "7px solid #1A1A1A" }}
      date={
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400"
        >
          {experience.date}
        </motion.div>
      }
      iconStyle={{
        background: "#1A1A1A",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain filter brightness-90'
          />
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }} // Initial scale for 3D effect
        whileInView={{ opacity: 1, y: 0, scale: 1 }} // Scale to normal on view
        whileHover={{ scale: 1.05, rotateY: 5 }} // Rotate on hover for 3D effect
        transition={{ duration: 0.4 }}
        className="p-4 rounded-lg transition-all duration-300 hover:ring-2 hover:ring-green-500/50 hover:shadow-lg cursor-pointer" // Change shadow on hover
      >
        <h3 className='text-white text-[24px] font-bold group-hover:text-green-500 transition-colors duration-300'>
          {experience.title}
        </h3>
        <p className='text-gray-400 text-[16px] font-semibold mt-1'>
          {experience.company_name}
        </p>

        <motion.ul 
          className='mt-5 list-disc ml-5 space-y-2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {experience.points.map((point, index) => (
            <motion.li
              key={`experience-point-${index}`}
              className='text-gray-300 text-[14px] pl-1 tracking-wider'
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 5 }} // Slightly move on hover
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section className="relative z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <p className='text-gray-400 text-[16px] uppercase tracking-wider text-center'>
          What's up with me so far
        </p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mt-2'>
          LIFE & WORK
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
