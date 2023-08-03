import { CiMenuBurger } from "react-icons/ci"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

function Header({ theme }){

    const [mobile, setMobile] = useState(false)

    function handleMobile(){
        setMobile(!mobile)
    }

    return(
        <>
        <nav className="flex justify-between items-center h-24 w-full mx-auto pl-4 pr-7">
            <a href="/"><img src={theme === "light" ? '/images/logo.png' : '/images/logowhite.png'} className="w-20 h-20 md:ml-10" /></a>
            <div className="hidden md:flex pr-6 mx-auto">
            <ul className={`flex ${theme === "light" ? "text-dark" : "text-white"} text-center`}>
                <li className={`p-6 h-[100%] text-l ${theme === "light" ? "text-white" : "text-babyblue"} cursor-pointer font-poppins font-bold`}>HOME</li>
                <a href="/services"><li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} cursor-pointer font-poppins font-bold`}>SERVICES</li></a>
                <li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} cursor-pointer font-poppins font-bold`}>PRICING</li>
                <li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} cursor-pointer font-poppins font-bold`}>ABOUT US</li>
                <li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} cursor-pointer font-poppins font-bold`}>BLOG</li>
            </ul>
            </div>
            <div className="hidden md:flex pr-6">
                <ul className="flex text-black text-center">
                <button type="button" className={`${theme === "light" ? 'text-gray-900 hover:text-white border-3 border-gray-800 hover:bg-gray-900' : 'text-white hover:text-white border-3 border-white-800 hover:bg-babyblue'} focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold font-poppins rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>SIGN IN</button>
                </ul>
            </div>
            <div className="mb-2 flex md:hidden" onClick={handleMobile}>
                {!mobile ? <AiOutlineClose size={30} /> : <CiMenuBurger size={30}/>}
            </div>
            <div className={!mobile ? 'block md:hidden fixed left-0 top-0 w-[60%] h-full bg-dark z-30 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className="pt-14">
                    <li className="p-6 h-[100%] text-l text-babyblue cursor-pointer font-poppins font-bold">HOME</li>
                    <a href="/services"><li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">SERVICES</li></a>
                    <li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">PRICING</li>
                    <li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">ABOUT US</li>
                    <li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">BLOG</li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Header