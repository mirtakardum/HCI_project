function Cards(){
    return(
        <>
        <div className="flex mt-8">
            <a href="#" className=" mx-auto block w-80 h-80 bg-gradient-to-b from-gray-600 to-slate-900 rounded-lg shadow">
                <div className="w-full mt-8 px-3 flex justify-between w-full">
                    <img src="/images/database.png" className="h-16 ml-2"></img>
                    <img src="/images/arrow2.svg" className="h-12 mt-2 mr-2"></img>
                </div>
                <p className="font-space text-4xl text-white font-bold w-10 mt-8 ml-6">Cloud Storage</p>
                <p className="font-space text-l text-white mt-2 ml-6">Provides customized solutions to create and maintain software applications.</p>
            </a>
        </div>
        </>
    )
}

export default Cards