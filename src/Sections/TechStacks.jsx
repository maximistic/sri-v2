import { useState, useRef, useEffect } from 'react';
import { techStack } from '../constants';

const TechBall = ({ name, logo, index }) => {
  const ballRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [momentum, setMomentum] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Add a smooth floating animation
    const randomOffset = Math.random() * Math.PI * 2;
    const floatAnimation = setInterval(() => {
      if (!isDragging) {
        const time = Date.now() / 1000;
        setPosition((prev) => ({
          x: Math.sin(time + randomOffset) * 10,
          y: Math.cos(time + randomOffset * 2) * 10,
        }));
      }
    }, 16);

    return () => clearInterval(floatAnimation);
  }, [isDragging]);

  useEffect(() => {
    // Apply momentum after dragging
    if (!isDragging && (momentum.x !== 0 || momentum.y !== 0)) {
      const momentumDecay = setInterval(() => {
        setMomentum((prev) => ({
          x: prev.x * 0.95,
          y: prev.y * 0.95,
        }));
        setRotation((prev) => ({
          x: prev.x + momentum.x,
          y: prev.y + momentum.y,
        }));
      }, 16);

      return () => clearInterval(momentumDecay);
    }
  }, [isDragging, momentum]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;

      setRotation((prev) => ({
        x: prev.x + deltaY * 0.5,
        y: prev.y + deltaX * 0.5,
      }));

      setMomentum({
        x: deltaX * 0.1,
        y: deltaY * 0.1,
      });

      dragStart.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={ballRef}
      className="relative group cursor-grab active:cursor-grabbing"
      style={{
        perspective: '1000px',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className={`w-20 h-20 rounded-full bg-black 
          transition-transform duration-300 ease-out
          border border-gray-500/30 hover:border-gray-300
          shadow-lg hover:shadow-white/20
          flex items-center justify-center
          transform-gpu preserve-3d group-hover:scale-110
        `}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <img
          src={logo}
          alt={name}
          className="w-12 h-12 object-contain"
          draggable="false"
        />

        {/* 3D reflection effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-white/10" />

        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-full bg-white/5 blur-sm" />
      </div>

      {/* Tech name */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-gray-300 text-sm font-medium whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
};

const InteractiveTechStack = () => {
  return (
    <div className="min-h-[400px] bg-black p-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-12 max-w-4xl">
        {techStack.map((tech, index) => (
          <TechBall key={tech.name} name={tech.name} logo={tech.logo} index={index} />
        ))}
      </div>
    </div>
  );
};

export default InteractiveTechStack;
