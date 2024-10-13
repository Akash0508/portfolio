import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images
import resumateImage from '../assets/Resumate.png';
import portfolioImage from '../assets/my-portfolio.png';
import todolistImage from '../assets/todolist.png';
import memeGeneratorImage from '../assets/meme generator.png';
import biteBuddyImage from '../assets/BiteBuddy.png';
import devspaceImage from '../assets/devspace.png';

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
    title: 'Resumate',
    image: resumateImage,
    summary: 'Next.js-powered cover letter generator for streamlined job applications.',
    tags: ['nextjs', 'react', 'tailwind', 'typescript'],
    link: 'https://resumate-nextjs-294n.vercel.app/'
  },
  {
    id: '2',
    title: 'My Portfolio',
    image: portfolioImage,
    summary: 'Personal portfolio website showcasing projects and skills using React.',
    tags: ['react', 'javascript', 'css', 'responsive'],
    link: 'https://priyansh-singh.vercel.app/'
  },
  {
    id: '3',
    title: 'BiteBuddy',
    image: biteBuddyImage,
    summary: 'React-based meal ordering app for convenient food delivery.',
    tags: ['react', 'javascript', 'api', 'responsive'],
    link: 'https://order-meal.vercel.app/'
  },
  {
    id: '4',
    title: 'Todo List',
    image: todolistImage,
    summary: 'Simple and efficient todo list application built with JavaScript.',
    tags: ['javascript', 'html', 'css', 'localstorage'],
    link: 'https://to-do-list-gilt-rho.vercel.app/'
  },
  {
    id: '5',
    title: 'DevSpace',
    image: devspaceImage,
    summary: 'JavaScript-powered blog application for developers to share insights.',
    tags: ['javascript', 'html', 'css', 'markdown'],
    link: 'https://blog-application-theta-five.vercel.app/'
  },
  {
    id: '6',
    title: 'Meme Generator',
    image: memeGeneratorImage,
    summary: 'Create custom memes easily with this JavaScript and TypeScript app.',
    tags: ['javascript', 'typescript', 'html', 'css'],
    link: 'https://generate-memes-omega.vercel.app/'
  },
];

const Projects: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
        <Header />
        <Navbar />
        <main className="max-w-full md:max-w-4xl mx-auto px-4 md:px-6 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <a 
                key={project.id} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="text-sm text-blue-600 dark:text-blue-400">#{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  };

export default Projects;



