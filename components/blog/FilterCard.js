function FilterCard(){
    return(
        <>
        <div className="mr-24 mt-20 rounded-lg bg-[#D9D9D9] p-5 h-fit w-80">
            <p className="text-dark text-xl font-poppins font-bold mt-3 ml-3">Category</p>
            <div className="flex-col mt-10 ml-3">
                <div className="flex justify-between cursor-pointer">
                    <p className="text-dark text-l font-poppins font-bold">Design</p>
                    <p className="text-dark text-l font-poppins mr-4 mb-2">12</p>
                </div>
                <div className="flex justify-between cursor-pointer">
                    <p className="text-dark text-l font-poppins font-bold">Development</p>
                    <p className="text-dark text-l font-poppins mr-4 mb-2">20</p>
                </div>
                <div className="flex justify-between cursor-pointer">
                    <p className="text-dark text-l font-poppins font-bold">Events</p>
                    <p className="text-dark text-l font-poppins mr-4 mb-2">7</p>
                </div>
                <div className="flex justify-between cursor-pointer">
                    <p className="text-dark text-l font-poppins font-bold">Collaboration</p>
                    <p className="text-dark text-l font-poppins mr-4 mb-2">11</p>
                </div>

            </div>
        </div>
        </>
    )
}

export default FilterCard