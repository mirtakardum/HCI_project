import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { safeLocalStorage } from '../helpers';
import { BsFillArrowLeftCircleFill } from "react-icons/bs"


function Login(){
    const [error, setError] = useState('');
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(safeLocalStorage.getItem('isLoggedIn') === 'true');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
                setLoading(false);
                alert('Login successful!');
                setIsLoggedIn(true);
                safeLocalStorage.setItem('isLoggedIn', true);
            }, 1000);

        router.push("/")
    };
    return (
        <>
        <div class="relative bg-dark dark:bg-gray-900">
        <BsFillArrowLeftCircleFill size={50} color='white' className='absolute top-[10%] left-[10%] cursor-pointer' onClick={() => router.push("/")}/>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-3xl font-semibold text-white dark:text-white">
                <img class="w-14 h-14 mr-2" src="/images/logowhite.png" alt="logo" />
                CloudByte  
            </a>
            <div class="w-full bg-dark rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-400 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" class="bg-dark border-b border-gray-400 text-gray-400 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-dark border-b border-gray-400 text-gray-400 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm text-gray-400 font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" class="w-full text-dark bg-gray-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Sign in</button>
                        <p class="text-sm font-light text-gray-400 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                    {error && <p className='text-lg text-gray-400 text-center'>{error}</p>}
                </div>
            </div>
        </div>
      </div>
      </>
    );
};

export default Login;