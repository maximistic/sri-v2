"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "@/lib";
import GlowCard from "@/app/components/GlowCard";
import Image from "next/image";
import ShimmerButton from "./ui/ShimmerButton";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    const timeline = gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
            overwrite: true,
          });
        },
      },
    });

    gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });

    return () => {
      timeline.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      id="experience"
      className="flex justify-center md:mt-40 mt-20 px-5 xl:px-0 py-16"
    >
      <div className="w-full max-w-screen-xl">
        <div className="flex flex-col items-center gap-5">
            <ShimmerButton>My Career Overview</ShimmerButton>
          <h1 className="font-semibold md:text-5xl text-3xl text-center">
            Professional Work Experience
          </h1>
        </div>

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div
                key={card.title}
                className="exp-card-wrapper flex flex-col xl:flex-row gap-10 timeline-card"
              >
                <div className="xl:w-2/6 w-full">
                  <GlowCard card={card} index={index}>
                    <div>
                      <Image
                        src={card.imgPath}
                        alt="exp-img"
                        width={500}
                        height={300}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6 w-full">
                  <div className="flex items-start relative z-20">
                    <div className="timeline-wrapper relative me-6">
                      <div className="timeline w-1 bg-white h-full origin-bottom" />
                      <div className="gradient-line absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500" />
                    </div>

                    <div className="expText flex flex-col gap-5">
                      <div className="timeline-logo mb-4">
                        <Image
                          src={card.logoPath}
                          alt="logo"
                          width={56}
                          height={56}
                          className="w-14 h-14 object-contain"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-2xl md:text-3xl">
                          {card.title}
                        </h1>
                        <p className="my-3 text-sm text-white/60">
                          🗓️ {card.date}
                        </p>
                        <p className="text-[#839CB5] italic">Responsibilities</p>
                        <ul className="list-disc ms-5 mt-4 flex flex-col gap-3 text-white/80 text-base">
                          {card.responsibilities.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
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

export default Experience;
