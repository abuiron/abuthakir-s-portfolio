import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  workImg9,
  workImg10,
  workImg11,
  workImg12,
  workImg13
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a href="https://github.com/abuiron/online-assessment-frontend">
          <ProjectsCard
            title="Online Assesment Platform"
            category="Web Application"
            image={workImgThree}
          />
          </a>
          <a href="https://github.com/abuiron/job-listing-portal-app">
          <ProjectsCard
            title="Job Listing Portal"
            category="Web Application"
            image={workImgOne}
          />
          </a>
          <a href="https://github.com/abuiron/learnen-web">
          <ProjectsCard
            title="Learnen"
            category="Learning Platform"
            image={workImgTwo}
          />
          </a>
          <ProjectsCard
            title="Shopy any"
            category="E-Commerce"
            image={workImgFive}
          />
          <a href="https://github.com/abuiron/calculator">
          <ProjectsCard
            title="Calci"
            category="Calculator Web Application"
            image={workImg11}
          />
          </a>
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Zazh"
            category="E-Commerce"
            image={workImgFour}
          />
          <a href="https://github.com/abuiron/React-shopping-cart">
          <ProjectsCard
            title="Online Shopping"
            category="E-Commerce"
            image={workImgSix}
          />
          </a>
          <a href="https://github.com/abuiron/favi-pizza">
          <ProjectsCard
            title="Favi Pizza"
            category="Restaurent Website"
            image={workImgEight}
          />
          </a>
          <a href="https://github.com/abuiron/Alexa-Voice-Assist-Clone">
          <ProjectsCard
            title="Alexa Voice Assistant Clone"
            category="Python & Libraries"
            image={workImg9}
          />
          </a>
          <a href="https://github.com/abuiron/CRUD-Project">
          <ProjectsCard
            title="Employee Management System"
            category="Web Application"
            image={workImg10}
          />
          </a>
          <ProjectsCard
            title="DogWeb"
            category="Blog Website"
            image={workImgSeven}
          />
          <a href="https://github.com/abuiron/stop-watch-project">
          <ProjectsCard
            title="StopWatch"
            category="Web Application"
            image={workImg12}
          />
          </a>
          <a href="https://github.com/abuiron/abuthakir-s-portfolio">
          <ProjectsCard
            title="My Portfolio"
            category="Portfolio Website"
            image={workImg13}
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
