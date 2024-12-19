import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { TextDiffView } from './TextDiffView';
import { Eye } from 'lucide-react';

interface TextCompareProps {
  originalText: string;
  paraphrasedText: string;
}

export function TextCompare({ originalText, paraphrasedText }: TextCompareProps) {
  const [showDiff, setShowDiff] = useState(false);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="mb-2 font-serif text-amber-800/70">Original</div>
          <div className="h-[600px] overflow-y-auto p-6 rounded-lg bg-amber-50/5 border border-amber-900/10">
            <div className="font-serif text-amber-900 whitespace-pre-wrap">
              {originalText}
            </div>
            <div className="mt-4 text-sm text-amber-700/50">
              {originalText.length} / 6000
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2 font-serif text-amber-800/70">
            {showDiff ? 'Differences' : 'Paraphrased'}
          </div>
          {showDiff ? (
            <TextDiffView
              originalText={originalText}
              paraphrasedText={paraphrasedText}
            />
          ) : (
            <div className="h-[600px] overflow-y-auto p-6 rounded-lg bg-amber-50/5 border border-amber-900/10">
              <div className="font-serif text-amber-900 whitespace-pre-wrap">
                {paraphrasedText}
              </div>
              <div className="mt-4 text-sm text-amber-700/50">
                {paraphrasedText.length} / 6000
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => setShowDiff(!showDiff)}
          variant="ghost"
          className="bg-amber-100 hover:bg-amber-200 text-amber-900"
        >
          <Eye className="w-4 h-4 mr-2" />
          {showDiff ? 'Hide Differences' : 'Show Differences'}
        </Button>
      </div>
    </div>
  );
}