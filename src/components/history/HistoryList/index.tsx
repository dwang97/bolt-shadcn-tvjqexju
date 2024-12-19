import { HistoryListItem } from './HistoryListItem';
import { useHistory } from '@/hooks/useHistory';

export function HistoryList() {
  const { items, deleteItem, selectItem } = useHistory();
  
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