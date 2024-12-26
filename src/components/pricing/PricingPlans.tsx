import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Lite',
    monthlyPrice: 18,
    yearlyPrice: 9,
    words: 20000,
    wordsPerProcess: 600,
    features: [
      'ALL modes and settings',
      'Continuous improvements',
      'Undetectable by all AIs',
      'No weird or random words',
      'customer support',
    ],
  },
  {
    name: 'Essential',
    monthlyPrice: 28,
    yearlyPrice: 14,
    words: 50000,
    wordsPerProcess: 'Unlimited',
    features: [
      'ALL modes and settings',
      'Re-paraphrasing is free',
      'Continuous improvements',
      'Undetectable by all AIs',
      'No weird or random words',
      'customer support',
    ],
    popular: true,
  },
  {
    name: 'Elite+',
    monthlyPrice: 78,
    yearlyPrice: 39,
    words: 160000,
    wordsPerProcess: 'Unlimited',
    features: [
      'ALL modes and settings',
      'Re-paraphrasing is free',
      'Continuous improvements',
      'Undetectable by all AIs',
      'No weird or random words',
      'customer support',
    ],
  },
];

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="mb-24">
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className={cn("text-sm", !isYearly && "text-amber-900")}>Monthly</span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <span className={cn(
          "text-sm flex items-center gap-2",
          isYearly && "text-amber-900"
        )}>
          Yearly
          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs">
            50% off
          </span>
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "rounded-xl border bg-white p-8",
              "transition-all duration-200",
              plan.popular ? [
                "border-amber-400/50 shadow-lg",
                "relative"
              ] : "border-amber-200/50"
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
                  Most Loved
                </span>
              </div>
            )}

            <h3 className="text-xl font-serif mb-4">{plan.name}</h3>
            
            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-amber-600 ml-2">/ mo.</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold">{plan.words.toLocaleString()}</span>
                <span className="text-amber-600">words / mo.</span>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="font-semibold">{plan.wordsPerProcess}</span>
                <span className="text-amber-600">words per process</span>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-600" />
                    <span className="text-sm text-amber-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              className={cn(
                "w-full",
                plan.popular
                  ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700"
                  : "bg-amber-100 hover:bg-amber-200 text-amber-900"
              )}
            >
              Choose {plan.name}
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-xl border border-amber-200/50 bg-white">
        <h3 className="text-xl font-serif mb-4">Free</h3>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-amber-700">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-600" />
            3,000 words
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-600" />
            300 words / process
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-600" />
            All modes and settings
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-600" />
            No weird or random words
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-amber-600" />
            customer support
          </div>
        </div>
      </div>
    </div>
  );
}