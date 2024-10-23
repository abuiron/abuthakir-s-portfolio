import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="Freelance."
          des="I am currently working as a freelance web developer, creating websites for various clients,and earning a profit. This freelance experience has further sharpened My skills and  understanding of client needs and project management.!"
        />
        <ResumeCard
          badge="07/ - 08/24"
          title="MERN Stack Developer"
          subTitle="Zidio Development."
          des="I completed a MERN Stack developer internship at Zidio Development, where I developed a full-featured Job Listing Portal using the MERN stack. This project allowed me to enhance my skills in React.js, Node.js, Express.js, and MongoDB, while gaining practical experience in full-stack development."
        />
        <ResumeCard
          badge="09/ - 12/23 "
          title="Web Developer"
          subTitle="The Website Makers"
          des="During college, I completed a 3-month web developer internship, which played a crucial role in shaping my career path, the hands-on experience solidified my decision to pursue a career as a software developer, providing valuable insights into web development."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2021 - 2024"
          title="Sriram Nallamani yadava college of arts and science"
          subTitle="Bsc Computer science"
          des="I Hold a Bachelor's degree in Computer Science under the university of Manonmaniam sundaranar University!"
        />
        <ResumeCard
          badge="2019 - 2020"
          title="Darussalam Higher Secondary school"
          subTitle="12th" 
          des="Where I chose the Biology group with a 70% score,but later I Decided to changed my career path in technology and programming!"
        />
        <ResumeCard
          badge="2017 - 2018"
          title="Darussalam Higher Secondary school"
          subTitle="10th"
          des="I completed 10th grade at Darussalam Higher Secondary school with a 79% score. During this time, I focused on improving my spoken English skills!"
        />
      </div>
    </div>
  );
};

export default Education;
