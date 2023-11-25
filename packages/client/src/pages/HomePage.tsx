import { BlogCard } from "../components/BlogCard";
import { useState } from "react";
import { useBlogContext } from "../context/BlogContext";
import BlogPost from "../Models/BlogPost";

export default function HomePage() {
   const {blogPosts } = useBlogContext()
  const [count, setCount] = useState(0)
 const [blogData, setBlogData] = useState<BlogPost[]>(blogPosts)
    
  return (
    <div className="home-page">
      <div className="w-full bg-red-400 ">
        <div className="flex  flex-wrap justify-center gap-2">
          {blogData.map((blogPost) => {
            if (blogPost.id === 2) {
              console.log(blogPost);
            }
            return <BlogCard key={blogPost.id} blogPost={blogPost} />;
          })}
        </div>
      </div>
    </div>
  )
}