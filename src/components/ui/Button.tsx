import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export function Button({ variant = 'ghost', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'font-serif rounded-md transition-all duration-200',
        variant === 'primary' && 'px-8 py-3 bg-amber-700 text-amber-50 hover:bg-amber-600 border border-amber-600 shadow-lg hover:shadow-amber-700/20',
        variant === 'ghost' && [
          'px-4 py-2',
          'bg-gradient-to-b from-amber-50 to-amber-100/80',
          'border border-amber-200/50',
          'text-amber-800/70',
          'shadow-[inset_0_-1px_1px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.7)]',
          'hover:shadow-[inset_0_-2px_2px_rgba(0,0,0,0.1),inset_0_2px_2px_rgba(255,255,255,0.7)]',
          'hover:border-amber-300/50',
          'active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]',
          'active:translate-y-[0.5px]'
        ],
        className
      )}
      {...props}
    />
  );
}