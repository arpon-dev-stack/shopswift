'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
}

export default function InventoryManagement() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Studio Pro Headphones',
      category: 'Audio & Electronics',
      price: 299.0,
      stock: 42,
      image: '/image.png',
    },
    {
      id: 2,
      name: 'Nexus Smartwatch v2',
      category: 'Wearables',
      price: 199.99,
      stock: 5,
      image: '/image.png',
    },
    {
      id: 3,
      name: 'Barista Master X',
      category: 'Kitchen Appliances',
      price: 450.0,
      stock: 12,
      image: '/image.png',
    },
    {
      id: 4,
      name: 'Urban Nomad Pack',
      category: 'Accessories',
      price: 85.0,
      stock: 88,
      image: '/image.png',
    },
  ]);

  const updateStock = (id: number, amount: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const newStock = Math.max(0, product.stock + amount);
          return { ...product, stock: newStock };
        }
        return product;
      })
    );
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) {
      return {
        text: 'Out of Stock',
        badgeClass: 'text-error',
        dotClass: 'bg-error',
      };
    } else if (stock < 10) {
      return {
        text: `${stock} left!`,
        badgeClass: 'text-secondary',
        dotClass: 'bg-secondary-container animate-pulse',
      };
    } else {
      return {
        text: `${stock} in stock`,
        badgeClass: 'text-on-surface-variant',
        dotClass: 'bg-green-500',
      };
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen font-sans antialiased">
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-on-surface border-outline-variant dark:border-outline px-gutter sticky top-0 z-40 flex h-14 w-full items-center justify-between border-b py-2">
        <div className="flex cursor-pointer items-center gap-2 active:opacity-80">
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
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              className="bg-surface-container-low border-outline-variant focus:ring-secondary-container w-64 rounded-lg border px-4 py-1.5 text-[14px] leading-[20px] transition-all outline-none focus:border-transparent focus:ring-2"
              placeholder="Search inventory..."
              type="text"
            />
            <span className="material-symbols-outlined text-on-surface-variant absolute top-2 right-3">
              search
            </span>
          </div>
          <div className="bg-primary-container text-on-primary-container relative flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full">
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

      <div className="flex">
        {/* NavigationDrawer (Desktop Only) */}
        <aside className="bg-surface-container-low border-outline-variant sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 flex-col gap-4 border-r py-6 md:flex">
          <div className="mb-4 flex items-center gap-3 px-4">
            <div className="bg-secondary-container relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/image.png"
                alt="Admin Avatar"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <p className="text-on-surface truncate text-[14px] leading-[20px] font-bold">
                Alex Admin
              </p>
              <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                Store Owner
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            <a
              className="text-on-surface-variant hover:bg-surface-variant mx-2 flex items-center gap-3 rounded-full px-4 py-3 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-[14px] leading-[20px]">Dashboard</span>
            </a>
            <a
              className="bg-secondary-container text-on-secondary-container mx-2 flex items-center gap-3 rounded-full px-4 py-3 font-bold transition-all"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                inventory_2
              </span>
              <span className="text-[14px] leading-[20px]">Inventory</span>
            </a>
            <a
              className="text-on-surface-variant hover:bg-surface-variant mx-2 flex items-center gap-3 rounded-full px-4 py-3 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="text-[14px] leading-[20px]">Orders</span>
            </a>
            <a
              className="text-on-surface-variant hover:bg-surface-variant mx-2 flex items-center gap-3 rounded-full px-4 py-3 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-[14px] leading-[20px]">Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="min-h-[calc(100vh-3.5rem)] flex-1 p-4 pb-32 md:p-6">
          <div className="mx-auto max-w-6xl">
            {/* Page Header & Stats */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-on-surface text-[24px] leading-[32px] font-bold">
                  Inventory Management
                </h2>
                <p className="text-on-surface-variant text-[14px] leading-[20px]">
                  Manage 124 products across 5 categories
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-surface-container border-outline-variant text-on-surface-variant hover:bg-surface-variant flex items-center gap-2 rounded-lg border px-4 py-2 text-[12px] leading-[16px] font-medium transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    filter_list
                  </span>
                  Filter
                </button>
                <button className="bg-surface-container border-outline-variant text-on-surface-variant hover:bg-surface-variant flex items-center gap-2 rounded-lg border px-4 py-2 text-[12px] leading-[16px] font-medium transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    download
                  </span>
                  Export
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="bg-surface-container-lowest border-outline-variant rounded-xl border p-4">
                <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                  Low Stock Items
                </p>
                <h3 className="text-error mt-1 text-[18px] leading-[24px] font-bold">
                  12
                </h3>
              </div>
              <div className="bg-surface-container-lowest border-outline-variant rounded-xl border p-4">
                <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                  Out of Stock
                </p>
                <h3 className="text-on-surface mt-1 text-[18px] leading-[24px] font-bold">
                  3
                </h3>
              </div>
              <div className="bg-surface-container-lowest border-outline-variant rounded-xl border p-4">
                <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                  Total SKU
                </p>
                <h3 className="text-on-surface mt-1 text-[18px] leading-[24px] font-bold">
                  1,240
                </h3>
              </div>
              <div className="bg-surface-container-lowest border-outline-variant rounded-xl border p-4">
                <p className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                  Inventory Value
                </p>
                <h3 className="text-on-surface mt-1 text-[18px] leading-[24px] font-bold">
                  $42,500
                </h3>
              </div>
            </div>

            {/* Search for Mobile */}
            <div className="mb-6 sm:hidden">
              <div className="relative">
                <input
                  className="bg-surface-container-low border-outline-variant focus:ring-secondary-container w-full rounded-lg border px-4 py-3 text-[14px] leading-[20px] outline-none focus:ring-2"
                  placeholder="Search products..."
                  type="text"
                />
                <span className="material-symbols-outlined text-on-surface-variant absolute top-3 right-4">
                  search
                </span>
              </div>
            </div>

            {/* Inventory List Layout */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                const status = getStockStatus(product.stock);
                return (
                  <div
                    key={product.id}
                    className="bg-surface-container-lowest border-outline-variant group overflow-hidden rounded-xl border transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex h-full gap-4 p-4">
                      <div className="bg-surface-variant relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          className="object-cover transition-transform duration-200 group-hover:scale-105"
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="96px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between overflow-hidden">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="text-on-surface truncate text-[14px] leading-[20px] font-bold">
                              {product.name}
                            </h4>
                            <button className="text-on-surface-variant hover:text-primary shrink-0 transition-colors">
                              <span className="material-symbols-outlined text-[18px]">
                                edit
                              </span>
                            </button>
                          </div>
                          <p className="text-on-surface-variant truncate text-[12px] leading-[16px] font-medium">
                            {product.category}
                          </p>
                          <p className="text-on-secondary-fixed-variant mt-1 text-[14px] leading-[20px] font-bold">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <div className="flex min-w-0 items-center gap-2">
                            <span
                              className={`h-2 w-2 shrink-0 rounded-full ${status.dotClass}`}
                            ></span>
                            <span
                              className={`truncate text-[12px] leading-[16px] font-medium ${status.badgeClass}`}
                            >
                              {status.text}
                            </span>
                          </div>
                          <div className="bg-surface-container flex shrink-0 items-center gap-2 rounded-full px-1.5 py-0.5">
                            <button
                              className="hover:bg-surface-variant text-on-surface flex h-7 w-7 items-center justify-center rounded-full transition-colors active:scale-90"
                              onClick={() => updateStock(product.id, -1)}
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                remove
                              </span>
                            </button>
                            <span className="min-w-[20px] text-center text-[14px] leading-[20px] font-bold select-none">
                              {product.stock}
                            </span>
                            <button
                              className="hover:bg-surface-variant text-on-surface flex h-7 w-7 items-center justify-center rounded-full transition-colors active:scale-90"
                              onClick={() => updateStock(product.id, 1)}
                            >
                              <span className="material-symbols-outlined text-[16px]">
                                add
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      {/* Floating Action Button (FAB) */}
      <button className="bg-secondary-container text-on-secondary-container group fixed right-6 bottom-24 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform active:scale-95 md:right-10 md:bottom-10">
        <span className="material-symbols-outlined text-[28px]">add</span>
        <span className="bg-primary-container text-on-primary-container pointer-events-none absolute right-full mr-3 rounded-lg px-3 py-1.5 text-[12px] leading-[16px] font-medium whitespace-nowrap opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100">
          Add Product
        </span>
      </button>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="bg-surface border-outline-variant fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t py-2 shadow-md md:hidden">
        <a
          className="text-on-surface-variant flex flex-col items-center justify-center py-1"
          href="#"
        >
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Dashboard
          </span>
        </a>
        <a
          className="bg-secondary-container text-on-secondary-container flex flex-col items-center justify-center rounded-full px-4 py-1"
          href="#"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            inventory_2
          </span>
          <span className="text-[12px] leading-[16px] font-medium">
            Inventory
          </span>
        </a>
        <a
          className="text-on-surface-variant flex flex-col items-center justify-center py-1"
          href="#"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[12px] leading-[16px] font-medium">Orders</span>
        </a>
        <a
          className="text-on-surface-variant flex flex-col items-center justify-center py-1"
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
