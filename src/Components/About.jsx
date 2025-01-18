import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible((prevState) => !prevState);
  };

  return (
    <motion.section
      id="about"
      className="flex flex-col min-h-screen bg-gray-900 md:flex-row justify-between items-center gap-8 p-8 md:p-20 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Image Section */}
      <motion.div
        className="relative flex-shrink-0 text-center mb-8 md:mb-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="./src/assets/img/hero-banner.jpg"
          alt="Hariprasath - About Section"
          className="w-[360px] max-w-xs md:max-w-md h-[450px] rounded-lg border-2 border-cyan-400 shadow-sm object-center"
        />
           {/* Overlay Badges */}

           <div className="absolute right-0 top-0 w-[100px] h-[100px]  bg-[var(--bg-color)] text-[0.5rem] text-center p-[10px] [border-radius:69%_31%_66%_34%_/_21%_30%_70%_79%] shadow-[var(--neon-box-shadow)] border-[1px] border-[var(--hover-color)] outline outline-[2px] outline-[var(--bg-color)] z-[100] animate-morph">
          <span className="text-cyan-400 text-xl font-semibold">25+</span>
          <p className="text-white text-xs mt-1">Projects Completed</p>
        </div>

        <div className="absolute  left-0 top-1/3 w-[110px] h-[110px] bg-[var(--bg-color)] text-[0.5rem] text-center p-[10px] [border-radius:69%_31%_66%_34%_/_21%_30%_70%_79%] shadow-[var(--neon-box-shadow)] border-[1px] border-[var(--hover-color)] outline outline-[2px] outline-[var(--bg-color)] z-[100] animate-morph">
          <span className="text-cyan-400 text-xl font-semibold">500+</span>
          <p className="text-white text-xs mt-1">Hours of Learning & Working</p>
        </div>

        <div className="absolute right-0 bottom-0 transform -translate-y-1/2 w-[100px] h-[100px] bg-[var(--bg-color)] text-[0.5rem] text-center p-[5px] [border-radius:69%_31%_66%_34%_/_21%_30%_70%_79%] shadow-[var(--neon-box-shadow)] border-[1px] border-[var(--hover-color)] outline outline-[2px] outline-[var(--bg-color)] z-[100] animate-morph">
          <span className="text-cyan-400 text-xl font-semibold">150+</span>
          <p className="text-white text-xs mt-1">Coding Problems Solved</p>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex-grow p-4 md:p-0 md:ml-8 lg:ml-12"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <span className="text-cyan-400 text-sm font-light tracking-wide uppercase">
          Let me introduce myself
        </span>
        <h2 className="text-white font-bold text-4xl mt-2">About Me</h2>
        <h3 className="text-gray-300 font-semibold text-2xl mt-2">
          A Story of Growth
        </h3>
         {/* Content Section */}
      
        <p className="text-gray-400 font-light mt-4 text-justify">
          I am Hariprasath, a final-year Computer Science Engineering student
          with a strong foundation in full-stack development and a passion for
          solving complex technical challenges. Proficient in Java, JavaScript,
          React.js, Spring Boot, and database management systems like MySQL,
          PostgreSQL, and MongoDB, I specialize in building scalable, efficient,
          and user-friendly applications.
          <br />
          <br />
          Key achievements include being a finalist in the Inventors Challenge
          2023 and publishing a patented smart device for energy-efficient
          clothes drying. I am ready to contribute as a technically adept and
          innovative software developer, driven by a commitment to excellence
          and continuous learning.
        </p>
        {isContentVisible && (
          <motion.div
            id="extra-content"
            className="animate-slideAnimation mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <p className="text-gray-400 font-light text-justify">
              My technical journey includes developing real-time AI-based
              surveillance systems using YOLOv8 and CNN algorithms for accurate
              threat detection. I have also optimized RESTful APIs for
              high-performance data processing and designed dynamic, reusable UI
              components to enhance application scalability and maintainability.
              With hands-on experience as a Front-End Developer Intern and
              leadership roles such as Chairperson of the Data Science Club, I
              have honed skills in team collaboration, technical innovation, and
              problem-solving.
            </p>
          </motion.div>
        )}
        <div className="mt-6">
          <button
            className="bg-cyan-400 text-gray-800 font-semibold px-5 hover:border-2 hover:bg-gray-800 hover:border-cyan-300 hover:text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            onClick={toggleContent}
            aria-label="Toggle additional content"
          >
            {isContentVisible ? "Read Less" : "Read More!"}
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
