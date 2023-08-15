function Cards({ title, description, icon, id, selected, changeSelected }){
    return(
        <>
        <div className="relative">
            <div className="flex mt-8 lg:mr-10 ml-4 lg:ml-10">
            <div className={`${selected === true ? "absolute ml-2 lg:mx-auto w-[100%] lg:w-[80%] lg:h-[90%] mt-8 inset-0 blur-md bg-babyblue rounded-lg" : "bg-dark"}`}></div>
                <div className={`relative mx-auto block w-36 h-36 lg:w-80 lg:h-80 rounded-lg shadowx cursor-pointer ${selected === true ? 'bg-babyblue' : 'bg-gradient-to-b from-gray-600 to-slate-900'}`} onClick={() => changeSelected(id)}>
                    <div className="w-full mt-8 px-3 flex justify-between">
                        <img src={icon} className="h-16 ml-2"></img>
                        <img src="/images/arrow2.svg" className="h-12 mt-2 mr-2"></img>
                    </div>
                    <p className="font-space font-bold text-xl lg:text-4xl text-white w-10 mt-14 lg:mt-8 ml-6">{title}</p>
                    <p className="font-space text-m lg:text-l text-white w-36 lg:w-64 mt-2 ml-4 lg:ml-6">{description}</p>
                </div>
            </div>
        </div>
          
        </>
    )
}

export default Cards