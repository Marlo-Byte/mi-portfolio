'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  isVisible: boolean;
}

export const AnimatedSection = ({ 
  children, 
  delay = 0, 
  className = '', 
  isVisible 
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCardProps {
  children: ReactNode;
  index: number;
  isVisible: boolean;
  className?: string;
}

export const AnimatedCard = ({ 
  children, 
  index, 
  isVisible, 
  className = '' 
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
