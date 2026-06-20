'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  imgSrc: string;
  alt: string;
  isBestseller?: boolean;
  rating: number;
  reviews: string;
  priceDollar: string;
  priceCents: string;
  originalPrice?: string;
  hasPrime: boolean;
  deliveryDay: string;
}

export default function SearchResults() {
  // Centralized mock data array for clean rendering and feature scalability
  const [products] = useState<Product[]>([
    {
      id: 1,
      title:
        'EliteSound WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones',
      imgSrc: '/image.png',
      alt: 'Premium professional studio headphones with a sleek matte black finish',
      isBestseller: true,
      rating: 4.5,
      reviews: '4,529',
      priceDollar: '348',
      priceCents: '00',
      originalPrice: '399.99',
      hasPrime: true,
      deliveryDay: 'Tomorrow',
    },
    {
      id: 2,
      title:
        'QuietComfort Earbuds II, Wireless Noise Cancelling In-Ear Headphones',
      imgSrc: '/image.png',
      alt: 'Sleek modern wireless earbuds in their charging case',
      rating: 5,
      reviews: '12,104',
      priceDollar: '249',
      priceCents: '00',
      hasPrime: true,
      deliveryDay: 'Wed, Oct 25',
    },
    {
      id: 3,
      title:
        'Sennheiser HD 450BT Bluetooth 5.0 Wireless Headphones with Active Noise Cancellation',
      imgSrc: '/image.png',
      alt: 'Close-up of over-ear silver headphones with plush ear cushions',
      rating: 4,
      reviews: '8,756',
      priceDollar: '129',
      priceCents: '95',
      hasPrime: true,
      deliveryDay: 'Thu, Oct 26',
    },
    {
      id: 4,
      title:
        'SoundCore Anker Life Q30 Hybrid Active Noise Cancelling Headphones',
      imgSrc: '/image.png',
      alt: 'Durable studio-grade headphones in a rich navy blue color',
      rating: 5,
      reviews: '48,290',
      priceDollar: '79',
      priceCents: '99',
      hasPrime: false,
      deliveryDay: 'Friday, Oct 27',
    },
  ]);

  return (
    <div className="text-on-surface bg-surface min-h-screen font-sans antialiased">
      {/* TopAppBar Shell */}
      <header className="bg-primary dark:bg-primary-container px-gutter fixed top-0 z-50 flex h-14 w-full items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button className="text-on-primary dark:text-on-primary-container hover:bg-primary-container/20 transform rounded p-2 transition-colors duration-200 active:scale-95">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-on-primary dark:text-on-primary-container text-[20px] leading-[28px] font-extrabold tracking-tight">
            ShopSwift
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-on-primary dark:text-on-primary-container hover:bg-primary-container/20 transform rounded p-2 transition-colors duration-200 active:scale-95">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </header>

      <main className="mt-14 pb-20">
        {/* Filter & Sort Bar */}
        <div className="bg-surface border-outline-variant px-gutter hide-scrollbar sticky top-14 z-40 overflow-x-auto border-b py-2 whitespace-nowrap shadow-sm">
          <div className="flex items-center gap-4">
            {['Sort: Featured', 'Price', 'Brand', 'Customer Review'].map(
              (filter, index) => (
                <div
                  key={index}
                  className="bg-surface-container-high border-outline-variant hover:bg-surface-variant flex cursor-pointer items-center gap-1 rounded-full border px-3 py-1.5 transition-colors"
                >
                  <span className="text-on-surface-variant text-[12px] leading-[16px] font-medium">
                    {filter}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">
                    keyboard_arrow_down
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Search Info */}
        <div className="px-gutter text-on-surface-variant py-2">
          <p className="text-[14px] leading-[20px]">
            1-48 of over 10,000 results for{' '}
            <span className="text-secondary font-bold">
              &quot;noise cancelling headphones&quot;
            </span>
          </p>
        </div>

        {/* Product List */}
        <div className="flex flex-col">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-surface-container-lowest p-gutter mb-2 flex cursor-pointer gap-4 border border-[#D5D9D9] transition-all first:mt-0 last:mb-0 hover:shadow-md"
            >
              {/* Product Image Wrap with requested structure */}
              <div className="relative flex h-32 w-32 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white">
                <Image
                  fill
                  src={product.imgSrc}
                  alt={product.alt}
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 128px"
                />
                {product.isBestseller && (
                  <div className="bg-secondary-container text-on-secondary-container absolute top-0 left-0 z-10 rounded-br-lg px-2 py-0.5 text-[11px] leading-[14px] font-semibold">
                    Bestseller
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="flex flex-grow flex-col gap-0.5">
                <h3 className="text-on-surface line-clamp-2 text-[16px] leading-[24px] font-normal">
                  {product.title}
                </h3>

                {/* Product Rating System */}
                <div className="flex items-center gap-1">
                  <div className="text-secondary-container flex">
                    {[...Array(5)].map((_, i) => {
                      const starVal = i + 1;
                      const isHalf =
                        product.rating % 1 !== 0 &&
                        starVal === Math.ceil(product.rating);
                      const isFilled = starVal <= product.rating;

                      return (
                        <span
                          key={i}
                          className="material-symbols-outlined text-[18px]"
                          style={{
                            fontVariationSettings: `'FILL' ${isFilled && !isHalf ? 1 : 0}`,
                          }}
                        >
                          {isHalf ? 'star_half' : 'star'}
                        </span>
                      );
                    })}
                  </div>
                  <span className="text-on-tertiary-container text-[12px] leading-[16px] font-medium">
                    {product.reviews}
                  </span>
                </div>

                {/* Pricing Framework */}
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-on-surface text-[28px] leading-[28px] font-bold tracking-tight">
                    <sup className="top-[-0.6em] text-[14px]">$</sup>
                    {product.priceDollar}
                    <sup className="top-[-0.6em] text-[14px]">
                      {product.priceCents}
                    </sup>
                  </span>
                  {product.originalPrice && (
                    <span className="text-on-surface-variant text-[12px] leading-[16px] line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Delivery Context */}
                <div className="mt-1 flex items-center gap-1">
                  {product.hasPrime && (
                    <span className="text-on-tertiary-container mr-0.5 text-[12px] leading-[16px] font-bold">
                      Prime
                    </span>
                  )}
                  <span className="text-on-surface-variant text-[12px] leading-[16px]">
                    FREE delivery{' '}
                    <span className="font-bold">{product.deliveryDay}</span>
                  </span>
                </div>

                <button className="bg-secondary-container hover:bg-secondary text-on-secondary-container mt-2 w-fit transform rounded-full px-4 py-1.5 text-[12px] leading-[16px] font-bold transition-colors active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* BottomNavBar Shell */}
      <nav className="bg-surface dark:bg-surface-dim border-outline-variant dark:border-outline pb-safe fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t px-2 shadow-lg">
        <button className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary flex transform flex-col items-center justify-center rounded-full px-4 py-1 transition-transform active:scale-90">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[12px] leading-[16px] font-medium">Home</span>
        </button>
        <button className="text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant flex transform flex-col items-center justify-center rounded p-1 transition-transform active:scale-90">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Profile
          </span>
        </button>
        <button className="text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant flex transform flex-col items-center justify-center rounded p-1 transition-transform active:scale-90">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[12px] leading-[16px] font-medium">Cart</span>
        </button>
        <button className="text-on-surface-variant dark:text-on-surface hover:bg-surface-container-high dark:hover:bg-surface-variant flex transform flex-col items-center justify-center rounded p-1 transition-transform active:scale-90">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[12px] leading-[16px] font-medium">Orders</span>
        </button>
      </nav>
    </div>
  );
}
