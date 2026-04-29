import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-[#E51636] text-white hover:bg-red-700 shadow-md',
    secondary: 'bg-[#004F71] text-white hover:bg-[#003851] shadow-md',
    outline: 'border-2 border-[#E51636] text-[#E51636] hover:bg-red-50',
    ghost: 'text-gray-600 hover:text-[#E51636] hover:bg-gray-50',
    white: 'bg-white text-[#004F71] hover:bg-gray-50 shadow-md'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-xs font-bold leading-none',
    md: 'px-6 py-3 text-sm font-bold',
    lg: 'px-10 py-4 text-lg font-bold'
  };

  return (
    <button 
      className={cn(
        'rounded-full transition-all duration-200 active:scale-95 flex items-center justify-center uppercase tracking-tight', 
        variants[variant], 
        sizes[size], 
        className
      )}
      {...props}
    />
  );
};
