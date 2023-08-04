import React from "react";
import Header from "../components/Header.js";
import { useState } from "react";
import PathDisplay from "../components/PathDisplay.js";
import PricingCards from "@/components/pricing/PricingCards.js";
import StorageCards from "../components/pricing/StorageCards.js"
import ComputingCards from "../components/pricing/ComputingCards.js"
import Footer from "../components/Footer.js"

function Pricing() {

    const [selected1, setSelected1] = useState(true)
    const [selected2, setSelected2] = useState(false)
  
    function changeSelected() {
      setSelected1(!selected1)
      setSelected2(!selected2)
    }

    const [option1, setOption1] = useState({
        value: false,
        id: 1
    })
    const [option2, setOption2] = useState({
        value: true,
        id: 2
    })
    const [option3, setOption3] = useState({
        value: false,
        id: 3
    })

  
    function changeOption(id) {
        if (option1.id == id){
            setOption1({
                value: true,
                id: 1})
            setOption2({
                value: false,
                id: 2})
            setOption3({
                value: false,
                id: 3})
        }
        if (option2.id == id){
            setOption1({
                value: false,
                id: 1})
            setOption2({
                value: true,
                id: 2})
            setOption3({
                value: false,
                id: 3})
        }
        if (option3.id == id){
            setOption1({
                value: false,
                id: 1})
            setOption2({
                value: false,
                id: 2})
            setOption3({
                value: true,
                id: 3})
        }
    }

    const [pick1, setPick1] = useState({
        value: false,
        id: 1
    })
    const [pick2, setPick2] = useState({
        value: true,
        id: 2
    })
    const [pick3, setPick3] = useState({
        value: false,
        id: 3
    })

    function changePick(id) {
        if (pick1.id == id){
            setPick1({
                value: true,
                id: 1})
            setPick2({
                value: false,
                id: 2})
            setPick3({
                value: false,
                id: 3})
        }
        if (pick2.id == id){
            setPick1({
                value: false,
                id: 1})
            setPick2({
                value: true,
                id: 2})
            setPick3({
                value: false,
                id: 3})
        }
        if (pick3.id == id){
            setPick1({
                value: false,
                id: 1})
            setPick2({
                value: false,
                id: 2})
            setPick3({
                value: true,
                id: 3})
        }
    }


    const pricingTitle = "Pricing"

    const storageIcon = "/images/database.png"
    const computingIcon = "/images/cloud.png"

    const memoryOne = "100GB"
    const priceOne ="9,99€"

    const memoryTwo ="10TB"
    const priceTwo ="39,99€"

    const memoryThree ="100TB"
    const priceThree ="399€"

    return(
        <>
            <div className="h-fit bg-dark">
                <Header theme={"dark"}/>
                <PathDisplay title={pricingTitle} />
                <div className="flex justify-evenly">
                    <div>
                        <PricingCards icon={storageIcon} id={1} selected={selected1} changeSelected={changeSelected} />
                        <p className="font-space text-white mt-8 text-2xl font-semibold ml-9">Cloud Storage</p>
                        <p className="font-space text-white mt-2 text-sm ml-12">Start from 9,99€/mo</p>
                    </div>
                    <div>
                        <PricingCards icon={computingIcon} id={2} selected={selected2} changeSelected={changeSelected} />
                        <p className="font-space text-white mt-8 text-2xl font-semibold ml-4">Cloud Computing</p>
                        <p className="font-space text-white mt-2 text-sm ml-12">Start from 4,99€/mo</p>
                    </div>
                </div>
                <p className="font-space text-white text-6xl ml-20 font-bold mt-28 mb-20" >STORAGE</p>
                <div className="flex justify-center">
                    <StorageCards memory={memoryOne} price={priceOne} option={option1.value} changeOption={() => changeOption(option1.id)} />
                    <StorageCards memory={memoryTwo} price={priceTwo} option={option2.value} changeOption={() => changeOption(option2.id)} />
                    <StorageCards memory={memoryThree} price={priceThree} option={option3.value} changeOption={() => changeOption(option3.id)} />
                </div>
                <p className="font-space text-white text-6xl ml-20 font-bold mt-36 mb-20" >CLOUD COMPUTING</p>
                <div className="flex justify-center">
                    <ComputingCards pick={pick1.value} changePick={() => changePick(pick1.id)}/>
                    <ComputingCards pick={pick2.value} changePick={() => changePick(pick2.id)}/>
                    <ComputingCards pick={pick3.value} changePick={() => changePick(pick3.id)}/>
                </div>
                <Footer theme={"dark"}/>
            </div>
        </>
    )
}

export default Pricing