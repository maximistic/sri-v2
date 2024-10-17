import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const certifications = [
  {
    id: 1,
    title: 'React Developer Certification',
    image: '/api/placeholder/300/200',
    issuer: 'React University',
    date: 'May 2023',
    description: 'Advanced concepts in React development including hooks, context, and performance optimization.'
  },
  {
    id: 2,
    title: 'JavaScript Mastery Certificate',
    image: '/api/placeholder/300/200',
    issuer: 'JavaScript Institute',
    date: 'January 2023',
    description: 'Comprehensive understanding of JavaScript including ES6+, async programming, and functional concepts.'
  },
  {
    id: 3,
    title: 'Tailwind CSS Expert',
    image: '/api/placeholder/300/200',
    issuer: 'CSS Wizards Academy',
    date: 'March 2023',
    description: 'Mastery in building responsive and customized user interfaces using Tailwind CSS.'
  },
  {
    id: 4,
    title: 'Web Accessibility Specialist',
    image: '/api/placeholder/300/200',
    issuer: 'A11Y Foundation',
    date: 'June 2023',
    description: 'Expertise in creating inclusive web experiences and implementing WCAG guidelines.'
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const containerRef = useRef(null);
  const { scrollX } = useScroll({ container: containerRef });

  const closeModal = () => setSelectedCert(null);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <h1 className="text-4xl font-bold text-center py-8">My Certifications</h1>
      
      <div 
        ref={containerRef} 
        className="flex overflow-x-scroll pb-10 hide-scrollbar"
        style={{ overflowY: 'hidden' }}
      >
        <div className="flex space-x-8 px-8">
          {certifications.map((cert, index) => (
            <CertCard 
              key={cert.id} 
              cert={cert} 
              index={index} 
              scrollX={scrollX} 
              onClick={() => setSelectedCert(cert)} 
            />
          ))}
        </div>
      </div>

      {selectedCert && (
        <CertModal cert={selectedCert} onClose={closeModal} />
      )}
    </div>
  );
};

const CertCard = ({ cert, index, scrollX, onClick }) => {
  const x = useTransform(scrollX, [index * 400, (index + 1) * 400], [0, -100]);
  const scale = useTransform(scrollX, [index * 400, (index + 1) * 400], [1, 0.8]);
  const rotate = useTransform(scrollX, [index * 400, (index + 1) * 400], [0, -10]);

  return (
    <motion.div 
      className="flex-shrink-0 w-80 h-96 bg-black rounded-xl overflow-hidden shadow-lg cursor-pointer"
      style={{ x, scale, rotate, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      onClick={onClick}
    >
      <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
        <p className="text-sm text-gray-400">{cert.issuer} | {cert.date}</p>
      </div>
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
        className="bg-black rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full m-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
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