function CareerCard({ title, icon, slug }) {
    return(
        <>
        <a href={`/careers/${slug}`} className="block w-fit lg:w-[900px] p-3  bg-light border-b border-gray-600  hover:bg-gray-400">
            <div className="flex lg:justify-between">
            <img src={icon} className="w-[18%] lg:w-[12%] mt-2 ml-3 lg:ml-10"></img>
            <div className="w-full lg:w-fit">
                <h5 class=" mt-3 ml-7 lg:ml-0 text-3xl font-bold font-poppins tracking-tight text-dark">{title}</h5>
                <p class="mt-1 font-normal text-right font-poppins text-dark ">Split, Croatia</p>
            </div>
            </div>
        </a>

        </>
    )
}

export default CareerCard