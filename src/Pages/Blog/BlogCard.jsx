import React from 'react';
import { BsBookmark, BsShareFill } from 'react-icons/bs';

const BlogCard = ({ blog }) => {
  console.log(blog);
  const { title, author, date, content } = blog;
  return (
    <div className="px-6 py-7 rounded-lg  bg-white">
      <div className="flex justify-between">
        <div className="flex justify-around items-center gap-4">
          <img className="w-20 h-20 rounded-full" src={author.image} alt="" />
          <div>
            <h3 className="font-bold">{author.name}</h3>
            <h3 className="font-bold"> Publish: {date}</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <BsBookmark></BsBookmark>
          <BsShareFill></BsShareFill>
        </div>
      </div>
      <div className="space-y-4 mt-4">
        <h2 className="text-left text-xl font-semibold">{title}</h2>
        <p className="text-left">{content}</p>
      </div>
      <button className="px-4 py-3 rounded-lg hover:bg-stone-800 bg-stone-600 text-white  justify-end my-4">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
