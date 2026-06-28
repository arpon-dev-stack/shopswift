'use client';

import Image from 'next/image';
import ProductCard from '../component/ProductCard';

export default function ShopSwiftHome() {
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
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c5c6cc] bg-[#e6e8e8] text-[#0e1a28]">
                  <span className="text-xs font-semibold"></span>
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

          <div className="flex gap-2">
            {/* Product Card 1 */}
            <ProductCard />
            {/* Product Card 2 */}
            <ProductCard />
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
                {/* <Image
                  fill
                  className="mb-1 aspect-square w-full object-contain"
                  alt={item.alt}
                  src="/image.png"
                /> */}
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
    </div>
  );
}
