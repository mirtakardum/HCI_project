function StorageCards({ memory, price, option, attributes, changeOption }){
    return(
        <>
        <div className="relative">
            <div className="flex mt-8 mr-10 ml-10 group">
                <div className={`absolute mx-auto w-[80%] h-[92%] mt-8 inset-0 ${option === true ? "blur-md bg-babyblue rounded-lg" : "bg-dark"} group-hover:blur-md group-hover:bg-babyblue group-hover:rounded-lg `}></div>
                <div className={`relative mx-auto block w-72 h-96 rounded-lg shadowx cursor-pointer ${option === true ? 'bg-babyblue' : 'bg-gradient-to-b from-gray-600 to-slate-900'}`} onClick={changeOption}>
                    <div className="text-white font-poppins text-center mt-8">
                        <p className="text-xl font-semibold">{memory}</p>
                        <div className="flex text-center ml-14 mt-5">
                            <p className="text-5xl font-bold">{price}€</p>
                            <p className="mt-5 ml-1">/mo</p>
                        </div>
                        <p className="text-white font-poppins text-center mt-5">{attributes[0]}</p>
                        <div className="w-[70%] border-t-2 border-white mt-3 mx-auto" />
                        <p className="text-white font-poppins text-center mt-5">{attributes[1]}</p>
                        <div className="w-[70%] border-t-2 border-white mt-3 mx-auto" />
                        <p className="text-white font-poppins text-center mt-5">{attributes[2]}</p>
                    </div>
                    <div className="flex justify-center mt-5">
                    <button type="button" className={` ${option === true ? "bg-white text-babyblue hover:bg-slate-200 " : "bg-dark text-white hover:bg-gray-900"} font-medium rounded-lg text-lg px-8 py-2.5 mr-2 mb-2`}>Choose</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default StorageCards