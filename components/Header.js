function Header(){
    return(
        <>
        <nav className="flex justify-between items-center h-24 w-full mx-auto pl-4 pr-7 bg-light">
                <a href="/"><img src="/images/logo.png" className="w-20 h-20 ml-10" /></a>
                <div className="flex pr-6 mx-auto">
                <ul className="flex text-dark text-center">
                    <li className="p-6 h-[100%] text-l text-white cursor-pointer font-poppins font-regular">HOME</li>
                    <li className="p-6 h-[100%] text-l hover:text-white cursor-pointer font-poppins font-regular">SERVICES</li>
                    <li className="p-6 h-[100%] text-l hover:text-white cursor-pointer font-poppins font-regular">PRICING</li>
                    <li className="p-6 h-[100%] text-l hover:text-white cursor-pointer font-poppins font-regular">ABOUT US</li>
                    <li className="p-6 h-[100%] text-l hover:text-white cursor-pointer font-poppins font-regular">BLOG</li>
                </ul>
                </div>
                <div className="flex pr-6">
                    <ul className="flex text-black text-center">
                    <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">SIGN IN</button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header