import React from "react";
import { BsFillFileEarmarkFill } from 'react-icons/bs';
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { BsPersonFill } from 'react-icons/bs';
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsFillFileEarmarkFill />} des="15 Certificates Achieved" />
      <FunFactCard icon={<SiAntdesign />} des="10+ Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="100+ hours of coding" />
      <FunFactCard icon={<BsPersonFill />} des="5 Clients" />
    </div>
  );
};

export default FunFact;
