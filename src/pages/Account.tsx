import { PageHeader } from '@/components/common/PageHeader';
import { PersonalInfo } from '@/components/account/PersonalInfo';
import { BillingInfo } from '@/components/account/BillingInfo';
import { HelpAndSupport } from '@/components/account/HelpAndSupport';

export function Account() {
  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader title="Account" />
        <div className="space-y-8">
          <PersonalInfo />
          <BillingInfo />
          <HelpAndSupport />
        </div>
      </main>
    </div>
  );
}