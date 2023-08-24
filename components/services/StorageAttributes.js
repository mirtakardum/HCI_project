import { motion } from "framer-motion"


function StorageAttributes(){
    return(
        <>
        <div className="relative h-[700px] lg:h-[400px] bg-dark">
        <div className="absolute top-[40%] left-[20%] h-[6%] w-[2%] z-10 float-right bg-light"></div>
        <div className="absolute top-[70%] left-[30%] h-[10%] w-[3%] z-10 float-right bg-light"></div>
        <div className="absolute top-[90%] left-[8%] h-[12%] w-[4%] z-10 float-right bg-light"></div>
        <div className="absolute top-[85%] right-[12%] h-[4%] w-[1%] z-10 float-right bg-light"></div>
            <motion.p 
            initial = {{x: -1000}}
            whileInView={{x: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="ml-8 lg:ml-20 h-fit text-white font-poppins font-bold text-4xl mt-10">Let us worry about your data safety and organization.</motion.p>
            <p className="block lg:hidden text-white font-poppins font-bold text-3xl text-center">Let us worry about your data safety and organization.</p>
            <motion.div
            initial = {{x: -1000}}
            whileInView={{x: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="mt-6 w-[80%] float-right h-1 border-t-2 border-white" />
            <div className="mt-6 w-[80%] lg:hidden block border-t-2 border-white mx-auto" />
            <ul className="relative overflow-x-hidden lg:h-[300px] text-white text-3xl text-center ml-24 lg:text-left lg:float-right mr-10 w-[50%] font-poppins font-semibold lg:list-disc mt-14">
                <motion.li
                initial = {{x: 300}}
                whileInView={{x: 40}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="hidden lg:block"
                >
                    As much capacity as you'll ever need 
                </motion.li>
                <li className="lg:hidden flex text-xl ">As much capacity as you'll ever need</li>
                <div className="lg:hidden mt-8 w-10 mx-auto border-t-2 border-white" />
                <motion.li
                initial = {{x: 300}}
                whileInView={{x: 40}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="mt-8 hidden lg:block">
                    Ecrypted and secured by the latest standards 
                </motion.li>
                <li className="lg:hidden block text-xl mt-4">Ecrypted and secured by the latest standards</li>
                <div className="lg:hidden mt-8 w-10 mx-auto border-t-2 border-white" />
                <motion.li
                initial = {{x: 300}}
                whileInView={{x: 40}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="mt-8 hidden lg:block">
                    Organize your data with ease
                </motion.li>
                <li className="lg:hidden block text-xl mt-4">Organize your data with ease</li>

            </ul>
        </div>
        </>
    )
}

export default StorageAttributes