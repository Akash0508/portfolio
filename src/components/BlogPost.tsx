import React from "react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
}

const BlogPost: React.FC<BlogPostProps> = ({ id, title, date, readTime, summary, tags }) => {
  return (
    <div className="max-w-4xl relative mx-auto mt-8 bg-white dark:bg-black shadow-lg border border-black dark:border-gray-600">
      <div className="p-6">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {date} • {readTime}
        </p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-sm text-blue-600 dark:text-blue-400">#{tag}</span>
          ))}
        </div>
        <Link to={`/blog/${id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;