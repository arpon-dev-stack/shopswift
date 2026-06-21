'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// Simulated Image component to match Next.js standard or custom components
// Replace this with "import Image from 'next/image'" if using Next.js

export default function ShopSwiftHome() {
  const [toastVisible, setToastVisible] = useState(false);

  // Micro-interaction for Add to Cart toast
  const handleAddToCart = () => {
    setToastVisible(true);
  };

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  // Sticky header behavior on scroll

  return (
    <div className="mt-24 min-h-screen overflow-x-hidden bg-[#f2f4f4] pb-20 font-sans text-[#191c1d] selection:bg-[#fe9800]/30">
      <main className="">
        {/* Hero Banner Section */}
        <section className="relative h-48 w-full overflow-hidden md:h-64">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#f2f4f4] via-transparent to-transparent"></div>
          <Image
            fill
            className="h-full w-full object-cover"
            alt="Holiday shopping mall corridor banner"
            src="/image.png"
          />
          <div className="absolute bottom-6 left-3 z-20 max-w-[70%]">
            <h2 className="inline-block rounded-sm bg-[#fe9800]/90 px-2 py-1 text-xl font-bold text-[#0e1a28]">
              Seasonal Sales Up to 60% Off
            </h2>
            <p className="mt-1 text-sm font-semibold text-[#191c1d] drop-shadow-sm">
              Refresh your home with our winter collection.
            </p>
          </div>
        </section>

        {/* Horizontal Categories */}
        <section className="border-b border-[#c5c6cc] bg-white py-2">
          <div className="flex [scrollbar-width:none] gap-4 overflow-x-auto px-3 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {[
              { label: 'Electronics', icon: 'devices' },
              { label: 'Fashion', icon: 'apparel' },
              { label: 'Home', icon: 'home' },
              { label: 'Sports', icon: 'fitness_center' },
              { label: 'Toys', icon: 'toys' },
              { label: 'See All', icon: 'grid_view' },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-shrink-0 cursor-pointer flex-col items-center gap-1"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#c5c6cc] bg-[#e6e8e8] text-[#0e1a28]">
                  <span className="text-xs font-semibold">
                    {cat.label.substring(0, 3)}
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-700">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Deals of the Day Grid */}
        <section className="mt-3 px-3">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#0e1a28]">
              Deals of the Day
            </h3>
            <a
              className="text-xs font-medium text-[#80d2e9] hover:underline"
              href="#"
            >
              See all deals
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Product Card 1 */}
            <div className="flex flex-col justify-between rounded-lg border border-[#D5D9D9] bg-white p-2">
              <div>
                <div className="group relative mb-2 aspect-square w-full overflow-hidden">
                  <Image
                    fill
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                    alt="Premium Wireless Headphones"
                    src="/image.png"
                  />
                  <span className="absolute top-0 left-0 bg-[#fe9800] px-2 py-1 text-[11px] font-bold text-[#643900]">
                    Limited Time Deal
                  </span>
                </div>
                <h4 className="line-clamp-2 min-h-[40px] text-sm text-[#191c1d]">
                  Premium Wireless Noise-Canceling Headphones
                </h4>
                <div className="mt-1 flex items-center gap-1">
                  <div className="flex text-xs text-[#fe9800]">★★★★☆</div>
                  <span className="text-[11px] text-[#4ca0b6]">2,483</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[#191c1d]">
                    $129.99
                  </span>
                  <span className="text-[11px] text-[#75777c] line-through">
                    $299.99
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-sm font-extrabold text-blue-600 italic">
                    prime
                  </span>
                  <span className="text-[11px] text-[#44474c]">
                    FREE Delivery
                  </span>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="mt-4 w-full rounded-lg bg-[#fe9800] py-2 text-sm font-semibold text-[#0e1a28] transition-colors hover:bg-[#ffdcbd]"
              >
                Add to Cart
              </button>
            </div>

            {/* Product Card 2 */}
            <div className="flex flex-col justify-between rounded-lg border border-[#D5D9D9] bg-white p-2">
              <div>
                <div className="group relative mb-2 aspect-square w-full overflow-hidden">
                  <Image
                    fill
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                    alt="Minimalist Leather Strap Watch"
                    src="/image.png"
                  />
                  <span className="absolute top-0 left-0 bg-[#fe9800] px-2 py-1 text-[11px] font-bold text-[#643900]">
                    25% OFF
                  </span>
                </div>
                <h4 className="line-clamp-2 min-h-[40px] text-sm text-[#191c1d]">
                  Minimalist Leather Strap Designer Watch
                </h4>
                <div className="mt-1 flex items-center gap-1">
                  <div className="flex text-xs text-[#fe9800]">★★★★★</div>
                  <span className="text-[11px] text-[#4ca0b6]">892</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[#191c1d]">
                    $59.25
                  </span>
                  <span className="text-[11px] text-[#75777c] line-through">
                    $79.00
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-1">
                  <span className="text-sm font-extrabold text-blue-600 italic">
                    prime
                  </span>
                  <span className="text-[11px] text-[#44474c]">
                    FREE Delivery
                  </span>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="mt-4 w-full rounded-lg bg-[#fe9800] py-2 text-sm font-semibold text-[#0e1a28] transition-colors hover:bg-[#ffdcbd]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        {/* Recently Viewed Section */}
        <section className="mt-4 px-3 pb-8">
          <h3 className="mb-2 text-lg font-semibold text-[#0e1a28]">
            Recently Viewed
          </h3>
          <div className="flex [scrollbar-width:none] gap-2 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {[
              { price: '$85.00', alt: 'Red performance running sneakers' },
              { price: '$45.50', alt: 'Wired studio headphones' },
              { price: '$1,199.00', alt: 'Silver laptop open' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="w-32 flex-shrink-0 rounded border border-[#D5D9D9] bg-[#ffffff] p-1"
              >
                <Image
                  fill
                  className="mb-1 aspect-square w-full object-contain"
                  alt={item.alt}
                  src="/image.png"
                />
                <p className="text-xs font-bold text-[#191c1d]">{item.price}</p>
              </div>
            ))}

            <div className="flex w-32 flex-shrink-0 cursor-pointer flex-col items-center justify-center rounded border border-[#D5D9D9] bg-white p-1 hover:bg-gray-50">
              <div className="mb-1 flex aspect-square w-full items-center justify-center rounded-sm bg-[#e6e8e8] text-[#75777c]">
                🕒
              </div>
              <p className="text-center text-xs text-[#75777c]">See all</p>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Micro-interaction Toast */}
      <div
        className={`fixed right-4 bottom-20 z-[60] flex items-center gap-2 rounded-xl bg-[#0e1a28] px-4 py-2 text-white shadow-xl transition-all duration-300 ${
          toastVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-24 opacity-0'
        }`}
      >
        <span className="text-green-400">✓</span>
        <span className="text-sm">Added to Cart</span>
      </div>
    </div>
  );
}
