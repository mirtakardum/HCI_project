import Typed from "react-typed"

function StorageDisplay(){
    return(
        <>
        <div className="flex ml-96 pl-36 mt-28 mb-[-2%]">
            <Typed 
                className="ml-20 text-white font-poppins font-bold text-4xl mt-10"
                strings={["In arms", "Out of harms"]}
                typeSpeed={100}
                backSpeed={120}
                loop />
            <p className="ml-2 h-fit text-white font-poppins font-bold text-4xl mt-10">reach</p>
        </div>
        <div className="flex justify-between pb-10 px-28">
            <img src="/images/computer.png" className="ml-24" />
            <div className="pl-20">
                <img src="/images/service-arrows.png" className="w-[90%] mt-16"/>
            </div>
            <img src="/images/cloud-big.png" className=" w-60 mr-24" />
        </div>
        </>
    )
}

export default StorageDisplay