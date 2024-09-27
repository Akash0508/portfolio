import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-4">
        <section className="text-center my-12">
          <p className="text-xl mb-2 text-white">Everything is personal, including this portfolio.</p>
          <p className="text-lg font-semibold text-white">TRAIN OF THOUGHT</p>
        </section>
      </header>
      <main>
        <nav className='flex justify-center'>
          <div className="flex w-[600px] justify-between">
            <div><Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link></div>
            <div><Link to="/" className="text-blue-600 hover:text-blue-800">About</Link></div>
            <div><Link to="/" className="text-blue-600 hover:text-blue-800">Blog</Link></div>
            <div><Link to="/" className="text-blue-600 hover:text-blue-800">Projects</Link></div>
          </div>
        </nav>
        {/* Rest of your Home page content */}
      </main>
    </div>
  );
}

export default Home;
