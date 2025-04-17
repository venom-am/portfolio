import React from 'react';
import Link from 'next/link';
import { cn } from '@/app/lib/utils';

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const NavItems: React.FC<NavItemsProps> = ({ items, className, onItemClick }) => {
  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          onClick={onItemClick}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

