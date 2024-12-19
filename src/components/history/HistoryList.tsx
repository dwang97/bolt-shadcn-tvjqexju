import { HistoryItem } from './HistoryItem';
import { useHistory } from '@/hooks/useHistory';

export function HistoryList() {
  const { items, deleteItem, selectItem } = useHistory();
  
  console.log('HistoryList rendering with items:', items);

  return (
    <div className="space-y-4" role="list">
      {items.map((item) => (
        <HistoryItem
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