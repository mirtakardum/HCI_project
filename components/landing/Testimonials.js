
function Testimonials(){
    return(
        <>
        <div className="bg-dark h-fill pt-4">
            <p className="text-center mt-2 w-[80%] mx-auto font-space font-bold text-white text-5xl">
                We work with some of the worlds biggest brands</p>
            <div className="flex justify-between mt-10 ml-20 mr-20">
                <img src="/images/apple.png" className="h-20"></img>
                <img src="/images/youtube.png" className="h-20"></img>
                <img src="/images/spotify.png" className="h-20"></img>
                <img src="/images/twitter.png" className="h-20"></img>
            </div>
            <div className="mx-auto block mt-10 w-[60%] h-80 bg-gradient-to-b from-gray-600 to-slate-900 rounded-lg shadowx">
                <p className="text-center font-poppins text-white text-4xl pt-10 w-[80%] mx-auto">"Switching to MVK made our life so much easier. We require some of the fastest computing possible
                        to keep our clients' experience at a premium level and MVK makes it look easy."</p>
            </div>
            <div className="flex justify-between mt-4 pb-10">
                <img src="/images/arrow-left.svg" className="h-14 ml-32 cursor-pointer"></img>
                <div>
                    <img src="/images/spotifyCEO.jpg" className="h-20 mx-auto rounded-full"></img>
                    <p className="mt-4 text-white text-center font-poppins font-bold text-l">Daniel Ek</p>    
                    <p className="text-white text-center font-poppins text-l">CEO of Spotify</p>    
                </div>    
                <img src="/images/arrow2.svg" className="h-14 mr-32 cursor-pointer"></img>
            </div>     
        </div>
        </>
    )
}

export default Testimonials