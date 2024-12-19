import { Button } from '@/components/ui/Button';
import { LogOut } from 'lucide-react';

export function PersonalInfo() {
  return (
    <div className="rounded-lg border border-amber-200/50 bg-white p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-serif text-amber-800">Personal info</h2>
        <Button
          variant="ghost"
          className="text-amber-700 hover:text-amber-800 hover:bg-amber-100/50"
          onClick={() => {/* Implement logout logic */}}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log out
        </Button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-amber-700">Email</label>
          <div className="mt-1 text-amber-900">user@example.com</div>
        </div>
      </div>
    </div>
  );
}