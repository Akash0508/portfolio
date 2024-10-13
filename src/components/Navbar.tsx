import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={`block py-2 px-4 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${
        location.pathname === to ? "font-bold" : ""
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav className="w-full bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800">
      <div className="w-full md:w-[53%] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="md:hidden text-gray-800 dark:text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="hidden md:flex space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/blog">Blogs</NavLink>
              <NavLink to="/projects">Projects</NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/leviackerman05"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/priyanshmusicc/"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/priyansh0510"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <label
              htmlFor="darkModeToggle"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="darkModeToggle"
                  className="sr-only"
                  checked={darkMode}
                  onChange={toggleDarkMode}
                />
                <div className="w-10 h-4 bg-gray-600 dark:bg-gray-600 rounded-full shadow-inner"></div>
                <div
                  className={`absolute w-6 h-6 rounded-full shadow transition-transform duration-300 ease-in-out flex items-center -left-1 -top-1 justify-center ${
                    darkMode
                      ? "translate-x-full bg-gray-300"
                      : "translate-x-0 bg-black"
                  }`}
                >
                  {darkMode ? (
                    <FaSun className="text-black text-xs" />
                  ) : (
                    <FaMoon className="text-white text-xs" />
                  )}
                </div>
              </div>
              <div className="ml-3 text-gray-800 dark:text-white font-medium">
                {darkMode ? "Dark" : "Light"}
              </div>
            </label>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blogs</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;