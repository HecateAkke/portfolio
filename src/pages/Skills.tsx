import {
  Code2,
  Server,
  Database,
  GitBranch,
  Cloud,
  Shield,
  Monitor,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

const Skills = () => {
  const skillSets = [
    {
      icon: Code2,
      title: "Frontend",
      color: "text-blue-600",
      skills: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux & React Query",
        "HTML5 & CSS3",
        "JavaScript ES6+",
        "Sass & Less",
      ],
    },
    {
      icon: Server,
      title: "Backend",
      color: "text-emerald-600",
      skills: [
        "Node.js & Express",
        "Python & Django",
        "Java Spring Boot",
        "GraphQL",
        "Ruby on Rails",
        "PHP & Laravel",
        "Go / Gin",
      ],
    },
    {
      icon: Database,
      title: "Database & DevOps",
      color: "text-purple-600",
      skills: [
        "PostgreSQL & MongoDB",
        "Docker & Kubernetes",
        "AWS & GCP",
        "CI/CD Pipelines",
        "Redis & Memcached",
        "Elasticsearch",
      ],
    },
    {
      icon: GitBranch,
      title: "Version Control",
      color: "text-orange-600",
      skills: [
        "Git & GitHub",
        "GitLab & Bitbucket",
        "Version Control Best Practices",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      color: "text-teal-600",
      skills: ["AWS EC2 & S3", "Azure Services", "Google Cloud Functions"],
    },
    {
      icon: Shield,
      title: "Security",
      color: "text-red-600",
      skills: [
        "OWASP Best Practices",
        "JWT & OAuth",
        "Data Encryption & Security",
      ],
    },
    {
      icon: Monitor,
      title: "Testing & QA",
      color: "text-indigo-600",
      skills: [
        "Jest & Mocha",
        "Cypress & Selenium",
        "Unit & Integration Testing",
      ],
    },
    {
      icon: FileText,
      title: "Documentation",
      color: "text-gray-600",
      skills: [
        "Markdown & AsciiDoc",
        "API Documentation (Swagger)",
        "Technical Writing Best Practices",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedPage className="min-h-[calc(100vh-4rem)] py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-white">
          My Skills
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skillSets.map(({ icon: Icon, title, color, skills }) => (
            <motion.div
              key={title}
              className="bg-gray-800 rounded-lg shadow-xl p-6 backdrop-blur-sm hover:transform hover:-translate-y-2 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white text-center">
                {title}
              </h3>
              <ul className="space-y-2 text-gray-300 text-center">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="transition-colors hover:text-gray-100"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Skills;
