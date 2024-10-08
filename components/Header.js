import { CiMenuBurger } from "react-icons/ci"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react"
import Headroom, { ReactHeadroomProps } from "react-headroom"
import { safeLocalStorage } from '../helpers';
import Link from "next/link";

function Header({ theme, page }){

    const [mobile, setMobile] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        setIsLoggedIn(safeLocalStorage.getItem('isLoggedIn') === 'true');
        determinePageOnNavbar(theme, page)
    }, []);

    function handleMobile(){
        setMobile(!mobile)
    }

    const [activePage, setActivePage] = useState("home-light")

    function determinePageOnNavbar(theme, page){
        if(page == "home"){
            if(theme == "light"){setActivePage("home-light")}
            else if(theme == "dark"){setActivePage("home-dark")}
        }
        if(page == "services"){
            if(theme == "light"){setActivePage("services-light")}
            else if(theme == "dark"){setActivePage("services-dark")}
        }
        if(page == "pricing"){
            if(theme == "light"){setActivePage("pricing-light")}
            else if(theme == "dark"){setActivePage("pricing-dark")}
        }
        if(page == "about"){
            if(theme == "light"){setActivePage("about-light")}
            else if(theme == "dark"){setActivePage("about-dark")}
        }
        if(page == "careers"){
            if(theme == "light"){setActivePage("careers-light")}
            else if(theme == "dark"){setActivePage("careers-dark")}
        }
        if(page == "blog"){
            if(theme == "light"){setActivePage("blog-light")}
            else if(theme == "dark"){setActivePage("blog-dark")}
        }
    }

    return(
        <>
        <Headroom>
        <nav className={`flex justify-between items-center h-24 w-full mx-auto pl-4 pr-7 ${theme === "light" ? "bg-light bg-opacity-60" : "bg-dark bg-opacity-60"}`}>
            <Link href="/"><img src={theme === "light" ? '/images/logo.png' : '/images/logowhite.png'} alt="Logo" className="w-20 h-20 md:ml-10" /></Link>
            <div className="hidden md:flex pr-6 mx-auto">
            <ul className={`flex ${theme === "light" ? "text-dark" : "text-white"} text-center`}>
                <Link href="/"><li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} ${activePage === "home-light" ? "text-white" : activePage === "home-dark" ? "text-babyblue" : "text-inherit"} cursor-pointer font-poppins font-bold`}>HOME</li></Link>
                <Link href="/services"><li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} ${activePage === "services-light" ? "text-white" : activePage === "services-dark" ? "text-babyblue" : "text-inherit"} cursor-pointer font-poppins font-bold`}>SERVICES</li></Link>
                <Link href="/pricing"><li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} ${activePage === "pricing-light" ? "text-white" : activePage === "pricing-dark" ? "text-babyblue" : "text-inherit"} cursor-pointer font-poppins font-bold`}>PRICING</li></Link>
                <Link href="/about"><li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} ${activePage === "about-light" ? "text-white" : activePage === "about-dark" ? "text-babyblue" : "text-inheritk"} cursor-pointer font-poppins font-bold`}>ABOUT US</li></Link>
                <Link href="/careers"><li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} ${activePage === "careers-light" ? "text-white" : activePage === "careers-dark" ? "text-babyblue" : "text-inherit"} cursor-pointer font-poppins font-bold`}>CAREERS</li></Link>
                <Link href="/blog"><li className={`p-6 h-[100%] text-l ${theme === "light" ? "hover:text-white" : "hover:text-babyblue"} ${activePage === "blog-light" ? "text-white" : activePage === "blog-dark" ? "text-babyblue" : "text-inherit"} cursor-pointer font-poppins font-bold`}>BLOG</li></Link>
            </ul>
            </div>
            <div className="hidden md:flex pr-6">
                <ul className="flex text-black text-center">
                {isLoggedIn == false && <Link href="/login"><button type="button" className={`${theme === "light" ? 'text-gray-900 hover:text-white border-3 border-gray-800 hover:bg-gray-900' : 'text-white hover:text-white border-3 border-white-800 hover:bg-babyblue'} focus:ring-4 focus:outline-none font-bold font-poppins rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>SIGN IN</button></Link>}
                {isLoggedIn == true && <button type="button" className={`${theme === "light" ? 'text-gray-900 hover:text-white border-3 border-gray-800 hover:bg-gray-900' : 'text-white hover:text-white border-3 border-white-800 hover:bg-babyblue'} focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold font-poppins rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`} onClick={() => {safeLocalStorage.setItem('isLoggedIn', false), setIsLoggedIn(false)}}>SIGN OUT</button>}
                </ul>
            </div>
            <div className="lg:hidden">
            {mobile ? <AiOutlineClose size={30} className={`${theme === "light" ? "fill-dark" : "fill-white"}`} onClick={handleMobile} /> : <CiMenuBurger size={30} className={`${theme === "light" ? "fill-dark" : "fill-white"}`} onClick={handleMobile}/>}
            </div>
        </nav>
            </Headroom>
            <nav>
            <div className={mobile ? 'block md:hidden fixed left-0 top-0 w-[60%] h-full bg-dark z-30 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className="pt-14">
                    <li className="p-6 h-[100%] text-l text-babyblue cursor-pointer font-poppins font-bold">HOME</li>
                    <Link href="/services"><li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">SERVICES</li></Link>
                    <Link href="/pricing"><li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">PRICING</li></Link>
                    <Link href="/about"><li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">ABOUT US</li></Link>
                    <Link href="/careers"><li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">CAREERS</li></Link>
                    <Link href="/blog"><li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">BLOG</li></Link>
                    <Link href="/login"><li className="p-6 h-[100%] text-l text-white hover:text-white cursor-pointer font-poppins font-bold">SIGN IN</li></Link>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Header