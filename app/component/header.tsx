'use client';

import Cart from './cart';
import NavigationLinks from './NavLinks';
import Profile from './Profile';

const Header = () => {
  return (
    <>
      {/* Main Top Header */}
      <header
        className={`z-50 flex w-full flex-col bg-[#0e1a28] px-3 shadow-sm transition-transform duration-300 dark:bg-[#232f3e]`}
      >
        <div className="flex h-14 w-full items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-white dark:text-[#8a97a9]">
              ShopSwift
            </h1>
          </div>

          {/* Desktop Navigation stays inside the header flow */}
          <div className="ml-auto hidden h-14 items-center sm:flex">
            <NavigationLinks />
          </div>
        </div>

        {/* Integrated Search Bar */}
        <div
          className={`flex w-full items-center gap-5 bg-[#0e1a28] pb-2 transition-all`}
        >
          <div className="relative w-full">
            <input
              className="h-10 w-full rounded-lg border-none bg-white pr-10 pl-10 text-sm ring-1 ring-[#c5c6cc] transition-all focus:ring-2 focus:ring-[#fe9800] focus:outline-none"
              placeholder="Search ShopSwift"
              type="text"
            />
            <div className="absolute top-1/2 left-3 -translate-y-1/2 text-[#44474c]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z"
                />
              </svg>
            </div>
          </div>
          <Profile />
          <Cart />
        </div>
      </header>
    </>
  );
};

export default Header;
