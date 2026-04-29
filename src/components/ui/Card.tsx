import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card = ({ className, hoverable = true, ...props }: CardProps) => {
  return (
    <div 
      className={cn(
        'bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all duration-300',
        hoverable && 'hover:shadow-md hover:border-[#E51636]',
        className
      )}
      {...props}
    />
  );
};
