import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
}

const FOOTER_LINKS: FooterLink[] = [
  { label: 'Editor', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blogs', href: 'https://blog.accessay.ai' },
  // { label: 'Terms of Service', href: '#' },
  // { label: 'Privacy Policy', href: '#' },
];

export function FooterLinks() {
  return (
    <div className="flex gap-6">
      {FOOTER_LINKS.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}