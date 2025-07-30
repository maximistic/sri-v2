// Interfaces

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectItem {
  id: string;
  dateRange: string;
  dateLabel: string;
  title: string;
  domain: string;
  projectUrl: string;
  description: string;
  positions?: string[];
  technologies: string[];
  links?: ProjectLink[];
}

interface ExpItem {
  review: string;
  logoPath: string;
  reviewer: string;
  title: string;
  institute: string;
  engType?: string[];
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
    id: 'project 1',
    dateRange: '2024 — Present',
    dateLabel: '2024 to Present',
    title: 'project 1',
    domain: 'domain',
    projectUrl: '/not-found',
    description: 'coming up',
    technologies: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React'],
    links: [
      { label: 'Source Code', url: 'https://github.com/maximistic' }
    ]
  },
  {
    id: 'project 2',
    dateRange: '2018 — 2024',
    dateLabel: '2018 to 2024',
    title: 'project 2',
    domain: 'domain',
    projectUrl: '/not-found',
    description: 'coming up',
    technologies: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React'],
    links: [
      { label: 'Source Code', url: 'https://github.com/maximistic' }
    ]
  },
  {
    id: 'project 3',
    dateRange: 'July — Dec 2017',
    dateLabel: 'July to December 2017',
    title: 'project 3',
    domain: 'domain',
    projectUrl: '/not-found',
    description: 'coming up',
    technologies: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React'],
    links: [
      { label: 'Source Code', url: 'https://github.com/maximistic' }
    ]
  },
  {
    id: 'project 4',
    dateRange: '2016 — 2017',
    dateLabel: '2016 to 2017',
    title: 'project 4',
    domain: 'domain',
    projectUrl: '/not-found',
    description: 'coming up',
    technologies: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React'],
    links: [
      { label: 'Source Code', url: 'https://github.com/maximistic' }
    ]
  },
  {
    id: 'project 5',
    dateRange: 'July — Dec 2016',
    dateLabel: 'July to December 2016',
    title: 'project 5',
    domain: 'domain',
    projectUrl: '/not-found',
    description: 'coming up',
    technologies: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React'],
    links: [
      { label: 'Source Code', url: 'https://github.com/maximistic' }
    ]
  },
  {
    id: 'project 6',
    dateRange: 'July — Dec 2015',
    dateLabel: 'July to December 2015',
    title: 'project 6',
    domain: 'domain',
    projectUrl: '/not-found',
    description: 'coming up',
    technologies: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React'],
    links: [
      { label: 'Source Code', url: 'https://github.com/maximistic' }
    ]
  }
];

const expCards: ExpItem[] = [
  {
    review: "sri brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    logoPath: "/images/avv.webp",
    reviewer: "/images/lady3.webp",
    title: "B.Tech in Computer Science",
    institute: "Amrita Vishwa Vidyapeetham",
    engType: ['Full-Time', 'On-Site'],
    date: "September 2021 - May 2025",
    responsibilities: [
      "Completed key coursework in data structures, algorithms, and system design.",
      "Built academic projects in teams, applying real-world problem-solving.",
      "Explored new technologies beyond the syllabus through self-initiated learning."
    ],

  },
  {
    review: "coming up",
    logoPath: "/images/lady1.webp",
    reviewer: "/images/lady3.webp",
    title: "coming up",
    institute: "Tech University",
    engType: ['Full-Time', 'On-Site'],
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend."
    ],
  },
  {
    review: "coming up",
    logoPath: "/images/lady1.webp",
    reviewer: "/images/lady3.webp",
    title: "coming up",
    institute: "Tech University",
    engType: ['Full-Time', 'On-Site'],
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing."
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
