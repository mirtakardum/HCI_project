
function ComputingCTA(){
    return(
        <>
        <div className="h-fit pb-32 relative">
            <p className="text-center text-6xl font-space font-bold text-white mt-24 z-20">Don't wait to grow.</p>
            <p className="text-center text-6xl font-space font-bold text-white mt-4 z-20">Let's <span className="font-poppins italic">start now.</span></p>
            <button type="button" className="hidden xl:block xl:mx-auto h-12 mr-52 mt-10 z-20 text-white border-dotted border-3 border-white font-medium rounded-lg text-m font-retro text-center px-5 py-2.5">
                    <div className="hidden xl:flex">
                    SEE PRICING OPTIONS
                    <img src="/images/white-arrow.png" className="ml-4 h-4 mt-1"></img>
                    </div>
                </button>
        </div>
        </>
    )
}

export default ComputingCTA