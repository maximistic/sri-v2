import MyGlobe from "./MyGlobe";
import Button from "../Components/Button.jsx";
// import SpotlightButton from "../Components/SpotlightButton.jsx";
import { useState } from "react";
const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('srikailaash.pr@gmail.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 3000);
    }
  return (
    <section className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

                    <div>
                        <p className="grid-headtext">Hey there, I am Sri!</p>
                        <p className="grid-subtext">A Fresher, entering the Tech World with a passion for Web Development and Machine Learning, with focus on real world impact.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container"> 
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain"/>

                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialize in JavaScript/TypeScript with a foucs on React Js & Next Js and ML frameworks such as Tensorflow, PyTorch, Scikit Learn.</p>
                    </div>
                </div>
            </div>

            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container"> 
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <MyGlobe />
                    </div>

                    <div>
                        <p className="grid-headtext">Working Across Time Zones</p>
                        <p className="grid-subtext">Based in <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#FF9933] via-white to-[#138808]">INDIA</span>, working across Time Zones! </p>
                        <Button name="Get in touch" isBeam containerClass="w-full mt-10"/>
                        {/* <SpotlightButton /> */}
                    </div>
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

                    <div>
                        <p className="grid-headtext">
                            My Passion For Coding
                        </p>
                        <p className="grid-subtext">
                            With a keen eye for perfection, I am constantly seeking ways to improve my skills and stay up-to-date with the latest trends.
                        </p>
                    </div>
                </div>
            </div>

            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>

                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact Me</p> 
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg': 'assets/copy.svg'} alt="copy"/>
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">Srikailaash.pr@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;