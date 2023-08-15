import { motion } from "framer-motion"

function FilterCard({ current, handleFilter }){
    return(
        <>
        <div className="mr-24 mt-20 rounded-lg bg-[#D9D9D9] lg:p-5 h-fit w-full lg:w-80">
            <p className="text-dark text-2xl lg:text-xl font-poppins font-bold mt-3 ml-3">Category</p>
            <div className="flex-col mt-10 ml-3">
                <div className="flex justify-between">
                    <motion.p
                    initial = {{opacity: 1}}
                    whileHover={{opacity: 0.6}}
                    className={`text-xl lg:text-l font-poppins font-bold cursor-pointer ${current === "Education" ? "text-gray-500" : "text-dark"}`} onClick={() => handleFilter("Education")}>Education</motion.p>
                    <p className={`text-xl lg:text-l font-poppins mr-4 mb-2 ${current === "Education" ? "text-gray-500" : "text-dark"}`}>1</p>
                </div>
                <div className="flex justify-between">
                    <motion.p
                    initial = {{opacity: 1}}
                    whileHover={{opacity: 0.6}}
                    className={`text-xl lg:text-l font-poppins font-bold cursor-pointer ${current === "Security" ? "text-gray-500" : "text-dark"}`} onClick={() => handleFilter("Security")}>Security</motion.p>
                    <p className={`text-xl lg:text-l font-poppins mr-4 mb-2 ${current === "Security" ? "text-gray-500" : "text-dark"}`}>1</p>
                </div>
                <div className="flex justify-between">
                    <motion.p
                    initial = {{opacity: 1}}
                    whileHover={{opacity: 0.6}}
                    className={`text-xl lg:text-l font-poppins font-bold cursor-pointer ${current === "Infrastructure" ? "text-gray-500" : "text-dark"}`} onClick={() => handleFilter("Infrastructure")}>Infrastructure</motion.p>
                    <p className={`text-xl lg:text-l font-poppins mr-4 mb-2 ${current === "Infrastructure" ? "text-gray-500" : "text-dark"}`}>1</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default FilterCard