import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I specialize in developing responsive and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). With clean, efficient code, I ensure seamless functionality across devices, delivering tailored web solutions that meet client requirements."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="I design visually appealing, responsive interfaces that prioritize user experience and functionality. By blending creativity with modern design principles, I ensure each website reflects the client’s brand while providing intuitive and user-friendly navigation for optimal engagement."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="UI/UX"
        subTitle="At a basic level in UI/UX design, I focus on creating user-friendly, intuitive interfaces that enhance user experience. I apply essential UI/UX principles to ensure ease of navigation, balancing aesthetics and functionality while continuously learning and improving."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="I am currently learning and implementing SEO strategies to improve website visibility on search engines. By focusing on keyword optimization, on-page SEO techniques, and content structure, I aim to boost search rankings and increase organic traffic for websites.."
      />
    </div>
  );
};

export default MyServices;
