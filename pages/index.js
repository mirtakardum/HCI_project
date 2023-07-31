import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/landing/Hero.js";
import CTA from "@/components/landing/CTA.js";
import Why from "@/components/landing/Why.js";
import ServiceList from "@/components/landing/ServiceList.js";
import Testimonials from "@/components/landing/Testimonials.js";
import Updates from "@/components/landing/Updates.js";
import FAQ from "@/components/landing/FAQ.js";

function Homepage(){
  return(
    <>
    <div className="h-screen bg-light">
      <Header />
      <Hero />
      <CTA />
      <Why />
      <ServiceList />
      <Testimonials />
      <Updates />
      <FAQ />
    </div>
    </>
  )
}

export default Homepage;