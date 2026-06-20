'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type FilterTab = 'Orders' | 'Buy Again' | 'Not Yet Shipped' | 'Cancelled';

interface OrderItem {
  id: string;
  orderNumber: string;
  placedDate: string;
  total: number;
  shipTo: string;
  statusText: string;
  statusType: 'arriving' | 'delivered' | 'shipped' | 'cancelled';
  productName: string;
  productDetails: string;
  imageUrl: string;
  hasDetailsDropdown?: boolean;
  hasInvoiceDropdown?: boolean;
}

const INITIAL_ORDERS: OrderItem[] = [
  {
    id: 'item-1',
    orderNumber: '114-928374-123',
    placedDate: 'October 24, 2023',
    total: 124.99,
    shipTo: 'Alex Johnson',
    statusText: 'Arriving Today',
    statusType: 'arriving',
    productName: 'SwiftSound Elite Wireless Headphones',
    productDetails: 'Matte Black Edition • Noise Cancelling • 40h Battery Life',
    imageUrl: '/image.png',
    hasDetailsDropdown: true,
  },
  {
    id: 'item-2',
    orderNumber: '112-003921-992',
    placedDate: 'October 15, 2023',
    total: 59.0,
    shipTo: 'Alex Johnson',
    statusText: 'Delivered Oct 18',
    statusType: 'delivered',
    productName: 'Minimalist Series 4 Smart Analog Watch',
    productDetails: 'Brushed Silver • Genuine Leather Strap',
    imageUrl: '/image.png',
    hasInvoiceDropdown: true,
  },
  {
    id: 'item-3',
    orderNumber: '113-445566-778',
    placedDate: 'October 22, 2023',
    total: 24.5,
    shipTo: 'Alex Johnson',
    statusText: 'Shipped',
    statusType: 'shipped',
    productName: "Chef's Selection Stainless Steel Whisk & Spatula Set",
    productDetails: 'Professional Grade • Dishwasher Safe',
    imageUrl: '/image.png',
  },
];

