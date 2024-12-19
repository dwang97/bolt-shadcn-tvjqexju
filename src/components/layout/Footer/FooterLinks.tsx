interface FooterLink {
  label: string;
  href: string;
}

const FOOTER_LINKS: FooterLink[] = [
  { label: 'Editor', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

export function FooterLinks() {
  return (
    <div className="flex gap-6">
      {FOOTER_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}