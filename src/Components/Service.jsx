import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { experienceList } from "./List/List";

const icons = [
  { id: 1, icon: <FaGraduationCap /> },
  { id: 2, icon: <FaLaptopCode /> },
  { id: 3, icon: <FaCode /> },
];

const Service = () => {
  return (
    <section id="services" className="py-16">
      <div className="text-center mb-12">
        
        <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">
        Our Offerings
        </h2>

        <p className="text-cyan-400 text-sm font-light uppercase tracking-widest my-4">
          " What I Will Do for You "
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {/* Map over experienceList */}
        {experienceList.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-6 bg-gray-900 shadow-lg rounded-lg transform transition-transform duration-300 hover:-translate-y-3"
          >
            {/* Assign each icon based on the index */}
            <div className="flex items-center text-4xl sm:text-5xl justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 border-2 border-cyan-400 text-cyan-400 bg-gray-900 rounded-full shadow-lg">
              {/* Dynamically render the corresponding icon */}
              {icons[index] && icons[index].icon}
            </div>
            <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-4">
              {item.title || "Front-End Developer"}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {item.description ||
                "As a seasoned UI/UX developer, I specialize in crafting seamless digital experiences that captivate and engage users. Let's collaborate to elevate your digital presence."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
