import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import img1 from "../assets/img/achivement/ach1.jpeg";
import img2 from "../assets/img/achivement/ach2.jpeg";
import img3 from "../assets/img/achivement/ach3.jpeg";
import img4 from "../assets/img/achivement/ach4.jpeg";
import img5 from "../assets/img/achivement/ach5.jpeg";
import img6 from "../assets/img/achivement/ach6.jpeg";
import img7 from "../assets/img/achivement/ach7.jpeg";
import img8 from "../assets/img/achivement/ach8.jpeg";
import img9 from "../assets/img/achivement/ach9.jpeg";
import img10 from "../assets/img/achivement/ach10.jpeg";
import img11 from "../assets/img/achivement/ach11.jpeg";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const achievements = [
  {
    id: 1,
    image: img1,
    title: "Proud Winner of Poster Presentation",
    date: "Oct 2022",
    description:
      "Thrilled to share that I won 1st Prize in the Poster Presentation at the Second Research Day organized by Sri Venkateshwaraa Group Of Institutions! 🥇 Excited to keep pushing boundaries, driving innovation, and making a difference in my field.",
  },
  {
    id: 2,
    image: img2,
    title: "Runner-Up in Block and Tackle at AGON-24",
    date: "Mar 2024",
    description:
      "I’m excited to share that I represented SVCET at AGON-24, the 13th Annual Sports & Cultural Meet 2024, where I secured the runner-up position in the Block and Tackle event! 🏆💪 The competition brought together students from over 9 colleges, fostering teamwork and sportsmanship. Grateful for the incredible experience and support! 🙌",
  },
  {
    id: 3,
    image: img3,
    title: "Semi-Finalist in Inventors Challenge 2023",
    date: "Sep - Nov 2023",
    description:
      "Thrilled to announce that I received the Semi-Finalist Certificate in the Inventors Challenge 2023! 🎉🏆 Organized by AICTE, Arm, and STMicroelectronics, this competition took place from July to November 2023 at Noida Institute of Engineering & Technology, Greater Noida, Uttar Pradesh. 🚩 Being in the top 80 teams in India has been an incredible experience, expanding my knowledge and boosting my career growth! 🚀",
  },
  {
    id: 4,
    image: img4,
    title: "Granishing Talent Program 2023",
    date: "Oct - Nov 2023",
    description:
      "The Granishing Talent Program 2023, organized by Eaton and CII at Accord Pondicherry, was an enriching experience! 🎤 Hearing from industry Experts, was inspiring as he shared invaluable insights on entrepreneurship, business development, and essential entrepreneurial skills. 🚀 Grateful for the opportunity to learn from industry leaders and excited to apply these takeaways in future endeavors. 💡",
  },
  {
    id: 5,
    image: img5,
    title:
      "Empowering HIV/AIDS Prevention Program at Indirani College of Nursing",
    date: "Oct 2022",
    description:
      "I had the privilege of coordinating an impactful HIV/AIDS prevention program at Indirani College of Nursing on October 6, 2022. In collaboration with the Red Ribbon Club, this event aimed to raise awareness and encourage proactive measures in the fight against HIV/AIDS. Proud to represent SVCET and contribute to this important community health initiative.",
  },
  {
    id: 6,
    image: img6,
    title: "Runner-Up in Mother Language Day Debate!",
    date: "Feb 2022",
    description:
      "Delighted to share that I secured the Runner-Up position in the Debate Competition organized by SVCET on Mother Language Day (February 21, 2022). Grateful for the opportunity to celebrate language diversity and showcase effective communication!",
  },
  {
    id: 7,
    image: img7,
    title: "Student Entrepreneurs Development Bootcamp",
    date: "May 2023",
    description:
      "I attended a 3-day Student Entrepreneurs Development Bootcamp from May 16-18, 2023, organized by SVCET and AIC-PECF. This experience equipped me with the tools, knowledge, and confidence to launch my own venture and fueled my passion for #Entrepreneurship.",
  },
  {
    id: 8,
    image: img8,
    title: "Honored with Volunteer Certificate for SIH 2022 Grand Finale",
    date: "Aug 2022",
    description:
      "It was an honor to be recognized with a Volunteer Certificate for my contribution to organizing the Smart India Hackathon 2022 Grand Finale at SVCET on August 25-26.💡 Proud to have volunteered in the SIH Senior Software Edition and contributed to the spirit of innovation and technology. Looking forward to more opportunities to drive positive change! 🌐",
  },
  {
    id: 9,
    image: img9,
    title: "Proud Participant in BugBot Competition at IEI Conclave",
    date: "Apr 2023",
    description:
      "Excited to share my participation in the BugBot competition at the IEI Second Southern Regional Students Conclave! 🤖 The theme Technologies for the Sustainable Development of Rural India inspired me to contribute my skills. Grateful for the Certificate of Participation and the opportunity to explore innovative solutions and connect with brilliant minds at this impactful event. 🌱",
  },
  {
    id: 10,
    image: img10,
    title: "Insightful Visit to AIC-PECF at Pondicherry University",
    date: "Oct 2023",
    description:
      "I had the privilege of visiting AIC-PECF, organized by SVCET, where I gained invaluable insights into entrepreneurship and project development. 🌟 Learning from industry experts and networking with peers opened doors to cutting-edge strategies in the entrepreneurial space. 💡 Truly inspiring to witness the nurturing of innovation, and I’m excited to apply this knowledge to my own journey. 🚀",
  },
  {
    id: 11,
    image: img11,
    title:
      " Proud Winner of Block and Tackle Competition by Women’s Empowerment Cell",
    date: "Mar 2022",
    description:
      "Thrilled to announce that I won the Block and Tackle Competition organized by SVCET in association with the Women’s Empowerment Cell on International Women’s Day, March 8, 2022! 🏆💪 This empowering event was a celebration of strength and resilience, and I’m proud to be part of this",
  },
];

