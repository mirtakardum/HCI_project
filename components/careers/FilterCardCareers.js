import { motion } from "framer-motion"

function FilterCardCareers({ current, handleFilter }){
    return(
        <>
        <div className="mr-24 mt-20 rounded-lg bg-[#D9D9D9] lg:p-5 h-fit w-full lg:w-80 sticky top-10">
            <p className="text-dark text-2xl lg:text-2xl font-poppins font-bold mt-3 ml-3">Category</p>
            <div className="flex-col mt-10 ml-3">
                <div className="flex justify-between">
                    <motion.p
                    initial = {{opacity: 1}}
                    whileHover={{opacity: 0.6}}
                    className={`text-xl lg:text-l font-poppins font-bold cursor-pointer ${current === "Devloper" ? "text-gray-500" : "text-dark"}`} onClick={() => handleFilter("Developer")}>Developer</motion.p>
                    <p className={`text-xl lg:text-l font-poppins mr-4 mb-2 ${current === "Developer" ? "text-gray-500" : "text-dark"}`}>3</p>
                </div>
                <div className="flex justify-between">
                    <motion.p
                    initial = {{opacity: 1}}
                    whileHover={{opacity: 0.6}}
                    className={`text-xl lg:text-l font-poppins font-bold cursor-pointer ${current === "Design" ? "text-gray-500" : "text-dark"}`} onClick={() => handleFilter("Design")}>Design</motion.p>
                    <p className={`text-xl lg:text-l font-poppins mr-4 mb-2 ${current === "Design" ? "text-gray-500" : "text-dark"}`}>2</p>
                </div>
                <div className="flex justify-between">
                    <motion.p
                    initial = {{opacity: 1}}
                    whileHover={{opacity: 0.6}}
                    className={`text-xl lg:text-l font-poppins font-bold cursor-pointer ${current === "Finance" ? "text-gray-500" : "text-dark"}`} onClick={() => handleFilter("Finance")}>Finance</motion.p>
                    <p className={`text-xl lg:text-l font-poppins mr-4 mb-2 ${current === "Finance" ? "text-gray-500" : "text-dark"}`}>1</p>
                </div>
                <motion.p
                    initial = {{opacity: 1}}
                    whileHover = {{opacity: 0.6}}
                    className={`text-xl lg:text-l font-poppins font-bold mt-3 cursor-pointer text-dark ${current === "None" ? "hidden" : "block"}`} onClick={() => handleFilter("showAll")}>
                    Show All
                </motion.p>
            </div>
        </div>
        </>
    )
}

export default FilterCardCareers