function Navbar(){
    return(
        <>
        <nav className="flex justify-between items-center h-24 w-full mx-auto pl-9 pr-7 pt-2 bg-dark">
                <a href="/"><img src="/images/logowhite.png" className="w-20 h-20 ml-10" /></a>
                <div className="flex pr-6 mx-auto">
                <ul className="flex text-white text-center">
                    <li className="p-6 h-[100%] text-l hover:text-babyblue cursor-pointer font-poppins font-bold">HOME</li>
                    <li className="p-6 h-[100%] text-l text-babyblue cursor-pointer font-poppins font-bold">SERVICES</li>
                    <li className="p-6 h-[100%] text-l hover:text-babyblue cursor-pointer font-poppins font-bold">PRICING</li>
                    <li className="p-6 h-[100%] text-l hover:text-babyblue cursor-pointer font-poppins font-bold">ABOUT US</li>
                    <li className="p-6 h-[100%] text-l hover:text-babyblue cursor-pointer font-poppins font-bold">BLOG</li>
                </ul>
                </div>
                <div className="flex pr-6">
                    <ul className="flex text-white text-center">
                    <button type="button" class="text-white-900 hover:text-white border-3 border-white-800 hover:bg-babyblue focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold font-poppins rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white-600 dark:focus:ring-gray-800">SIGN IN</button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar