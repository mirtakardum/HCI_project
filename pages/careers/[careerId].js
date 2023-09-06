import Header from '@/components/Header';
import api from '../../api';
import PathDisplay from '@/components/PathDisplay';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Head from 'next/head';

function CareerPost({ post }){
    return(
        <>
        <Head>
            <title>Careers - {post.title}</title>
        </Head>
        <div className='h-fill bg-light'>
            <Header theme={"light"} page={"blog"} />
            <PathDisplay title={"careers"} theme={"light"} subpage={post.title} />
            <p className='mt-10 font-space font-bold text-5xl ml-5 lg:ml-20'>{post.title}</p>
            <p className='font-poppins italic mt-5 text-3xl ml-5 lg:ml-20'>{post.location}, Croatia</p>
            <p className='font-poppins italic text-4xl ml-5 lg:ml-20 mt-10'>{post.subtitle}</p>
            <p className='font-poppins text-2xl ml-10 lg:ml-20 mt-20 font-bold'>What we expect:</p>
            {post.demands.map(demand => 
                <p className='font-poppins text-xl ml-10 lg:ml-20 mt-2'>- {demand}</p>)}
            <p className='font-poppins text-2xl ml-10 lg:ml-20 mt-20 font-bold'>What we offer:</p>
            {post.offers.map(offer => 
                <p className='font-poppins text-xl ml-10 lg:ml-20 mt-2'>- {offer}</p>)}
            <p className='font-poppins text-2xl text-center font-bold mt-10'>Think you got what it takes?</p>
            <form className='w-[60%] mx-auto mt-10 bg-dark rounded-lg p-10'>
                <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-m text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-m text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-m text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>                
                <label className="block mb-2 text-m font-medium text-gray-500" for="cv">Upload CV</label>
                <input className="block w-full text-m text-gray-500 border-2 border-gray-300 rounded-md cursor-pointer bg-dark focus:outline-none" aria-describedby="cv_help" id="cv" type="file" />
                <button type="submit" className="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            <Footer theme={"light"}/>
        </div>
        </>
    )
}
export default CareerPost

export async function getStaticPaths() {
    const posts = await api.getPosts();

    const paths = posts.map((post) => ({
        params: {
            careerId: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { careerId } }) {
    const post = await api.getPostBySlug(careerId);

    return {
        props: {
            post,
        },
    };
}