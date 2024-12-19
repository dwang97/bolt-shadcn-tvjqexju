import * as Switch from '@radix-ui/react-switch';
import { cn } from '@/lib/utils';
import { getToggleRootStyles, getToggleThumbStyles } from '@/lib/toggle';

interface ToggleProps {
  enabled: boolean;
  onToggle: () => void;
  label?: string;
}

export function Toggle({ enabled, onToggle, label }: ToggleProps) {
  return (
    <div className="flex items-center gap-3">
      {label && (
        <span className="text-sm font-serif text-amber-800/70">{label}</span>
      )}
      <Switch.Root
        checked={enabled}
        onCheckedChange={onToggle}
        className={cn(getToggleRootStyles(enabled))}
      >
        <Switch.Thumb
          className={cn(getToggleThumbStyles(enabled))}
        />
      </Switch.Root>
    </div>
  );
}