import { useState, useEffect } from 'react';
import { certifications } from "../constants/index";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default to show 3 cards

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setCardsToShow(1); // Small screens
    } else if (width < 1024) {
      setCardsToShow(2); // Medium screens
    } else {
      setCardsToShow(3); // Large screens
    }
  };

  const handleNavigation = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right' && currentIndex < certifications.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden select-none px-4 py-6">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">My Certifications</h1>

      <div className="relative max-w-5xl mx-auto">
        <div className="flex justify-center space-x-4 overflow-hidden">
          {certifications.slice(currentIndex, currentIndex + cardsToShow).map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <NavButton direction="left" onClick={() => handleNavigation('left')} disabled={currentIndex === 0} />
          <NavButton direction="right" onClick={() => handleNavigation('right')} disabled={currentIndex >= certifications.length - cardsToShow} />
        </div>
      </div>
    </div>
  );
};

const CertCard = ({ cert }) => (
  <div className="flex-shrink-0 w-60 sm:w-72 h-80 bg-black rounded-xl overflow-hidden shadow-lg border border-white">
    <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
      <p className="text-xs text-gray-400">{cert.issuer} | {cert.date}</p>
    </div>
  </div>
);

const NavButton = ({ direction, onClick, disabled }) => (
  <button
    className={`w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    onClick={onClick}
    disabled={disabled}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-6 h-6 text-white" />
    ) : (
      <ChevronRight className="w-6 h-6 text-white" />
    )}
  </button>
);

export default Certifications;