import React from "react";
import Header from "../components/Header.js";
import PathDisplay from "../components/PathDisplay.js";
import AboutText from "../components/about/AboutText.js";
<<<<<<< HEAD
import Founders from "../components/about/Founders.js";
=======
import Founders from "../components/Founders.js";
>>>>>>> d952fe78ea5ac1da55d4cbc9bc742bfc930af9dd
import Principles from "../components/about/Principles.js";

function About(){

    const aboutTitle = "About Us"
    const aboutColor = "light"

    return(
      <>
      <div className="h-screen bg-dark">
        <Header theme={"dark"}/>
        <PathDisplay title={aboutTitle}/>
        <div className="absolute top-[17%] right-[25%] h-[4%] w-[2%] z-10 float-right bg-light"></div>
        <div className="absolute top-[60%] left-[50%] h-[2%] w-[1%] z-10 float-right bg-light"></div>
        <div className="absolute top-[25%] left-[40%] h-[4%] w-[2%] z-10 float-right bg-light"></div>
        <div className="absolute top-[40%] right-[10%] h-[6%] w-[3%] z-10 float-right bg-light"></div>
        <div className="absolute top-[60%] left-[10%] h-[3.5%] w-[2%] z-10 float-right bg-light"></div>
        <AboutText />
        <Founders />
        <Principles />
      </div>
      </>
    )
  }

  export default About;