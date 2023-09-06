import { motion } from "framer-motion"

function GraphSection(){
    return(
        <>
        <div className="pt-20 h-fit bg-dark">
            <motion.p 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
            className="w-[70%] mx-auto text-white text-5xl font-space font-bold text-center"><span className="text-babyblue">CloudByte</span> performance compared to other cloud computing providers</motion.p>
            <div className="flex justify-center mt-16">
                <div className="w-20 h-6 mt-1 bg-[#79D0F1] rounded-xl"/>
                <p className="text-3xl font-poppins text-white ml-3 ">- CloudByte</p>
            </div>
            <div className="flex mt-28 justify-between lg:justify-center">
                <div>
                    <motion.img src="/images/aiChart.png"
                    initial = {{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
                    className="h-80 lg:h-96 ml-8 lg:ml-0" />
                    <motion.p 
                    initial = {{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
                    className="text-white text-center mt-2 font-poppins ml-8 lg:ml-0 text-2xl">AI/ML</motion.p>
                </div>
                <div className="">
                    <motion.img src="/images/webChart.png" 
                    initial = {{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
                    className="h-80 lg:h-96 ml-14 lg:ml-32" />
                    <motion.p 
                    initial = {{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
                    className="text-white text-center mt-2 ml-14 lg:ml-32 font-poppins text-2xl">Web</motion.p>
                </div>
                <div className="">
                    <motion.img src="/images/blockchainChart.png" 
                    initial = {{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
                    className="h-80 lg:h-96 ml-14 lg:ml-32"/>
                    <motion.p 
                    initial = {{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
                    className="text-white text-center mt-2 ml-8 mr-2 lg:mr-0 lg:ml-28 font-poppins text-2xl">Blockchain</motion.p>
                </div>

            </div>
        </div>
        </>
    )
}

export default GraphSection