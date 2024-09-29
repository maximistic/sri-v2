import { FloatingDock } from "../Components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const Footer = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Terms & Conditions and Privacy Policy */}
      <div className="text-white-500 flex gap-2">
        <p className="hover:text-white transition-colors hover:cursor-pointer">
          Terms & Conditions
        </p>
        <p>|</p>
        <p className="hover:text-white transition-colors hover:cursor-pointer">
          Privacy Policy
        </p>
      </div>

      {/* FloatingDock (replacing social icons) */}
      <div className="flex gap-3">
        <FloatingDock
          items={links}
          desktopClassName="h-10 gap-3" // Adjusting to the previous size
          mobileClassName="translate-y-0" // Remove demo translation
        />
      </div>

      {/* Footer Copyright */}
      <p className="text-white-500 flex gap-2 items-center hover:text-white transition-colors ">
        © 2024 Sri. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