export default function OrderHistory() {
  const [orders] = useState<OrderItem[]>(INITIAL_ORDERS);
  const [activeTab, setActiveTab] = useState<FilterTab>('Orders');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredOrders = orders.filter((order) => {
    // Tab filter matching logic
    if (activeTab === 'Not Yet Shipped') {
      return order.statusType === 'arriving' || order.statusType === 'shipped';
    }
    if (activeTab === 'Cancelled') {
      return order.statusType === 'cancelled';
    }

    // Search text matching logic
    const matchesSearch =
      order.orderNumber.includes(searchQuery) ||
      order.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.productDetails.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  return (
    <div className="bg-surface text-on-surface min-h-screen font-sans antialiased">
      {/* TopAppBar Component */}
      <header className="bg-primary dark:bg-primary-container fixed top-0 z-50 flex h-14 w-full items-center justify-between px-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button className="text-on-primary dark:text-on-primary-container hover:bg-primary-container/20 flex items-center justify-center rounded-full p-2 transition-colors duration-200">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-on-primary dark:text-on-primary-container text-[20px] leading-[28px] font-extrabold tracking-tight">
            ShopSwift
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-on-primary dark:text-on-primary-container hover:bg-primary-container/20 flex items-center justify-center rounded-full p-2 transition-colors duration-200">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-4xl px-4 pt-14 pb-20">
        {/* Breadcrumbs / Page Header */}
        <div className="py-6">
          <h2 className="text-on-surface text-[24px] leading-[32px] font-bold">
            Your Orders
          </h2>
          <div className="border-outline-variant mt-2 flex scrollbar-none gap-4 overflow-x-auto border-b">
            {(
              [
                'Orders',
                'Buy Again',
                'Not Yet Shipped',
                'Cancelled',
              ] as FilterTab[]
            ).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`border-b-2 pb-2 text-[12px] leading-[16px] font-medium whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'border-secondary-container text-on-surface font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface border-transparent'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search Orders Input Container */}
        <div className="relative mb-6">
          <input
            className="bg-surface-container-lowest border-outline-variant focus:ring-secondary-container w-full rounded-xl border px-10 py-2.5 text-[14px] leading-[20px] transition-all outline-none focus:border-transparent focus:ring-2"
            placeholder="Search all orders"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[20px]">
            search
          </span>
        </div>

        {/* Order Items List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="border-outline-variant/60 bg-surface-container-lowest overflow-hidden rounded-xl border shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              {/* Order Metadata Header Bar */}
              <div className="bg-surface-container-low flex flex-wrap items-center justify-between gap-y-2 px-4 py-3 text-[14px] leading-[20px]">
                <div className="text-on-surface-variant flex gap-6 sm:gap-8">
                  <div>
                    <p className="text-on-surface-variant/80 text-[11px] leading-[14px] font-bold tracking-wider uppercase">
                      Order Placed
                    </p>
                    <p className="text-on-surface mt-0.5 font-semibold">
                      {order.placedDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-on-surface-variant/80 text-[11px] leading-[14px] font-bold tracking-wider uppercase">
                      Total
                    </p>
                    <p className="text-on-surface mt-0.5 font-semibold">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-on-surface-variant/80 text-[11px] leading-[14px] font-bold tracking-wider uppercase">
                      Ship To
                    </p>
                    <button className="text-on-tertiary-container hover:text-on-tertiary-fixed-variant mt-0.5 flex items-center gap-0.5 font-semibold">
                      {order.shipTo}
                      <span className="material-symbols-outlined text-[16px]">
                        keyboard_arrow_down
                      </span>
                    </button>
                  </div>
                </div>
                <div className="text-left text-[12px] sm:text-right sm:text-[14px]">
                  <p className="text-on-surface-variant/80 text-[11px] leading-[14px] font-bold tracking-wider uppercase">
                    Order # {order.orderNumber}
                  </p>
                  {order.hasDetailsDropdown && (
                    <button className="text-on-tertiary-container mt-0.5 block font-medium hover:underline sm:inline-block">
                      View order details
                    </button>
                  )}
                  {order.hasInvoiceDropdown && (
                    <button className="text-on-tertiary-container mt-0.5 flex w-full items-center gap-0.5 font-medium hover:underline sm:justify-end">
                      Invoice
                      <span className="material-symbols-outlined text-[16px]">
                        keyboard_arrow_down
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* Order Fulfillment Details Section */}
              <div className="flex flex-col gap-4 p-4 sm:flex-row sm:gap-6">
                <div className="bg-surface-container border-outline-variant/30 relative flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border">
                  <Image
                    className="object-cover"
                    src={order.imageUrl}
                    alt={order.productName}
                    fill
                    sizes="96px"
                  />
                </div>
                <div className="min-w-0 flex-grow">
                  <div className="mb-1 flex flex-col gap-1.5 md:flex-row md:items-center">
                    {order.statusType === 'arriving' && (
                      <span className="bg-secondary-fixed text-on-secondary-fixed-variant max-w-fit rounded px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase">
                        {order.statusText}
                      </span>
                    )}
                    {order.statusType === 'delivered' && (
                      <div className="text-on-tertiary-container flex items-center gap-1 text-[13px] font-bold">
                        <span className="material-symbols-outlined text-[18px]">
                          check_circle
                        </span>
                        <span>{order.statusText}</span>
                      </div>
                    )}
                    {order.statusType === 'shipped' && (
                      <div className="text-secondary flex items-center gap-1 text-[13px] font-bold">
                        <span className="material-symbols-outlined text-[18px]">
                          local_shipping
                        </span>
                        <span>{order.statusText}</span>
                      </div>
                    )}
                    <h3 className="text-on-surface truncate text-[16px] leading-[24px] font-bold md:ml-1">
                      {order.productName}
                    </h3>
                  </div>
                  <p className="text-on-surface-variant mb-4 text-[13px] leading-[18px]">
                    {order.productDetails}
                  </p>

                  {/* Action Buttons Workflow */}
                  <div className="flex flex-wrap gap-2">
                    {order.statusType === 'arriving' && (
                      <>
                        <button className="bg-secondary-container text-on-secondary-container rounded-full px-5 py-2 text-[12px] leading-[16px] font-bold shadow-sm transition-opacity hover:opacity-95">
                          Track Package
                        </button>
                        <button className="border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-variant rounded-full border px-5 py-2 text-[12px] leading-[16px] font-medium transition-colors">
                          Return or replace items
                        </button>
                      </>
                    )}
                    {order.statusType === 'delivered' && (
                      <>
                        <button className="bg-secondary-container text-on-secondary-container rounded-full px-5 py-2 text-[12px] leading-[16px] font-bold shadow-sm transition-opacity hover:opacity-95">
                          Buy it again
                        </button>
                        <button className="border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-variant rounded-full border px-5 py-2 text-[12px] leading-[16px] font-medium transition-colors">
                          Write a product review
                        </button>
                      </>
                    )}
                    {order.statusType === 'shipped' && (
                      <>
                        <button className="bg-secondary-container text-on-secondary-container rounded-full px-5 py-2 text-[12px] leading-[16px] font-bold shadow-sm transition-opacity hover:opacity-95">
                          Track Package
                        </button>
                        <button className="border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-variant rounded-full border px-5 py-2 text-[12px] leading-[16px] font-medium transition-colors">
                          Change Delivery Address
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredOrders.length === 0 && (
            <div className="border-outline-variant bg-surface-container-lowest rounded-xl border py-12 text-center">
              <span className="material-symbols-outlined text-on-surface-variant/40 text-[44px]">
                package_2
              </span>
              <p className="text-on-surface-variant mt-2 text-[14px] font-medium">
                No orders matched your search criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* BottomNavBar Component (Mobile Layout Only) */}
      <nav className="bg-surface dark:bg-surface-dim border-outline-variant dark:border-outline pb-safe fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t px-2 shadow-lg md:hidden">
        <button className="text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all">
          <span className="material-symbols-outlined">home</span>
          <span className="mt-0.5 text-[11px] leading-[14px] font-medium">
            Home
          </span>
        </button>
        <button className="text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all">
          <span className="material-symbols-outlined">person</span>
          <span className="mt-0.5 text-[11px] leading-[14px] font-medium">
            Profile
          </span>
        </button>
        <button className="text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant flex flex-col items-center justify-center rounded-xl px-2 py-1 transition-all">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="mt-0.5 text-[11px] leading-[14px] font-medium">
            Cart
          </span>
        </button>
        <button className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary flex flex-col items-center justify-center rounded-full px-4 py-1.5 transition-all">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            history
          </span>
          <span className="mt-0.5 text-[11px] leading-[14px] font-bold">
            Orders
          </span>
        </button>
      </nav>
    </div>
  );
}
