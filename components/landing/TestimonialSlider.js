import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { BiRightArrowAlt } from "react-icons/bi"

function TestimonialSlider(){

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <BsFillArrowLeftCircleFill />
        };

    return(
        <>
        <div className="relative mx-auto w-[90%] pb-10">
            <Slider {...settings}>
                <div>
                    <div className="mx-auto block mt-10 w-80 lg:w-[60%] h-80 bg-gradient-to-b from-gray-600 to-slate-900 rounded-lg shadowx">
                        <p className="text-center font-poppins text-white text-xl lg:text-3xl pt-16 w-[80%] mx-auto">"Switching to CloudByte made our life so much easier. We require some of the fastest computing possible
                                to keep our clients' experience at a premium level and CloudByte makes it look easy."</p>
                    </div>
                    <div className="mx-auto mt-4">
                        <img src="/images/spotifyCEO.jpg" className="h-20 mx-auto rounded-full"></img>
                        <p className="mt-4 text-white text-center font-poppins font-bold text-l">Daniel Ek</p>    
                        <p className="text-white text-center font-poppins text-l">CEO of Spotify</p>    
                    </div>    
                </div>
                <div>
                    <div className="mx-auto block mt-10 w-80 lg:w-[60%] h-80 bg-gradient-to-b from-gray-600 to-slate-900 rounded-lg shadowx">
                        <p className="text-center font-poppins text-white text-xl lg:text-3xl pt-16 w-[80%] mx-auto">"OpenAI is constantly developing the world's largest and most complex ML models. Those kind of models
                             require the fastest possible hardware to train. CloudByte supplies that, and then some."</p>
                    </div>
                    <div className="mx-auto mt-4">
                        <img src="/images/openAICEO.jpg" className="h-20 mx-auto rounded-full"></img>
                        <p className="mt-4 text-white text-center font-poppins font-bold text-l">Sam Altman</p>    
                        <p className="text-white text-center font-poppins text-l">CEO of OpenAI</p>    
                    </div>    
                </div>
                <div>
                    <div className="mx-auto block mt-10 w-80 lg:w-[60%] h-80 bg-gradient-to-b from-gray-600 to-slate-900 rounded-lg shadowx">
                        <p className="text-center font-poppins text-white text-xl lg:text-3xl pt-16 w-[80%] mx-auto">"We have to run countless simulations each and every day, so time is of the essence. CloudByte's insane hardware
                         and connection speeds allows us do so with ease."</p>
                    </div>
                    <div className="mx-auto mt-4">
                        <img src="/images/spaceXCEO.jpg" className="h-20 mx-auto rounded-full"></img>
                        <p className="mt-4 text-white text-center font-poppins font-bold text-l">Elon Musk</p>    
                        <p className="text-white text-center font-poppins text-l">CEO of SpaceX</p>    
                    </div>    
                </div>
            </Slider>
        </div>
        </>
    )
}

export default TestimonialSlider