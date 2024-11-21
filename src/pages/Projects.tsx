import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "OMS for Award-Winning Embroidery Shop",
      description:
        "ASP.NET, C# (.NET Framework), Database, HTML/CSS, JavaScript, MVC, AJAX, Bootstrap, jQuery, Knockout.js, Metro UI, Web Apps",
      demoLink: "http://www.emeraldcityemb.com/",
      image: "/emeraldcityemb.png", // Replace with actual image URLs
    },
    {
      id: 2,
      title: "Online CAD & Order Management Solution",
      description:
        "JavaScript, Python, React, Redux, Bootstrap, Axios, Grommet, JSON Web Token, Immutable.js, PyJWT, MySQL, Web Apps",
      demoLink: "http://www.factory.app/",
      image: "/factory.png",
    },
    {
      id: 3,
      title: "Marketplace for Care Workers",
      description: "Laravel, PHP, Wordpress, Stripe",
      demoLink: "http://holm.care/",
      image: "/holm.png",
    },
    {
      id: 4,
      title: "Sneaker Drop Marketplace",
      description:
        "Android OS, Database, Design, iOS, Java, Mobile Development, Node.js, React, Vue.js, Web Apps",
      demoLink: "http://www.thesneakercrush.com/",
      image: "/sneaker.png",
    },
    {
      id: 5,
      title: "Helping to Fight for Public Health",
      description:
        "Android OS, Database, Design, iOS, Java, Mobile Development, Node.js, React, Vue.js, Web Apps",
      demoLink: "http://www.vitralogy.com/",
      image: "/vitralogy.jpg",
    },
    {
      id: 6,
      title: "Web Platform for Conducting Online Lessons",
      description:
        "JavaScript, Vue.js, Core.js, Google Cloud Functions + Firebase, OpenTok",
      demoLink: "http://online.learnlink.no/",
      image: "/learnlink.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedPage className="min-h-[calc(100vh-4rem)] py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
