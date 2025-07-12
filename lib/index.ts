// Interfaces

interface NavLink {
  name: string;
  link: string;
}

interface Testimonial {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
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

// Data

const navLinks: NavLink[] = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const testimonials: Testimonial[] = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/lady1.jpg",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/man1.jpg",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/man2.jpg",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/man3.jpg",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/lady2.jpg",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/lady3.jpg",
  },
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

// Export all

export {
  testimonials,
  socialImgs,
  navLinks,
  experiences,
};
