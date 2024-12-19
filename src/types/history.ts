export interface HistoryItem {
  id: string;
  timestamp: Date;
  originalText: string;
  paraphrasedText: string;
}

export interface HistoryItemProps {
  id: string;
  timestamp: Date;
  originalText: string;
  onDelete: (id: string) => void;
  onSelect: (id: string) => void;
}

export interface HistoryComparisonProps {
  timestamp: Date;
  originalText: string;
  paraphrasedText: string;
  onBack: () => void;
}