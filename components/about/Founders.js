function Founders() {
    return(
        <>
        <div className = "h-fit bg-light">
            <div className = "h-96 bg-light">
            <h1 class="mb-4 pt-20 text-6xl font-bold leading-none tracking-tight text-white text-center">Founders</h1>
            <div className = "w-full mt-8 px-3 flex justify-between">
                <img src="/images/mirta.png" className="h-60 ml-44"></img>
                <img src="/images/vedran.png" className="h-60"></img>
                <img src="/images/karmen.png" className="h-60 mr-40"></img>
            </div>
            <div className = "font-space text-3xl w-full mt-10 px-3 text-white font-bold flex justify-center justify-between">
                <p className ="ml-52">Mirta Kardum</p>
                <p>Vedran Lunić</p>
                <p className="mr-36">Karmen Županović</p>
            </div>
            <div className = "font-space text-2xl w-full mt-15 px-3 text-white font-bold flex justify-between justify-center">
                <p className= "ml-60">The Brain</p>
                <p>The Money</p>
                <p className= "mr-56">The Muscle</p>
            </div>
            </div>
            <div className="flex mt-48 h-60 bg-dark rounded-lg">
            <div>
                <p className="ml-28 mt-16 text-babyblue font-space font-extrabold text-7xl">500+</p>
                <p className="ml-24 pl-2 text-white font-poppins text-xl">Succesful projects</p>
            </div>
            <div className="h-0.5 mt-28 ml-4 w-[25%] border-dark bg-babyblue" />
            <div>
                <p className="ml-4 mt-16 text-babyblue font-space font-extrabold text-7xl">98%</p>
                <p className="ml-1 text-white font-poppins text-xl">Satisfied Clients</p>
            </div>
            <div className="h-0.5 mt-28 ml-4 w-[25%] border-dark bg-babyblue" />
            <div>
                <p className="ml-10 mt-16 text-babyblue font-space font-extrabold text-7xl">35+</p>
                <p className="text-white font-poppins text-xl">Handled Countries</p>
            </div>
        </div>
        </div>
        </>


    )
}

export default Founders