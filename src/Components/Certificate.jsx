import React, { useState } from "react";
import { Galleria } from "primereact/galleria";
import { motion } from "framer-motion"; // Import Framer Motion

// Import certificate images
import certificate1 from "../assets/img/certificates/figma.png";
import certificate2 from "../assets/img/certificates/html.jpg";
import certificate3 from "../assets/img/certificates/tcs.jpg";
import certificate4 from "../assets/img/certificates/datascience.jpg";
import certificate5 from "../assets/img/certificates/python.png";
import certificate6 from "../assets/img/certificates/Backend.jpg";
import certificate7 from "../assets/img/certificates/FrontEnd.jpg";
import certificate8 from "../assets/img/certificates/Fsd1.jpg";
import certificate9 from "../assets/img/certificates/FSD.jpg";
import certificate10 from "../assets/img/certificates/Git.jpg";
import certificate11 from "../assets/img/certificates/js.jpg";
import certificate12 from "../assets/img/certificates/plc.png";
import certificate13 from "../assets/img/certificates/sb.jpg";

const Certificate = () => {
  const [certificates] = useState([

        {
          itemImageSrc: certificate1,
          thumbnailImageSrc: certificate1,
          alt: "Figma Certificate",
          caption: "Figma",
        },
        {
          itemImageSrc: certificate2,
          thumbnailImageSrc: certificate2,
          alt: "Frontend Development Certificate",
          caption: "Frontend Development",
        },
        {
          itemImageSrc: certificate3,
          thumbnailImageSrc: certificate3,
          alt: "Communication Skills Certificate",
          caption: "Communication Skills",
        },
        {
          itemImageSrc: certificate4,
          thumbnailImageSrc: certificate4,
          alt: "Data Science Certificate",
          caption: "Data Science",
        },
        {
          itemImageSrc: certificate5,
          thumbnailImageSrc: certificate5,
          alt: "Python Programming Certificate",
          caption: "Python Programming",
        },
        {
          itemImageSrc: certificate6,
          thumbnailImageSrc: certificate6,
          alt: "Backend Certificate",
          caption: "Node.js and Express.js",
        },
        {
          itemImageSrc: certificate7,
          thumbnailImageSrc: certificate7,
          alt: "Front-End Certificate",
          caption: "React.js",
        },
        {
          itemImageSrc: certificate8,
          thumbnailImageSrc: certificate8,
          alt: "FSD",
          caption: "Software Developer",
        },
        {
          itemImageSrc: certificate9,
          thumbnailImageSrc: certificate9,
          alt: "FSD Assesment",
          caption: "FSD Assesment",
        },
        {
          itemImageSrc: certificate10,
          thumbnailImageSrc: certificate10,
          alt: "Git And GitHub Certificate",
          caption: "Git And GitHub",
        },
        {
          itemImageSrc: certificate11,
          thumbnailImageSrc: certificate11,
          alt: "JS Certificate",
          caption: "Java Script",
        },
        {
          itemImageSrc: certificate12,
          thumbnailImageSrc: certificate12,
          alt: "PLC",
          caption: "Placement Training",
        },
        {
          itemImageSrc: certificate13,
          thumbnailImageSrc: certificate13,
          alt: "Spring Boot",
          caption: "Spring Boot",
        },
      ]);

  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 3 },
    { breakpoint: "960px", numVisible: 2 },
    { breakpoint: "768px", numVisible: 1 },
  ];

  const itemTemplate = (item) => (
    <div style={{ textAlign: "center" }}>
      <motion.img
        src={item.itemImageSrc}
        alt={item.alt}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: "100%",
          display: "block",
          borderRadius: "8px",
          boxShadow: "0 0 0.5rem #12f7ff",
          maxHeight: "350px",
        }}
      />
      <h4
        style={{
          marginTop: "10px",
          color: "#f5f5f5",
          textShadow: "0 0 10px rgba(18,247,255,0.3)",
          transition: "color 0.3s ease",
        }}
        className="hover:text-[#12f7ff]"
      >
        {item.caption}
      </h4>
    </div>
  );

  const thumbnailTemplate = (item) => (
    <motion.img
      src={item.thumbnailImageSrc}
      alt={item.alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "block",
        borderRadius: "4px",
        boxShadow: "0 0 0.5rem #12f7ff",
        maxHeight: "120px",
      }}
    />
  );

  return (
    <motion.div
    id="certificate"
      className="min-h-screen text-white bg-gray-900 py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.header
        className="text-center"
        style={{ marginBottom: "2rem" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h1
          className="text-white text-4xl font-bold mt-2"
        >
          Badge of Excellence
        </h1>
        <p className="text-cyan-400 text-sm font-light uppercase tracking-widest my-4">
          “Learning never exhausts the mind.”
        </p>
      </motion.header>

      <div
        className="container mx-auto"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1.5rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Galleria
            value={certificates}
            responsiveOptions={responsiveOptions}
            numVisible={3}
            circular
            style={{
              maxWidth: "600px",
              margin: "0 auto",
            }}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certificate;
