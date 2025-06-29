import React from "react";
import Navbar from "./Navbar";
import profilePic from '../assets/istiak_iraz.jpg'
import leftLine from '../assets/bigLine.svg'
import middleBg from '../assets/middleBg.svg'

 
const Hero = () => {
  return (
    <div className="grid relative h-[600px] grid-cols-9">
      <div className="absolute z-20 w-full ">
        <Navbar></Navbar>
      </div>

      <img className="absolute left-230 w-[650px] z-10 top-35" src={middleBg} alt="" />

      <div className="col-span-6 bg-primary">

      <img className="absolute h-[800px] top-40" src={leftLine} alt="" />

        <div className="w-8/12 space-y-8 mx-auto py-26">
          <h1 className="text-7xl pt-36 font-bold  text-secondary">
            {" "}
            Frontend <br />
            Developer.

          </h1>
          <p className="text-white w-9/12 text-xl ">
            I like to craft solid and scalable frontend products with great user
            experiences.
          </p>
          <div className="flex gap-10 mt-26 text-secondary w-9/12  items-center ">
            <p>
              Proven experience building successful products for clients across
              several countries
            </p>
            <p>
              Proven experience building successful products for clients across
              several countries{" "}
            </p>
          </div>
        </div>
      </div>
     
      <div className="col-span-3 relative bg-secondary">
  
  <div className="absolute top-50 -left-50 z-10">
    
    <div className="absolute top-8 left-8 w-full h-full border border-white z-0"></div>

   
    <img className="w-96 relative z-10" src={profilePic} alt="Istiak Iraz" />
  </div>
</div>
    </div>
  );
};

export default Hero;
