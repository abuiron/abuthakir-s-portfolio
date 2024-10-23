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
  workImg11
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Online Assesment Platform"
            category="Web Application"
            image={workImgThree}
          />
          <ProjectsCard
            title="Job Listing Portal"
            category="web Application"
            image={workImgOne}
          />
          <ProjectsCard
            title="Learnen"
            category="Learning Platform"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Shopy any"
            category="E-commerce"
            image={workImgFive}
          />
          <ProjectsCard
            title="Calci"
            category="Calculator web Application"
            image={workImg11}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Zazh"
            category="E-commerce"
            image={workImgFour}
          />
          <ProjectsCard
            title="Online Shopping"
            category="E-commerce"
            image={workImgSix}
          />
          <ProjectsCard
            title="Favi Pizza"
            category="Restaurent Website"
            image={workImgEight}
          />
          <ProjectsCard
            title="Alexa Voice Assistant Clone"
            category="Python & libraries"
            image={workImg9}
          />
          <ProjectsCard
            title="Employee Management System"
            category="web Application"
            image={workImg10}
          />
          <ProjectsCard
            title="DogWeb"
            category="Blog website"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
