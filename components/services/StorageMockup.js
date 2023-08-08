import { motion } from "framer-motion"

function StorageMockup(){
    return(
        <>
        <motion.img src="/images/diagram.png" 
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        viewport={{margin: "-200px", once: true}}
        className="mx-auto h-[350px] w-[350px] lg:h-full lg:w-[70%] mt-10 lg:mt-20"/>
        </>
    )
}

export default StorageMockup