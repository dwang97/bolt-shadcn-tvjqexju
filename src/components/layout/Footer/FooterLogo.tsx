import { Brain } from 'lucide-react';

export function FooterLogo() {
  return (
    <div className="flex items-center">
      <Brain className="h-6 w-6 text-gray-400" />
      <span className="ml-2 text-gray-300">Humanize AI</span>
    </div>
  );
}