import { motion } from "framer-motion"

function Hero(){
    return(
        <>
        <motion.div
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1}}
            duration = {{ duration: 0.2 }}
            className="flex justify-center mt-20 pt-10">
            <h1 className="text-4xl lg:text-5xl z-20 text-white text-center font-space font-semibold">A Cloud Hosted Development Experience</h1>
        </motion.div>
        <div className="lg:ml-12 mt-5 text-center 2xl:flex justify-center">
            <h1 className="lg:text-8xl text-5xl text-white font-space font-bold z-20">THAT BRINGS IT</h1>
            <h1 className="lg:ml-4 text-5xl lg:text-8xl text-white font-poppins font-semibold italic z-20">ALL TOGETHER</h1>
        </div>
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: {duration: 0.5}
            }}
            className="hidden 2xl:grid absolute top-[17%] right-[12%] h-[20%] w-[13%] z-10 float-right bg-dark"></motion.div>
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: {duration: 0.5}
            }}
            className="hidden 2xl:grid absolute top-[52%] right-[4%] h-[10%] w-[6%] float-right bg-dark"></motion.div>
        <motion.div 
            whileHover={{
                scale: 1.1,
                transition: {duration: 0.5}
            }}
            className="hidden 2xl:grid absolute top-[55%] left-[7%] h-[14%] w-[10%] float-right bg-dark"></motion.div>
        <div className="mt-10 relative">
            <button type="button" className="ml-14 lg:w-fit w-72 lg:float-right lg:mr-[10%] lg:ml-40 mt-12 text-black border-dotted border-3 border-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-m font-retro px-5 py-2.5 text-center mb-2">
                <div className="flex">
                EXPLORE NOW
                <img src="/images/arrow.svg" className="ml-4"></img>
                </div>
            </button>
        </div>
        </>
    )
}

export default Hero