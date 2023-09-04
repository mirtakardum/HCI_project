import Header from '@/components/Header';
import api from '../../api';
import PathDisplay from '@/components/PathDisplay';
import Image from 'next/image';
import Footer from '@/components/Footer';


function BlogPost({ post }){
    return(
        <>
        <div className='h-fill bg-light'>
            <Header theme={"light"} page={"blog"} />
            <PathDisplay title={"Blog"} theme={"light"} subpage={post.title} />
            <Image
            src={post.img}
            width={400}
            height={200}
            className='mt-10 w-[60%] mx-auto' />
            <p className='mt-10 font-space font-bold text-5xl text-center'>{post.title}</p>
            <div className="flex justify-center mt-5">
                <img className="w-20 h-20 rounded-full shadow-lg" src={post.authorImage} alt="Author image"/>
                <div>
                    <h5 className="mt-4 ml-3 text-xl font-medium text-gray-900 dark:text-white">{post.author}</h5>
                    <span className="text-sm ml-3 text-gray-500 dark:text-gray-400">{post.authorTitle}</span>
                </div>
            </div>
            <p className='font-poppins italic text-4xl text-center mt-10'>{post.subtitle}</p>
            <p className='font-poppins text-xl ml-20 mt-20'>{post.body}</p>
            <Footer theme={"light"}/>
        </div>
        </>
    )
}

export default BlogPost

export async function getStaticPaths() {
    const posts = await api.getPosts();

    const paths = posts.map((post) => ({
        params: {
            blogId: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { blogId } }) {
    const post = await api.getPostBySlug(blogId);

    return {
        props: {
            post,
        },
    };
}