const AchievementCard = ({ image, title, date, description }) => (
  <motion.div
    className="flex flex-col md:flex-row items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Image Section */}
    <div className="w-full md:w-1/2 h-[300px] md:h-[450px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover border-2 border-cyan-400 shadow-md rounded-lg"
        loading="lazy"
      />
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
      <h2 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-2">
        {title}
      </h2>
      <p className="text-lg text-gray-400 mb-4">{date}</p>
      <p className="text-gray-300 leading-relaxed text-justify">
        {description}
      </p>
    </div>
  </motion.div>
);

const Achievement = () => {
  return (
    <motion.div
      id="achivement"
      className="min-h-screen bg-gray-900 py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-white text-center text-4xl font-bold mt-2">
          Hall of Frame
        </h1>
        <p className="text-cyan-400 text-sm font-light uppercase tracking-widest pt-4">
          “Victory through strength and perseverance.”
        </p>
      </header>

      {/* Swiper Section */}
<div className="max-w-7xl mx-auto py-2 relative group">
  <Swiper
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    navigation={{
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    }}
    pagination={{ clickable: true }}
    spaceBetween={30}
    onSwiper={(swiper) => {
      const container = swiper.el;
      container.addEventListener("mouseenter", () =>
        swiper.autoplay.stop()
      );
      container.addEventListener("mouseleave", () =>
        swiper.autoplay.start()
      );
    }}
  >
    {achievements.map((achievement) => (
      <SwiperSlide key={achievement.id}>
        <AchievementCard
          image={achievement.image}
          title={achievement.title}
          date={achievement.date}
          description={achievement.description}
        />
      </SwiperSlide>
    ))}
  </Swiper>
  
  {/* Custom CSS for Pagination Dots */}
  <style jsx>{`
    .swiper-pagination-bullet {
      background-color: #12f7ff !important;
    }

    .swiper-pagination-bullet-active {
      background-color: #12f7ff !important;
    }
  `}</style>

  {/* Custom Navigation Buttons */}
  <div className="custom-prev opacity-0 group-hover:opacity-100 absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-700 rounded-full cursor-pointer hover:bg-cyan-500 transition-opacity">
    <IoChevronBackOutline className="text-white text-2xl" />
  </div>
  <div className="custom-next opacity-0 group-hover:opacity-100 absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-700 rounded-full cursor-pointer hover:bg-cyan-500 transition-opacity">
    <IoChevronForwardOutline className="text-white text-2xl" />
  </div>
</div>

    </motion.div>
  );
};

export default Achievement;
