'use client';

import React, { useState, useEffect } from 'react';
import Cart from '../component/cart';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
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
      <header
        className={`pt-safe fixed top-0 z-50 flex w-full flex-col bg-[#0e1a28] shadow-sm transition-transform duration-300 dark:bg-[#232f3e] ${
          headerVisible ? 'translate-y-0' : '-translate-y-12'
        }`}
      >
        <div className="flex h-14 w-full items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <button className="rounded p-1 text-white transition-colors duration-200 hover:bg-white/10 dark:text-[#8a97a9]">
              <span className="mb-1 block h-0.5 w-6 bg-current"></span>
              <span className="mb-1 block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
            </button>
            <h1 className="text-xl font-bold tracking-tight text-white dark:text-[#8a97a9]">
              ShopSwift
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative rounded p-1 text-white transition-colors duration-200 hover:bg-white/10 dark:text-[#8a97a9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="String.raw`M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z`"
                />
              </svg>
            </button>
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
      {children}
    </>
  );
};

export default Layout;
