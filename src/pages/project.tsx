import React from 'react';
import netflixImage from '../assets/netflix.png';
import portfolioImage from '../assets/my-portfolio.png';
import todolistImage from '../assets/To-do.png';
import youtubeImage from '../assets/youtube.png';
import biteBuddyImage from '../assets/food-order.png';

interface Project {
    id: string;
    title: string;
    image: string;
    summary: string;
    tags: string[];
    link: string;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Netflix',
        image: netflixImage,
        summary: 'A netflix clone using react!',
        tags: ['react', 'tailwind', 'typescript'],
        link: 'https://netflix-gpt-three-omega.vercel.app/',
    },
    {
        id: '2',
        title: 'YouTube GPT',
        image: youtubeImage,
        summary: 'React+GPT powered youtube clone!',
        tags: ['react', 'gpt', 'typescript', 'html', 'css'],
        link: 'https://youtube-gpt-three.vercel.app/',
    },
    {
        id: '3',
        title: 'My Portfolio',
        image: portfolioImage,
        summary:
            'Personal portfolio website showcasing projects and skills using React.',
        tags: ['react', 'javascript', 'css', 'responsive'],
        link: 'https://akash-singh-silk.vercel.app/',
    },
    {
        id: '4',
        title: 'BiteBuddy',
        image: biteBuddyImage,
        summary: 'React-based meal ordering app for convenient food delivery.',
        tags: ['react', 'javascript', 'api', 'responsive'],
        link: 'https://food-order-app-three-eosin.vercel.app/',
    },
    {
        id: '5',
        title: 'Todo List',
        image: todolistImage,
        summary:
            'Simple and efficient todo list application built with JavaScript.',
        tags: ['javascript', 'html', 'css', 'localstorage'],
        link: 'https://to-do-list-wine-gamma-43.vercel.app/',
    },
];

const Projects: React.FC = () => {
    return (
        <div className='max-w-4xl mx-auto px-4'>
            <h1 className='text-3xl md:text-4xl font-bold mb-8'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-48 object-cover'
                        />
                        <div className='p-4'>
                            <h2 className='text-xl font-semibold mb-2'>
                                {project.title}
                            </h2>
                            <p className='text-gray-600 dark:text-gray-300 mb-4'>
                                {project.summary}
                            </p>
                            <div className='flex flex-wrap gap-2'>
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className='text-sm text-blue-600 dark:text-blue-400'
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
