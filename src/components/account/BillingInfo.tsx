import { Button } from '@/components/ui/Button';
import { Progress } from '@/components/ui/progress';
import { Sparkles } from 'lucide-react';

export function BillingInfo() {
  const wordsUsed = 0;
  const wordLimit = 6000;
  const progress = (wordsUsed / wordLimit) * 100;

  return (
    <div className="rounded-lg border border-amber-200/50 bg-white p-6">
      <h2 className="text-xl font-serif text-amber-800 mb-6">Billing</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm text-amber-700 mb-2">
            <span>Words used this month</span>
            <span>{wordsUsed} / {wordLimit}</span>
          </div>
          <Progress value={progress} className="bg-amber-100" />
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-amber-100">
          <div>
            <h3 className="text-lg font-serif text-amber-800">
              Upgrade your Plan for more words
            </h3>
            <p className="text-sm text-amber-600 mt-1">
              Get unlimited words and premium features
            </p>
          </div>
          <Button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700">
            <Sparkles className="w-4 h-4 mr-2" />
            Upgrade
          </Button>
        </div>
      </div>
    </div>
  );
}