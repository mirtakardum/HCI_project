import { motion } from "framer-motion"

function ComputingDisplay(){
    return(
        <>
        <motion.div 
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{duration: 1}}
        className="mt-60 lg:mt-28 pb-10">
            <img src="/images/computer-brain.png" className="h-32 lg:h-60 px-4 mx-auto"/>
        </motion.div>
        </>
    )
}

export default ComputingDisplay