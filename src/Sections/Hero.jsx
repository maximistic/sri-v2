
import {Cover} from "../Components/ui/cover";
const Hero = () => {
  console.log("Rendering Hero component"); // Log to ensure the Hero is rendering

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hey There <span className="waving-hand">👋</span> Sri Here
        </p>
          <p className="hero_tag text-gray_gradient">
             <Cover className="cursor-none"> Breaking and Building Stuff</Cover>
          </p>
      </div>
    </section>
  );
};

export default Hero;
