import React from "react";
import aboutPic1 from '../assets/about1.svg'
import aboutPic2 from '../assets/about2.svg'
// import aboutPic3 from '../assets/about3.svg'

const About = () => {
  return (
    <div className=" lg:px-40 lg:mt-20 lg:pl-70 px-10   ">
      <h1 className="lg:text-7xl text-5xl font-bold text-primary">About Me</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-12 mt-10">
        <div className="flex-1">
          <h3 className="lg:text-3xl text-2xl text-primary font-semibold">
            My Journey Through Code
          </h3>
          <p className="text-accent hyphens-auto text-sm lg:text-[16px]  lg:w-9/12 mt-5">
            I'm a passionate frontend developer who loves building responsive
            and user-friendly web applications using React and Tailwind CSS. So
            far, I’ve worked on projects like task management tools, freelancer
            marketplaces, and delivery systems — focusing on clean UI and smooth
            UX. 
            </p>
           <p className="text-accent  hyphens-auto text-sm lg:text-[16px] lg:w-10/12  mt-5">
             Coding, to me, feels like solving puzzles — every challenge is
            an opportunity to learn and grow. I’m continuously exploring new
            technologies, aiming to become a full-stack developer and create
            meaningful products that truly help people.
           
          </p>
          <img className="w-60 hidden lg:block opacity-70 ml-30 mt-10" src={aboutPic2} alt="bg img" />
        </div>

        <div className="flex-1">
            <img className="w-80 hidden lg:block ml-20" src={aboutPic1} alt="bg img " />
          <h3 className="text-primary lg:text-3xl mt-5 lg:mt-0 text-2xl font-semibold">Beyond Code</h3>
          <p className="text-accent hyphens-auto text-sm lg:text-[16px] mt-5 lg:w-9/12">
            Outside of coding, I’m a hobbyist photographer who enjoys capturing
            street and travel moments. Photography helps me see beauty in
            everyday life and gives me a creative break from screens. I also
            enjoy volunteering, exploring new places, and currently learning
            motion graphics.
            
            
          </p>
          <p className="text-accent hidden lg:block text-sm lg:text-[16px] mt-5 w-9/12">
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
