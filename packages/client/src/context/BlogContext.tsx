/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';
import BlogPost from '../Models/BlogPost';

// Create the context
const BlogContext = createContext(null);

// generate random id
const generateId = () => {
 return crypto.randomUUID()
};


export const useBlogContext = () => {
  const context = useContext(BlogContext)
  if (!context) {
    return 'you need to call this inside of a children of Blog provider'
  }
  return context
}


export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Introduction to JavaScript",
      author: "John Doe",
      content: "A beginner's guide to JavaScript programming language.",
    },
    {
      id: 2,
      title: "Exploring React Framework",
      author: "Jane Smith",
      content: "Discover the power of building author interfaces with React.",
    },
    {
      id: 3,
      title: "Node.js: Server-side JavaScript",
      author: "Mike Johnson",
      content: "Learn how to use Node.js for server-side development.",
    },
    {
      id: 4,
      title: "Web Design Best Practices",
      author: "Emily Davis",
      content: "Tips and tricks for creating visually appealing websites.",
    },
    {
      id: 5,
      title: "Getting Started with Python",
      author: "Alex Turner",
      content: "A quick overview of Python programming language for beginners.",
    },
  ]);
  
  const addBlogPost = (title:string, content:string,author:string,id:string) => {
    setBlogPosts([...blogPosts, { title, content,author,id }]);
  };

  const deleteBlogPost = (id) => {
    setBlogPosts(blogPosts.filter((post, index) => index !== id));
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost, deleteBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};


export default BlogContext;
