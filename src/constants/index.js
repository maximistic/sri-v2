import html from '/assets/tech/html.png';
import css from '/assets/tech/css.png';
import javascript from '/assets/tech/javascript.png';
import typescript from '/assets/tech/typescript.png';
import reactjs from '/assets/tech/reactjs.png';
import redux from '/assets/tech/redux.png';
import tailwind from '/assets/tech/tailwind.png';
import nodejs from '/assets/tech/nodejs.png';
import mongodb from '/assets/tech/mongodb.png';
import git from '/assets/tech/git.png';
import figma from '/assets/tech/figma.png';
import docker from '/assets/tech/docker.png';
import threejs from '/assets/tech/threejs.svg';

import projectLogo1 from '/assets/project-logo1.png';
import projectLogo2 from '/assets/project-logo2.png';
import projectLogo3 from '/assets/project-logo3.png';
import projectLogo4 from '/assets/project-logo4.png';
import projectLogo5 from '/assets/project-logo5.png';

import spotlight1 from '/assets/spotlight1.png';
import spotlight2 from '/assets/spotlight2.png';
import spotlight3 from '/assets/spotlight3.png';
import spotlight4 from '/assets/spotlight4.png';
import spotlight5 from '/assets/spotlight5.png';


export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#',
  },
  {
    id: 2,
    name: 'About',
    href: '#',
  },
  {
    id: 3,
    name: 'Work',
    href: '#',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#',
  },
  {
    id: 5,
    name: 'Certifications',
    href: '#',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#',
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
    title: "Content",
    company_name: "Content",
    icon: projectLogo1,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Content",
      "Content",
      "Content",
      "Content",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Content",
    icon: projectLogo2,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Content",
      "Content",
      "Content",
      "Content",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Content",
    icon: projectLogo3,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Content",
      "Content",
      "Content",
      "Content",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Content",
    icon: projectLogo4,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Content",
      "Content",
      "Content",
      "Content",
    ],
  },
];

export const myProjects = [
  {
    title: 'Trendlens - an AI-powered Stock market Analyst',
    desc: 'Trendlens is my take on stock market analysis. It is created to educate people on financial literacy and help them make informed investment decisions. The app is built with React.js, Tailwind CSS, and Framer Motion.',
    subdesc:
      'Built as a unique SAAS app with Next.js 14, Tailwind CSS, TypeScript and Framer Motion , Trendlens is your financial buddy to keep your financial performance in check.',
    href: 'https://github.com/maximistic/Trendlens',
    texture: '/textures/project/project1.mp4',
    logo: projectLogo1, 
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: spotlight1, 
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
  {
    title: 'Stock Screener',
    desc: 'Updating soon...',
    subdesc:
      'Updating soon...',
    href: 'https://github.com/maximistic/stock-screener',
    texture: '/textures/project/project2.mp4',
    logo: projectLogo2,  
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: spotlight2,  
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
  {
    title: 'Customer Portal',
    desc: 'Updating soon...',
    subdesc:
      'Updating soon...',
    href: 'https://github.com/maximistic/customer-portal/tree/main/hanuven-customer',
    texture: '/textures/project/project3.mp4',
    logo: projectLogo3,  
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: spotlight3,  
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
  {
    title: 'Updating soon...',
    desc: 'Updating soon...',
    subdesc:
      'Updating soon...',
    href: '',
    texture: '/textures/project/project4.mp4',
    logo: projectLogo4,  
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: spotlight4,  
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
  {
    title: 'Updating soon...',
    desc: 'Updating soon...',
    subdesc:
      'Updating soon...',
    href: '',
    texture: '/textures/project/project5.mp4',
    logo: projectLogo5,  
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: spotlight5,  
    tags: [
      { id: 1, name: 'React.js', path: 'assets/tech/reactjs.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tech/tailwind.png' },
      { id: 3, name: 'TypeScript', path: 'assets/tech/typescript.png' },
      { id: 4, name: 'Framer Motion', path: 'assets/tech/nodejs.png' },
    ],
  },
];

const certifications = [
  {
    id: 1,
    title: 'Introduction to Artificial Intelligence',
    image: 'assets/certificates/AI.png',
    issuer: 'Infosys Springboard',
    date: 'September 2023',
    description: 'Advanced concepts in React development including hooks, context, and performance optimization.'
  },
  {
    id: 2,
    title: 'Introduction to Deep Learning',
    image: 'assets/certificates/DeepLearning.png',
    issuer: 'Infosys Springboard',
    date: 'September 2023',
    description: 'Comprehensive understanding of JavaScript including ES6+, async programming, and functional concepts.'
  },
  {
    id: 3,
    title: 'The Fundamentals of Digital Marketing',
    image: 'assets/certificates/DigitalMarketing.png',
    issuer: 'Google Digital Unlocked',
    date: 'May 2023',
    description: 'Mastery in building responsive and customized user interfaces using Tailwind CSS.'
  },
  {
    id: 4,
    title: 'Introduction to Natural Language Processing',
    image: 'assets/certificates/NLP.png',
    issuer: 'Infosys Springboard',
    date: 'September 2023',
    description: 'Expertise in creating inclusive web experiences and implementing WCAG guidelines.'
  },
  {
    id: 5,
    title: 'Natural Language Processing with Attention Models',
    image: 'assets/certificates/NLP_attention.png',
    issuer: 'DeepLearning.AI',
    date: 'August 2024',
    description: 'Expertise in creating inclusive web experiences and implementing WCAG guidelines.'
  },
];

const techStack = [
  { name: 'ReactJS', logo: 'assets/tech/reactjs.png' },
  { name: 'NodeJS', logo: 'assets/tech/nodejs.png' },
  { name: 'Tailwind', logo: 'assets/tech/tailwind.png' },
  { name: 'TypeScript', logo: 'assets/tech/typescript.png' },
  { name: 'JavaScript', logo: 'assets/tech/javascript.png' },
  { name: 'HTML', logo: 'assets/tech/html.png' },
  { name: 'ThreeJS', logo: 'assets/tech/threejs.svg' },
  { name: 'MongoDB', logo: 'assets/tech/mongodb.png' }
];

export {experiences, technologies, certifications, techStack};