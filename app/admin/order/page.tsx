'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type OrderStatus = 'Pending' | 'Shipped' | 'Completed' | 'Cancelled';

interface Order {
  id: string;
  date: string;
  time: string;
  status: OrderStatus;
  customerName: string;
  customerInitials: string;
  email: string;
  total: number;
  itemsCount: number;
  avatarBg: string;
}

const INITIAL_ORDERS: Order[] = [
  {
    id: 'ORD-94210',
    date: 'May 14, 2024',
    time: '10:45 AM',
    status: 'Pending',
    customerName: 'Jane Doe',
    customerInitials: 'JD',
    email: 'jane.doe@example.com',
    total: 249.99,
    itemsCount: 3,
    avatarBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
  },
  {
    id: 'ORD-94211',
    date: 'May 14, 2024',
    time: '09:12 AM',
    status: 'Shipped',
    customerName: 'Mark Smith',
    customerInitials: 'MS',
    email: 'm.smith@webmail.com',
    total: 1204.5,
    itemsCount: 12,
    avatarBg: 'bg-secondary-fixed-dim text-on-secondary-fixed',
  },
  {
    id: 'ORD-94208',
    date: 'May 13, 2024',
    time: '04:30 PM',
    status: 'Completed',
    customerName: 'Alice Luna',
    customerInitials: 'AL',
    email: 'aluna@design.co',
    total: 56.0,
    itemsCount: 1,
    avatarBg: 'bg-tertiary-fixed-dim text-on-tertiary-fixed',
  },
  {
    id: 'ORD-94207',
    date: 'May 13, 2024',
    time: '02:15 PM',
    status: 'Pending',
    customerName: 'Robert Johnson',
    customerInitials: 'RJ',
    email: 'rob.j@gmail.com',
    total: 412.2,
    itemsCount: 5,
    avatarBg: 'bg-primary-fixed text-on-primary-fixed',
  },
];

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [filter, setFilter] = useState<string>('All Orders');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getBadgeStyles = (status: OrderStatus) => {
    switch (status) {
      case 'Pending':
        return 'bg-secondary-fixed text-on-secondary-fixed';
      case 'Shipped':
        return 'bg-primary-fixed text-on-primary-fixed';
      case 'Completed':
        return 'bg-surface-variant text-on-surface-variant';
      case 'Cancelled':
        return 'bg-error-container text-on-error-container';
      default:
        return 'bg-surface-variant text-on-surface-variant';
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesFilter = filter === 'All Orders' || order.status === filter;
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-background text-on-background min-h-screen font-sans antialiased">
      {/* Sidebar (Desktop Only) */}

      {/* Top App Bar */}

      {/* Main Content Canvas */}
      <main className="min-h-[calc(100vh-3.5rem)] p-4 pb-24 md:ml-64 md:p-6 md:pb-6">
        {/* Filter Header */}
        <section className="mb-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex scrollbar-none items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {['All Orders', 'Pending', 'Shipped', 'Completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`rounded-full px-5 py-2 text-[12px] leading-[16px] font-bold whitespace-nowrap transition-all ${
                    filter === tab
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'border-outline-variant text-on-surface-variant hover:bg-surface-variant border font-medium'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="group relative">
              <span className="material-symbols-outlined text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[20px]">
                search
              </span>
              <input
                className="bg-surface-container-lowest border-outline-variant focus:ring-secondary-container w-full rounded-xl border py-2 pr-4 pl-10 text-[14px] leading-[20px] transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:w-64"
                placeholder="Search orders..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Order List Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-surface-container-lowest border-outline-variant flex flex-col gap-4 rounded-xl border p-4 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-primary text-[16px] leading-[24px] font-bold">
                    {order.id}
                  </h3>
                  <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                    {order.date} • {order.time}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase ${getBadgeStyles(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="border-outline-variant/30 flex items-center gap-3 border-y py-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-bold ${order.avatarBg}`}
                >
                  {order.customerInitials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-on-surface truncate text-[14px] leading-[20px] font-bold">
                    {order.customerName}
                  </p>
                  <p className="text-on-surface-variant truncate text-[12px] leading-[16px] font-medium">
                    {order.email}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-on-surface text-[18px] leading-[24px] font-bold">
                    ${order.total.toFixed(2)}
                  </p>
                  <p className="text-on-tertiary-container text-[11px] leading-[14px] font-semibold">
                    {order.itemsCount}{' '}
                    {order.itemsCount === 1 ? 'Item' : 'Items'}
                  </p>
                </div>
              </div>

              <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-on-surface-variant text-[11px] font-bold tracking-wider uppercase">
                    Change Status
                  </label>
                  <div className="relative">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(
                          order.id,
                          e.target.value as OrderStatus
                        )
                      }
                      className="bg-surface-container-low border-outline-variant focus:ring-secondary w-full appearance-none rounded-lg border p-2 pr-8 text-[14px] leading-[20px] outline-none focus:border-transparent focus:ring-2"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                    <span className="material-symbols-outlined text-on-surface-variant pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-[20px]">
                      arrow_drop_down
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <button className="bg-surface-variant text-on-surface hover:bg-outline-variant flex h-[38px] flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-[12px] leading-[16px] font-bold transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      print
                    </span>{' '}
                    Print
                  </button>
                  <button className="bg-primary text-on-primary flex h-[38px] flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-[12px] leading-[16px] font-bold transition-opacity hover:opacity-90">
                    <span className="material-symbols-outlined text-[18px]">
                      mail
                    </span>{' '}
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="bg-surface-container-lowest border-outline-variant mt-4 rounded-xl border py-12 text-center">
            <span className="material-symbols-outlined text-on-surface-variant/50 text-[48px]">
              shopping_cart_off
            </span>
            <p className="text-on-surface-variant mt-2 text-[14px] font-medium">
              No orders found match the criteria.
            </p>
          </div>
        )}

        {/* Load More Button */}
        {filteredOrders.length > 0 && (
          <div className="mt-8 flex justify-center">
            <button className="bg-surface-container-high text-on-surface hover:bg-outline-variant flex items-center gap-2 rounded-lg px-6 py-2.5 text-[14px] leading-[20px] font-bold transition-all">
              Load More Orders
              <span className="material-symbols-outlined text-[20px]">
                expand_more
              </span>
            </button>
          </div>
        )}
      </main>

      {/* Bottom Navigation (Mobile Only) */}
      <nav className="bg-surface border-outline-variant fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t py-2 shadow-md md:hidden">
        <a
          className="text-on-surface-variant flex flex-col items-center justify-center p-1"
          href="#"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Dashboard
          </span>
        </a>
        <a
          className="text-on-surface-variant flex flex-col items-center justify-center p-1"
          href="#"
        >
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Inventory
          </span>
        </a>
        <div className="bg-secondary-container text-on-secondary-container flex flex-col items-center justify-center rounded-full px-4 py-1">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[12px] leading-[16px] font-bold">Orders</span>
        </div>
        <a
          className="text-on-surface-variant flex flex-col items-center justify-center p-1"
          href="#"
        >
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Settings
          </span>
        </a>
      </nav>
    </div>
  );
}
