import { formatDistanceToNow } from 'date-fns';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Eye, Trash2 } from 'lucide-react';
import type { HistoryItemProps } from '@/types/history';

export function HistoryItem({
  id,
  timestamp,
  originalText,
  onDelete,
  onSelect,
}: HistoryItemProps) {
  const formattedDate = formatDistanceToNow(timestamp, { addSuffix: true });

  const handleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <div
      className={cn(
        'group relative rounded-lg border border-amber-200/50',
        'bg-gradient-to-b from-amber-50/30 to-amber-100/30',
        'p-6 transition-all duration-200',
        'hover:border-amber-300/50 hover:shadow-sm hover:bg-amber-50/50'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-2 font-serif text-amber-800/70">
            {formattedDate}
          </div>
          <div className="line-clamp-2 font-serif text-amber-900">
            {originalText}
          </div>
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            onClick={handleView}
            variant="ghost"
            size="sm"
            className={cn(
              'text-amber-700 hover:text-amber-800',
              'hover:bg-amber-100/50'
            )}
          >
            <Eye className="w-4 h-4 mr-2" />
            View
          </Button>
          <Button
            onClick={handleDelete}
            variant="ghost"
            size="sm"
            className={cn(
              'text-red-600 hover:text-red-700',
              'hover:bg-red-100/50'
            )}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}