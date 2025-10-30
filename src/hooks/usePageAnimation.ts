'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export const usePageAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const pathname = usePathname();

  // Reset animations when pathname changes
  useEffect(() => {
    setIsVisible(false);
    setAnimationKey(prev => prev + 1);

    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Mount effect
  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
  }, []);

  // Force animation refresh
  const refreshAnimations = useCallback(() => {
    setIsVisible(false);
    setAnimationKey(prev => prev + 1);
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  return {
    isVisible,
    mounted,
    animationKey,
    refreshAnimations
  };
};

