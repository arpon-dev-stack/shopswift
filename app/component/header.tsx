'use client';

import React, { useState, useEffect } from 'react';
import Cart from './cart';
import NavigationLinks from './NavLinks';

const Header = () => {
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY; // Modern standard instead of pageYOffset
      if (currentScroll > lastScroll && currentScroll > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Top Header */}
      <header
        className={`pt-safe fixed top-0 left-0 z-50 flex w-full flex-col bg-[#0e1a28] shadow-sm transition-transform duration-300 dark:bg-[#232f3e] ${
          headerVisible ? 'translate-y-0' : '-translate-y-12'
        }`}
      >
        <div className="flex h-14 w-full items-center px-5">
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
        <div className="flex items-center gap-5 px-5 pb-2">
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
          <Cart />
        </div>
      </header>

      {/* Mobile Navigation Menu - Moved outside the transformed header */}
      <div className="sm:hidden">
        <nav className="pb-safe fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-around border-t border-[#c5c6cc] bg-[#f8fafa] px-2 shadow-lg dark:border-[#75777c] dark:bg-[#d8dada]">
          <NavigationLinks />
        </nav>
      </div>
    </>
  );
};

export default Header;
