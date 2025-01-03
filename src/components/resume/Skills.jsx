import React from "react";
import { SiArtstation } from "react-icons/si";
import { FaFlag } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import ResumeTitle from "./ResumeTitle";

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-9 gap-10 lgl:gap-0 px-6">
      {/* =============== Design and Languages Start here =================== */}
      {/*Frontend Languages */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Frontend Languages :" icon={<BiCodeAlt />} />
        {/* HTML */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Html5</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[92%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Css */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">CSS3</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Expressjs */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Javascript (ES6+)</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[88%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/*Frontend Libraries */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Frontend Libraries :" icon={<BiCodeAlt />} />
        <div className="py-4">

          {/* Reactjs */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">React.js</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      {/*Frameworks / Preprocessors */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Frameworks / Preprocessors :" icon={<BiCodeAlt />} />
        <div className="py-4">

          {/* Bootstrap */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Bootstrap</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Tailwind Css */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Tailwind Css</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* SASS */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">SASS</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[78%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Ant Design */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Ant Design</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Material UI */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Material UI</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/*Responsive Design */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Responsive Design :" icon={<BiCodeAlt />} />
        <div className="py-4">

          {/* Media Queries */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Media Queries</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Flexbox */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Flexbox</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Grid Layout */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Grid Layout</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[88%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      
      {/*Backend Languages */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Backend Languages :" icon={<BiCodeAlt />} />
        <div className="py-4">

          {/* Node.js*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Node.js</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* JAVA */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">JAVA</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/*fRAMEwORKS */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Frameworks :" icon={<BiCodeAlt />} />
        <div className="py-4">

          {/* Express.js*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Express.js</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      

      {/*Relational Databases */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Relational Databases :" icon={<BiCodeAlt />} />
        <div className="py-4">

          {/* MySQL*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">MySQL</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* SQL Server*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">SQL Server</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[83%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* SQLite*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">SQLite</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/*NoSQL Databases */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="NoSQL Databases :" icon={<BiCodeAlt />} />
        <div className="py-4">

          {/* MongoDB*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">MongoDB</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>
      
      
      {/*API Development */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="API Development :" icon={<BiCodeAlt />} />
        <div className="py-4">

          {/* JSON*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">JSON</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[89%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* REST*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">REST</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[82%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/*ORM Tools */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="ORM Tools :" icon={<BiCodeAlt />} />
        <div className="py-4">

          {/* Mongoose*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Mongoose</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      
      {/* =============== Design and Languages End here ===================== */}
      {/* =============== Coding and Knowledge Start here ==================== */}
      {/* =============== Coding and Knowledge End here ==================== */}

     {/* Tools */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Tools & IDE" icon={<SiArtstation />} />
        {/* VS - Code */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">VS - Code</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[95%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Py - Charm */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Py - Charm</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[78%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Eclipse */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Eclipse</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[83%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Git */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Git</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[85%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* GitHub */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">GitHub</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[93%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Chrome DEV Tools */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Chrome dev Tools</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[83%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* MySql Workbencht */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">MySql Workbench</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[79%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Postman */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Postman</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[84%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Wordpress */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Wordpress</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Figma */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Figma</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[75%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* GreenFoot */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">GreenFoot</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[93%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* MS-Excel */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">MS-Excel</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[86%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Tableau */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Tableau</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[70%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Netlify */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Netlify</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[93%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Render */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Render</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[90%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      
      {/*Knowledge */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Knowledge & Services" icon={<IoIosPaper />} />
        {/* English */}
        <ul className="py-4 flex flex-col gap-2 border-b-[1px] border-b-zinc-800">
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Website hosting
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Website Developing
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            LLD Design
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Project completion
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Logo design
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Team Support
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
           Crafting effective prompts
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Advertising services include
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Digital Marketing
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Resume building
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Search engine Optimization
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Thumbnail Making
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Products Poster designing
          </li>
          <li className="flex items-center gap-4 text-textColor">
            <span className="text-designColor text-lg">
              <GiCheckMark />
            </span>
            Portfolio Making
          </li>
        </ul>
      </div>
      
      {/* Languages */}
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Languages" icon={<FaFlag />} />
        {/* English */}
        <div className="py-4">
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">English</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Tamil */}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Tamil</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[100%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
          {/* Hindi*/}
          <div className="py-3 border-b-[1px] border-zinc-800">
            <p className="text-base text-textColor -mb-1.5">Hindi</p>
            <span className="w-full bg-zinc-600 h-1 inline-flex relative">
              <span className="w-[50%] h-full absolute top-0 left-0 bg-designColor"></span>
            </span>
          </div>
         
        </div>
      </div>

      {/* =============== Design and Languages End here ===================== */}
    </div>
  );
};

export default Skills;
