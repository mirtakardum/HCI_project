import Head from "next/head";

function Payment(){
    return (
        <>
        <Head>
            <title>Payment</title>
        </Head>
        <div className="h-full bg-light">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-3xl font-semibold text-dark dark:text-white">
                <img class="w-14 h-14 mr-2" src="/images/logo.png" alt="logo" />
                CloudByte  
            </a>
            <div class="w-full bg-light rounded-lg border-2 border-dark shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                        Payment
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div className="flex justify-between">
                            <div>
                                <label for="name" class="block mb-2 text-sm font-medium text-dark">First Name</label>
                                <input type="name" name="name" id="name" class="bg-light border-b border-dark text-dark sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full placeholder:text-dark p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required=""/>
                            </div>
                            <div>
                                <label for="lastName" class="block mb-2 text-sm font-medium text-dark">Last Name</label>
                                <input type="lastName" name="lastName" id="lastName" class="bg-light border-b border-dark text-dark sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full placeholder:text-dark p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required=""/>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <label for="country" class="block mb-2 text-sm font-medium text-dark">Country</label>
                                <input type="country" name="country" id="country" class="bg-light border-b border-dark text-dark sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full placeholder:text-dark p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. Croatia" required=""/>
                            </div>
                            <div>
                                <label for="city" class="block mb-2 text-sm font-medium text-dark">City</label>
                                <input type="city" name="city" id="city" class="bg-light border-b border-dark text-dark sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full placeholder:text-dark p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. Split" required=""/>
                            </div>
                        </div>
                        <div className="w-[80%]">
                            <label for="zip" class="block mb-2 text-sm font-medium text-dark">Zip Code</label>
                            <input type="number" name="zip" id="zip" class="bg-light border-b border-dark text-dark sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full placeholder:text-dark p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. 12345" required=""/>
                        </div>
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
                        Card Details
                        </h1>
                        <div className="w-[80%]">
                            <label for="name" class="block mb-2 text-sm font-medium text-dark">Full name as displayed on card*</label>
                            <input type="name" name="name" id="name" class="bg-light border-b border-dark text-dark sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full placeholder:text-dark p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-dark dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required=""/>
                        </div>
                        <label class="relative w-full flex flex-col">
                        <span class="mb-3">Card number</span>
                        <input className="peer pl-12 pr-2 py-2 bg-light border-b border-dark placeholder-dark" type="text" name="card_number" placeholder="xxxx xxxx xxxx" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        </label>

                    <label class="relative flex-1 flex flex-col">
                        <span class="mb-3">Expire date</span>
                        <input className="peer pl-12 pr-2 py-2 bg-light border-b border-dark placeholder-dark" type="text" name="expire_date" placeholder="MM/YY" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </label>

                    <label class="relative flex-1 flex flex-col">
                        <span class="flex items-center gap-3 mb-3">
                        CVC/CVV
                        <span class="relative group">
                            <span class="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"> 3 digit number on the back of the card </span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        </span>
                        <input class="peer pl-12 pr-2 py-2 bg-light border-b border-dark placeholder-dark" type="text" name="card_cvc" placeholder="123" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </label>
                        <button type="submit" class="w-full text-white bg-dark hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Pay</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
      </>
    );
}

export default Payment