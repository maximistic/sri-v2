import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from "../constants/index";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCerts, setVisibleCerts] = useState(certifications.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeModal = () => setSelectedCert(null);

  const handleNavigation = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < certifications.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const newVisibleCerts = certifications.slice(currentIndex, currentIndex + 3);
    setVisibleCerts(newVisibleCerts);
  }, [currentIndex]);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden select-none px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-12 text-center">My Certifications</h1>

      <div className="relative max-w-5xl mx-auto">
        <motion.div className="flex justify-center space-x-6">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleCerts.map((cert, index) => (
              <CertCard 
                key={cert.id} 
                cert={cert} 
                onClick={() => setSelectedCert(cert)} 
                index={index}
                direction={currentIndex > 0 ? -1 : 1}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-8 space-x-4">
          <NavButton direction="left" onClick={() => handleNavigation('left')} disabled={currentIndex === 0} />
          <NavButton direction="right" onClick={() => handleNavigation('right')} disabled={currentIndex >= certifications.length - 3} />
        </div>
      </div>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={closeModal} />
      )}
    </div>
  );
};

const CertCard = ({ cert, onClick, index, direction }) => {
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.1, // Keep the snappy enter animation
        type: "spring",
        stiffness: 1700,
        damping: 20,
      },
    },
    exit: {
      rotateX: 90, // Toppling effect: rotates around the X axis
      opacity: 0,
      transition: {
        duration: 0.4, // Adjust for a smooth, gradual toppling effect
        ease: "easeInOut",
      },
      transformOrigin: "bottom", // Fix the bottom of the card
    },
  };

  return (
    <motion.div 
      className="flex-shrink-0 w-64 sm:w-80 h-80 sm:h-96 bg-black rounded-xl overflow-hidden shadow-lg cursor-pointer border border-white transition-all duration-300" 
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      custom={direction}
      whileHover={{ scale: 1.05, rotateY: 5, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)' }}
      onClick={onClick}
    >
      <img src={cert.image} alt={cert.title} className="w-full h-40 sm:h-48 object-cover" />
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{cert.title}</h3>
        <p className="text-xs sm:text-sm text-gray-400">{cert.issuer} | {cert.date}</p>
      </div>
    </motion.div>
  );
};


const NavButton = ({ direction, onClick, disabled }) => {
  return (
    <motion.button
      className={`w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === 'left' ? (
        <ChevronLeft className="w-6 h-6 text-white" />
      ) : (
        <ChevronRight className="w-6 h-6 text-white" />
      )}
    </motion.button>
  );
};

const CertModal = ({ cert, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-black rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full m-4 border border-white"
        initial={{ scale: 0.9, opacity: 0, rotateX: -15 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        exit={{ scale: 0.9, opacity: 0, rotateX: 15 }}
      >
        <img src={cert.image} alt={cert.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-2">{cert.title}</h2>
          <p className="text-green-500 mb-4">
            Issued by {cert.issuer} | {cert.date}
          </p>
          <p className="text-gray-300 mb-6">{cert.description}</p>
          <div className="flex justify-between items-center">
            <button 
              className="bg-green-500 text-black py-2 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Certifications;