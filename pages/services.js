import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/landing/Hero.js";
import Navbar from "../components/Navbar.js";
import Cards from "../components/Cards.js";
import PathDisplay from "@/components/PathDisplay.js";

function Services(){
  return(
    <>
    <div className="h-screen bg-dark">
      <Navbar />
      <PathDisplay />
      <Cards />
    </div>
    </>
  )
}

export default Services;