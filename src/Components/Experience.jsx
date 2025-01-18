import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";

const Experience = () => {
  const neonStyle = {
    background: "#250821",
    color: "#f5f5f5",
    boxShadow: "0 0 .5rem #12f7ff",
  };

  const arrowStyle = {
    borderRight: "7px solid #12f7ff",
  };

  const iconStyle = {
    background: "#292e33",
    color: "#f5f5f5",
    boxShadow: "0 0 1rem #12f7ff",
    transition: "all 0.3s ease",
  };

  return (
    <div id="experience" className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-10 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-white my-2">
        Work Journey
        </h1>
        <p
          
        className="text-cyan-400 text-sm font-light uppercase tracking-widest py-2">
          " Experience is the best teacher "
        </p>
      </header>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={neonStyle}
          contentArrowStyle={arrowStyle}
          date="Nov 2024 - Present"
          iconStyle={iconStyle}
          icon={<WorkIcon aria-label="Front-End Developer Experience Icon" />}
        >
          <h3 className="vertical-timeline-element-title text-xl md:text-2xl font-medium uppercase text-cyan-300">
            Front-End Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">
            &#64; Accenous Integrals, Puducherry.
          </h4>
          <p className="text-justify text-gray-400">
            🔹Developed responsive, dynamic web components using React.js and
            Tailwind CSS, optimizing UI performance, ensuring
            cross-device/browser compatibility, and reducing code redundancy by
            30% through reusable components and efficient state management.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={neonStyle}
          contentArrowStyle={arrowStyle}
          date="Mar 2024 - Present"
          iconStyle={iconStyle}
          icon={<WorkIcon aria-label="Chair Person Experience Icon" />}
        >
          <h3 className="vertical-timeline-element-title text-xl md:text-2xl font-medium uppercase text-cyan-300">
            Chair Person
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">
            Data Science Club &#64; SVCET, Puducherry.
          </h4>
          <p className="text-justify text-gray-400">
            🔹Organized 10+ technical events for 250+ students, advancing skills
            in Python, Azure, and Data Science, while fostering a collaborative
            environment to enhance problem-solving, teamwork, and presentation
            abilities.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={neonStyle}
          contentArrowStyle={arrowStyle}
          date="Dec 2023 - Feb 2024"
          iconStyle={iconStyle}
          icon={<WorkIcon aria-label="Lead Developer Experience Icon" />}
        >
          <h3 className="vertical-timeline-element-title text-xl md:text-2xl font-medium uppercase text-cyan-300">
            Front-End Lead & Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">
            &#64; SVCET, Puducherry.
          </h4>
          <p className="text-justify text-gray-400">
            🔹Led the development of a college ERP system and official website
            using HTML, CSS, JavaScript, React.js, Tailwind CSS, Git, and
            GitHub, coordinating a 15-member team and collaborating with UI/UX
            and backend teams to deliver efficient solutions.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={neonStyle}
          contentArrowStyle={arrowStyle}
          date="Aug 2022"
          iconStyle={iconStyle}
          icon={<WorkIcon aria-label="Volunteer Experience Icon" />}
        >
          <h3 className="vertical-timeline-element-title text-xl md:text-2xl font-medium uppercase text-cyan-300">
            Student Volunteer in Event Management
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-gray-300">
            SIH 2022 &#64; SVCET, Puducherry.
          </h4>
          <p className="text-justify text-gray-400">
            🔹Served as a student volunteer for Event Management at SIH 2022,
            contributing to the organization and execution of the event, gaining
            valuable experience to excel in event management careers.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{
            background: "#16cc52",
            color: "#fff",
            boxShadow: "0 0 1rem #12f7ff",
          }}
          icon={<StarIcon aria-label="Star Icon for End of Journey" />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
