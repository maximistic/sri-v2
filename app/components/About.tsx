'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-8 leading-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            I&#39;m a passionate developer who loves creating beautiful, functional, and user-centered digital experiences. 
            With expertise in modern web technologies and a keen eye for design, I bring ideas to life through code.
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Every project is an opportunity to push boundaries, solve complex problems, and create something meaningful 
            that makes a difference in people&#39;s lives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;