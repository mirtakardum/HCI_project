import { motion } from "framer-motion"


function StorageAttributes(){
    return(
        <>
        <div className="relative h-[700px] lg:h-[400px] bg-dark">
            <motion.p 
            initial = {{x: -1000}}
            whileInView={{x: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="ml-8 lg:ml-20 h-fit text-white font-poppins font-bold text-4xl mt-10">Let us worry about your data safety and organization.</motion.p>
            <motion.div
            initial = {{x: -1000}}
            whileInView={{x: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="mt-6 w-[80%] float-right h-1 border-t-2 border-white" />
            <ul className="relative overflow-x-hidden lg:h-[300px] text-white text-3xl text-center ml-24 lg:text-left lg:float-right mr-10 w-[50%] font-poppins font-semibold lg:list-disc mt-14">
                <motion.li
                initial = {{x: 300}}
                whileInView={{x: 40}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                >
                    As much capacity as you'll ever need 
                </motion.li>
                <div className="lg:hidden mt-8 w-10 mx-auto border-t-2 border-white" />
                <motion.li
                initial = {{x: 300}}
                whileInView={{x: 40}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="mt-8">
                    Ecrypted and secured by the latest standards 
                </motion.li>
                <div className="lg:hidden mt-8 w-10 mx-auto border-t-2 border-white" />
                <motion.li
                initial = {{x: 300}}
                whileInView={{x: 40}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="mt-8">
                    Organize your data with ease
                </motion.li>

            </ul>
        </div>
        </>
    )
}

export default StorageAttributes