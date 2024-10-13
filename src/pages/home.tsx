import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer'
import FeaturedPost from '../components/FeaturedPost';
import LatestProjects from '../components/LatestProjects';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
      <Header />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 mt-8">
        <FeaturedPost />
        <LatestProjects />
      </main>
      <Footer />
    </div>
  );
}

export default Home;