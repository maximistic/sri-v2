import { useState, useRef, useEffect } from 'react';
import { techStack } from '../constants';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const TechBall = ({ name, logo, index }) => {
  const ballRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const floatX = useSpring(useMotionValue(0), springConfig);
  const floatY = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const randomOffset = Math.random() * Math.PI * 2;
    const floatAnimation = () => {
      const time = Date.now() / 2000;
      floatX.set(Math.sin(time + randomOffset) * 20);
      floatY.set(Math.cos(time + randomOffset * 2) * 20);
    };

    const intervalId = setInterval(floatAnimation, 16);
    return () => clearInterval(intervalId);
  }, [floatX, floatY]);

  const handleMouseMove = (event) => {
    const rect = ballRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    rotateX.set(mouseY * -0.1);
    rotateY.set(mouseX * 0.1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ballRef}
      className="relative group cursor-pointer"
      style={{ x: floatX, y: floatY }}
      whileHover={{ scale: 1.2, zIndex: 10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 
                   flex items-center justify-center shadow-lg"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          boxShadow: isHovered ? "0 0 20px rgba(255,255,255,0.3)" : "none",
        }}
      >
        <motion.img
          src={logo}
          alt={name}
          className="w-16 h-16 object-contain"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            filter: isHovered ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))" : "none",
          }}
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-gray-300 text-sm font-medium bg-gray-800 px-2 py-1 rounded-md">
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
};

const InteractiveTechStack = () => {
  return (
    <motion.div
      className="min-h-[600px] bg-black p-12 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold text-white mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Technologies I Work With
      </motion.h2>

      <motion.p
        className="text-gray-400 mt-0 mb-12 text-center max-w-2xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        These are just a few of the technologies I'm proficient in. I'm always eager to learn and adapt to new tools and frameworks to deliver the best solutions.
      </motion.p>

      <motion.div
        className="grid grid-cols-3 md:grid-cols-5 gap-16 max-w-5xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        {techStack.map((tech, index) => (
          <TechBall key={tech.name} name={tech.name} logo={tech.logo} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};
export default InteractiveTechStack;