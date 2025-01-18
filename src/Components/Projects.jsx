import React, { useState } from "react";
import { projects } from "./List/List";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web app");
  const [visibleCount, setVisibleCount] = useState(3); // Number of initially visible cards

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(3); // Reset visible count when changing tabs
  };

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Load 3 more cards
  };

  return (
    <div id="project" className="container mx-auto px-10 py-16 ">
      <div className="text-center mb-12">
        <h1 className="text-white text-center text-4xl font-bold mt-2">
          Works in Action
        </h1>
        <p className="text-cyan-400 text-sm font-light uppercase tracking-widest my-4">
          “Turning ideas into reality, one project at a time.”
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 max-sm:p-1 text-lg rounded-md ${
            activeTab === "web app"
              ? "bg-[#12f7ff] text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTabChange("web app")}
        >
          Web Apps
        </button>
        <button
          className={`ml-4 px-4 py-2 text-lg rounded-md ${
            activeTab === "IOT"
              ? "bg-[#12f7ff] text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTabChange("IOT")}
        >
          IOT
        </button>
        <button
          className={`ml-4 px-4 py-2 text-lg rounded-md ${
            activeTab === "Artificial Intelligence"
              ? "bg-[#12f7ff] text-white"
              : "bg-gray-300 text-gray-700"
          }`}
          onClick={() => handleTabChange("Artificial Intelligence")}
        >
          <span className="sm:hidden">AI</span>
          <span className="hidden sm:inline">Artificial Intelligence</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
        {projects
          .filter((project) => project.category === activeTab)
          .slice(0, visibleCount) // Only show visibleCount projects
          .map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden max-w-sm mx-auto p-4"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover"
                />
              )}
              <div className="p-1">
                <h2 className="text-lg font-semibold text-white">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-2">{project.date}</p>
                <p className="text-gray-200 text-sm mb-2">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 my-1 text-blue-800 text-xs font-medium mr-2 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-500 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
      {visibleCount <
        projects.filter((project) => project.category === activeTab).length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="bg-cyan-400 text-gray-800 font-semibold px-5 hover:border-2 hover:bg-gray-800 hover:border-cyan-300 hover:text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
