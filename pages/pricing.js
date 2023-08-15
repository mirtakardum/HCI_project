import React, { useRef } from "react";
import Header from "../components/Header.js";
import { useState } from "react";
import PathDisplay from "../components/PathDisplay.js";
import PricingCards from "../components/pricing/PricingCards.js";
import StorageCards from "../components/pricing/StorageCards.js";
import ComputingCards from "../components/pricing/ComputingCards.js";
import { IoCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import PaymentTotal from "../components/pricing/PaymentTotal.js";

import Footer from "../components/Footer.js"

function Pricing() {

    const [selected1, setSelected1] = useState(false)
    const [selected2, setSelected2] = useState(false)
  
    function changeSelected(id) {
      if(id == 1){
        setSelected1(true)
        setSelected2(false)
        storageScrollRef.current?.scrollIntoView({ behavior: "smooth"})
    }
    else{
        setSelected1(false)
        setSelected2(true)
        computingScrollRef.current?.scrollIntoView({ behavior: "smooth"})
      }
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
                value: !option1.value,
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
                value: !option2.value,
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
                value: !option3.value,
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
                value: !pick1.value,
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
                value: !pick2.value,
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
                value: !pick3.value,
                id: 3})
        }
    }

    const storageScrollRef = useRef(null)
    const computingScrollRef = useRef(null)

    const pricingTitle = "Pricing"

    const storageIcon = "/images/database.png"
    const computingIcon = "/images/cloud.png"

    const memoryOne = "100GB"
    const priceOne ="9.99"

    const memoryTwo ="10TB"
    const priceTwo ="39.99"

    const memoryThree ="100TB"
    const priceThree ="399"

    const pro = "PRO"
    const proplus ="PRO+"
    const ultra = "ULTRA"

    const pricePro = "14.99"
    const pricePlus ="49.99"
    const priceUltra ="89.99"

    const storageAttributes100GB = ["Budget friendly", "Encrypted storage", "For small-sized businesses"]
    const storageAttributes10TB = ["Business standard", "Ready for bigger projects", "For medium-sized businesses"]
    const storageAttributes100TB = ["Large scale projects", "Used by industry leaders", "For large-sized businesses"]

    const computingAttributesPro = [
        {
            text: "100 compute units a month",
            value: true
        },
        {
            text: "20 GB RAM",
            value: true
        },
        {
            text: "Access to the fastest hardware",
            value: false
        },
        {
            text: "Priority hardware access",
            value: false
        }
    ]

    const computingAttributesPlus = [
        {
            text: "500 compute units a month",
            value: true
        },
        {
            text: "35 GB RAM",
            value: true
        },
        {
            text: "Access to the fastest hardware",
            value: true
        },
        {
            text: "Priority hardware access",
            value: false
        }
    ]

    const computingAttributesUltra = [
        {
            text: "500 compute units a month",
            value: true
        },
        {
            text: "35 GB RAM",
            value: true
        },
        {
            text: "Access to the fastest hardware",
            value: true
        },
        {
            text: "Priority hardware access",
            value: true
        }
    ]

    return(
        <>
            <div className="h-fit bg-dark">
                <Header theme={"dark"}/>
                <PathDisplay title={pricingTitle} />
                <div className="absolute top-[40%] right-[50%] h-[2%] w-[1%] z-10 float-right bg-light"></div>
                <div className="absolute top-[25%] left-[30%] h-[4%] w-[2%] z-10 float-right bg-light"></div>
                <div className="absolute top-[20%] right-[8%] h-[6%] w-[3%] z-10 float-right bg-light"></div>
                <div className="absolute top-[45%] right-[12%] h-[4%] w-[2%] z-10 float-right bg-light"></div>
                <div className="absolute top-[60%] left-[10%] h-[5%] w-[3%] z-10 float-right bg-light"></div>
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
                <p ref={storageScrollRef} className="font-space text-white text-6xl ml-20 font-bold mt-28 mb-20" >STORAGE</p>
                <div className="flex justify-center">
                    <StorageCards memory={memoryOne} price={priceOne} option={option1.value} attributes={storageAttributes100GB} changeOption={() => changeOption(option1.id)} />
                    <StorageCards memory={memoryTwo} price={priceTwo} option={option2.value} attributes={storageAttributes10TB} changeOption={() => changeOption(option2.id)} />
                    <StorageCards memory={memoryThree} price={priceThree} option={option3.value} attributes={storageAttributes100TB} changeOption={() => changeOption(option3.id)} />
                </div>
                <p ref={computingScrollRef} className="font-space text-white text-6xl ml-20 font-bold mt-36 mb-20" >CLOUD COMPUTING</p>
                <div className="flex justify-center">
                    <ComputingCards type = {pro} pricing={pricePro} pick={pick1.value} attributes={computingAttributesPro} changePick={() => changePick(pick1.id)}/>
                    <ComputingCards type= {proplus} pricing={pricePlus} pick={pick2.value} attributes={computingAttributesPlus} changePick={() => changePick(pick2.id)}/>
                    <ComputingCards type= {ultra} pricing={priceUltra} pick={pick3.value} attributes={computingAttributesUltra} changePick={() => changePick(pick3.id)}/>
                </div>
                <PaymentTotal storagePick = {[option1, option2, option3]} computingPick = {[pick1, pick2, pick3]}  storagePrice = {[priceOne, priceTwo, priceThree]} memory = {[memoryOne, memoryTwo, memoryThree]} computingPrice = {[pricePro, pricePlus, priceUltra]} computingName = {[pro, proplus, ultra]}/>
                <Footer theme={"dark"}/>
            </div>
        </>
    )
}

export default Pricing