import { motion } from "framer-motion"


function ComputingAttributes(){
    return(
        <>
        <div className="relative h-[850px] lg:h-[400px] bg-dark">
        	<motion.p 
            initial = {{x: -1000}}
            whileInView={{x: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="ml-8 lg:ml-20 h-fit text-white font-poppins font-bold text-4xl mt-10">Experience performance like you've never seen before.</motion.p>
            <div className="mt-6 w-[80%] float-right h-1 border-t-2 border-white" />
            <ul className="relative overflow-x-hidden lg:h-[300px] text-white text-3xl text-center ml-24 lg:text-left lg:float-right mr-10 w-[50%] font-poppins font-semibold lg:list-disc mt-14">
                <motion.li
                initial = {{x: 300}}
                whileInView={{x: 40}}
                transition={{duration: 0.5}}
                viewport={{once: true}}>
                    Gain access to some of the world's fastest hardware 
                </motion.li>
                <div className="lg:hidden mt-8 w-10 mx-auto border-t-2 border-white" />
                <motion.li
                initial = {{x: 300}}
                whileInView={{x: 40}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="mt-8">
                    Choose the hardware that best suits your needs 
                </motion.li>
                <div className="lg:hidden mt-8 w-10 mx-auto border-t-2 border-white" />
                <motion.li
                initial = {{x: 300}}
                whileInView={{x: 40}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="mt-8">
                    Connections at record breaking speeds 
                </motion.li>

            </ul>
        </div>
        </>
    )
}

export default ComputingAttributes