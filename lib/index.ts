// Interfaces

interface ExperienceLink {
  label: string;
  url: string;
}

interface ProjectItem {
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
  logoPath: string;
  title: string;
  date: string;
  responsibilities: string[];
}

interface Certificate {
  id: number;
  title: string;
  organization: string;
  date: string;
  image: string;
  description: string;
}

// Data Arrays

const projects: ProjectItem[] = [
  {
    id: 'klaviyo',
    dateRange: '2024 — Present',
    dateLabel: '2024 to Present',
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Klaviyo',
    companyUrl: 'https://www.klaviyo.com',
    description: 'coming up',
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
    description: 'coming up',
    technologies: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React']
  },
  {
    id: 'apple',
    dateRange: 'July — Dec 2017',
    dateLabel: 'July to December 2017',
    title: 'UI Engineer Co-op',
    company: 'Apple',
    companyUrl: 'https://www.apple.com/apple-music/',
    description: 'coming up',
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
    description: 'coming up',
    technologies: ['Jekyll', 'SCSS', 'JavaScript', 'WordPress']
  },
  {
    id: 'starry',
    dateRange: 'July — Dec 2016',
    dateLabel: 'July to December 2016',
    title: 'Software Engineer Co-op',
    company: 'Starry',
    companyUrl: 'https://starry.com/',
    description: 'coming up',
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
    description: 'coming up',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
];

const expCards: ExpItem[] = [
  {
    review: "sri brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    logoPath: "/images/lady1.webp",
    title: "B.Tech in Computer Science",
    date: "September 2021 - May 2025",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "sri's contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
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
    review: "sri's work on Appwrite's mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
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

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    organization: "Tech Academy",
    date: "2024",
    image: "/certificates/cert1.jpg",
    description: "Complete web development certification covering React, Node.js, and databases"
  },
  {
    id: 2,
    title: "Cloud Architecture",
    organization: "AWS",
    date: "2023",
    image: "/certificates/cert2.jpg",
    description: "Advanced cloud computing and architecture principles"
  },
  {
    id: 3,
    title: "UI/UX Design",
    organization: "Design Institute",
    date: "2023",
    image: "/certificates/cert3.jpg",
    description: "User interface and experience design fundamentals"
  },
  {
    id: 4,
    title: "Machine Learning",
    organization: "Data Science Pro",
    date: "2024",
    image: "/certificates/cert4.jpg",
    description: "Machine learning algorithms and implementation"
  },
  {
    id: 5,
    title: "Cybersecurity",
    organization: "Security First",
    date: "2023",
    image: "/certificates/cert5.jpg",
    description: "Information security and ethical hacking principles"
  },
  {
    id: 6,
    title: "Mobile Development",
    organization: "Mobile Masters",
    date: "2024",
    image: "/certificates/cert6.jpg",
    description: "iOS and Android application development"
  }
];

// Exports

export {
  projects,
  expCards,
  certificates,
};
