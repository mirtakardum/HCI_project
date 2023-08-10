import PathDisplay from "@/components/PathDisplay"
import Header from "../components/Header"
import Footer from "@/components/Footer"
import BlogCard from "@/components/blog/BlogCard"
import FilterCard from "@/components/blog/FilterCard"

function Blog(){
    return (
        <>
        <div className="h-fill bg-light">
        <Header theme={"light"}/>
        <PathDisplay title={"Blog"} theme={"light"} />
        <div className="flex justify-between">
        <div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
            <FilterCard />
        </div>
        <Footer theme={"light"} />
        </div>
        </>
    )
}

export default Blog