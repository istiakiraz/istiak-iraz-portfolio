import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


const HomePage = () => {
  return (
    <div>
      <div className="fixed   z-20 w-full ">
        <Navbar></Navbar>
      </div>

      <ReactFullpage
        scrollingSpeed={500}
        navigation
       
         anchors={['hero', 'about', 'skills', 'projects']}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Hero />
              </div>
              <div className="section">
                <About />
              </div>

              <div className="section">
                <Skills></Skills>
              </div>

              <div className="section ">
              <Projects></Projects>
           
              </div>


              <div className="section">
                <Contact />
              </div>

              
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default HomePage;
