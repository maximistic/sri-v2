import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { certifications } from "../constants/index";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const containerRef = useRef(null);

  const closeModal = () => setSelectedCert(null);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden select-none">
      <h1 className="text-4xl font-bold text-center py-8">My Certifications</h1>

      <motion.div 
        ref={containerRef} 
        className="flex pb-10 space-x-8 px-8 cursor-grab active:cursor-grabbing" 
        drag="x" 
        dragConstraints={{ left: -1000, right: 0 }}
      >
        {certifications.map((cert, index) => (
          <CertCard 
            key={cert.id} 
            cert={cert} 
            index={index} 
            onClick={() => setSelectedCert(cert)} 
          />
        ))}
      </motion.div>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={closeModal} />
      )}
    </div>
  );
};

const CertCard = ({ cert, onClick }) => {
  return (
    <motion.div 
      className="flex-shrink-0 w-80 h-96 bg-black rounded-xl overflow-hidden shadow-lg cursor-pointer border border-white transition-all duration-200" 
      whileHover={{ scale: 1.08, rotateY: 5 }} 
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
      whileTap={{ scale: 0.95 }}
      exit={{
        opacity: 0,
        rotateY: 90,
        x: 300,
        transition: { duration: 0.6 },
      }}
    >
      <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
        <p className="text-sm text-gray-400">{cert.issuer} | {cert.date}</p>
      </div>
      <motion.div
        className="absolute inset-0 ring-0 rounded-xl pointer-events-none"
        whileHover={{ 
          boxShadow: '0 0 0 2px rgb(34 197 94)',
          transition: { duration: 0.2 }
        }}
      />
    </motion.div>
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
        animate={{ 
          scale: 1, 
          opacity: 1, 
          rotateX: 0,
          transition: { type: "spring", stiffness: 300, damping: 30 }
        }}
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