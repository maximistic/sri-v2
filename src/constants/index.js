import html from '../Assets/tech/html.png';
import css from '../Assets/tech/css.png';
import javascript from '../Assets/tech/javascript.png';
import typescript from '../Assets/tech/typescript.png';
import reactjs from '../Assets/tech/reactjs.png';
import redux from '../Assets/tech/redux.png';
import tailwind from '../Assets/tech/tailwind.png';
import nodejs from '../Assets/tech/nodejs.png';
import mongodb from '../Assets/tech/mongodb.png';
import git from '../Assets/tech/git.png';
import figma from '../Assets/tech/figma.png';
import docker from '../Assets/tech/docker.png';
import threejs from '../Assets/tech/threejs.svg';

export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: 'home',
    },
    {
      id: 2,
      name: 'About',
      href: 'about',
    },
    {
      id: 3,
      name: 'Work',
      href: 'work',
    },
    {
      id: 4,
      name: 'Contact',
      href: 'contact',
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: 'https://unsplash.com/photos/the-letter-a-is-made-up-of-bright-lines-3wXrEK8h_pw',
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: 'https://unsplash.com/photos/the-letter-a-is-made-up-of-bright-lines-3wXrEK8h_pw',
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: 'https://unsplash.com/photos/the-letter-a-is-made-up-of-bright-lines-3wXrEK8h_pw',
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: 'https://unsplash.com/photos/the-letter-a-is-made-up-of-bright-lines-3wXrEK8h_pw',
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  export {experiences, technologies};