function PricingCards({ icon, id, selected, changeSelected }){
    return(
        <>
        <div className="relative">
            <div className="flex mt-8 mr-10 ml-10">
                <div className={`${selected === true ? "absolute mx-auto w-[80%] h-[90%] mt-8 inset-0 blur-md bg-babyblue rounded-lg" : "bg-dark"}`}></div>
                <div className={`relative mx-auto block w-40 h-40 rounded-lg shadowx cursor-pointer ${selected === true ? 'bg-babyblue' : 'bg-gradient-to-b from-gray-600 to-slate-900'}`} onClick={changeSelected}>
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