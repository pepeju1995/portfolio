'use client';

import { ChildrenProps } from '@/app/types';
import { useState, useEffect, useContext, createContext } from 'react';

const ViewportContext = createContext({ isDesktop: false });

export const ViewportProvider = ({ children }: ChildrenProps) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleResize = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ isDesktop }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  return useContext(ViewportContext);
};
