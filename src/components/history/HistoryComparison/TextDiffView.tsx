import { useMemo } from 'react';
import { cn } from '@/lib/utils';
import { computeTextDiff } from '@/lib/textDiff';

interface TextDiffViewProps {
  originalText: string;
  paraphrasedText: string;
}

export function TextDiffView({ originalText, paraphrasedText }: TextDiffViewProps) {
  const diffs = useMemo(() => 
    computeTextDiff(originalText, paraphrasedText),
    [originalText, paraphrasedText]
  );

  return (
    <div className="h-[600px] overflow-y-auto p-6 rounded-lg bg-amber-50/5 border border-amber-900/10">
      <div className="font-serif text-amber-900 whitespace-pre-wrap">
        {diffs.map((diff, index) => (
          <span
            key={index}
            className={cn(
              diff.type === 'added' && 'bg-green-100 text-green-800',
              diff.type === 'removed' && 'bg-red-100 text-red-800 line-through',
            )}
          >
            {diff.value}
          </span>
        ))}
      </div>
    </div>
  );
}