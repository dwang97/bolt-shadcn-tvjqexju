import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';

interface NavigationItem {
  key: string;
  label: string;
  path: string;
}

interface NavigationProps {
  navs: NavigationItem[];
}

export function Navigation({ navs }: NavigationProps) {
  return (
    <nav className="border-b border-amber-200/50 bg-gradient-to-b from-amber-50 to-amber-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Brain className="h-8 w-8 text-amber-700" />
            <span className="ml-2 font-serif text-xl text-amber-800">
              Humanize AI
            </span>
          </Link>
          <div className="flex items-center">
            <div className="flex gap-2">
              {navs.map(({ key, label, path }) => (
                <NavLink key={key} to={path}>
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
