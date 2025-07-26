// Interfaces

interface NavLink {
  name: string;
  link: string;
}

interface SocialImage {
  name: string;
  imgPath: string;
}

interface ExperienceLink {
  label: string;
  url: string;
}

interface ExperienceItem {
  id: string;
  dateRange: string;
  dateLabel: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  positions?: string[];
  technologies: string[];
  links?: ExperienceLink[];
}

interface ExpItem {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}
// Data

const navLinks: NavLink[] = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const socialImgs: SocialImage[] = [
  { name: "insta", imgPath: "/images/insta.png" },
  { name: "fb", imgPath: "/images/fb.png" },
  { name: "x", imgPath: "/images/x.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" },
];

const experiences: ExperienceItem[] = [
  {
    id: 'klaviyo',
    dateRange: '2024 — Present',
    dateLabel: '2024 to Present',
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Klaviyo',
    companyUrl: 'https://www.klaviyo.com',
    description: 'Build and maintain critical components used to construct Klaviyo\'s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook']
  },
  {
    id: 'upstatement',
    dateRange: '2018 — 2024',
    dateLabel: '2018 to 2024',
    title: 'Lead Engineer',
    company: 'Upstatement',
    companyUrl: 'https://upstatement.com',
    positions: ['Senior Engineer', 'Engineer'],
    description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.',
    technologies: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'React Native', 'WordPress', 'Contentful', 'Node.js', 'PHP']
  },
  {
    id: 'apple',
    dateRange: 'July — Dec 2017',
    dateLabel: 'July to December 2017',
    title: 'UI Engineer Co-op',
    company: 'Apple',
    companyUrl: 'https://www.apple.com/apple-music/',
    description: 'Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music\'s embeddable web player widget for in-browser user authorization and full song playback.',
    technologies: ['Ember', 'SCSS', 'JavaScript', 'MusicKit.js'],
    links: [
      { label: 'MusicKit.js', url: 'https://developer.apple.com/documentation/musickitjs' },
      { label: '9to5Mac', url: 'https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/' },
      { label: 'The Verge', url: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming' }
    ]
  },
  {
    id: 'scout',
    dateRange: '2016 — 2017',
    dateLabel: '2016 to 2017',
    title: 'Developer',
    company: 'Scout Studio',
    companyUrl: 'https://scout.camd.northeastern.edu/',
    description: 'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.',
    technologies: ['Jekyll', 'SCSS', 'JavaScript', 'WordPress']
  },
  {
    id: 'starry',
    dateRange: 'July — Dec 2016',
    dateLabel: 'July to December 2016',
    title: 'Software Engineer Co-op',
    company: 'Starry',
    companyUrl: 'https://starry.com/',
    description: 'Worked with the UI team to engineer and improve major features of Starry\'s customer-facing Android app.',
    technologies: ['Cordova', 'Backbone', 'JavaScript', 'CSS'],
    links: [
      { label: 'Android App', url: 'https://play.google.com/store/apps/details?id=com.starry.management&hl=en_US&gl=US' },
      { label: 'ScreenTime 2.0', url: 'https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents' }
    ]
  },
  {
    id: 'mullenlowe',
    dateRange: 'July — Dec 2015',
    dateLabel: 'July to December 2015',
    title: 'Creative Technologist Co-op',
    company: 'MullenLowe U.S.',
    companyUrl: 'https://us.mullenlowe.com/',
    description: 'Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
];

const expCards : ExpItem[] = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/lady1.webp",
    logoPath: "/images/lady1.webp",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/lady1.webp",
    logoPath: "/images/lady1.webp",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/lady1.webp",
    logoPath: "/images/lady1.webp",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

// Export all

export {
  socialImgs,
  navLinks,
  experiences,
  expCards,
};
