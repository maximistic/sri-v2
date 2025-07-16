'use client';

import Image from 'next/image';
import { testimonials } from '@/lib';
import GlowCard from '@/components/ui/GlowCard';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="flex justify-center items-center px-5 md:px-10 md:mt-40 mt-20 border-b-4 border-green-800">
      <div className="w-full h-full md:px-10 px-5">
        <div className="flex flex-col items-center gap-5">
            <div className="py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap">
                <p>Customer feedback highlights</p>
            </div>
            <div>
                <h1 className="font-semibold md:text-5xl text-3xl text-center">
                    What People Say About Me?
                </h1>
            </div>
        </div>
        
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={testimonial.imgPath}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover size-20"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;