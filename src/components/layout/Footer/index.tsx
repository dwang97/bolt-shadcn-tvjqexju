import { useUserStore } from '@/stores/user.ts';
import { Button } from '@radix-ui/themes';
import { FooterLogo } from './FooterLogo';
import { FooterLink, FooterLinks } from './FooterLinks';
import { FooterCopyright } from './FooterCopyright';

const FOOTER_LINKS: FooterLink[] = [
  { label: 'Editor', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blogs', href: 'https://blog.accessay.ai', outer: true },
];

const ACCOUNT_LINKS: FooterLink[] = [
  { label: <Button>Sign in</Button>, href: '/signin' },
  { label: <Button>Sign up</Button>, href: '/signup' },
];

export function Footer() {
  const { user } = useUserStore();
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="px-4 sm:px-6 lg:px-8 text-end flex flex-col gap-4">
            <FooterLogo/>
            <FooterCopyright/>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 text-end flex flex-col gap-4 items-end">
            <FooterLinks links={FOOTER_LINKS}/>
            {!user && <FooterLinks links={ACCOUNT_LINKS}/>}
          </div>
        </div>
      </div>
    </footer>
  );
}