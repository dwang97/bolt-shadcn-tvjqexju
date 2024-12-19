import { HistoryList } from '@/components/history/HistoryList/index';
import { HistoryComparison } from '@/components/history/HistoryComparison';
import { PageHeader } from '@/components/common/PageHeader';
import { useHistory } from '@/hooks/useHistory';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function History() {
  const { selectedItem, clearSelection } = useHistory();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setIsTransitioning(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedItem]);

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      <main 
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
          "transition-all duration-300 ease-in-out",
          isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
        )}
      >
        {selectedItem ? (
          <HistoryComparison
            timestamp={selectedItem.timestamp}
            originalText={selectedItem.originalText}
            paraphrasedText={selectedItem.paraphrasedText}
            onBack={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                clearSelection();
                setIsTransitioning(false);
              }, 300);
            }}
          />
        ) : (
          <>
            <PageHeader title="History" />
            <HistoryList />
          </>
        )}
      </main>
    </div>
  );
}