import { Button } from '../ui/button';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export function NavLink({ to, children }: NavLinkProps) {
  const location = useLocation();
  const isActive =
    to === '/' ? location.pathname === '/' : location.pathname === to;

  return (
    <Link to={to}>
      <Button
        className={`min-w-[90px] px-4 text-base font-medium ${
          isActive
            ? 'bg-gradient-to-b from-amber-200/80 to-amber-300/50 border-amber-400/30 text-amber-900'
            : 'hover:bg-amber-100/50 text-amber-800'
        }`}
      >
        {children}
      </Button>
    </Link>
  );
}
