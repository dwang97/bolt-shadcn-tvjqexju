import { PageHeader } from '@/components/common/PageHeader';
import { PricingPlans } from '@/components/pricing/PricingPlans';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';

export function Pricing() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif mb-4">
            Get the most undetectable AI humanizer tool
          </h1>
          <p className="text-lg text-amber-700">
            Money back guarantee. If any result we produce is flagged as non-human, we will refund the words back.
          </p>
        </div>
        <PricingPlans />
        <PricingFAQ />
      </main>
    </div>
  );
}