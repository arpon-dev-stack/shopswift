'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// Simulated Image component to match Next.js or generic setups.

export default function ShopSwiftProductDetails() {
  const [scrolled, setScrolled] = useState(false);
  //   const [imageOpacity, setImageOpacity] = useState(1);
  const [quantity, setQuantity] = useState(1);

  // Smooth image swap transition logic matching your original script

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8fafa] font-sans text-[#191c1d] selection:bg-[#fe9800]/30">
      {/* Top Navigation */}
      <header
        className={`fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-[#0e1a28] px-3 transition-shadow duration-200 dark:bg-[#232f3e] ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
      >
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/10">
            <span className="mb-1 block h-0.5 w-6 bg-current"></span>
            <span className="mb-1 block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
          </button>
          <h1 className="text-xl font-bold tracking-tight text-white dark:text-[#8a97a9]">
            ShopSwift
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 text-white transition-colors hover:bg-white/10">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z"
              />
            </svg>
          </button>
        </div>
      </header>

      <main className="mx-auto min-h-screen max-w-[1440px] pt-14 pb-20">
        {/* Main Product Layout */}
        <div className="grid grid-cols-1 gap-8 p-4 md:p-8 lg:grid-cols-12">
          {/* Left Column: Gallery */}
          <div className="flex flex-col gap-4 lg:col-span-5 xl:col-span-6">
            <div className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border border-[#c5c6cc] bg-white p-8">
              <div
                style={{
                  //   opacity: imageOpacity,
                  transition: 'opacity 150ms ease-in-out',
                }}
                className="h-full w-full"
              >
                <Image
                  fill
                  alt="Premium Headphones Main View"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  src="/image.png"
                />
              </div>
              <button className="absolute top-1/2 left-2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2 opacity-0 shadow-md transition-all group-hover:opacity-100 hover:bg-white">
                <span>‹</span>
              </button>
              <button className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white/80 p-2 opacity-0 shadow-md transition-all group-hover:opacity-100 hover:bg-white">
                <span>›</span>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex [scrollbar-width:none] gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {/* {galleryImages.map((imgUrl, i) => (
                <div
                  key={i}
                  className={`h-20 w-20 shrink-0 cursor-pointer rounded border-2 bg-white p-1 transition-colors ${
                    mainImage === imgUrl
                      ? 'border-[#8a5100]'
                      : 'border-[#c5c6cc] hover:border-[#8a5100]'
                  }`}
                  onClick={() => handleThumbnailClick(imgUrl)}
                >
                  <Image fill
                    alt={`Thumbnail ${i + 1}`}
                    className="h-full w-full object-contain"
                    src={imgUrl}
                  />
                </div>
              ))} */}
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col gap-6 lg:col-span-7 xl:col-span-6">
            <div className="border-b border-[#c5c6cc] pb-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="cursor-pointer text-xs font-semibold text-[#4ca0b6] hover:underline">
                  Visit the SwiftAudio Store
                </span>
              </div>
              <h2 className="text-2px mb-2 text-xl leading-tight font-bold md:text-2xl">
                Pro-Series X1 Wireless Noise Cancelling Headphones - 40h
                Battery, Spatial Audio, Granite Black
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <div className="flex tracking-tighter text-[#8a5100]">
                    ★★★★☆
                  </div>
                  <span className="ml-2 text-sm font-medium text-[#4ca0b6]">
                    4,821 ratings
                  </span>
                </div>
                <span className="h-4 w-[1px] bg-[#c5c6cc]"></span>
                <span className="text-sm font-medium text-[#4ca0b6]">
                  100+ answered questions
                </span>
              </div>
            </div>

            {/* Pricing Area */}
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-light text-[#ba1a1a]">-25%</span>
                <div className="flex items-start">
                  <span className="mt-1 text-sm font-bold">$</span>
                  <span className="text-3xl font-bold tracking-tight">299</span>
                  <span className="mt-1 text-sm font-bold">99</span>
                </div>
              </div>
              <div className="text-sm text-[#44474c]">
                Typical price: <span className="line-through">$399.99</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center rounded bg-[#232f3e] px-2 py-0.5">
                  <span className="mr-1 text-[10px] font-black text-white italic">
                    prime
                  </span>
                </div>
                <span className="text-sm font-bold text-[#191c1d]">
                  FREE Delivery
                </span>
                <span className="text-sm text-[#191c1d]">
                  tomorrow, Oct 24. Order within 4 hrs 12 mins
                </span>
              </div>
            </div>

            {/* Feature Grid Details */}
            <div className="grid grid-cols-2 gap-4 border-y border-[#c5c6cc] py-4 md:grid-cols-4">
              {[
                { title: 'Battery', spec: '40 Hours', icon: '🔋' },
                { title: 'Connectivity', spec: 'v5.3 Multipoint', icon: '📶' },
                { title: 'ANC', spec: 'Active Digital', icon: '🔇' },
                { title: 'Audio', spec: 'Lossless Hi-Res', icon: '🎵' },
              ].map((bento, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 text-center"
                >
                  <span className="text-xl text-[#8a5100]">{bento.icon}</span>
                  <span className="text-[11px] font-bold text-gray-500 uppercase">
                    {bento.title}
                  </span>
                  <span className="text-sm font-medium">{bento.spec}</span>
                </div>
              ))}
            </div>

            {/* About text bullets */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">About this item</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-[#44474c]">
                <li>
                  High-Resolution Audio: Custom 40mm dynamic drivers produce
                  Hi-Res Audio for a richer, more detailed sound experience.
                </li>
                <li>
                  Advanced ANC Technology: Hybrid active noise cancellation
                  reduces ambient noise by up to 95%.
                </li>
                <li>
                  Unmatched Comfort: Soft protein leather ear cups with memory
                  foam padding for all-day wear.
                </li>
                <li>
                  Clear Calls: Enhanced microphones with AI noise reduction for
                  crystal clear voice calls even in windy environments.
                </li>
                <li>
                  Multipoint Connection: Connect to two Bluetooth devices
                  simultaneously for easy switching.
                </li>
              </ul>
            </div>

            {/* Context Actions Container */}
            <div className="sticky top-20 flex flex-col gap-4 rounded-xl border border-[#c5c6cc] bg-[#f2f4f4] p-6">
              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold text-[#191c1d]">$299.99</div>
                <div className="text-sm font-medium text-[#4ca0b6]">
                  In Stock
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-sm">Quantity:</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="rounded border border-[#c5c6cc] bg-white px-2 py-1 text-sm outline-none focus:border-[#8a5100] focus:ring-[#8a5100]"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
                <button className="w-full rounded-full bg-[#fe9800] py-3 font-bold text-[#0e1a28] shadow-sm transition-colors hover:bg-[#ffdcbd] active:scale-95">
                  Add to Cart
                </button>
                <button className="w-full rounded-full bg-[#FFA41C] py-3 font-bold text-[#2c1600] shadow-sm transition-colors hover:bg-[#FF8F00] active:scale-95">
                  Buy Now
                </button>
              </div>
              <div className="space-y-1 text-xs text-[#44474c]">
                <div className="flex justify-between">
                  <span>Ships from</span>
                  <span className="font-medium text-[#191c1d]">ShopSwift</span>
                </div>
                <div className="flex justify-between">
                  <span>Sold by</span>
                  <span className="font-medium text-[#191c1d]">
                    SwiftAudio Official
                  </span>
                </div>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg border border-[#c5c6cc] bg-white py-2 text-sm font-medium text-[#4ca0b6] transition-colors hover:text-[#8a5100]">
                <span>♥</span> Add to List
              </button>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <section className="mt-12 max-w-5xl px-4 md:px-8">
          <h3 className="mb-8 border-b border-[#c5c6cc] pb-2 text-xl font-bold">
            Customer Reviews
          </h3>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Reviews Side Analytics */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="text-[#8a5100]">★★★★☆</div>
                <span className="text-lg font-semibold">4.5 out of 5</span>
              </div>
              <span className="text-sm text-[#44474c]">
                4,821 global ratings
              </span>
              <div className="mt-2 flex flex-col gap-2">
                {[
                  { star: '5 star', val: '72%' },
                  { star: '4 star', val: '18%' },
                  { star: '3 star', val: '5%' },
                  { star: '2 star', val: '2%' },
                  { star: '1 star', val: '3%' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs">
                    <span className="w-12 cursor-pointer hover:underline">
                      {row.star}
                    </span>
                    <div className="h-5 flex-1 overflow-hidden rounded-sm bg-[#e6e8e8]">
                      <div
                        className="h-full bg-[#fe9800]"
                        style={{ width: row.val }}
                      ></div>
                    </div>
                    <span className="w-8 text-right">{row.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="mb-1 text-sm font-semibold">
                  Review this product
                </h4>
                <p className="mb-4 text-sm text-[#44474c]">
                  Share your thoughts with other customers
                </p>
                <button className="w-full rounded-lg border border-[#75777c] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#eceeee]">
                  Write a customer review
                </button>
              </div>
            </div>

            {/* Custom Stream Feed */}
            <div className="flex flex-col gap-8 md:col-span-2">
              {/* Individual Custom Review 1 */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full bg-[#e1e3e3]">
                    <Image fill alt="Marcus Chen Profile" src="/image.png" />
                  </div>
                  <span className="text-sm font-medium">Marcus Chen</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-[#8a5100]">★★★★★</div>
                  <span className="text-sm font-bold">
                    Best sound in this price range!
                  </span>
                </div>
                <div className="text-xs text-[#44474c] italic">
                  Reviewed in the United States on October 15, 2023
                </div>
                <div className="text-xs font-bold text-[#8a5100]">
                  Verified Purchase
                </div>
                <p className="text-sm text-[#191c1d]">
                  I&apos;ve used several high-end brands over the years, but the
                  Pro-Series X1 really stands out. The noise cancellation is
                  eerie - in a good way! I can finally work in cafes without
                  hearing every conversation. The battery life is also
                  exceptional.
                </p>
                <div className="mt-2 flex items-center gap-4">
                  <button className="rounded-lg border border-[#c5c6cc] px-6 py-1.5 text-xs font-medium transition-all hover:bg-[#eceeee]">
                    Helpful
                  </button>
                  <span className="h-4 w-[1px] bg-[#c5c6cc]"></span>
                  <button className="text-xs text-[#44474c] hover:underline">
                    Report
                  </button>
                </div>
              </div>

              {/* Individual Custom Review 2 */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 overflow-hidden rounded-full bg-[#e1e3e3]">
                    <Image
                      fill
                      alt="Elena Rodriguez Profile"
                      src="/image.png"
                    />
                  </div>
                  <span className="text-sm font-medium">Elena Rodriguez</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-[#8a5100]">★★★★☆</div>
                  <span className="text-sm font-bold">
                    Comfortable but controls take time
                  </span>
                </div>
                <div className="text-xs text-[#44474c] italic">
                  Reviewed in the United Kingdom on October 2, 2023
                </div>
                <div className="text-xs font-bold text-[#8a5100]">
                  Verified Purchase
                </div>
                <p className="text-sm text-[#191c1d]">
                  The ear cushions are incredibly soft. I can wear them for a
                  whole flight without discomfort. My only gripe is the touch
                  controls on the side - they are a bit sensitive and I
                  occasionally skip tracks when just trying to adjust the
                  volume. Otherwise, 5/5 for audio quality.
                </p>
                <div className="mt-2 flex items-center gap-4">
                  <button className="rounded-lg border border-[#c5c6cc] px-6 py-1.5 text-xs font-medium transition-all hover:bg-[#eceeee]">
                    Helpful
                  </button>
                  <span className="h-4 w-[1px] bg-[#c5c6cc]"></span>
                  <button className="text-xs text-[#44474c] hover:underline">
                    Report
                  </button>
                </div>
              </div>

              <button className="flex items-center gap-1 self-start text-sm font-medium text-[#4ca0b6] hover:underline">
                See all reviews <span>›</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Footer Sticky Tab Bar */}
      <nav className="pb-safe fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t border-[#c5c6cc] bg-[#f8fafa] px-2 shadow-lg md:hidden dark:border-[#75777c] dark:bg-[#d8dada]">
        <a
          className="flex flex-col items-center justify-center rounded-full bg-[#fe9800] px-4 py-1 text-xs font-medium text-[#643900] dark:bg-[#8a5100] dark:text-white"
          href="#"
        >
          <span>Home</span>
        </a>
        <a
          className="flex flex-col items-center justify-center rounded-md p-2 text-xs font-medium text-[#44474c] transition-transform hover:bg-[#e6e8e8] active:scale-90 dark:text-[#191c1d] dark:hover:bg-[#e1e3e3]"
          href="#"
        >
          <span>Profile</span>
        </a>
        <a
          className="relative flex flex-col items-center justify-center rounded-md p-2 text-xs font-medium text-[#44474c] transition-transform hover:bg-[#e6e8e8] active:scale-90 dark:text-[#191c1d] dark:hover:bg-[#e1e3e3]"
          href="#"
        >
          <span className="absolute top-1 right-2 rounded-full bg-[#fe9800] px-1 text-[8px] font-bold text-[#643900]">
            3
          </span>
          <span>Cart</span>
        </a>
        <a
          className="flex flex-col items-center justify-center rounded-md p-2 text-xs font-medium text-[#44474c] transition-transform hover:bg-[#e6e8e8] active:scale-90 dark:text-[#191c1d] dark:hover:bg-[#e1e3e3]"
          href="#"
        >
          <span>Orders</span>
        </a>
      </nav>
    </div>
  );
}
