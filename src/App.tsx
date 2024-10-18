import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import FullBlogPost from './components/FullBlogPost';
import Projects from './pages/project';
import usePageTitle from './hooks/usePageTitle';

const PageTitle: React.FC = () => {
  const location = useLocation();
  usePageTitle(location.pathname, 'Priyansh');
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <PageTitle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<FullBlogPost />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;