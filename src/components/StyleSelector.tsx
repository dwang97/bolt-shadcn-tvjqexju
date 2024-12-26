import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Toggle } from './ui/toggle';

const STYLES = ['Free', 'Academic', 'Standard', 'Simple', 'Smooth', 'Formal', 'Expand', 'Shorten'] as const;

interface StyleSelectorProps {
  selectedStyle: string;
  onStyleSelect: (style: string) => void;
  isUltraEnabled: boolean;
  onUltraToggle: () => void;
}

export function StyleSelector({
  selectedStyle,
  onStyleSelect,
  isUltraEnabled,
  onUltraToggle,
}: StyleSelectorProps) {
  return (
    <div className="bg-gradient-to-b from-amber-50/30 to-amber-100/30 rounded-lg p-1.5 mb-8 border border-amber-200/50 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 gap-1">
          {STYLES.map((style) => (
            <Button
              key={style}
              onClick={() => onStyleSelect(style)}
              className={cn(
                'text-sm transition-all duration-200',
                selectedStyle === style && [
                  'bg-gradient-to-b from-amber-200/80 to-amber-300/50',
                  'border-amber-400/30',
                  'text-amber-900',
                  'shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]'
                ]
              )}
            >
              {style}
            </Button>
          ))}
          <Button className="text-sm">More</Button>
        </div>
        <div className="px-4">
          <Toggle
            pressed={isUltraEnabled}
            onPressedChange={onUltraToggle}
            aria-label="Power mode"
          />
        </div>
      </div>
    </div>
  );
}