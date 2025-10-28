'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
}

const Icon = ({ icon, className = '', size = 'lg' }: IconProps) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-12 h-12'
  };

  return (
    <FontAwesomeIcon
      icon={icon}
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Icon;
