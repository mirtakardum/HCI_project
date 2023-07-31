import { BiRightArrowAlt } from "react-icons/bi"
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"


function Footer(){
    return(
        <>
        <div className="pt-10 h-96 bg-light">
            <div className="flex">
                <div>
                <p className="font-poppins text-dark text-7xl font-bold ml-40 mt-10">MVK</p>
                <img src="/images/cta-button.png" className="h-28 ml-44 mt-14 cursor-pointer"></img>
                </div>
                <div className="flex ml-60 mt-10">
                    <div>
                        <p className="font-poppins text-dark text-2xl font-bold">Newsletter</p>
                        <div className="relative">
                            <input type="text" id="email" className="mt-10 bg-light border-b-2 border-dark pb-2 pr-10 text-dark placeholder-gray-600" placeholder="Email Address"></input>
                            <div className="absolute top-9 right-0 flex">
                                <BiRightArrowAlt size={32}/>
                            </div>
                        </div>
                        <div className="flex mt-20">
                            <AiFillInstagram size={35} className="cursor-pointer"/>
                            <BiLogoFacebook size={35} className="ml-10 cursor-pointer"/>
                            <BiLogoTwitter size={35} className="ml-10 cursor-pointer"/>
                        </div>
                    </div>
                    <div className="ml-40">
                        <p className="font-poppins text-dark text-2xl font-bold">Explore</p>
                        <ul className="flex-col">
                            <a href="/aboutus"><li className="font-poppins text-dark text-l mt-2">About us</li></a>
                            <a href="/services"><li className="font-poppins text-dark text-l mt-2">Services</li></a>
                            <a href="/pricing"><li className="font-poppins text-dark text-l mt-2">Pricing</li></a>
                            <a href="/blog"><li className="font-poppins text-dark text-l mt-2">Blog</li></a>
                            <a href="/careers"><li className="font-poppins text-dark text-l mt-2">Careers</li></a>
                        </ul>
                    </div>
                    <div className="ml-40">
                        <p className="font-poppins text-dark text-2xl font-bold">Contact</p>
                        <ul className="flex-col">
                            <a href="/"><li className="font-poppins text-dark text-l mt-2">Email</li></a>
                            <a href="/"><li className="font-poppins text-dark text-l mt-2">Phone</li></a>
                            <a href="/"><li className="font-poppins text-dark text-l mt-2">Address</li></a>
                            <a href="/"><li className="font-poppins text-dark text-l mt-2">Social Media</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer