function PathDisplay({ title, theme, subpage }){
    return(
        <>
        <div className="flex ml-4 lg:ml-20 mt-5">
            <a href="/"><p className={`${theme === "light" ? "text-black" : "text-white"} font-poppins text-xl`}><span className="hover:text-babyblue">Home</span> &gt;</p></a>
            <p className={`${theme === "light" ? "text-black" : "text-white"} ml-1 font-poppins font-bold text-xl cursor-pointer`}>{title}</p>
            <p className={`${theme === "light" ? "text-black" : "text-white"} ${subpage != "none" ? "inline" : "hidden"} ml-1 font-poppins font-bold text-xl cursor-pointer`}><span className="font-medium"> &gt; </span>{subpage}</p>
        </div>
        <div className="ml-4 lg:ml-20 mt-5">
            <h1 className={`font-space font-bold text-7xl ${subpage === "none" ? "inline" : "hidden"} ${theme === "light" ? "text-black" : "text-white"}`}>{title}</h1>
        </div>
        </>
    )
}

export default PathDisplay