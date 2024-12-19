import { type ClassValue } from 'clsx';

export const getToggleRootStyles = (enabled: boolean): ClassValue[] => [
  // Base styles
  'relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full',
  'border-2 border-transparent transition-colors duration-300 ease-in-out',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/30',
  // Background color based on state
  enabled ? 'bg-amber-700' : 'bg-neutral-300',
];

export const getToggleThumbStyles = (enabled: boolean): ClassValue[] => [
  // Base styles
  'pointer-events-none inline-block h-7 w-7 rounded-full bg-white',
  'transform transition-all duration-300 ease-in-out',
  'shadow-[0_2px_4px_rgba(0,0,0,0.1)]',
  // Pseudo-element for the inner circle
  'after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2',
  'after:h-5 after:w-5 after:rounded-full after:transition-all after:duration-300',
  // Position and effects based on state
  enabled ? [
    'translate-x-7',
    'after:bg-amber-100',
    'after:opacity-100',
    'after:shadow-[0_0_12px_rgba(217,119,6,0.4)]',
  ] : [
    'translate-x-0',
    'after:bg-neutral-200',
    'after:opacity-70',
    'after:shadow-none',
  ],
  // Hover effect
  'hover:after:scale-110',
];