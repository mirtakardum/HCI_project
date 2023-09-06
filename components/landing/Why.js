function Why(){
    return(
        <>
        <div className="relative bg-dark h-fill pb-10 pt-10">
        <div class={`hidden lg:block absolute top-[17%] left-[10%] h-[8%] w-[4%] z-10 float-right bg-light`}></div>
        <div class={`hidden lg:block absolute top-[24%] left-[15%] h-[4%] w-[2%] z-10 float-right bg-light`}></div>
        <div class={`hidden lg:block absolute top-[28%] right-[20%] h-[4%] w-[2%] z-10 float-right bg-light`}></div>
        <div class={`hidden lg:block absolute top-[10%] right-[30%] h-[5%] w-[3%] z-10 float-right bg-light`}></div>
            <p className="mt-10 text-center text-white font-space font-bold text-7xl">Why Us?</p>
            <div className="xl:flex mt-20 lg:-ml-5 w-full justify-between">
                <div>
                <img src="/images/why1.png" className="h-36 mx-auto"></img>
                <p className="mt-10 text-center text-white font-poppins font-bold text-2xl">Expertise</p>
                <p className="mt-10 ml-14 mb-10 w-[80%] text-white font-poppins text-l">Our team of experianced experts have dealt with some of the toughest
                    challenges in cloud computing. Any problem you experience, we&apos;ll know how to deal with it.</p>
                </div>
                <div>
                <img src="/images/why2.png" className="h-36 mx-auto"></img>
                <p className="mt-10 text-center text-white font-poppins font-bold text-2xl">Technology</p>
                <p className="mt-10 ml-14 mb-10 w-[80%] text-white font-poppins text-l">CloudByte uses the worlds best hardware to achieve speeds no other competitor can match.
                    Be it video/image edditing, running some of the worlds largest neural networks or anything your business might need, CloudByte has the tools to do it.</p>
                </div>
                <div>
                <img src="/images/why3.png" className="h-36 mx-auto"></img>
                <p className="mt-10 text-center text-white font-poppins font-bold text-2xl">Flexibility</p>
                <p className="mt-10 ml-14 mb-10 w-[80%] text-white font-poppins text-l">Changed your business model and in need of new plans? No problem, CloudByte offers a
                    customizable plan for everybody and you can change it up free of charge on a monthly basis.</p>
                </div>
                <div>
                <img src="/images/why4.png" className="h-36 mx-auto"></img>
                <p className="mt-10 text-center text-white font-poppins font-bold text-2xl">Results</p>
                <p className="mt-10 ml-14 mb-10 w-[80%] text-white font-poppins text-l">Our track record speaks for itself. We&apos;ve helped businesses of all sizes and
                    industries achieve their goals and potentials using our cloud infrastructure.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Why