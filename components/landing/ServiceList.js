

function ServiceList(){
    return(
        <>
        <div className="bg-light h-[100%] pt-10">
            <div className="flex justify-between">
                <div>
                    <div className="block max-w-sm h-52 ml-20 mt-20 p-6 bg-gradient-to-b from-slate-300 to-light rounded-lg shadow cursor-pointer">
                        <p className="mt-16 text-dark font-space font-bold text-3xl w-[30%]">Cloud Computing</p>
                    </div>
                    <div className="block max-w-sm h-52 ml-20 mt-20 p-6 bg-gradient-to-b from-slate-300 to-light rounded-lg shadow cursor-pointer">
                    <p className="mt-16 text-dark font-space font-bold text-3xl w-[30%]">Cloud Storage</p>
                    </div>
                </div>
                <div className="w-[50%]">
                    <p className="font-space text-7xl text-dark font-bold mt-14 ml-32">Services</p>
                    <p className="font-poppins text-2xl text-dark mt-20 ml-14 w-[75%]">Something about cloud computing isssssssssssss sssssssssssssssssssssssssssssssssssssss ssssssssssssssssssssssssssss sssssssssssssssssssssssssssssssssssss sssssssssssssssssss</p>
                    <button type="button" className="ml-32 mt-12 text-black border-dotted border-3 border-black  font-medium rounded-lg text-m font-retro px-5 py-2.5 text-center mb-2">
                        <div className="flex">
                        LEARN MORE
                        <img src="/images/arrow.svg" className="ml-4"></img>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ServiceList