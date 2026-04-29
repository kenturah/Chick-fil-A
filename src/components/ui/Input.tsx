import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input 
      className={cn(
        'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#E51636] focus:border-transparent placeholder:text-gray-400',
        className
      )}
      {...props}
    />
  );
};
