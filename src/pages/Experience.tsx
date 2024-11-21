import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Datics AI",
      date: "09/2022 - 11/2024",
      description: `
			Developed cutting-edge web applications for finance and healthcare clients using React, Next.js, TypeScript, and Tailwind CSS.
			Implemented state management with Redux and React Query for efficient data handling.
			Led design and implementation of key modules, focusing on high-quality, scalable solutions.
			Mentored junior developers, enhancing team productivity and code quality.
			Utilized Node.js and Express for backend services, with PostgreSQL for database management.
			Ensured adherence to OWASP best practices for security and implemented JWT for authentication.
		`,
    },
    {
      title: "Full-Stack Engineer",
      company: "Advyn",
      date: "05/2020 - 08/2022",
      description: `
			Developed an innovative e-commerce platform using Next.js, TypeScript, and Tailwind CSS.
			Built reusable components and optimized performance for a seamless user experience.
			Collaborated with cross-functional teams to deliver features on time.
			Worked with PHP and Laravel for backend development, utilizing MySQL for data storage.
			Implemented CI/CD pipelines for efficient deployment and version control using Git and GitHub.
		`,
    },
    {
      title: "Frontend Engineer",
      company: "Uniqcli",
      date: "10/2018 - 05/2020",
      description: `
			Led development of an interactive data visualization platform using Vue.js and D3.js.
			Created intuitive user interfaces to enhance data analysis and presentation.
			Ensured integration of advanced visualization features for a seamless user experience.
			Applied best practices in responsive design using HTML5, CSS3, and Sass.
			Conducted unit and integration testing using Jest and Cypress to ensure software quality.
		`,
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <h4 className="text-lg font-medium text-gray-400 mb-1">
                {exp.company}
              </h4>
              <p className="text-gray-500 mb-4">{exp.date}</p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
