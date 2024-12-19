import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TextCompare } from './TextCompare';
import { formatDate } from '@/lib/date';
import type { HistoryComparisonProps } from '@/types/history';

export function HistoryComparison({
  timestamp,
  originalText,
  paraphrasedText,
  onBack,
}: HistoryComparisonProps) {
  return (
    <div className="space-y-8">
      <Button
        onClick={onBack}
        variant="ghost"
        className="text-amber-800 hover:text-amber-900 hover:bg-amber-100/50"
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
    </div>
  );
}