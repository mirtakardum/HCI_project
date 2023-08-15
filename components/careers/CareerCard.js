function CareerCard({ title, icon }) {
    return(
        <>
        <a href="#" className="block w-[900px] p-3  bg-light border-b border-gray-600  hover:bg-gray-400">
            <div className="flex justify-between">
            <img src={icon} className="w-[12%] mt-2 ml-10"></img>
            <div>
                <h5 class=" mt-3 text-3xl font-bold font-poppins tracking-tight text-dark">{title}</h5>
                <p class="mt-1 font-normal text-right font-poppins text-dark ">Split, Croatia</p>
            </div>
            </div>
        </a>

        </>
    )
}

export default CareerCard