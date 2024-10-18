import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface BlogPostContent {
  id: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string;
}

export const POSTS: Omit<BlogPostContent, "content">[] = [
    {
      id: "1",
      title: "Learning Next.js 13 App Router: A Comprehensive Guide 🚀",
      author: "Priyansh Singh",
      date: "Sat Oct 12 2024",
      readTime: "8 min read",
      summary: "Dive deep into Next.js 13's new App Router, exploring its powerful features and best practices. Learn how to leverage file-based routing, React Server Components, and advanced concepts through a real-world cover letter generator project. Discover how the App Router revolutionizes React application structure and performance...",
      tags: ["nextjs", "approuter", "webdevelopment", "react", "servercomponents", "routing"]
    },
    {
      id: "2",
      title: "Advanced State Management Patterns in React with TypeScript 🧠",
      author: "Priyansh Singh",
      date: "Thu Oct 3 2024",
      readTime: "10 min read",
      summary: "Explore advanced state management techniques in React using TypeScript. Learn how to create type-safe, scalable, and maintainable state management solutions. This guide covers custom hooks, context optimization, and integrating external state management libraries with TypeScript for complex React applications.",
      tags: ["react", "typescript", "statemanagement", "hooks", "context", "advancedpatterns"]
    },
    {
      id: "3",
      title: "Understanding React Server Components: A Practical Guide",
      author: "Priyansh Singh",
      date: "Thu Sept 5 2024",
      readTime: "6 min read",
      summary: "React Server Components (RSC) are revolutionizing how we approach server-side rendering in React applications. This guide will walk you through what they are, their benefits, and how to implement them in your projects...",
      tags: ["react", "servercomponents", "webdevelopment", "javascript", "frontend"]
    }
  ];

const FullBlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>("");
  const post = POSTS.find((post) => post.id === id);

  useEffect(() => {
    if (post) {
      import(`../blog-posts/${post.id}.md`)
        .then((module) => {
          fetch(module.default)
            .then((res) => res.text())
            .then((text) => setContent(text))
            .catch((err) =>
              console.error("Error loading blog post content:", err)
            );
        })
        .catch((err) => console.error("Error importing blog post:", err));
    }
  }, [post]);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <Link
            to="/blog"
            className="text-gray-800 dark:text-gray-200 mb-11 hover:underline text-lg flex items-center"
          >
            <span className="mr-1">←</span> Back
          </Link>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {post.author}, {post.date} • {post.readTime}
        </p>
        <article className="prose dark:prose-invert prose-lg lg:prose-xl max-w-none">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-semibold mb-4 mt-8" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-semibold mb-3 mt-6" {...props} />
              ),
              p: ({ node, ...props }) => <p className="text-lg mb-4" {...props} />,
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-6 mb-4" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal pl-6 mb-4" {...props} />
              ),
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-md my-4 bg-gray-100 dark:bg-gray-800"
                    customStyle={{
                      fontSize: '0.8rem !important',
                      padding: '1em',
                      margin: '0.5em 0',
                    }}
                    codeTagProps={{
                      style: {
                        fontSize: 'inherit !important',
                      },
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                    style={{ fontSize: '0.8rem !important' }}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-lg text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FullBlogPost;