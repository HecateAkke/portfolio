import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import { User, Code, Briefcase, Server } from "lucide-react";

const About = () => {
  return (
    <AnimatedPage className="min-h-[calc(100vh-4rem)] py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-center text-white">
          About Me
        </h2>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.p
            className="text-gray-300 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            With 6 years of experience in full-stack development, I specialize
            in building scalable applications and solving complex technical
            challenges. My passion lies in creating efficient, maintainable code
            and exploring new technologies to deliver innovative solutions.
          </motion.p>
        </motion.div>

        <h3 className="text-3xl font-semibold mt-12 mb-6 text-center text-white">
          Key Skills
        </h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {[
            {
              icon: <Code className="w-10 h-10 text-blue-500" />,
              title: "Frontend",
            },
            {
              icon: <Server className="w-10 h-10 text-emerald-500" />,
              title: "Backend",
            },
            {
              icon: <Briefcase className="w-10 h-10 text-purple-500" />,
              title: "DevOps",
            },
            {
              icon: <User className="w-10 h-10 text-teal-500" />,
              title: "Team Player",
            },
          ].map(({ icon, title }) => (
            <motion.div
              key={title}
              className="bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {icon}
              <h4 className="text-xl font-semibold mt-4 text-white">{title}</h4>
            </motion.div>
          ))}
        </motion.div>

        <h3 className="text-3xl font-semibold mt-12 mb-6 text-center text-white">
          Projects
        </h3>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.p className="text-gray-300 leading-relaxed mb-6">
            I have worked on various projects, including e-commerce platforms,
            content management systems, and real-time applications. My goal is
            to always deliver high-quality products that meet user needs.
          </motion.p>
        </motion.div>

        <h3 className="text-3xl font-semibold mt-12 mb-6 text-center text-white">
          Personal Interests
        </h3>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.p className="text-gray-300 leading-relaxed mb-6">
            In my free time, I enjoy hiking, photography, and contributing to
            open-source projects. I believe in continuous learning and often
            explore new frameworks and languages.
          </motion.p>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default About;
