'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface UsePreloaderReturn {
  showPreloader: boolean;
  isLoading: boolean;
  isReady: boolean;
}

export const usePreloader = (duration: number = 2500): UsePreloaderReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('app_visited') === 'true';
    sessionStorage.setItem('app_visited', 'true'); 

    if (!hasVisited) {
      setShowPreloader(true);
      setIsLoading(true);

      timerRef.current = setTimeout(() => {
        setIsLoading(false);
        requestAnimationFrame(() => window.scrollTo(0, 0));
      }, duration);
    }

    setIsReady(true);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [duration]);

  useLayoutEffect(() => {
    const hasVisited = sessionStorage.getItem('app_visited') === 'true';
    if (hasVisited && !showPreloader) {
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }
  }, [showPreloader]);

  return { showPreloader, isLoading, isReady };
};
