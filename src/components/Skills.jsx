import React from "react";
import coding from "../assets/Coding-bro (2).svg";
import bgImg from "../assets/skillBg.png";

const Skills = () => {
  return (
    <div className=" lg:px-40 relative h-screen overflow-hidden pt-20 lg:pl-70">
        <img className="absolute opacity-15 -top-100 w-[1200px] -rotate-[20px] -right-80 overflow-hidden z-10" src={bgImg} alt="" />

      <div className="flex  mt-15 items-center mx-auto ">

        <div className="flex-1">
          <h1 className="text-7xl font-bold text-primary">My Tech & 
          </h1>
          <h1 className=" font-bold text-primary mb-8 mt-2 text-4xl ">
            Creative Toolbox</h1>

          <p className="text-accent w-11/12 mt-8">
           As a frontend developer, I specialize in building responsive, user-focused web applications using modern technologies. My core skills lie in programming — from crafting clean UI with <span className=" px-1 font-semibold">React</span> and Tailwind CSS to integrating backend APIs and managing data with  <span className=" px-1 font-semibold">Node.js</span> and <span className=" px-1 font-semibold">MongoDB.</span>
          </p>
          <p className="text-accent w-11/12 mt-5">
            I also bring in creative tools like Canva and Premiere Pro when needed — whether it’s for designing quick mockups, editing visuals, or creating presentation-ready content. This blend of technical and creative skills allows me to approach problem-solving from both a logical and visual perspective.
          </p>
          <p className="text-accent w-11/12 mt-5">
          
                Every tool I use serves one purpose: to turn ideas into smooth, engaging digital experiences.
            
          </p>
        </div>

        <div className="flex-1 ">
            
          <img className="w-[650px]  z-20 " src={coding} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
