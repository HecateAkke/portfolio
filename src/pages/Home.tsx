import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import AnimatedText from "../components/AnimatedText";
import { useState } from "react";

const Home = () => {
  const [tooltips, setTooltips] = useState({}); // Change to an object

  const handleCopy = (label: string, text: string) => {
    navigator.clipboard.writeText(text);
    setTooltips((prev) => ({ ...prev, [label]: "Copied to clipboard" })); // Set tooltip for specific label
    setTimeout(() => {
      setTooltips((prev) => ({ ...prev, [label]: "" })); // Clear tooltip for specific label after 2 seconds
    }, 700);
  };

  return (
    <AnimatedPage className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Jamel Nobles
            </motion.h1>
            <AnimatedText
              text="Full Stack Developer & Software Architect"
              className="text-2xl text-gray-300 block mb-8"
              delay={0.2}
            />
            <motion.div
              className="flex flex-col items-start md:items-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                // { label: "Email", value: "phonglifeng@gmail.com" },
                { label: "Phone number", value: "+1 (509) 643 4455" },
                { label: "Telegram ID", value: "@soundsilo" },
                { label: "Discord ID", value: "soundsilo" },
                { label: "Skype", value: "live:.cid.24ce09e9424da694" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center space-x-2 cursor-pointer relative"
                  onClick={() => handleCopy(label, value)}
                >
                  <span className="text-gray-300 hover:text-blue-400 transition-colors">
                    {label}: {value}
                  </span>
                  {tooltips[label] && ( // Check for specific tooltip
                    <span className="absolute left-0 -top-6 bg-gray-700 text-white text-sm rounded px-2 py-1">
                      {tooltips[label]}
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="w-full h-[500px] relative overflow-hidden rounded-[50px] shadow-lg">
            <img
              src="/main.png"
              alt="Your Name"
              className="w-full h-full object-cover rounded-[50px] transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Home;
