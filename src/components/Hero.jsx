import React from "react";

import profilePic from '../assets/istiak_iraz.jpg'
import leftLine from '../assets/bigLine.svg'
import middleBg from '../assets/middleBg.svg'

 
const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-white ">
      <div className="grid relative grid-cols-1   mb-100 lg:grid-cols-9">
     
      <img className="absolute lg:left-230 w-96 top-120 left-5 lg:w-[650px] z-10 lg:top-35" src={middleBg} alt="" />

      <div className="lg:col-span-6 col-span-1 bg-primary">

      <img className="absolute hidden lg:block h-[800px] top-25" src={leftLine} alt="" />

        <div className="lg:w-8/12 w-10/12 space-y-8 mx-auto pb-8 lg:py-26">
          <h1 className="lg:text-7xl text-5xl pt-36 font-bold  text-secondary">
            {" "}
            Frontend <br />
            Developer.

          </h1>
          <p className="text-white lg:w-9/12 text-xl ">
           I transform design into code, and code into user joy — building digital products that feel good to use.
          </p>
          <div className="flex gap-10 text-sm lg:text-xl  lg:mt-26 text-secondary lg:w-9/12  items-center ">
            <p>
              Hi, I'm Iraz — I turn pixels into products, and coffee into code
            </p>
            <p className="hyphens-auto">
              Turning ideas into interactive, user-focused digital experiences
            </p>
          </div>
        </div>
      </div>
     
      <div className="lg:col-span-3  relative bg-secondary">
  
  <div className="lg:absolute lg:top-50 lg:py-0 py-6 lg:w-7/12 w-8/12 mx-auto lg:-left-50 z-10">
    
    <div className="absolute lg:top-8 top-21 left-34    lg:left-8 w-60 h-60 lg:w-full lg:h-full border border-white z-0"></div>

   
    <img className="lg:w-96 w-60 relative lg:m-0 m-8 z-10" src={profilePic} alt="Istiak Iraz" />
  </div>
</div>
    </div>
    </div>
  );
};

export default Hero;
