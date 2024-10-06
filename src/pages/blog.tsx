import React from "react";
import BlogPost from "../components/BlogPost";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const POSTS = [
  {
    id: "1",
    title: "Re-thinking styling in build time with react-native-ustyle 🐱",
    date: "Sat Feb 24 2024",
    readTime: "5 min read",
    summary: "Introducing react-native-ustyle that challenges the traditional way of styling in react native. Since react-native's initial launch in 2015, there have been numerous styling libraries built to simplify the styling of components...",
    tags: ["compiletime", "css-in-js", "reactnative", "styling", "buildtime"]
  },
  {
    id: "2",
    title: "Using NativeBase v3 The Right Way!",
    date: "Thu Oct 14 2021",
    readTime: "7 min read",
    summary: "NativeBase is a component library that enables devs to build universal design systems. It is built on top of React Native, offering cross-platform components for mobile and web applications...",
    tags: ["javascript", "reactnative", "react", "nativebase"]
  },
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
      <Header />
      <Navbar />
      {POSTS.map((post) => (
        <BlogPost key={post.id} {...post} />
      ))}
      <Footer />
    </div>
  );
};

export default Blog;