function Founders() {
    return(
        <>
        <div className = "h-fit bg-light">
            <div className = "h-[1100px] lg:h-[400px] bg-light">
                <h1 class="mb-4 pt-20 text-6xl font-bold leading-none tracking-tight text-white text-center">Founders</h1>
                <div className = "mt-8 lg:flex justify-between">
                    <div className="lg:ml-40 text-center">
                        <img src="/images/mirta.png" className="h-60 mx-auto"></img>
                        <p className ="font-space font-bold text-3xl mt-6 text-white">Mirta Kardum</p>
                        <p className= "font-space text-2xl mt-15 text-white font-bold">The Brain</p>
                    </div>
                    <div className="text-center">
                        <img src="/images/vedran.png" className="h-60 mx-auto mt-10 lg:mt-0"></img>
                        <p className ="font-space font-bold text-3xl lg:mt-6 text-white">Vedran Lunić</p>
                        <p className= "font-space text-2xl mt-15 text-white font-bold">The Money</p>
                    </div>
                    <div className="lg:mr-40 text-center">
                        <img src="/images/karmen.png" className="h-60 lg:ml-5 ml-24 mt-10 lg:mt-0"></img>
                        <p className ="font-space font-bold text-3xl lg:mt-6 text-white">Karmen Županović</p>
                        <p className= "font-space text-2xl mt-15 text-white font-bold">The Muscle</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex mt-48 h-fit lg:h-60 bg-dark rounded-lg">
            <div>
                <p className="text-center ml-7 lg:ml-28 mt-16 pt-5 lg:pt-0 text-babyblue font-space font-extrabold text-7xl">500+</p>
                <p className="text-center lg:ml-24 pl-2 text-white font-poppins text-xl">Succesful projects</p>
            </div>
            <div className="h-0.5 mt-10 lg:mt-28 mx-auto lg:mx-0 lg:ml-4 w-[25%] border-dark bg-babyblue" />
            <div>
                <p className="text-center lg:ml-4 mt-7 lg:mt-16 text-babyblue font-space font-extrabold text-7xl">98%</p>
                <p className="text-center lg:ml-1 text-white font-poppins text-xl">Satisfied Clients</p>
            </div>
            <div className="h-0.5 mt-10 lg:mt-28 mx-auto lg:mx-0 lg:ml-4 w-[25%] border-dark bg-babyblue" />
            <div>
                <p className="text-center ml-10 lg:ml-10 mt-7 lg:mt-16 text-babyblue font-space font-extrabold text-7xl">35+</p>
                <p className="text-center pb-5 lg:pb-0 text-white font-poppins text-xl">Handled Countries</p>
            </div>
        </div>
        </div>
        </>


    )
}

export default Founders