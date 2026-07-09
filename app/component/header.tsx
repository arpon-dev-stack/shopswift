'use client';

import Link from 'next/link';
import Cart from './cart';
import NavigationLinks from './NavLinks';
import Profile from './Profile';
import Search from './icons/Search';

const Header = () => {
  return (
    <>
      {/* Main Top Header */}
      <header
        className={`z-50 flex w-full flex-col bg-[#0e1a28] px-3 shadow-sm transition-transform duration-300 dark:bg-[#232f3e]`}
      >
        <div className="flex h-14 w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-white dark:text-[#8a97a9]">
              ShopSwift
            </h1>
          </div>

          <NavigationLinks />
        </div>

        {/* Integrated Search Bar */}
        <div
          className={`flex w-full items-center gap-4 bg-[#0e1a28] pb-2 transition-all`}
        >
          <div className="relative w-full">
            <input
              className="h-8 w-full rounded-lg border-none bg-white pr-10 pl-10 text-sm ring-1 ring-[#c5c6cc] transition-all focus:ring-2 focus:ring-[#fe9800] focus:outline-none"
              placeholder="Search ShopSwift"
              type="text"
            />
            <div className="absolute top-1/2 left-3 -translate-y-1/2 text-[#44474c]">
              <Search />
            </div>
          </div>
          <Link
            href="/signin"
            className="rounded-xs border px-2 text-sm text-nowrap text-white"
          >
            Sign in
          </Link>
          <Profile />
          <Cart />
        </div>
      </header>
    </>
  );
};

export default Header;
