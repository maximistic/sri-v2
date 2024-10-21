import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MyGlobe from "./MyGlobe";
import Button from "../Components/Button.jsx";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('srikailaash.pr@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  const cards = [
    {
      image: "assets/About/aboutG1.png",
      title: "Hey there, I am Sri!",
      description: "A Fresher, entering the Tech World with a passion for Web Development and Machine Learning, with focus on real world impact.",
      span: "xl:row-span-3",
    },
    {
      image: "assets/About/about3.jpg",
      title: "Tech Stack",
      description: "I specialize in JavaScript/TypeScript with a focus on React Js & Next Js and ML frameworks such as Tensorflow, PyTorch, Scikit Learn.",
      span: "xl:row-span-3",
    },
    {
      customContent: (
        <>
          <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
            <MyGlobe />
          </div>
          <div>
            <p className="grid-headtext">Working Across Time Zones</p>
            <p className="grid-subtext">Based in <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#FF9933] via-white to-[#138808]">INDIA</span>, working across Time Zones! </p>
            <Button name="Get in touch" isBeam containerClass="w-full mt-10"/>
          </div>
        </>
      ),
      span: "xl:col-span-1 xl:row-span-4",
    },
    {
      image: "assets/About/grid3.png",
      title: "My Passion For Coding",
      description: "With a keen eye for perfection, I am constantly seeking ways to improve my skills and stay up-to-date with the latest trends.",
      span: "xl:col-span-2 xl:row-span-3",
    },
    {
      customContent: (
        <>
          <div className="relative">
            {/* Image Hover Animation */}
            <motion.img
              src="assets/About/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              onMouseEnter={() => setHoveredIndex('last')} // Set to 'last' on hover
              onMouseLeave={() => setHoveredIndex(null)} // Reset on mouse leave
              animate={hoveredIndex === 'last' ? { scale: 1.05 } : { scale: 1 }} // Animate the image
            />
          </div>
          <div className="space-y-2">
            <p className="grid-subtext text-center">Contact Me</p> 
            <div className="copy-container" onClick={handleCopy}>
              <img src={hasCopied ? 'assets/tick.svg': 'assets/copy.svg'} alt="copy"/>
              <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white cursor-pointer">Srikailaash.pr@gmail.com</p>
            </div>
          </div>
        </>
      ),
      span: "xl:col-span-1 xl:row-span-2",
    },
  ];

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`col-span-1 ${card.span}`}
            // Only set hoveredIndex for cards that are not the last one
            onMouseEnter={() => idx !== 4 && setHoveredIndex(idx)}
            onMouseLeave={() => idx !== 4 && setHoveredIndex(null)}
          >
            <div className="grid-container relative group overflow-hidden rounded-3xl shadow-lg">
              <AnimatePresence>
                {hoveredIndex === idx && idx !== 4 && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-900/70 dark:bg-slate-800/70 block"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.1,
                      transition: { duration: 0.2, ease: "easeIn" },
                    }}
                  />
                )}
              </AnimatePresence>
              {card.customContent ? (
                card.customContent
              ) : (
                <>
                  <motion.img
                    src={card.image}
                    alt={`grid-${idx + 1}`}
                    className="w-full sm:h-[276px] h-fit object-cover transition-transform duration-300 ease-out"
                    animate={hoveredIndex === idx ? { scale: 1.05 } : { scale: 1 }}
                  />
                  <div className="p-4">
                    <p className="grid-headtext">{card.title}</p>
                    <p className="grid-subtext">{card.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;