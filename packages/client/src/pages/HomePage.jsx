import { BlogCard } from "../components/BlogCard";
import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">
    <div className="w-full bg-red-400 ">
        <div className="flex ">
          <BlogCard/>
      </div>
    </div>
    </div>
  )
}