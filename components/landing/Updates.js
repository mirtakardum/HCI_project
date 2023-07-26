
function Updates(){
    return(
        <>
        <div className="pt-10 h-screen bg-light">
            <p className="font-space text-dark text-7xl ml-20 font-bold">Always stay updated</p>
            <div className="flex mt-40 justify-end h-[41%]">
                <button type="button" className="h-12 mr-52 mt-52 text-black border-dotted border-3 border-black font-medium rounded-lg text-m font-retro text-center px-5 py-2.5">
                    <div className="flex">
                    READ MORE ARTICLES
                    <img src="/images/arrow.svg" className="ml-4"></img>
                    </div>
                </button>
                <div className="mr-20 w-80 border-t-dark border-t-2 cursor-pointer">
                    <p className="text-m font-poppins text-dark mt-10">T E C H</p>
                    <p className="text-xl font-poppins font-semibold text-dark mt-4">Why Cloud Computing is Essential for Your Business in 2023</p>
                    <p className="text-4xl font-space font-bold text-dark mt-14">01.03.2023</p>
                </div>
                <div className="mr-20 w-80 border-t-dark border-t-2 cursor-pointer">
                    <p className="text-m font-poppins text-dark mt-10">U P D A T E</p>
                    <p className="text-xl font-poppins font-semibold text-dark mt-4">Introducing a New State-of-The-Art Security System Across All Our Services</p>
                    <p className="text-4xl font-space font-bold text-dark mt-14">20.05.2023</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Updates