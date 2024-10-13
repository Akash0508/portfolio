import React from "react";
import { Link } from "react-router-dom";
import resumateImage from '../assets/Resumate.png';
import portfolioImage from '../assets/my-portfolio.png';

// You might want to replace this with your actual projects data
const PROJECTS = [
  {
    id: "1",
    title: "Resumate",
    image: resumateImage,
    summary:
      "Next.js-powered cover letter generator for streamlined job applications.",
    tags: ["nextjs", "react", "tailwind", "typescript"],
    link: "https://resumate-nextjs-294n.vercel.app/",
  },
  {
    id: "2",
    title: "My Portfolio",
    image: portfolioImage,
    summary:
      "Personal portfolio website showcasing projects and skills using React.",
    tags: ["react", "javascript", "css", "responsive"],
    link: "https://priyansh-singh.vercel.app/",
  },
];

const LatestProjects: React.FC = () => {
  const latestTwoProjects = PROJECTS.slice(0, 2);

  return (
    <div className="max-w-4xl relative mx-auto mt-16 bg-white dark:bg-black shadow-lg border border-black dark:border-gray-600">
      <div className="absolute -top-4 left-4 tracking-widest bg-white dark:bg-black border border-black dark:border-gray-600 px-6 py-2 text-lg font-semibold text-black dark:text-white">
        LATEST PROJECTS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-6">
        {latestTwoProjects.map((project) => (
          <Link key={project.id} to={project.link} className="block group">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-all duration-300 group-hover:scale-[1.01] group-hover:underline">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-transform duration-300 group-hover:scale-[1.01]">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;
