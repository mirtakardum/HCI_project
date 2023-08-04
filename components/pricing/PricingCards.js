function PricingCards({ icon, id, selected, changeSelected }){
    return(
        <>
        <div className="relative">
<<<<<<< HEAD:components/pricing/PricingCards.js
            <div className="flex mt-28 mr-10 ml-10 group">
                <div className={`absolute mx-auto w-[70%] h-[100%] inset-0 ${selected === true ? "blur-md bg-babyblue rounded-lg" : "bg-dark"} group-hover:blur-md group-hover:bg-babyblue group-hover:rounded-lg `}></div>
=======
            <div className="flex mt-8 mr-10 ml-10 group">
                <div className={`${selected === true ? "absolute mx-auto w-[70%] h-[100%] inset-0 blur-md bg-babyblue rounded-lg" : "bg-dark"}`}></div>
>>>>>>> dc2d1de288dd2e4d104624799876cf354e390e02:components/PricingCards.js
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