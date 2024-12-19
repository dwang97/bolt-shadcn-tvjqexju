import type { HistoryItem } from '@/types/history.ts';
import { HistoryListItem } from './HistoryListItem';

export interface HistoryListProps {
  items: HistoryItem[];
  selectItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

export function HistoryList({ items, deleteItem, selectItem }: HistoryListProps) {
  return (
    <div className="space-y-4" role="list">
      {items.map((item) => (
        <HistoryListItem
          key={item.id}
          id={item.id}
          timestamp={item.timestamp}
          originalText={item.originalText}
          onDelete={deleteItem}
          onSelect={selectItem}
        />
      ))}
    </div>
  );
}