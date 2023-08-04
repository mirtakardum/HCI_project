function ComputingCards({ pick, changePick }){
    return(
        <>
        <div className="relative">
            <div className="flex mt-8 mr-10 ml-10 group">
                <div className={`absolute mx-auto w-[80%] h-[92%] mt-8 inset-0 ${pick === true ? "blur-md bg-babyblue rounded-lg" : "bg-dark"} group-hover:blur-md group-hover:bg-babyblue group-hover:rounded-lg `}></div>
                <div className={`relative mx-auto block w-72 h-96 rounded-lg shadowx cursor-pointer ${pick === true ? 'bg-babyblue' : 'bg-gradient-to-b from-gray-600 to-slate-900'}`} onClick={changePick}>
                    <div className="text-white font-poppins text-center mt-10">
                        <p className="text-xl font-semibold">dfldfd</p>
                        <div className="flex text-center ml-14 mt-5">
                            <p className="text-5xl font-bold">dkfndfn</p>
                            <p className="mt-5 ml-1">/mo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ComputingCards