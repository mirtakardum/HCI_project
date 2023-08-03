import { useState } from "react"
import { motion } from "framer-motion"


function ServiceList(){

    const [selected1, setSelected1] = useState(true)
    const [selected2, setSelected2] = useState(false)
  
    function changeSelected() {
      setSelected1(!selected1)
      setSelected2(!selected2)
    }

    return(
        <>
        <div className="bg-light h-fill pt-10 pb-24">
            <div className="xl:flex xl:justify-between">
            <p className="xl:hidden font-space text-7xl text-dark font-bold mt-14 text-center">Services</p>
                <div className="flex xl:flex-col">
                    <div className={`block h-20 w-40 lg:w-80 lg:h-52 ml-4 lg:ml-20 mt-20 p-6 rounded-lg shadow cursor-pointer hover:bg-gradient-to-b hover:from-gray-700 hover:to-blue-950 group ${selected1 === true ? "bg-gradient-to-b from-gray-600 to-slate-900" : "bg-gradient-to-b from-slate-300 to-light"}`} onClick={changeSelected}>
                        <p className={`lg:mt-16 text-dark font-space font-bold text-xl lg:text-3xl w-[30%] group-hover:text-white ${selected1 === true ? "text-white" : "text-dark"}`}>Cloud Computing</p>
                    </div>
                    <div className={`block h-20 w-40 lg:w-80 lg:h-52 ml-4 lg:ml-20 mt-20 p-6 rounded-lg shadow cursor-pointer hover:bg-gradient-to-b hover:from-gray-700 hover:to-blue-950 group ${selected2 === true ? "bg-gradient-to-b from-gray-600 to-slate-900" : "bg-gradient-to-b from-slate-300 to-light"}`} onClick={changeSelected}>
                    <p className={`lg:mt-16 text-dark font-space font-bold text-xl lg:text-3xl w-[30%] group-hover:text-white ${selected2 === true ? "text-white" : "text-dark"}`}>Cloud Storage</p>
                    </div>
                </div>
                <div className="w-[50%]">
                    <p className="hidden xl:grid font-space text-7xl text-dark font-bold mt-14 ml-32">Services</p>
                    <div>
                        <p className={`font-poppins text-center text-dark mt-20 w-screen p-2 lg:p-0 lg:w-[75%] ${selected1 === true ? "text-2xl" : "hidden"}`}>Use the world's most advanced hardware to compute any and all software you or your company needs. Be it training the world's biggest neural networks, simulating physics on a sub-atomic level, or edditing videos in the highest resolutions, there is nothing our hardware can't live up to.</p>
                        <p className={`font-poppins text-center text-dark mt-20 w-screen p-2 lg:p-0 lg:w-[75%] ${selected2 === true ? "text-2xl" : "hidden"}`}>Your data is precious. We know that. That's why with CloudByte you can store your data in the most secure and reliable way possible. With regular backups, thorough encryption and lightning fast connection speeds, you can be sure your data is safe and accessible at the click of a button.</p>
                    </div>
                    <button type="button" className="ml-20 lg:ml-32 mt-12 w-60 lg:w-fit text-black border-dotted border-3 border-black  font-medium rounded-lg text-m font-retro px-5 py-2.5 text-center mb-2">
                        <div className="flex">
                        LEARN MORE
                        <img src="/images/arrow.svg" className="ml-4"></img>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceList