import React from "react";
import Header from "../components/Header.js";
import PathDisplay from "../components/PathDisplay.js";
import Footer from "@/components/Footer.js";
import CarrersText from "../components/careers/CareersText.js";
import FilterCardCareers from "../components/careers/FilterCardCareers.js";
import { useState } from "react";
import CareerCard from "@/components/careers/CareerCard.js";

function Careers () {
    
    const CareersTitle ="Careers"

    const tags = ["Developer", "Design", "Finance"]

    const [currentFilter, setCurrentFilter] = useState("None")

    function handleFilter(tag){
        if(currentFilter == tag || tag == "showAll"){
            setCurrentFilter("None")
        }
        else{
            setCurrentFilter(tag)
        }
    }

    const careers = [
        {
        title: "Junior Frontend Developer",
        icon: "/images/developer.png",
        tag: "Developer"
        },
        {
        title: "Senior Backend Developer",
        icon: "/images/developer.png",
        tag: "Developer"
        },
        {
        title: "Senior Full-Stack Engineer",
        icon: "/images/developer.png",
        tag: "Developer"
        },
        {
        title: "Project Manager",
        icon: "/images/projectmanag.png",
        tag: "Finance"
        },
        {
        title: "UI/UX Designer",
        icon: "/images/designer.png",
        tag: "Design"
        },
        {
        title: "UI/UX Designer",
        icon: "/images/designer.png",
        tag: "Design"
        },
    ]

    return(
        <>
        <div className="h-fit bg-light">
        <Header theme={"light"} page={"careers"} />
        <PathDisplay title={CareersTitle} theme={"light"}/>
        <div className="absolute top-[40%] right-[50%] h-[2%] w-[1%] z-10 float-right bg-dark"></div>
        <div className="absolute top-[25%] left-[30%] h-[4%] w-[2%] z-10 float-right bg-dark"></div>
        <div className="absolute top-[20%] right-[8%] h-[6%] w-[3%] z-10 float-right bg-dark"></div>
        <div className="absolute top-[45%] right-[12%] h-[4%] w-[2%] z-10 float-right bg-dark"></div>
        <CarrersText />
        <div className="lg:hidden">
            <FilterCardCareers current={currentFilter} handleFilter={handleFilter} />
        </div>
        <div className="flex justify-between">
        <div className="mb-20">
        {currentFilter === "None" ? 
            careers.map(career => (
                <CareerCard title={career.title} icon={career.icon} tag={career.tag}/>
            ))
            :
            careers.filter(career => career.tag == currentFilter).map(career => (
                <CareerCard title={career.title} icon={career.icon} tag={career.tag}/>
            ))
        }
        </div>
            <div className="hidden lg:block">
                <FilterCardCareers current={currentFilter} handleFilter={handleFilter} />
            </div>
        </div>
        <Footer theme={"light"}/>
        </div>
        </>
    )

}

export default Careers;