import React from "react";
import Navbar from "../components/Navbar.js";
import PathDisplay from "../components/PathDisplay.js";
import AboutText from "../components/AboutText.js"

function About(){

    const aboutTitle = "About Us"
    const aboutColor = "light"

    return(
      <>
      <div className="h-screen bg-dark">
        <Navbar/>
        <PathDisplay title={aboutTitle}/>
        <div className="absolute top-[17%] right-[25%] h-[4%] w-[2%] z-10 float-right bg-light"></div>
        <div className="absolute top-[25%] left-[40%] h-[4%] w-[2%] z-10 float-right bg-light"></div>
        <div className="absolute top-[40%] right-[10%] h-[6%] w-[3%] z-10 float-right bg-light"></div>
        <div className="absolute top-[60%] left-[10%] h-[3.5%] w-[2%] z-10 float-right bg-light"></div>
        <AboutText />
      </div>
      </>
    )
  }

  export default About;