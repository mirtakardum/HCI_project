
function BlogCard({ title, description, image, authorName, authorPicture, authorTitle, tag }){
    return(
        <>    
        <div className="mt-20 ml-10 lg:ml-20 w-80 lg:max-w-3xl bg-white rounded-lg shadow-m">
            <div>
                <img className="rounded-t-lg h-60 object-fill w-full" src={image} alt="" />
            </div>
            <div class="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <div className="flex justify-between">
                    <div className="flex">
                        <img className="w-20 h-20 rounded-full shadow-lg" src={authorPicture} alt="Author image"/>
                        <div>
                            <h5 className="mt-4 ml-3 text-xl font-medium text-gray-900 dark:text-white">{authorName}</h5>
                            <span className="text-sm ml-6 text-gray-500 dark:text-gray-400">{authorTitle}</span>
                        </div>
                    </div>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 hover:bg-gradient-to-br shadow-lg font-medium rounded-lg text-m h-14 w-24 text-center mt-4 mr-4">Read More</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogCard