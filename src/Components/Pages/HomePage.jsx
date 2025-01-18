import React from "react";
import Home from "../Home";
import About from "../About";
import Service from "../Service";
import Skills from "../Skills";
import Certificate from "../Certificate";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import Achievement from "../Achievement";
import Experience from "../Experience";
import Navbar from "../Navbar";

const HomePage = () => {
  return (



    <main className="relative z-10">

      <section>
      <Navbar />
      </section>
      
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="service">
        <Service />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="certificate">
        <Certificate />
      </section>

      

      

      <section id="projects">
        <Projects />
      </section>

      <section id="achievement">
        <Achievement />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section>
      <Footer />
      </section>
    </main>
  );
};

export default HomePage;
