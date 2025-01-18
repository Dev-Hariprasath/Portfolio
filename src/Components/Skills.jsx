import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { skills } from "./List/List";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      id="skill"
      className="flex flex-col items-center px-10 py-16 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-[1100px] w-full flex flex-col items-center justify-center gap-4"
        variants={itemVariants}
      >
        <motion.h2
          className="text-white text-4xl font-bold mt-2"
          variants={itemVariants}
        >
          Skills
        </motion.h2>

        <motion.p
          className="text-cyan-400 text-sm font-light uppercase tracking-widest mb-4"
          variants={itemVariants}
        >
          Here are some of my skills that I've worked on.
        </motion.p>
        

        <motion.div
          className="w-full flex flex-wrap justify-center gap-12"
          variants={containerVariants}
        >
          {skills.map((skillCategory, index) => (
            <Tilt key={`skill-category-${index}`}>
              <motion.div
                className="max-w-sm bg-gray-900 text-white rounded-lg shadow-lg p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-semibold text-center mb-4">
                  {skillCategory.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div
                      key={`skill-item-${skillIndex}`}
                      className="flex items-center gap-2 border border-gray-600 rounded-md px-4 py-2"
                    >
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-6 h-6"
                      />
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
