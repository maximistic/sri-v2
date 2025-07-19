'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  logo: string;
  category: string;
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  credential?: string;
}

const skills: Skill[] = [
  { name: 'TypeScript', level: 90, logo: '🔷', category: 'Frontend' },
  { name: 'React', level: 95, logo: '⚛️', category: 'Frontend' },
  { name: 'Next.js', level: 88, logo: '▲', category: 'Frontend' },
  { name: 'Node.js', level: 85, logo: '🟢', category: 'Backend' },
  { name: 'Python', level: 80, logo: '🐍', category: 'Backend' },
  { name: 'AWS', level: 75, logo: '☁️', category: 'Cloud' },
  { name: 'Docker', level: 70, logo: '🐳', category: 'DevOps' },
  { name: 'PostgreSQL', level: 82, logo: '🐘', category: 'Database' },
];

const certificates: Certificate[] = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    logo: '☁️',
    credential: 'AWS-SA-2024-001'
  },
  {
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    logo: '⚛️',
    credential: 'META-REACT-2023'
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: '2023',
    logo: '🌐',
    credential: 'GCP-PRO-2023-456'
  },
  {
    title: 'Certified Kubernetes Admin',
    issuer: 'CNCF',
    date: '2024',
    logo: '⚙️',
    credential: 'CKA-2024-789'
  }
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover="hover"
      className="relative group cursor-pointer"
    >
      <motion.div
        variants={{
          hover: {
            y: -6,
            scale: 1.02,
            boxShadow: "0 10px 20px -3px rgba(0,0,0,0.08)",
            transition: { duration: 0.4, type: "spring", stiffness: 200 }
          }
        }}
        className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 transition-all duration-300"
      >
        {/* Top Info */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            variants={{
              hover: { scale: 1.1 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center space-x-3"
          >
            <div className="text-3xl">{skill.logo}</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.category}</p>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hover: { rotate: 180 },
            }}
            transition={{ duration: 0.4 }}
            className="text-gray-400"
          >
            ⚡
          </motion.div>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Proficiency</span>
            <span className="text-sm font-medium text-gray-900">
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              className="h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


const CertificateCard = ({
  certificate,
  index,
}: {
  certificate: Certificate;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover="hover"
      className="relative group cursor-pointer"
    >
      <motion.div
        variants={{
          hover: {
            scale: 1.02,
            y: -6,
            boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
            transition: { duration: 0.4, ease: "easeOut" },
          },
        }}
        className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6"
      >
        <div className="flex items-start space-x-4">
          {/* Logo */}
          <motion.div
            variants={{
              hover: { scale: 1.1 },
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl">
              {certificate.logo}
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-lg mb-1 truncate">
              {certificate.title}
            </h3>
            <p className="text-gray-600 mb-2">{certificate.issuer}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{certificate.date}</span>
              {certificate.credential && (
                <motion.div
                  variants={{
                    hover: { opacity: 1, y: -2 },
                  }}
                  initial={{ opacity: 0.6, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs text-gray-400 font-mono"
                >
                  #{certificate.credential}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <motion.div
          variants={{
            hover: { scaleX: 1 },
          }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-700 to-gray-900 rounded-b-2xl origin-left"
        />
      </motion.div>
    </motion.div>
  );
};


const SkillsCertificates = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of technical proficiencies and professional certifications
            that define my expertise in modern software development.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <div className="h-1 flex-1 bg-gradient-to-r from-gray-300 to-transparent rounded"></div>
            <h2 className="px-6 text-2xl font-semibold text-gray-800">Technical Skills</h2>
            <div className="h-1 flex-1 bg-gradient-to-l from-gray-300 to-transparent rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center mb-8">
            <div className="h-1 flex-1 bg-gradient-to-r from-gray-300 to-transparent rounded"></div>
            <h2 className="px-6 text-2xl font-semibold text-gray-800">Certifications</h2>
            <div className="h-1 flex-1 bg-gradient-to-l from-gray-300 to-transparent rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <CertificateCard key={certificate.title} certificate={certificate} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-500 text-lg">
            Continuously learning and evolving with the latest technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCertificates;