import { useEffect } from 'react';

const usePageTitle = (pathname: string, defaultTitle: string) => {
  useEffect(() => {
    let title = defaultTitle;

    switch (pathname) {
      case '/':
        title = 'Home';
        break;
      case '/about':
        title = 'About';
        break;
      case '/blog':
        title = 'Blog';
        break;
      case '/projects':
        title = 'Projects';
        break;
      default:
        title = defaultTitle;
    }

    document.title = title;
  }, [pathname, defaultTitle]);
};

export default usePageTitle;