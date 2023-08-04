import React from "react";
import Header from "../components/Header.js";
import { useState } from "react";
import PathDisplay from "../components/PathDisplay.js";
import PricingCards from "@/components/PricingCards.js";
import Footer from "../components/Footer.js"

function Pricing() {

    const [selected1, setSelected1] = useState(true)
    const [selected2, setSelected2] = useState(false)
  
    function changeSelected() {
      setSelected1(!selected1)
      setSelected2(!selected2)
    }

    const pricingTitle = "Pricing"

    const storageIcon = "/images/database.png"
    const computingIcon = "/images/cloud.png"

    return(
        <>
            <div className="h-fit bg-dark">
                <Header theme={"dark"}/>
                <PathDisplay title={pricingTitle} />
                <div className="flex justify-evenly">
                <PricingCards icon={storageIcon} id={1} selected={selected1} changeSelected={changeSelected} />
                <PricingCards icon={computingIcon} id={2} selected={selected2} changeSelected={changeSelected} />
                </div>
                <Footer theme={"dark"}/>
            </div>
        </>
    )
}

export default Pricing