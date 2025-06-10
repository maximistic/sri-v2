import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Lenis from 'lenis';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis({ 
      lerp: 0.1,
      smooth: true,
      direction: 'vertical'
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative w-full overflow-hidden"
    >
      <HeroSection scrollYProgress={scrollYProgress} />
      <AboutSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
};

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const HeroSection: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const translateY = useTransform(scrollYProgress, [0, 0.3], ['0vh', '50vh']);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.section
      style={{ translateY, scale, opacity }}
      className="sticky top-0 w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-indigo-200/20 to-purple-200/20 rounded-full blur-2xl"
          animate={{ 
            y: [0, -50, 0],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main heading with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-slate-900 leading-[0.9] tracking-tight"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                Creative
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
              >
                Developer
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with precision, creativity, and cutting-edge technology. 
            Transforming ideas into elegant solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16"
          >
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg font-medium group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-6 text-lg font-medium group transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white hover:border-slate-300 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-slate-400"
          >
            <span className="text-sm mb-2 tracking-wider">SCROLL</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const AboutSection: React.FC = () => {
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

const TechStackSection: React.FC = () => {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Next.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Version Control" },
    { name: "Figma", category: "Design" },
    { name: "Framer Motion", category: "Animation" }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-8">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {tech.name}
              </h3>
              <p className="text-sm text-slate-500">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-slate-900 flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
            Let&#39;s Work Together
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed">
            Ready to bring your ideas to life? Let&#39;s create something amazing together.
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get In Touch
            <Mail className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;