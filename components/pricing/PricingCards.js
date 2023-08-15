function PricingCards({ icon, id, selected, changeSelected }){
    return(
        <>
        <div className="relative">
            <div className="flex mt-28 lg:mr-10 lg:ml-10 group">
                <div className={`absolute ml-5 md:ml-10 lg:mx-auto w-[80%] lg:w-[70%] h-[100%] inset-0 ${selected === true ? "blur-md bg-babyblue rounded-lg" : "hidden"} group-hover:blur-md group-hover:bg-babyblue group-hover:rounded-lg `}></div>
                <div className={`relative mx-auto block w-40 h-40 rounded-lg shadowx cursor-pointer ${selected === true ? 'bg-babyblue' : 'bg-gradient-to-b from-gray-600 to-slate-900'}`} onClick={() => changeSelected(id)}>
                    <div className="w-full mt-8 px-9 flex justify-between">
                        <img src={icon} className="h-20"></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PricingCards