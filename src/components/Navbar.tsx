import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaMoon,
    FaSun,
    FaBars,
    FaTimes,
} from 'react-icons/fa';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode] as const;
};

const Navbar: React.FC = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavLink = ({
        to,
        children,
    }: {
        to: string;
        children: React.ReactNode;
    }) => (
        <Link
            to={to}
            className={`block py-2 px-4 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${
                location.pathname === to ? 'font-bold' : ''
            }`}
            onClick={() => setIsMenuOpen(false)}
        >
            {children}
        </Link>
    );

    return (
        <nav className='w-full bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800'>
            <div className='w-full md:w-[62%] mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex items-center'>
                        <button
                            id='test'
                            className='md:hidden text-gray-800 dark:text-white'
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                        <div className='hidden md:flex space-x-4'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/blog'>Blogs</NavLink>
                            <NavLink to='/projects'>Projects</NavLink>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <a
                            href='https://www.linkedin.com/in/akashsingh1702/'
                            className='text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href='https://github.com/Akash0508'
                            className='text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaGithub />
                        </a>
                        <label
                            htmlFor='darkModeToggle'
                            className='flex items-center cursor-pointer'
                        >
                            <div className='relative'>
                                <input
                                    type='checkbox'
                                    id='darkModeToggle'
                                    className='sr-only'
                                    checked={darkMode}
                                    onChange={toggleDarkMode}
                                />
                                <div className='w-10 h-4 bg-gray-600 dark:bg-gray-600 rounded-full shadow-inner'></div>
                                <div
                                    className={`absolute w-6 h-6 rounded-full shadow transition-transform duration-300 ease-in-out flex items-center justify-center ${
                                        darkMode
                                            ? 'translate-x-full bg-gray-300'
                                            : 'translate-x-0 bg-black'
                                    }`}
                                    style={{
                                        top: '-0.25rem',
                                        left: '-0.25rem',
                                    }}
                                >
                                    {darkMode ? (
                                        <FaSun className='text-black text-xs' />
                                    ) : (
                                        <FaMoon className='text-white text-xs' />
                                    )}
                                </div>
                            </div>
                            <span className='ml-3 text-gray-800 dark:text-white font-medium w-10'>
                                {darkMode ? 'Dark' : 'Light'}
                            </span>
                        </label>
                    </div>
                </div>
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-60' : 'max-h-0'
                    }`}
                >
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/blog'>Blogs</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
