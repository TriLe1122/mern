
'use client';

import { Card } from 'flowbite-react';
import BlogPost from "../Models/BlogPost.js";




type Props ={
  blogPost:BlogPost
  
}

export function BlogCard({ blogPost }:Props) {
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://images.unsplash.com/photo-1700748881202-3c6e94c3b1ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       {blogPost?.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {blogPost?.content}
      </p>
    </Card>
  );
}



