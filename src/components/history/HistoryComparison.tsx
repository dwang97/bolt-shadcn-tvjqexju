import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TextCompare } from './TextCompare';
import { formatDate } from '@/lib/date';

interface HistoryComparisonProps {
  timestamp: Date;
  originalText: string;
  paraphrasedText: string;
  onBack: () => void;
}

export function HistoryComparison({
  timestamp,
  originalText,
  paraphrasedText,
  onBack,
}: HistoryComparisonProps) {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-8 text-amber-800 hover:text-amber-900 hover:bg-amber-100/50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to History
        </Button>

        <div className="mb-8">
          <h2 className="text-2xl font-serif text-amber-800">
            {formatDate(timestamp)}
          </h2>
          <div className="text-sm text-amber-700/70 font-serif">
            {timestamp.toLocaleTimeString()}
          </div>
        </div>

        <TextCompare
          originalText={originalText}
          paraphrasedText={paraphrasedText}
        />

        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => {/* Implement show difference logic */}}
            className="bg-amber-100 hover:bg-amber-200 text-amber-900"
          >
            Show Difference
          </Button>
        </div>
      </div>
    </div>
  );
}