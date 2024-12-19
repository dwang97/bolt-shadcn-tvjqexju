interface TextAreaProps {
  value: string;
  onChange?: (value: string) => void;
  placeholder: string;
  readOnly?: boolean;
}

export function TextArea({ value, onChange, placeholder, readOnly }: TextAreaProps) {
  const wordCount = value.split(/\s+/).filter(Boolean).length;

  return (
    <div className="relative group">
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        className="w-full h-96 p-4 rounded-lg bg-amber-50/5 border border-amber-900/10 
                 focus:border-amber-700/30 focus:ring-1 focus:ring-amber-700/30 resize-none
                 font-serif placeholder:text-amber-800/40 text-amber-900
                 transition-all group-hover:border-amber-700/20"
      />
      <div className="absolute bottom-4 left-4 text-amber-800/60 text-sm font-serif">
        {wordCount} words
      </div>
    </div>
  );
}