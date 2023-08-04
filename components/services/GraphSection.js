
function GraphSection(){
    return(
        <>
        <div className="pt-20 h-fit bg-dark">
            <p className="w-[70%] mx-auto text-white text-5xl font-space font-bold text-center"><span className="text-babyblue">CloudByte</span> performance compared to other cloud computing providers</p>
            <div className="flex mt-36 justify-center">
                <div>
                    <img src="/images/aiChart.png" className="h-96" />
                    <p className="text-white text-center mt-2 font-poppins text-2xl">AI/ML</p>
                </div>
                <div className="">
                    <img src="/images/webChart.png" className="h-96 ml-32" />
                    <p className="text-white text-center mt-2 ml-32 font-poppins text-2xl">Web</p>
                </div>
                <div className="">
                    <img src="/images/blockchainChart.png" className="h-96 ml-32"/>
                    <p className="text-white text-center mt-2 ml-28 font-poppins text-2xl">Blockchain</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default GraphSection