import React from 'react';
import FeaturedPost from '../components/FeaturedPost';
import LatestProjects from '../components/LatestProjects';

const Home: React.FC = () => {
  return (
    <>
      <FeaturedPost />
      <LatestProjects />
    </>
  );
}

export default Home;