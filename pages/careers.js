import React from "react";
import Header from "../components/Header.js";
import PathDisplay from "../components/PathDisplay.js";
import Footer from "@/components/Footer.js";
import CarrersText from "@/components/CareersText.js";

function Careers () {
    
    const CareersTitle ="Careers"
    return(
        <>
        <div className="h-fit bg-light">
        <Header theme={"light"} />
        <PathDisplay title={CareersTitle}/>
        <div className="absolute top-[40%] right-[50%] h-[2%] w-[1%] z-10 float-right bg-dark"></div>
        <div className="absolute top-[25%] left-[30%] h-[4%] w-[2%] z-10 float-right bg-dark"></div>
        <div className="absolute top-[20%] right-[8%] h-[6%] w-[3%] z-10 float-right bg-dark"></div>
        <div className="absolute top-[45%] right-[12%] h-[4%] w-[2%] z-10 float-right bg-dark"></div>
        <CarrersText />
        <Footer theme={"light"}/>
        </div>
        </>
    )

}

export default Careers;