// ScrollToTop component that automatically scrolls to the top of the page on route changes
// This fixes the issue where mobile users navigate to a new page and start at the bottom
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 