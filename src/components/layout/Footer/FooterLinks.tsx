import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface FooterLink {
  label: ReactNode;
  href: string;
  outer?: boolean;
}

export interface FooterLinksProps {
  links: FooterLink[]
}

export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <div className="flex gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          target={link.outer ? '_blank' : '_self'}
          className="text-gray-400 hover:text-gray-300 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}