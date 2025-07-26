"use client";

import React from "react";
import MarqueeItem from "./marquee-item";

interface MarqueeProps {
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ className = "" }) => {
  // Frontend & Framework logos
  const frontendLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vue/vue-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  ];

  // Backend & Database logos
  const backendLogos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  ];

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="group mb-8">
        <MarqueeItem images={frontendLogos} from="0%" to="-100%" duration={50} />
      </div>
      <div className="group">
        <MarqueeItem images={backendLogos} from="-100%" to="0%" duration={60} />
      </div>
    </div>
  );
};

export default Marquee;