import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

function ComputingCards({ type, pricing, pick, attributes, changePick}){
    return(
        <>
        <div className="relative">
            <div className="flex mr-2 lg:mr-10 ml-2 lg:ml-10 group">
                <div className={`absolute mx-auto w-[92%] lg:w-[80%] h-[94%] inset-0 ${pick === true ? "blur-md bg-babyblue rounded-lg" : "bg-dark mt-6"} group-hover:blur-md group-hover:bg-babyblue group-hover:rounded-lg `}></div>
                <div className={`relative mx-auto block w-72 h-[415px] rounded-lg shadowx cursor-pointer ${pick === true ? 'bg-babyblue' : 'bg-gradient-to-b from-gray-600 to-slate-900 mt-6'}`} onClick={changePick}>
                    <div className="text-white font-poppins text-center mt-10">
                        <p className="text-xl font-semibold">{type}</p>
                        <div className="flex text-center ml-14 mt-5">
                            <p className="text-5xl font-bold">{pricing}€</p>
                            <p className="mt-5 ml-1">/mo</p>
                        </div>
                        <div className="flex justify-between mx-3">
                            {attributes[0].value === true ? <IoIosCheckmarkCircleOutline size={30} className="mt-4" /> : <IoIosCloseCircleOutline size={30}/>}
                            <p className="text-white font-poppins text-center mt-5">{attributes[0].text}</p>
                        </div>
                        <div className="flex mx-3">
                            {attributes[1].value === true ? <IoIosCheckmarkCircleOutline size={30} className="mt-4" /> : <IoIosCloseCircleOutline size={30}/>}
                            <p className="text-white font-poppins text-center mt-5 ml-16">{attributes[1].text}</p>
                        </div>
                        <div className="flex mx-3">
                            {attributes[2].value === true ? <IoIosCheckmarkCircleOutline size={30} className="mt-4" /> : <IoIosCloseCircleOutline size={30} className="mt-4"/>}
                            <p className="text-white font-poppins text-center mt-6 text-sm ml-3">{attributes[2].text}</p>
                        </div>
                        <div className="flex mx-3">
                        {attributes[3].value === true ? <IoIosCheckmarkCircleOutline size={30} className="mt-4" /> : <IoIosCloseCircleOutline size={30} className="mt-4"/>}
                            <p className="text-white font-poppins text-center mt-5 ml-4">{attributes[3].text}</p>
                        </div>
                        
                    </div>
                    <div className="flex justify-center mt-5">
                        <button type="button" className={`${pick === true ? "bg-white text-babyblue hover:bg-slate-200" : "bg-dark text-white"} bg-dark hover:bg-gray-900 font-medium rounded-lg text-lg px-8 py-2.5`}>Choose</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ComputingCards