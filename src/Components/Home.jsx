import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import HomeBgAnimation from "./BgAnimation/HomeBgAnimation";
import { IoMdDocument } from "react-icons/io";
import { FaCodepen } from "react-icons/fa";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
};

// Reusable Social Icon Component
const SocialIcon = ({ href, Icon, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full hover:bg-cyan-500 transition-transform transform hover:scale-110"
  >
    <Icon className="text-white text-2xl" />
  </a>
);

const Home = () => {
  return (
    <motion.div
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-gradient-to-b text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full">
        {/* Left Section */}
        <motion.div
          className="flex flex-col items-start text-left md:items-center md:text-center w-full md:w-1/2"
          variants={containerVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hi! I'm Hariprasath
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            And I'm a&nbsp;
            <span className="text-[#12f7ff]">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Chair Person of DSC",
                    "Placement Co-Ordinator",
                    "Java Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h3>

          <p className="text-lg uppercase text-cyan-200 font-semibold mb-2">
            IBM Certified Full Stack Software
            Developer
          </p>
          <p className="text-gray-300 text-base mb-6 leading-relaxed">
          A passionate Computer Science undergraduate with expertise in Java, React.js, Spring Boot, and SQL. Skilled in designing and developing dynamic, responsive web applications.
          </p>
          <div className="flex gap-4">
            <a
              href="/assets/Hariprasath.pdf"
              download="Hariprasath.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-800 font-semibold px-5 py-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300 hover:bg-gray-800 hover:border-2 hover:border-cyan-300 hover:text-white flex items-center gap-2"
            >
              Resume <IoMdDocument />
            </a>
            <a
              href="#contact"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-800 font-semibold px-5 py-3 rounded-lg shadow-lg hover:scale-110 transition-transform duration-300  hover:bg-gray-800 hover:border-2 hover:border-cyan-300 hover:text-white flex items-center gap-2"
            >
              Hire Me <FaCodepen />
            </a>
          </div>
          <motion.div
            className="flex gap-4 mt-6"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
          >
            <SocialIcon
              href="#contact"
              Icon={SiGmail}
              label="Email Hariprasath"
            />
            <SocialIcon
              href="https://github.com/Dev-Hariprasath"
              Icon={FaGithub}
              label="GitHub Profile"
            />
            <SocialIcon
              href="http://www.linkedin.com/in/hariprasathdeveloper"
              Icon={FaLinkedinIn}
              label="LinkedIn Profile"
            />
            <SocialIcon
              href="#contact"
              Icon={FaTwitter}
              label="Twitter Profile"
            />
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex flex-col justify-center items-center w-full md:w-1/2 mt-8 md:mt-0 relative"
          variants={imageVariants}
        >
          <div className="absolute inset-0 flex justify-center items-center z-0 overflow-hidden">
            <HomeBgAnimation />
          </div>
          <Tilt>
            <img
              src="./src/assets/img/absolute-image.jpg"
              alt="Hariprasath"
              className="w-80 h-80 sm:w-96 sm:h-96 rounded-full border-2 border-cyan-500 z-10 relative"
            />
          </Tilt>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
