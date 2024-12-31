import { Footer } from '@/components/layout/Footer';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

const NAV_ITEMS = [
  { key: 'editor', label: 'Editor', path: '/' },
  { key: 'history', label: 'History', path: '/history' },
  { key: 'pricing', label: 'Pricing', path: '/pricing' },
  { key: 'account', label: 'Account', path: '/account' },
];

export function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation navs={NAV_ITEMS} />
      <main className="flex-1 bg-amber-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
