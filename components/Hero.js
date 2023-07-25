function Hero(){
    return(
        <>
        <div className="flex justify-center mt-20 pt-10">
            <h1 className="text-5xl z-20 text-white font-space font-semibold">A Cloud Hosted Development Experience</h1>
        </div>
        <div className="absolute top-[17%] right-[12%] h-[20%] w-[13%] z-10 float-right bg-dark"></div>
        <div className="ml-12 mt-5 flex justify-center">
            <h1 className="text-8xl text-white font-space font-bold">THAT BRINGS IT</h1>
            <h1 className="ml-4 text-8xl text-white font-poppins font-semibold italic">ALL TOGETHER</h1>
        </div>
        <div className="absolute top-[52%] right-[4%] h-[10%] w-[6%] float-right bg-dark"></div>
        <div className="absolute top-[55%] left-[7%] h-[14%] w-[10%] float-right bg-dark"></div>
        <div className="mt-10 relative">
            <button type="button" className="float-right mr-[10%] mt-12 text-black border-dotted border-3 border-black focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-m font-retro px-5 py-2.5 text-center mb-2">
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