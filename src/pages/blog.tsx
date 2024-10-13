import React from "react";
import BlogPost from "../components/BlogPost";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const POSTS = [
  {
    id: "1",
    title: "Learning Next.js 13 App Router: A Comprehensive Guide 🚀",
    date: "Sat Oct 12, 2024",
    readTime: "8 min read",
    summary: "Dive deep into Next.js 13's new App Router, exploring its powerful features and best practices. Learn how to leverage file-based routing, React Server Components, and advanced concepts through a real-world cover letter generator project. Discover how the App Router revolutionizes React application structure and performance...",
    tags: ["nextjs", "approuter", "webdevelopment", "react", "servercomponents", "routing"]
  },
  {
    id: "2",
    title: "Advanced State Management Patterns in React with TypeScript 🧠",
    date: "Tue Oct 3, 2024",
    readTime: "10 min read",
    summary: "Explore advanced state management techniques in React using TypeScript. Learn how to create type-safe, scalable, and maintainable state management solutions. This guide covers custom hooks, context optimization, and integrating external state management libraries with TypeScript for complex React applications.",
    tags: ["react", "typescript", "statemanagement", "hooks", "context", "advancedpatterns"]
  },
  {
    id: "3",
    title: "Understanding React Server Components: A Practical Guide",
    date: "Sat Sept 12, 2024",
    readTime: "6 min read",
    summary: "React Server Components (RSC) are revolutionizing how we approach server-side rendering in React applications. This guide will walk you through what they are, their benefits, and how to implement them in your projects...",
    tags: ["react", "servercomponents", "webdevelopment", "javascript", "frontend"]
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
      <Header />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>
      {POSTS.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;