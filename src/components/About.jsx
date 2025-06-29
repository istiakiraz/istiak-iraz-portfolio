import React from "react";
import aboutPic1 from '../assets/about1.svg'
import aboutPic2 from '../assets/about2.svg'
import aboutPic3 from '../assets/about3.svg'

const About = () => {
  return (
    <div className=" lg:px-40 mt-20 lg:pl-70   ">
      <h1 className="text-7xl font-bold text-primary">About Me</h1>

      <div className="flex lg:space-x-12 mt-10">
        <div className="flex-1">
          <h3 className="text-3xl text-primary font-semibold">
            My Journey Through Code
          </h3>
          <p className="text-accent   w-9/12 mt-5">
            I'm a passionate frontend developer who loves building responsive
            and user-friendly web applications using React and Tailwind CSS. So
            far, I’ve worked on projects like task management tools, freelancer
            marketplaces, and delivery systems — focusing on clean UI and smooth
            UX. 
            </p>
           <p className="text-accent w-10/12  mt-5">
             Coding, to me, feels like solving puzzles — every challenge is
            an opportunity to learn and grow. I’m continuously exploring new
            technologies, aiming to become a full-stack developer and create
            meaningful products that truly help people.
           
          </p>
          <img className="w-60 opacity-70 ml-30 mt-10" src={aboutPic2} alt="" />
        </div>

        <div className="flex-1">
            <img className="w-80 ml-20" src={aboutPic1} alt="" />
          <h3 className="text-3xl text-primary font-semibold">Beyond Code</h3>
          <p className="text-accent mt-5 w-9/12">
            Outside of coding, I’m a hobbyist photographer who enjoys capturing
            street and travel moments. Photography helps me see beauty in
            everyday life and gives me a creative break from screens. I also
            enjoy volunteering, exploring new places, and currently learning
            motion graphics.
            
            
          </p>
          <p className="text-accent mt-5 w-9/12">
            Before stepping into development, I worked at 
             <span className=" px-1 font-semibold">nsports.news</span> as a content creator, learning SEO and WordPress.
            Later, I worked for 1.5 years at <span className=" px-1 font-semibold">Hello Chittagong,</span> focusing on video
            editing and web design. These experiences shaped my creative
            thinking and led me toward web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
