import Typed from "react-typed"
import { motion } from "framer-motion"

function StorageDisplay(){
    return(
        <>
        <motion.div 
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{duration: 1}}
        className="flex lg:ml-96 lg:pl-36 mt-60 lg:mt-20 mb-[-2%]">
            <Typed 
                className="ml-10 lg:ml-20 text-white font-poppins font-bold text-3xl lg:text-4xl mt-10"
                strings={["In arms", "Out of harms"]}
                typeSpeed={100}
                backSpeed={120}
                loop />
            <p className="ml-2 h-fit text-white font-poppins font-bold text-3xl lg:text-4xl mt-10">reach</p>
        </motion.div>
        <motion.div
         initial = {{opacity: 0}}
         animate = {{opacity: 1}}
         transition={{duration: 1.2}}
         className="flex justify-between pb-10 lg:px-28">
            <img src="/images/computer.png" className="lg:ml-24 ml-4 mt-10 lg:mt-0 h-20 lg:h-48" />
            <div className="lg:pl-20">
                <img src="/images/service-arrows.png" className="lg:w-[90%] w-[75%] ml-5 mt-20 lg:mt-16"/>
            </div>
            <img src="/images/cloud-big.png" className="w-28 lg:w-60 lg:mt-0 mt-7 lg:mr-24" />
        </motion.div>
        </>
    )
}

export default StorageDisplay