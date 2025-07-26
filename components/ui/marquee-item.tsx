"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MarqueeItemProps {
  images: string[];
  from: string;
  to: string;
  duration?: number;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ 
  images, 
  from, 
  to, 
  duration = 60 
}) => {
  return (
    <div className="flex marquee-gradient group-hover:pause">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ 
          duration: duration, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-shrink-0 group-hover:duration-[120s]"
      >
        {images.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center justify-center h-16 w-20 sm:h-20 sm:w-24 md:h-24 md:w-28 lg:h-28 lg:w-32 mr-8 sm:mr-12 md:mr-16 lg:mr-20 flex-shrink-0"
          >
            <Image
              src={image}
              alt={`Skill ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ 
          duration: duration, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-shrink-0 group-hover:duration-[120s]"
      >
        {images.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center justify-center h-16 w-20 sm:h-20 sm:w-24 md:h-24 md:w-28 lg:h-28 lg:w-32 mr-8 sm:mr-12 md:mr-16 lg:mr-20 flex-shrink-0"
          >
            <Image
              src={image}
              alt={`Skill ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;