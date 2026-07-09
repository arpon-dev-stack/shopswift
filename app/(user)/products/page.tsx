'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProductCard from '@/app/component/ProductCard';

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
    <main className="pb-20">
      {/* Filter & Sort Bar */}
      {/* <div className="bg-surface px-3 border-outline-variant px-gutter hide-scrollbar sticky top-0 z-40 overflow-x-auto border-b py-2 whitespace-nowrap shadow-sm bg-[#0e1a28]">
          <div className="flex items-center text-white gap-4">
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
        </div> */}

      {/* Search Info */}
      <div className="text-on-surface-variant px-3 py-2">
        <p className="text-[14px] leading-[20px]">
          1-48 of over 10,000 results for{' '}
          <span className="text-secondary font-bold">
            &quot;noise cancelling headphones&quot;
          </span>
        </p>
      </div>

      {/* Product List */}
      <div className="grid grid-flow-row grid-cols-2 gap-3 px-3 sm:grid-cols-4 xl:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
}
