// hooks/usePreloader.ts
'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

interface UsePreloaderReturn {
  showPreloader: boolean;
  isLoading: boolean;
}

export const usePreloader = (duration: number = 2500): UsePreloaderReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('app_visited');
    
    if (!hasVisited) {
      setShowPreloader(true);
      setIsLoading(true);
      
      sessionStorage.setItem('app_visited', 'true');
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        requestAnimationFrame(() => window.scrollTo(0, 0));
      }, duration);

      return () => clearTimeout(timer);
    } else {
      setShowPreloader(false);
      setIsLoading(false);
    }
  }, [duration]);

  useLayoutEffect(() => {
    const hasVisited = sessionStorage.getItem('app_visited');
    
    if (hasVisited && !showPreloader) {
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [showPreloader]);

  return { showPreloader, isLoading };
};