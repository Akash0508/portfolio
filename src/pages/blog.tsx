import React from 'react';
import BlogPost from '../components/BlogPost';

const POSTS = [
    {
        id: '1',
        title: 'Advanced State Management Patterns in React with TypeScript 🧠',
        date: 'Tue Oct 3, 2024',
        readTime: '10 min read',
        summary:
            'Explore advanced state management techniques in React using TypeScript. Learn how to create type-safe, scalable, and maintainable state management solutions. This guide covers custom hooks, context optimization, and integrating external state management libraries with TypeScript for complex React applications.',
        tags: [
            'react',
            'typescript',
            'statemanagement',
            'hooks',
            'context',
            'advancedpatterns',
        ],
    },
];

const Blog: React.FC = () => {
    return (
        <div className='max-w-4xl mx-auto px-4'>
            <h1 className='text-4xl font-bold mb-8'>Blogs</h1>
            {POSTS.map((post) => (
                <BlogPost key={post.id} {...post} />
            ))}
        </div>
    );
};

export default Blog;
