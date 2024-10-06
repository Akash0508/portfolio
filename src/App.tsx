import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
// import Projects from './pages/projects';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
    </Router>
  );
}

export default App;