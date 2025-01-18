import React from "react";
import { useNavigate } from "react-router-dom";
import EarthCanvas from "../canvas/Earth";
import Typewriter from "typewriter-effect";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const Lander = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        console.log("Navigating to /home");
        navigate("/home");
      };
      

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="text-center px-4">
        <h1 className="flex gap-4 text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Welcome to{" "}
          <span className="text-cyan-400">
            <Typewriter
              options={{
                strings: ["Visionary Vault"],
                autoStart: true,
                loop: false,
                delay: 75,
                wrapperClassName: "inline",
                cursorClassName: "text-cyan-400 font-bold",
                cursor: "",
                deleteSpeed: Infinity,
              }}
            />
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
        "Simplicity is the soul of efficiency."
        </p>
      </header>

      {/* Earth Canvas */}
      <div className="mt-10 w-5/6 max-w-2xl h-60 md:h-[250px]">
        <EarthCanvas />
      </div>

      <button
        onClick={handleNavigate}
        className="flex gap-2 mt-7 px-4 py-3 font-semibold text-lg rounded-lg bg-[#292e33] text-[#12f7ff] shadow-sm transform transition-transform duration-300 hover:scale-105 border-[1px] border-[#12f7ff] shadow-[#12f7ff]"
      >
        Go to Homepage <TbArrowBadgeRightFilled className="text-[#12f7ff] w-7 h-7" />
      </button>
    </div>
  );
};

export default Lander;
