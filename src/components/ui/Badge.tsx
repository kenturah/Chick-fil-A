import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'danger' | 'neutral' | 'info';
}

export const Badge = ({ variant = 'neutral', className, ...props }: BadgeProps) => {
  const variants = {
    success: 'bg-green-100 text-green-700',
    danger: 'bg-red-100 text-red-700',
    neutral: 'bg-gray-100 text-gray-600',
    info: 'bg-blue-50 text-blue-700'
  };

  return (
    <span 
      className={cn(
        'text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide inline-block', 
        variants[variant], 
        className
      )}
      {...props}
    />
  );
};
