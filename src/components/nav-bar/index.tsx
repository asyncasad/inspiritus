'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from '../icons';
import { navBarLinks } from './constants';

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-row items-center gap-5 justify-between">
      <div className="flex flex-row gap-2 items-center">
        <Icons.icon />
        <h2>Inspiritus</h2>
      </div>
      <div className="hidden lg:flex flex-row gap-5 items-center">
        {navBarLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn('opacity-80 hover:opacity-100', {
              'opacity-100': link.href === pathName,
            })}
          >
            <p>{link.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
