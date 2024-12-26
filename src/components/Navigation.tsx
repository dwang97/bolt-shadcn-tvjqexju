import { Brain } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page:  'pricing'|'editor' | 'history' | 'account' ) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="border-b border-amber-200/50 bg-gradient-to-b from-amber-50 to-amber-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-amber-700" />
            <span className="ml-2 font-serif text-xl text-amber-800">Humanize AI</span>
          </div>
          <div className="flex items-center">
            <div className="flex gap-2">
              {[
                { key: 'editor', label: 'Editor' },
                { key: 'history', label: 'History' },
                { key: 'pricing', label: 'Pricing' },
                { key: 'account', label: 'Account' }
              ].map(({ key, label }) => (
                <Button
                  key={key}
                  onClick={() => onPageChange(key as any)}
                  className={`min-w-[90px] px-4 text-base font-medium ${
                    currentPage === key
                      ? 'bg-gradient-to-b from-amber-200/80 to-amber-300/50 border-amber-400/30 text-amber-900'
                      : 'hover:bg-amber-100/50 text-amber-800'
                  }`}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}