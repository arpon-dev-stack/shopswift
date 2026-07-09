'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavigationLinks = () => {
  const pathname = usePathname();
  const navLinks: { name: string; address: string; id: number }[] = [
    { name: 'home', address: '/', id: 0 },
    { name: 'products', address: '/products', id: 1 },
    { name: 'order', address: '/order', id: 2 },
  ];
  return (
    <nav className="flex">
      {navLinks.map((navLink) => (
        <Link
          key={navLink.id}
          className={`flex scale-95 flex-col items-center justify-center rounded-full ${pathname === navLink.address ? 'bg-[#fe9800] text-[#643900]' : 'text-white hover:bg-[#e6e8e8]'} px-4 py-1 text-xs font-medium transition-transform active:scale-90 dark:bg-[#8a5100]`}
          href={navLink.address}
        >
          <span className="capitalize">{navLink.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavigationLinks;
