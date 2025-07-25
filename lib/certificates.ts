export interface Certificate {
  title: string;
  issuer: string;
  year: number;
}

export const certificates: Certificate[] = [
  { title: "Frontend Developer", issuer: "freeCodeCamp", year: 2024 },
  { title: "TypeScript Mastery", issuer: "Udemy", year: 2023 },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: 2022 },
  { title: "Modern React with Redux", issuer: "Udemy", year: 2023 },
  { title: "UI/UX for Developers", issuer: "Coursera", year: 2024 },
  { title: "JavaScript Algorithms", issuer: "freeCodeCamp", year: 2023 },
];
