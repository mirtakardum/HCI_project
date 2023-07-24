function Header(){
    return(
        <>
            <nav className="flex justify-between items-center h-24 w-full mx-auto pl-4 pr-7 bg-light">
                <a href="/"><img src="/images/logo.png" className="w-20 h-20 ml-10" /></a>
                <div className="flex pr-6">
                <ul className="flex text-white">
                    <li className="p-6 h-[100%] text-xl hover:bg-[#4f4f4f] cursor-pointer font-poppins font-extrabold">SERVICES</li>
                    <li className="p-6 h-[100%] text-xl hover:bg-[#4f4f4f] cursor-pointer font-poppins font-extrabold">PRICING</li>
                    <li className="p-6 h-[100%] text-xl hover:bg-[#4f4f4f] cursor-pointer font-poppins font-extrabold">ABOUT US</li>
                    <li className="p-6 h-[100%] text-xl hover:bg-[#4f4f4f] cursor-pointer font-poppins font-extrabold">BLOG</li>
                    <button type="button" className="text-gray-900 h-10 hover:text-white border-3 border-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 text-xl font-poppins font-extrabold rounded-lg px-5 text-center mr-2 my-4 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">SIGN IN</button>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Header