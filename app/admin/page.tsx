'use client';

import React from 'react';
import Image from 'next/image';

export default function StoreManagerDashboard() {
  return (
    <div className="bg-background text-on-surface min-h-screen overflow-x-hidden font-sans antialiased">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-on-surface border-outline-variant dark:border-outline px-gutter sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b py-2">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary dark:text-primary-fixed-dim"
            style={{ fontVariationSettings: "'opsz' 24" }}
          >
            storefront
          </span>
          <h1 className="text-primary dark:text-primary-fixed-dim text-[18px] leading-[24px] font-bold tracking-tight">
            Store Manager
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <nav className="mr-4 hidden items-center gap-4 md:flex">
            <span className="text-primary hover:bg-surface-container-low cursor-pointer rounded px-3 py-1 text-[14px] leading-[20px] font-bold transition-colors">
              Dashboard
            </span>
            <span className="text-on-surface-variant hover:bg-surface-container-low cursor-pointer rounded px-3 py-1 text-[14px] leading-[20px] transition-colors">
              Inventory
            </span>
            <span className="text-on-surface-variant hover:bg-surface-container-low cursor-pointer rounded px-3 py-1 text-[14px] leading-[20px] transition-colors">
              Orders
            </span>
          </nav>
          <div className="bg-primary-container border-outline-variant relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full border active:opacity-80">
            <Image
              src="/image.png"
              alt="Admin User Profile"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-3.5rem)]">
        {/* NavigationDrawer (Desktop Only) */}
        <aside className="bg-surface-container dark:bg-surface-container-high border-outline-variant dark:border-outline fixed top-14 left-0 z-30 hidden h-[calc(100vh-3.5rem)] w-64 flex-col gap-4 border-r py-6 md:flex">
          <div className="mb-4 flex items-center gap-3 px-4">
            <div className="bg-secondary-container flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-on-secondary-container">
                person
              </span>
            </div>
            <div className="overflow-hidden">
              <p className="text-primary truncate text-[18px] leading-[24px] font-bold">
                Alex Admin
              </p>
              <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                Store Owner
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <div className="bg-secondary-container text-on-secondary-container mx-2 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 font-bold transition-all active:scale-98">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-[14px] leading-[20px]">Dashboard</span>
            </div>
            <div className="text-on-surface-variant hover:bg-surface-variant mx-2 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 transition-all active:scale-98">
              <span className="material-symbols-outlined">inventory_2</span>
              <span className="text-[14px] leading-[20px]">Inventory</span>
            </div>
            <div className="text-on-surface-variant hover:bg-surface-variant mx-2 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 transition-all active:scale-98">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="text-[14px] leading-[20px]">Orders</span>
            </div>
            <div className="text-on-surface-variant hover:bg-surface-variant mx-2 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 transition-all active:scale-98">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-[14px] leading-[20px]">Settings</span>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 pb-24 md:ml-64 md:p-6 md:pb-8">
          {/* Breadcrumbs */}
          <div className="text-on-surface-variant mb-6 flex items-center gap-2">
            <span className="text-[12px] leading-[16px] font-medium tracking-wider uppercase">
              Home
            </span>
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
            <span className="text-primary text-[12px] leading-[16px] font-bold tracking-wider uppercase">
              Dashboard
            </span>
          </div>

          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-primary text-[24px] leading-[32px] font-bold">
              Performance Overview
            </h2>
            <p className="text-on-surface-variant mt-1 text-[14px] leading-[20px]">
              Daily retail metrics and order status updates.
            </p>
          </div>

          {/* KPI Bento Grid */}
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* KPI 1: Sales */}
            <div className="bg-surface-container-lowest border-outline-variant group relative overflow-hidden rounded-lg border p-6 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-on-surface-variant text-[12px] leading-[16px] font-medium uppercase">
                    Today&apos;s Sales
                  </span>
                  <span className="material-symbols-outlined text-secondary-container">
                    payments
                  </span>
                </div>
                <p className="text-primary text-[28px] leading-[28px] font-bold tracking-tight">
                  $4,250.00
                </p>
                <div className="text-tertiary-container mt-4 flex items-center gap-2 text-[12px] leading-[16px] font-medium">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[16px]">
                    trending_up
                  </span>
                  <span className="text-on-tertiary-container">
                    +12.5% from yesterday
                  </span>
                </div>
              </div>
              {/* Micro Mini-Line Chart Canvas Placeholder */}
              <div className="absolute right-0 bottom-0 h-16 w-24 opacity-20 transition-opacity group-hover:opacity-40">
                <svg className="h-full w-full" viewBox="0 0 100 40">
                  <path
                    className="text-secondary"
                    d="M0 35 L20 25 L40 30 L60 10 L80 15 L100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></path>
                </svg>
              </div>
            </div>

            {/* KPI 2: Active Orders */}
            <div className="bg-surface-container-lowest border-outline-variant rounded-lg border p-6 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="mb-4 flex items-start justify-between">
                <span className="text-on-surface-variant text-[12px] leading-[16px] font-medium uppercase">
                  Active Orders
                </span>
                <span className="material-symbols-outlined text-on-primary-container">
                  pending_actions
                </span>
              </div>
              <p className="text-primary text-[28px] leading-[28px] font-bold tracking-tight">
                12
              </p>
              <div className="text-on-surface-variant mt-4 flex items-center gap-2 text-[12px] leading-[16px] font-medium">
                <span className="text-secondary font-bold">8</span> processing
                <span className="mx-1">•</span>
                <span className="text-secondary font-bold">4</span> ready for
                ship
              </div>
            </div>

            {/* KPI 3: Out of Stock */}
            <div className="bg-surface-container-lowest border-outline-variant rounded-lg border p-6 transition-transform duration-200 hover:-translate-y-0.5">
              <div className="mb-4 flex items-start justify-between">
                <span className="text-on-surface-variant text-[12px] leading-[16px] font-medium uppercase">
                  Stock Alerts
                </span>
                <span className="material-symbols-outlined text-error">
                  warning
                </span>
              </div>
              <p className="text-error text-[28px] leading-[28px] font-bold tracking-tight">
                3
              </p>
              <div className="text-error mt-4 flex items-center gap-2 text-[12px] leading-[16px] font-medium">
                <span className="font-bold">Critical Level:</span> Restock
                required immediately
              </div>
            </div>
          </div>

          {/* Detailed Section: Chart & Recent Orders */}
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-5">
            {/* Sales Trend */}
            <div className="bg-surface-container-lowest border-outline-variant rounded-lg border p-6 xl:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-primary text-[18px] leading-[24px] font-semibold">
                  Sales Trend
                </h3>
                <div className="flex gap-2">
                  <button className="bg-surface-variant text-on-surface rounded-full px-3 py-1 text-[12px] leading-[16px] font-medium">
                    Weekly
                  </button>
                  <button className="hover:bg-surface-variant text-on-surface-variant rounded-full px-3 py-1 text-[12px] leading-[16px] font-medium transition-colors">
                    Monthly
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-low relative flex h-64 w-full items-end justify-between overflow-hidden rounded px-4 pb-4">
                {/* Abstract Chart Visualization */}
                <div className="absolute inset-0 p-8">
                  <div className="flex h-full w-full items-end justify-between gap-2">
                    <div className="bg-secondary-container h-[40%] w-full rounded-t opacity-20"></div>
                    <div className="bg-secondary-container h-[60%] w-full rounded-t opacity-30"></div>
                    <div className="bg-secondary-container h-[45%] w-full rounded-t opacity-20"></div>
                    <div className="bg-secondary-container h-[80%] w-full rounded-t opacity-40"></div>
                    <div className="bg-secondary-container h-[70%] w-full rounded-t opacity-60"></div>
                    <div className="bg-secondary-container h-[95%] w-full rounded-t opacity-90"></div>
                    <div className="bg-secondary h-[85%] w-full rounded-t opacity-100"></div>
                  </div>
                </div>
                <div className="bg-outline-variant absolute top-1/2 left-0 h-px w-full opacity-20"></div>
                <div className="bg-outline-variant absolute top-1/4 left-0 h-px w-full opacity-20"></div>
                <div className="bg-outline-variant absolute top-3/4 left-0 h-px w-full opacity-20"></div>
              </div>
              <div className="text-on-surface-variant mt-4 flex justify-between px-2 text-[12px] leading-[16px] font-medium">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-surface-container-lowest border-outline-variant overflow-hidden rounded-lg border xl:col-span-2">
              <div className="border-outline-variant flex items-center justify-between border-b p-6">
                <h3 className="text-primary text-[18px] leading-[24px] font-semibold">
                  Recent Orders
                </h3>
                <button className="text-secondary text-[12px] leading-[16px] font-medium hover:underline">
                  View All
                </button>
              </div>
              <div className="divide-outline-variant divide-y">
                {/* Order Row 1 */}
                <div className="hover:bg-surface-container-low group flex cursor-pointer items-center justify-between p-4 transition-colors active:scale-[0.99]">
                  <div className="flex items-center gap-4">
                    <div className="bg-surface-container-high relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded">
                      <Image
                        src="/image.png"
                        alt="Order Thumbnail"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-primary text-[14px] leading-[20px] font-bold">
                        #ORD-2891
                      </p>
                      <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                        2 items • $124.00
                      </p>
                    </div>
                  </div>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full px-3 py-1 text-[11px] leading-[14px] font-semibold tracking-tighter uppercase">
                    Shipped
                  </span>
                </div>
                {/* Order Row 2 */}
                <div className="hover:bg-surface-container-low group flex cursor-pointer items-center justify-between p-4 transition-colors active:scale-[0.99]">
                  <div className="flex items-center gap-4">
                    <div className="bg-surface-container-high relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded">
                      <Image
                        src="/image.png"
                        alt="Order Thumbnail"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-primary text-[14px] leading-[20px] font-bold">
                        #ORD-2890
                      </p>
                      <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                        1 item • $349.99
                      </p>
                    </div>
                  </div>
                  <span className="bg-secondary-fixed text-on-secondary-fixed-variant rounded-full px-3 py-1 text-[11px] leading-[14px] font-semibold tracking-tighter uppercase">
                    Processing
                  </span>
                </div>
                {/* Order Row 3 */}
                <div className="hover:bg-surface-container-low group flex cursor-pointer items-center justify-between p-4 transition-colors active:scale-[0.99]">
                  <div className="flex items-center gap-4">
                    <div className="bg-surface-container-high relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded">
                      <Image
                        src="/image.png"
                        alt="Order Thumbnail"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-primary text-[14px] leading-[20px] font-bold">
                        #ORD-2889
                      </p>
                      <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                        1 item • $199.00
                      </p>
                    </div>
                  </div>
                  <span className="bg-surface-variant text-on-surface-variant rounded-full px-3 py-1 text-[11px] leading-[14px] font-semibold tracking-tighter uppercase">
                    Delivered
                  </span>
                </div>
                {/* Order Row 4 */}
                <div className="hover:bg-surface-container-low group flex cursor-pointer items-center justify-between p-4 transition-colors active:scale-[0.99]">
                  <div className="flex items-center gap-4">
                    <div className="bg-surface-container-high relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded">
                      <Image
                        src="/image.png"
                        alt="Order Thumbnail"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-primary text-[14px] leading-[20px] font-bold">
                        #ORD-2888
                      </p>
                      <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                        3 items • $85.50
                      </p>
                    </div>
                  </div>
                  <span className="bg-secondary-fixed text-on-secondary-fixed-variant rounded-full px-3 py-1 text-[11px] leading-[14px] font-semibold tracking-tighter uppercase">
                    Processing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Out of Stock List Section */}
          <div className="bg-surface-container-lowest border-outline-variant mt-10 overflow-hidden rounded-lg border">
            <div className="border-outline-variant bg-error-container/10 flex items-center gap-3 border-b p-6">
              <span className="material-symbols-outlined text-error">
                inventory
              </span>
              <h3 className="text-primary text-[18px] leading-[24px] font-semibold">
                Inventory Alerts (3)
              </h3>
            </div>
            <div className="custom-scrollbar overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="bg-surface-container border-outline-variant border-b">
                    <th className="text-on-surface-variant px-6 py-3 text-[12px] leading-[16px] font-medium tracking-wider uppercase">
                      Product
                    </th>
                    <th className="text-on-surface-variant px-6 py-3 text-[12px] leading-[16px] font-medium tracking-wider uppercase">
                      SKU
                    </th>
                    <th className="text-on-surface-variant px-6 py-3 text-[12px] leading-[16px] font-medium tracking-wider uppercase">
                      Last Restock
                    </th>
                    <th className="text-on-surface-variant px-6 py-3 text-right text-[12px] leading-[16px] font-medium tracking-wider uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-outline-variant divide-y">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="text-primary px-6 py-4 text-[14px] leading-[20px] font-bold">
                      Ultra-Thin Wireless Keyboard
                    </td>
                    <td className="text-on-surface-variant px-6 py-4 font-mono text-[11px] leading-[14px] font-semibold">
                      KB-2024-WT
                    </td>
                    <td className="text-on-surface-variant px-6 py-4 text-[14px] leading-[20px]">
                      14 Oct 2023
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-error text-[11px] leading-[14px] font-bold font-semibold tracking-wider uppercase">
                        Out of Stock
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="text-primary px-6 py-4 text-[14px] leading-[20px] font-bold">
                      Ergonomic Office Chair
                    </td>
                    <td className="text-on-surface-variant px-6 py-4 font-mono text-[11px] leading-[14px] font-semibold">
                      CH-8821-BK
                    </td>
                    <td className="text-on-surface-variant px-6 py-4 text-[14px] leading-[20px]">
                      02 Nov 2023
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-error text-[11px] leading-[14px] font-bold font-semibold tracking-wider uppercase">
                        Out of Stock
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="text-primary px-6 py-4 text-[14px] leading-[20px] font-bold">
                      USB-C Hub (7-in-1)
                    </td>
                    <td className="text-on-surface-variant px-6 py-4 font-mono text-[11px] leading-[14px] font-semibold">
                      HB-5509-SL
                    </td>
                    <td className="text-on-surface-variant px-6 py-4 text-[14px] leading-[20px]">
                      28 Oct 2023
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-error text-[11px] leading-[14px] font-bold font-semibold tracking-wider uppercase">
                        Out of Stock
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="bg-surface border-outline-variant fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t py-2 shadow-md md:hidden">
        <button className="bg-secondary-container text-on-secondary-container flex flex-col items-center justify-center rounded-full px-4 py-1 transition-transform active:scale-95">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Dashboard
          </span>
        </button>
        <button className="text-on-surface-variant hover:bg-surface-variant flex flex-col items-center justify-center rounded-full p-1 px-4 transition-transform active:scale-95">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Inventory
          </span>
        </button>
        <button className="text-on-surface-variant hover:bg-surface-variant flex flex-col items-center justify-center rounded-full p-1 px-4 transition-transform active:scale-95">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[12px] leading-[16px] font-medium">Orders</span>
        </button>
        <button className="text-on-surface-variant hover:bg-surface-variant flex flex-col items-center justify-center rounded-full p-1 px-4 transition-transform active:scale-95">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Settings
          </span>
        </button>
      </nav>

      {/* Contextual FAB (Mobile Only) */}
      <button className="bg-secondary fixed right-6 bottom-20 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all hover:opacity-90 active:scale-95 md:hidden">
        <span className="material-symbols-outlined text-[24px]">add</span>
      </button>
    </div>
  );
}
