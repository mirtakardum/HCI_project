
function BlogCard(){
    return(
        <>    
        <div className="mt-20 ml-20 max-w-3xl bg-white rounded-lg shadow-m">
            <a href="#">
                <img className="rounded-t-lg h-60 object-fill w-full" src="/images/responsive.jpg" alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Benefits of Reponsive Web Design For Business</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This article explores the advantages of implementing a responsive web design for businesses, including improved user experience, increased mobile traffic, and better SEO.</p>
                <div className="flex justify-between">
                    <div className="flex">
                    <img className="w-20 h-20 rounded-full shadow-lg" src="/images/ai-face-1.jpg" alt="Bonnie image"/>
                    <div>
                        <h5 className="mt-4 ml-3 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm ml-6 text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                    </div>
                    <button type="button" className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br shadow-lg font-medium rounded-lg text-m h-14 w-24 text-center mt-4 mr-4">Read More</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogCard