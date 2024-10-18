import React from 'react';
import { useLocation } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const PageTitle: React.FC = () => {
  const location = useLocation();
  usePageTitle(location.pathname, 'Your Portfolio');
  
  return null; // This component doesn't render anything
};

export default PageTitle;