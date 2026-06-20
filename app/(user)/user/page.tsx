'use client';

import React from 'react';
import Image from 'next/image';

export default function UserProfileDashboard() {
  return (
    <div className="bg-surface text-on-surface min-h-screen pb-20 font-sans antialiased">
      {/* Top App Bar */}
      <header className="bg-primary dark:bg-primary-container px-gutter fixed top-0 z-50 flex h-14 w-full items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <button className="text-on-primary dark:text-on-primary-container hover:bg-primary-container/20 rounded p-2 transition-transform active:scale-95">
            <span className="material-symbols-outlined block">menu</span>
          </button>
          <h1 className="text-on-primary dark:text-on-primary-container text-[20px] leading-[28px] font-bold tracking-tight">
            ShopSwift
          </h1>
        </div>
        <div className="flex items-center">
          <button className="text-on-primary dark:text-on-primary-container hover:bg-primary-container/20 rounded p-2 transition-transform active:scale-95">
            <span className="material-symbols-outlined block">search</span>
          </button>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="mx-auto max-w-7xl px-4 pt-14">
        {/* Welcome Hero Section */}
        <section className="mt-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-surface-container-high border-primary-container relative h-16 w-16 overflow-hidden rounded-full border-2">
              <Image
                src="/image.png"
                alt="User Profile"
                fill
                sizes="64px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-primary text-[24px] leading-[32px] font-bold">
                Hello, Alex
              </h2>
              <p className="text-on-surface-variant flex items-center gap-1 text-[14px] leading-[20px]">
                <span
                  className="material-symbols-outlined text-[14px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                Prime Member since 2021
              </p>
            </div>
          </div>
          <button className="bg-secondary-container text-on-secondary-container rounded-lg px-4 py-2 text-[12px] leading-[16px] font-medium transition-opacity hover:opacity-90 active:scale-98">
            Switch Account
          </button>
        </section>

        {/* Quick Actions Bento Grid */}
        <section className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="bg-surface-container-lowest border-outline-variant group flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all hover:shadow-sm active:scale-98">
            <span className="material-symbols-outlined text-secondary mb-2">
              package_2
            </span>
            <span className="block text-[18px] leading-[24px] font-semibold">
              Your Orders
            </span>
            <span className="text-on-surface-variant group-hover:text-secondary mt-1 text-[11px] leading-[14px] font-semibold">
              Track or buy again
            </span>
          </div>
          <div className="bg-surface-container-lowest border-outline-variant group flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all hover:shadow-sm active:scale-98">
            <span className="material-symbols-outlined text-secondary mb-2">
              shield_person
            </span>
            <span className="block text-[18px] leading-[24px] font-semibold">
              Security
            </span>
            <span className="text-on-surface-variant group-hover:text-secondary mt-1 text-[11px] leading-[14px] font-semibold">
              Edit login & password
            </span>
          </div>
          <div className="bg-surface-container-lowest border-outline-variant group flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all hover:shadow-sm active:scale-98">
            <span className="material-symbols-outlined text-secondary mb-2">
              card_membership
            </span>
            <span className="block text-[18px] leading-[24px] font-semibold">
              Prime
            </span>
            <span className="text-on-surface-variant group-hover:text-secondary mt-1 text-[11px] leading-[14px] font-semibold">
              View benefits & payment
            </span>
          </div>
          <div className="bg-surface-container-lowest border-outline-variant group flex cursor-pointer flex-col justify-between rounded-xl border p-4 transition-all hover:shadow-sm active:scale-98">
            <span className="material-symbols-outlined text-secondary mb-2">
              location_on
            </span>
            <span className="block text-[18px] leading-[24px] font-semibold">
              Addresses
            </span>
            <span className="text-on-surface-variant group-hover:text-secondary mt-1 text-[11px] leading-[14px] font-semibold">
              Edit delivery addresses
            </span>
          </div>
        </section>

        {/* Detailed Management List */}
        <section className="bg-surface-container-lowest border-outline-variant mb-8 overflow-hidden rounded-xl border">
          <div className="border-outline-variant bg-surface-container-low border-b p-4">
            <h3 className="text-[18px] leading-[24px] font-semibold">
              Payments & Credits
            </h3>
          </div>
          <div className="divide-outline-variant divide-y">
            <div className="hover:bg-surface-container-low group flex origin-center cursor-pointer items-center justify-between p-4 transition-colors active:scale-99">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-outline">
                  credit_card
                </span>
                <div>
                  <p className="text-[16px] leading-[24px]">Payment Methods</p>
                  <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                    Default: Visa ending in 4242
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline transition-transform group-hover:translate-x-1">
                chevron_right
              </span>
            </div>
            <div className="hover:bg-surface-container-low group flex origin-center cursor-pointer items-center justify-between p-4 transition-colors active:scale-99">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-outline">
                  redeem
                </span>
                <div>
                  <p className="text-[16px] leading-[24px]">
                    Gift Card Balance
                  </p>
                  <p className="text-secondary text-[12px] leading-[16px] font-bold">
                    $124.50 available
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline transition-transform group-hover:translate-x-1">
                chevron_right
              </span>
            </div>
            <div className="hover:bg-surface-container-low group flex origin-center cursor-pointer items-center justify-between p-4 transition-colors active:scale-99">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-outline">
                  payments
                </span>
                <div>
                  <p className="text-[16px] leading-[24px]">ShopSwift Pay</p>
                  <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                    Manage ShopSwift Pay wallet
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline transition-transform group-hover:translate-x-1">
                chevron_right
              </span>
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <section className="group relative mb-8 h-32 origin-center cursor-pointer overflow-hidden rounded-xl active:scale-99">
          <div className="bg-primary-container/80 text-on-primary absolute inset-0 z-10 flex items-center p-6">
            <div>
              <h4 className="text-[18px] leading-[24px] font-semibold">
                Refer a Friend
              </h4>
              <p className="text-on-primary-container mt-1 text-[14px] leading-[20px]">
                Get $20 when your friend makes their first purchase.
              </p>
            </div>
          </div>
          <Image
            src="/image.png"
            alt="Referral Program"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </section>

        {/* Secondary Links Section */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-surface-container-lowest border-outline-variant flex flex-col gap-3 rounded-xl border p-4">
            <h3 className="text-[18px] leading-[24px] font-semibold">
              Personalization
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-on-surface-variant hover:text-primary flex cursor-pointer items-center gap-2 text-[14px] leading-[20px] transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  favorite
                </span>{' '}
                Your Lists
              </li>
              <li className="text-on-surface-variant hover:text-primary flex cursor-pointer items-center gap-2 text-[14px] leading-[20px] transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  history
                </span>{' '}
                Browsing History
              </li>
              <li className="text-on-surface-variant hover:text-primary flex cursor-pointer items-center gap-2 text-[14px] leading-[20px] transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  recommend
                </span>{' '}
                Recommendations
              </li>
            </ul>
          </div>
          <div className="bg-surface-container-lowest border-outline-variant flex flex-col gap-3 rounded-xl border p-4">
            <h3 className="text-[18px] leading-[24px] font-semibold">
              Support
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-on-surface-variant hover:text-primary flex cursor-pointer items-center gap-2 text-[14px] leading-[20px] transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  support_agent
                </span>{' '}
                Customer Service
              </li>
              <li className="text-on-surface-variant hover:text-primary flex cursor-pointer items-center gap-2 text-[14px] leading-[20px] transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  info
                </span>{' '}
                Help Topics
              </li>
              <li className="text-on-surface-variant hover:text-primary flex cursor-pointer items-center gap-2 text-[14px] leading-[20px] transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  contact_support
                </span>{' '}
                Contact Us
              </li>
            </ul>
          </div>
        </section>

        {/* Logout Button */}
        <div className="mt-10 mb-24 flex justify-center">
          <button className="border-outline-variant hover:bg-surface-container-low text-error flex items-center gap-2 rounded-full border px-8 py-3 text-[18px] leading-[24px] font-semibold transition-all active:scale-95">
            <span className="material-symbols-outlined">logout</span>
            Sign Out
          </button>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="bg-surface dark:bg-surface-dim border-outline-variant dark:border-outline pb-safe fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t px-2 shadow-lg">
        <div className="text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant flex scale-95 cursor-pointer flex-col items-center justify-center rounded-full px-4 py-1 transition-transform active:scale-90">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[12px] leading-[16px] font-medium">Home</span>
        </div>
        <div className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary flex scale-95 flex-col items-center justify-center rounded-full px-4 py-1 transition-transform active:scale-90">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            person
          </span>
          <span className="text-[12px] leading-[16px] font-medium">
            Profile
          </span>
        </div>
        <div className="text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant flex scale-95 cursor-pointer flex-col items-center justify-center rounded-full px-4 py-1 transition-transform active:scale-90">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[12px] leading-[16px] font-medium">Cart</span>
        </div>
        <div className="text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant flex scale-95 cursor-pointer flex-col items-center justify-center rounded-full px-4 py-1 transition-transform active:scale-90">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[12px] leading-[16px] font-medium">Orders</span>
        </div>
      </nav>
    </div>
  );
}
