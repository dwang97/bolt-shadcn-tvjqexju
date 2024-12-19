import { useState, useCallback } from 'react';
import { MOCK_ITEMS } from '@/data/mockHistory';
import type { HistoryItem } from '@/types/history';

export function useHistory() {
  const [items, setItems] = useState<HistoryItem[]>(MOCK_ITEMS);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const selectItem = useCallback((id: string) => {
    setSelectedItemId(id);
  }, []);

  const deleteItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
    if (selectedItemId === id) {
      setSelectedItemId(null);
    }
  }, [selectedItemId]);

  const clearSelection = useCallback(() => {
    setSelectedItemId(null);
  }, []);

  const selectedItem = selectedItemId 
    ? items.find(item => item.id === selectedItemId)
    : null;

  return {
    items,
    deleteItem,
    selectedItem,
    selectItem,
    clearSelection,
  };
}