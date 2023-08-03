import { animate, motion } from "framer-motion"
import { useState } from "react"
function Updates(){

    const [isHovered1, setIsHovered1] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)

    function changeHoverState(frame){
        if (frame == 1){
            setIsHovered1(true)
            console.log(isHovered1)
        }
        else if (frame == 2){
            setIsHovered2(true)
        }
        else{
            setIsHovered1(false)
            setIsHovered2(false)
            console.log(isHovered1)
        }
    }

    return(
        <>
        <div className="pt-10 h-fit xl:h-screen pb-10 bg-light">
            <p className="font-space text-dark text-4xl lg:text-7xl ml-20 font-bold">Always stay updated</p>
            <div className="xl:flex mt-16 xl:mt-40 justify-end h-[41%]">
                <button type="button" className="hidden xl:block h-12 mr-52 mt-52 text-black border-dotted border-3 border-black font-medium rounded-lg text-m font-retro text-center px-5 py-2.5">
                    <div className="hidden xl:flex">
                    READ MORE ARTICLES
                    <img src="/images/arrow.svg" className="ml-4"></img>
                    </div>
                </button>
                <motion.div 
                    whileHover={{ opacity: 0.6 }}
                    className="ml-10 xl:ml-0 xl:mr-20 w-80 border-t-dark border-t-2 cursor-pointer group"
                    >
                        <p className="text-m font-poppins text-dark mt-10">T E C H</p>
                        <p className="text-xl font-poppins font-semibold text-dark mt-4">Why Cloud Computing is Essential for Your Business in 2023</p>
                        <p className="text-4xl font-space font-bold text-dark mt-10">01.03.2023</p>
                </motion.div>
                <motion.div
                    whileHover={{ opacity: 0.6}}
                    className="ml-10 xl:ml-0 xl:mr-20 mt-10 xl:mt-0 w-80 border-t-dark border-t-2 cursor-pointer">
                    <p className="text-m font-poppins text-dark mt-10">U P D A T E</p>
                    <p className="text-xl font-poppins font-semibold text-dark mt-4">Introducing a New State-of-The-Art Security System Across All Our Services</p>
                    <p className="text-4xl font-space font-bold text-dark mt-10">20.05.2023</p>
                </motion.div>
                <button type="button" className="xl:hidden h-16 mt-14 w-80 ml-8 text-black border-dotted border-3 border-black font-medium rounded-lg text-m font-retro text-center px-5 py-2.5">
                    <div className="flex xl:hidden">
                    READ MORE ARTICLES
                    <img src="/images/arrow.svg" className="ml-4"></img>
                    </div>
                </button>
            </div>
        </div>
        </>
    )
}

export default Updates