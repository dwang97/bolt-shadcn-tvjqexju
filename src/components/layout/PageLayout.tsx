import { ReactNode } from 'react';
import { Navigation } from '../Navigation';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  currentPage: 'editor' | 'history' | 'account' | 'pricing';
  onPageChange: (page: 'editor' | 'history' | 'account' | 'pricing') => void;
}

export function PageLayout({ children, currentPage, onPageChange }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={onPageChange} />
      <main className="flex-1 bg-amber-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}