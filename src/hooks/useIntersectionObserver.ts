import { useEffect } from 'react';

export const useIntersectionObserver = (callback: IntersectionObserverCallback, options?: IntersectionObserverInit) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [callback, options]);
};
