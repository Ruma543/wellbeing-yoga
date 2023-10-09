import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blog = () => {
  const blogs = useLoaderData();
  // console.log(blogs);
  return (
    <div className=" bg-stone-200 px-6 py-6 ">
      <h2 className="text-2xl font-semibold text-center">Our Recent Blogs</h2>
      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 gap-5 w-11/12 mx-auto ">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
