import { motion } from "framer-motion"

function StorageMockup(){
    return(
        <>
        <div className="absolute top-[60%] left-[13%] h-[6%] w-[3%] z-10 float-right bg-light"></div>
        <div className="absolute top-[45%] right-[18%] h-[4%] w-[2%] z-10 float-right bg-light"></div>
        <div className="absolute top-[70%] right-[10%] h-[10%] w-[5%] z-10 float-right bg-light"></div>
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