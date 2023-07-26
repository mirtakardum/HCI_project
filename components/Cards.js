function Cards({ title, description, icon, id, selected, changeSelected }){
    return(
        <>
        <div className="flex mt-8 mr-10 ml-10">
            <div className={`mx-auto block w-80 h-80 rounded-lg shadowx cursor-pointer ${selected === true ? 'bg-babyblue' : 'bg-gradient-to-b from-gray-600 to-slate-900'}`} onClick={changeSelected}>
                <div className="w-full mt-8 px-3 flex justify-between">
                    <img src={icon} className="h-16 ml-2"></img>
                    <img src="/images/arrow2.svg" className="h-12 mt-2 mr-2"></img>
                </div>
                <p className="font-space font-bold text-4xl text-white w-10 mt-8 ml-6">{title}</p>
                <p className="font-space text-l text-white w-64 mt-2 ml-6">{description}</p>
            </div>
        </div>
        </>
    )
}

export default Cards