import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";

function Homepage(){
  return(
    <>
    <div className="h-screen bg-light">
      <Header />
      <Hero />
    </div>
    </>
  )
}

export default Homepage;