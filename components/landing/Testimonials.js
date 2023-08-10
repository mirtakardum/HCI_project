import Slider from "react-slick"
import TestimonialSlider from "./TestimonialSlider"

function Testimonials(){
    return(
        <>
        <div className="bg-dark h-fill pt-4">
            <p className="text-center mt-6 w-[80%] mx-auto font-space font-bold text-white text-3xl lg:text-5xl">
                We work with some of the worlds biggest brands</p>
            <div className="flex justify-evenly mt-12 ml-8 lg:ml-20 mr-8 lg:mr-20">
                <img src="/images/apple.png" className="h-12 lg:h-16"></img>
                <img src="/images/youtube.png" className="h-12 lg:ml-0 lg:h-16"></img>
                <img src="/images/spotify.png" className="h-12 lg:ml-0 lg:h-16"></img>
                <img src="/images/twitter.png" className="h-12 lg:ml-0 lg:h-16"></img>
            </div>
            <div className="mt-4">
            <TestimonialSlider />
            </div>
        </div>
        </>
    )
}

export default Testimonials