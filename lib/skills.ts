import { IconType } from "react-icons";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer } from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Framer Motion", icon: SiFramer },
];
