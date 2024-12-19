import { FooterLogo } from './FooterLogo';
import { FooterLinks } from './FooterLinks';
import { FooterCopyright } from './FooterCopyright';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <FooterLogo />
          <FooterLinks />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}