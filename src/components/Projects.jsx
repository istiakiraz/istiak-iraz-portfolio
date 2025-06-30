import React from "react";
import project1 from "../assets/thinktails.jpeg";

const Projects = () => {
  return (
    <div  className=" pt-30  ">

      <div className="w-7/12 mx-auto justify-between gap-5 items-center  p-10 grid grid-cols-5 bg-[#e5dffa] rounded-2xl h-[350px] mb-5 ">
        <div className="size-60 hover:scale-105 duration-300 overflow-hidden col-span-2 w-full group rounded-lg shadow-lg">
          <img
            className="w-full h-auto  transition-transform duration-[3000ms] cursor-grab group-hover:translate-y-[-40%] object-cover"
            src={project1}
            alt=""
          />
        </div>

        <div className="col-span-3">
          <h1 className="text-2xl mb-2 ">
            <span className="text-primary font-semibold">ThinkTales</span> – A Modern Blog Sharing Platform
          </h1>
          <p className="text-sm mb-2">
           ThinkTales is a modern blog writing platform where users can add blog posts, comment on other users' blogs, read posts, and manage a personalized wishlist of favorite blogs.
          </p>
          <ul className="text-sm space-y-1 mb-4" >
            <li> 🔹 Create, edit, and delete blog posts </li>
            <li> 🔹 Browse all stories with search and filter</li>
            <li> 🔹 JWT protected routes for secure actions</li>
            <li> 🔹 Dynamic routing for individual blog pages </li>
          </ul>
          <div className="flex gap-2 mb-5 *:bg-secondary/70 *:text-sm *:px-3 *:rounded-xl flex-wrap">
            <p>React</p> <p>MongoDB</p> <p>NodeJs</p>
            <p>Axios</p>
          </div>

          <div className="flex gap-5 flex-wrap ">
            <p>Live Link</p> <p>Git repo</p> <p>Details</p>
          </div>
        </div>
      </div>
      <div className="w-7/12 mx-auto justify-between gap-5 items-center  p-10 grid grid-cols-5 bg-[#e5dffa] rounded-2xl h-[350px] mb-5 ">
        <div className="size-56  overflow-hidden col-span-2 w-full group rounded-lg shadow-lg">
          <img
            className="w-full h-auto  transition-transform duration-[3000ms] cursor-grab group-hover:translate-y-[-40%] object-cover"
            src={project1}
            alt=""
          />
        </div>

        <div className="col-span-3">
          <h1 className="text-2xl mb-2 ">
            <span className="text-primary font-semibold">ThinkTales</span> – A Modern Blog Sharing Platform
          </h1>
          <p className="text-sm mb-2">
           ThinkTales is a modern blog writing platform where users can add blog posts, comment on other users' blogs, read posts, and manage a personalized wishlist of favorite blogs.
          </p>
          <ul className="text-sm space-y-1 mb-4" >
            <li> 🔹 Create, edit, and delete blog posts </li>
            <li> 🔹 Browse all stories with search and filter</li>
            <li> 🔹 JWT protected routes for secure actions</li>
            <li> 🔹 Dynamic routing for individual blog pages </li>
          </ul>
          <div className="flex gap-2 mb-5 *:bg-secondary/70 *:text-sm *:px-3 *:rounded-xl flex-wrap">
            <p>React</p> <p>MongoDB</p> <p>NodeJs</p>
            <p>Axios</p>
          </div>

          <div className="flex gap-5 flex-wrap ">
            <p>Live Link</p> <p>Git repo</p> <p>Details</p>
          </div>
        </div>
      </div>

     

    </div>
  );
};

export default Projects;
