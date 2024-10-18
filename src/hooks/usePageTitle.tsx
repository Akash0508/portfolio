import { useEffect } from 'react';

const usePageTitle = (pathname: string, defaultTitle: string) => {
  useEffect(() => {
    let title = defaultTitle;

    switch (pathname) {
      case '/':
        title = 'Home | ' + defaultTitle;
        break;
      case '/about':
        title = 'About | ' + defaultTitle;
        break;
      case '/blog':
        title = 'Blog | ' + defaultTitle;
        break;
      case '/projects':
        title = 'Projects | ' + defaultTitle;
        break;
      default:
        title = defaultTitle;
    }

    document.title = title;
  }, [pathname, defaultTitle]);
};

export default usePageTitle;