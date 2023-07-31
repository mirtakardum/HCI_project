import Slider from "react-slick"
import TestimonialSlider from "./TestimonialSlider"

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
            <div className="mt-4">
            <TestimonialSlider />
            </div>
        </div>
        </>
    )
}

export default Testimonials