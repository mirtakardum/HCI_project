import React from "react";
import Header from "../components/Header.js";
import Hero from "../components/landing/Hero.js";
import CTA from "@/components/landing/CTA.js";
import Why from "@/components/landing/Why.js";
import ServiceList from "@/components/landing/ServiceList.js";
import Testimonials from "@/components/landing/Testimonials.js";
import Updates from "@/components/landing/Updates.js";
import FAQ from "@/components/landing/FAQ.js";
import Footer from "@/components/Footer.js";
import Head from "next/head.js";

function Homepage(){

  return(
    <>
    <Head>
      <title>Home</title>
    </Head>
    <div className="h-fill bg-light">
      <Header theme={"light"} page={"home"}/>
      <Hero />
      <CTA />
      <Why />
      <ServiceList />
      <Testimonials />
      <Updates />
      <FAQ />
      <Footer theme={"light"} />
    </div>
    </>
  )
}

export default Homepage;