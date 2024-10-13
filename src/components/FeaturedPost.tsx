import React from "react";
import { Link } from "react-router-dom";
import featuredImage from "../assets/featuredpostimage.png";

import { POSTS } from "./FullBlogPost";

const FeaturedPost: React.FC = () => {
  const latestPost = POSTS[0];

  return (
    <Link to={`/blog/${latestPost.id}`} className="block">
      <div className="max-w-4xl relative mx-auto mt-8 bg-white dark:bg-black shadow-lg border border-black dark:border-gray-600 transition-all duration-300 hover:shadow-xl">
        <div className="absolute -top-4 left-4 tracking-widest bg-white dark:bg-black border border-black dark:border-gray-600 px-6 py-2 text-lg font-semibold text-black dark:text-white">
          LATEST BLOG
        </div>
        <div className="relative">
          <img
            src={featuredImage}
            alt="Featured post image"
            className="w-full mt-10 px-4 object-cover"
          />
        </div>
        <div className="p-6 group">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {latestPost.date} • {latestPost.readTime}
          </p>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 transition-all duration-300 group-hover:scale-[1.01] group-hover:underline">
            {latestPost.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover:scale-[1.01]">
            {latestPost.summary}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedPost;