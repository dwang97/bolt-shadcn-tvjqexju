interface TextCompareProps {
  originalText: string;
  paraphrasedText: string;
}

export function TextCompare({ originalText, paraphrasedText }: TextCompareProps) {
  return (
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
        <div className="mb-2 font-serif text-amber-800/70">Paraphrased</div>
        <div className="h-[600px] overflow-y-auto p-6 rounded-lg bg-amber-50/5 border border-amber-900/10">
          <div className="font-serif text-amber-900 whitespace-pre-wrap">
            {paraphrasedText}
          </div>
          <div className="mt-4 text-sm text-amber-700/50">
            {paraphrasedText.length} / 6000
          </div>
        </div>
      </div>
    </div>
  );
}