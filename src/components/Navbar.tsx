import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaMoon, FaSun } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <nav className="w-full bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800">
      <div className="w-[58%] mx-auto">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Home</a>
          <a href="/about" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">About</a>
          <a href="/blog" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Blogs</a>
          <a href="/projects" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">Projects</a>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"><FaGithub /></a>
            <a href="#" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"><FaTwitter /></a>
            <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="darkModeToggle" className="sr-only" checked={darkMode} onChange={toggleDarkMode} />
                <div className="w-10 h-4 bg-gray-600 dark:bg-gray-600 rounded-full shadow-inner"></div>
                <div className={`absolute w-6 h-6  rounded-full shadow transition-transform duration-300 ease-in-out flex items-center -left-1 -top-1 justify-center ${darkMode ? 'translate-x-full bg-gray-300' : 'translate-x-0 bg-black'}`}>
                  {darkMode ? <FaSun className="text-yellow-600 text-xs" /> : <FaMoon className="text-white text-xs" />}
                </div>
              </div>
              <div className="ml-3 text-gray-800 dark:text-white font-medium">
                {darkMode ? 'Dark' : 'Light'}
              </div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;