'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { expCards } from '@/lib';
import { MapPin, Calendar, Building2, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const timelineProgress = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-20 md:py-32 bg-neutral-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-neutral-900 text-white rounded-full text-sm mb-4">
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Experience & Testimonials
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A timeline of my career growth with feedback from colleagues and managers
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-neutral-300 hidden lg:block">
            <motion.div className="w-full bg-neutral-900 origin-top" style={{ height: timelineProgress }} />
          </div>

          <div className="absolute left-8 w-px h-full bg-neutral-300 lg:hidden">
            <motion.div className="w-full bg-neutral-900 origin-top" style={{ height: timelineProgress }} />
          </div>

          <div className="space-y-16 md:space-y-24">
            {expCards.map((card, index) => (
              <div key={card.title + index} className="relative">
                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neutral-900 rounded-full border-4 border-neutral-50 z-10"></div>

                  <div className="grid grid-cols-2 gap-16 items-center">
                    {/* Review / Testimonial */}
                    <div className="timeline-card bg-white p-8 rounded-2xl border border-neutral-200">
                      <Quote className="w-8 h-8 text-neutral-400 mb-4" />
                      <blockquote className="text-neutral-700 text-lg leading-relaxed mb-6">
                        "{card.review}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">C</span>
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-900">Colleague</div>
                          <div className="text-sm text-neutral-500">Team Member</div>
                        </div>
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div className="timeline-card bg-white p-8 rounded-2xl border border-neutral-200">
                      <div className="flex items-start gap-4 mb-6">
                        <Image
                          src={card.logoPath}
                          alt={`${card.title} logo`}
                          width={50}
                          height={50}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-neutral-900 mb-1">{card.title}</h3>
                          <div className="flex items-center gap-2 text-neutral-600 mb-2">
                            <Building2 size={16} />
                            <span className="font-medium">Company</span>
                          </div>
                          <div className="flex flex-col gap-1 text-sm text-neutral-500">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{card.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span>Remote</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Image
                        src={card.imgPath}
                        alt={`${card.title} experience`}
                        width={400}
                        height={200}
                        className="rounded-xl object-cover w-full h-32 mb-6"
                      />

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {card.responsibilities.slice(0, 3).map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-neutral-600">
                                <span className="text-neutral-900 mt-1">•</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex gap-6">
                  <div className="w-4 h-4 bg-neutral-900 rounded-full border-4 border-neutral-50 flex-shrink-0"></div>

                  <div className="flex-1 space-y-6">
                    {/* Experience Card */}
                    <div className="timeline-card bg-white p-6 rounded-2xl border border-neutral-200">
                      <div className="flex items-start gap-3 mb-4">
                        <Image
                          src={card.logoPath}
                          alt={`${card.title} logo`}
                          width={40}
                          height={40}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-neutral-900 mb-1">{card.title}</h3>
                          <div className="flex items-center gap-2 text-neutral-600 mb-2">
                            <Building2 size={14} />
                            <span className="text-sm font-medium">Company</span>
                          </div>
                          <div className="flex flex-col gap-1 text-xs text-neutral-500">
                            <div className="flex items-center gap-1">
                              <Calendar size={12} />
                              <span>{card.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={12} />
                              <span>Remote</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Image
                        src={card.imgPath}
                        alt={`${card.title} experience`}
                        width={400}
                        height={150}
                        className="rounded-xl object-cover w-full h-24 mb-4"
                      />

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2 text-sm">Key Responsibilities</h4>
                          <ul className="space-y-1">
                            {card.responsibilities.slice(0, 2).map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-neutral-600">
                                <span className="text-neutral-900 mt-1">•</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Review / Testimonial */}
                    <div className="timeline-card bg-neutral-900 p-6 rounded-2xl text-white">
                      <Quote className="w-6 h-6 text-neutral-400 mb-3" />
                      <blockquote className="text-sm leading-relaxed mb-4">
                        "{card.review}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-neutral-900 font-semibold text-xs">C</span>
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Colleague</div>
                          <div className="text-xs text-neutral-400">Team Member</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
