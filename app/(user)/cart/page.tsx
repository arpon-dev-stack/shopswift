'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ShoppingCart() {
  // State management to replicate the HTML micro-interactions
  const [items, setItems] = useState([
    {
      id: 1,
      title:
        'Pro-Sound Ultra Wireless Over-Ear Headphones, Active Noise Cancelling, 40H Battery Life',
      imgSrc: '/image.png',
      alt: 'Headphones',
      rating: 4,
      reviews: '4,821',
      isBestSeller: true,
      price: 249.99,
      quantity: 1,
    },
    {
      id: 2,
      title: 'SmartTrack Fit Pro - 44mm, Water Resistant, Heart Rate Monitor',
      imgSrc: '/image.png',
      alt: 'Smartwatch',
      rating: 4.5,
      reviews: '12,104',
      isBestSeller: false,
      price: 129.5,
      quantity: 2,
    },
  ]);

  const [animatingId, setAnimatingId] = useState<number | null>(null);
  const [removingId, setRemovingId] = useState<number | null>(null);

  const updateQty = (id: number, change: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + change);
          if (newQty !== item.quantity) {
            // Trigger micro-interaction animation
            setAnimatingId(id);
            setTimeout(() => setAnimatingId(null), 200);
          }
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      setRemovingId(null);
    }, 400);
  };

  // Calculate dynamic pricing totals
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-surface text-on-surface min-h-screen font-sans antialiased">
      <main className="px-gutter mx-auto max-w-7xl pt-20 pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Shopping Cart Content */}
          <div className="lg:col-span-8">
            <section className="bg-surface-container-lowest border-outline-variant rounded-lg border p-4 shadow-sm">
              <div className="border-outline-variant mb-4 flex items-end justify-between border-b pb-2">
                <h2 className="text-[24px] leading-[32px] font-bold">
                  Shopping Cart
                </h2>
                <span className="text-on-surface-variant text-[14px] leading-[20px]">
                  Price
                </span>
              </div>

              {/* Cart Items */}
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      opacity: removingId === item.id ? 0 : 1,
                      transform:
                        removingId === item.id
                          ? 'translateX(-20px)'
                          : 'translateX(0)',
                      transition: 'all 0.4s ease',
                    }}
                    className="border-outline-variant group flex flex-col gap-4 border-b pb-6 md:flex-row"
                  >
                    <div className="bg-surface-container relative h-48 w-full flex-shrink-0 overflow-hidden rounded-lg md:w-48">
                      <Image
                        fill
                        src={item.imgSrc}
                        alt={item.alt}
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 192px"
                      />
                    </div>
                    <div className="flex flex-grow flex-col justify-between">
                      <div>
                        <h3 className="text-primary mb-1 line-clamp-2 text-[18px] leading-[24px] font-semibold">
                          {item.title}
                        </h3>
                        <div className="mb-2 flex items-center gap-1">
                          <div className="text-secondary-container flex">
                            {[...Array(4)].map((_, i) => (
                              <span
                                key={i}
                                className="material-symbols-outlined !text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                            ))}
                            <span
                              className="material-symbols-outlined !text-sm"
                              style={{
                                fontVariationSettings:
                                  item.rating % 1 !== 0
                                    ? "'FILL' 0.5"
                                    : "'FILL' 0",
                              }}
                            >
                              {item.rating % 1 !== 0 ? 'star_half' : 'star'}
                            </span>
                          </div>
                          <span className="text-on-tertiary-container text-[12px] leading-[16px] font-medium">
                            {item.reviews}
                          </span>
                        </div>
                        {item.isBestSeller && (
                          <span className="mb-2 inline-block rounded-sm bg-[#fedd00] px-2 py-0.5 text-[11px] leading-[14px] font-semibold text-[#111]">
                            #1 Best Seller
                          </span>
                        )}
                        <p className="text-[12px] leading-[16px] font-bold text-[#007600]">
                          In Stock
                        </p>
                        <p className="text-on-surface-variant flex items-center gap-1 text-[14px] leading-[20px]">
                          <span className="material-symbols-outlined text-primary-container !text-base">
                            local_shipping
                          </span>
                          Eligible for FREE Shipping
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="border-outline-variant bg-surface-container-low flex items-center rounded-full border px-2 py-1 shadow-sm">
                          <button
                            onClick={() => updateQty(item.id, -1)}
                            className="hover:bg-surface-variant flex h-8 w-8 items-center justify-center rounded-full"
                          >
                            <span className="material-symbols-outlined">
                              remove
                            </span>
                          </button>
                          <span
                            className={`w-10 text-center font-bold transition-all duration-200 ${animatingId === item.id ? 'text-secondary scale-125' : ''}`}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, 1)}
                            className="hover:bg-surface-variant flex h-8 w-8 items-center justify-center rounded-full"
                          >
                            <span className="material-symbols-outlined">
                              add
                            </span>
                          </button>
                        </div>
                        <div className="bg-outline-variant h-4 w-px"></div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[14px] leading-[20px] text-[#007185] hover:underline"
                        >
                          Delete
                        </button>
                        <div className="bg-outline-variant h-4 w-px"></div>
                        <button className="text-[14px] leading-[20px] text-[#007185] hover:underline">
                          Save for later
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-on-surface text-[18px] leading-[24px] font-semibold">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
                {items.length === 0 && (
                  <p className="text-on-surface-variant py-8 text-center">
                    Your cart is empty.
                  </p>
                )}
              </div>

              {/* Subtotal Section */}
              <div className="mt-6 flex flex-col items-end gap-1">
                <p className="text-[18px] leading-[24px] font-semibold">
                  Subtotal ({totalItemsCount} items):{' '}
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </p>
                <div className="flex items-center gap-2">
                  <input
                    className="border-outline text-secondary focus:ring-secondary rounded-sm"
                    id="gift"
                    type="checkbox"
                  />
                  <label
                    className="text-on-surface text-[14px] leading-[20px]"
                    htmlFor="gift"
                  >
                    This order contains a gift
                  </label>
                </div>
              </div>
            </section>
          </div>

          {/* Checkout Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-surface-container-lowest border-outline-variant sticky top-20 rounded-lg border p-5 shadow-sm">
              <div className="mb-4">
                <div className="mb-2 flex items-start gap-2">
                  <span
                    className="material-symbols-outlined text-[#067D62]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <p className="text-[12px] leading-[16px] font-medium text-[#067D62]">
                    Your order qualifies for{' '}
                    <span className="font-bold">FREE Shipping</span>. Choose
                    this option at checkout.{' '}
                    <a className="underline" href="#">
                      See details
                    </a>
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[24px] leading-[32px] font-bold">
                    Subtotal:{' '}
                    <span className="font-bold">${subtotal.toFixed(2)}</span>
                  </p>
                </div>
              </div>
              <button className="bg-secondary-container text-on-secondary-fixed mb-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[18px] leading-[24px] font-semibold shadow-md transition-all hover:bg-[#F7CA00] active:scale-95">
                Proceed to Checkout
              </button>
              <div className="border-outline-variant space-y-4 border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant text-[14px] leading-[20px]">
                    Estimated Delivery
                  </span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#007600]">
                    Wed, Oct 25
                  </span>
                </div>
                <div className="bg-surface-container flex items-center gap-3 rounded-lg p-3">
                  <span className="material-symbols-outlined text-primary">
                    local_offer
                  </span>
                  <div className="flex-grow">
                    <p className="text-[11px] leading-[14px] font-bold">
                      Apply Coupon Code
                    </p>
                    <div className="mt-1 flex gap-2">
                      <input
                        className="bg-surface-container-lowest border-outline-variant flex-grow rounded border px-2 py-1 text-sm"
                        placeholder="Code"
                        type="text"
                      />
                      <button className="bg-surface-container-high border-outline rounded border px-3 py-1 text-xs font-bold">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <button className="border-outline hover:bg-surface-variant w-full rounded-lg border py-2 text-[14px] leading-[20px] shadow-sm transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Items Suggestion */}
        <section className="mt-12">
          <h2 className="border-outline-variant mb-6 border-b pb-2 text-[24px] leading-[32px] font-bold">
            Frequently bought together
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="bg-surface-container-lowest border-outline-variant cursor-pointer rounded border p-3 transition-shadow hover:shadow-md">
              <div className="bg-surface relative mb-3 h-32 overflow-hidden rounded">
                <Image
                  fill
                  src="/image.png"
                  alt="Case"
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 250px"
                />
              </div>
              <h4 className="line-clamp-1 text-[14px] leading-[20px] text-[#007185] hover:underline">
                Protective Headphone Case
              </h4>
              <p className="mt-1 font-bold">$19.99</p>
              <button className="bg-secondary-fixed text-on-secondary-fixed-variant mt-2 w-full rounded-full py-1.5 text-[12px] leading-[16px] font-bold">
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="bg-surface dark:bg-surface-dim border-outline-variant dark:border-outline pb-safe fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t px-2 shadow-lg md:hidden">
        <div className="text-on-surface-variant dark:text-on-surface flex flex-col items-center justify-center">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[12px] leading-[16px] font-medium">Home</span>
        </div>
        <div className="text-on-surface-variant dark:text-on-surface flex flex-col items-center justify-center">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Profile
          </span>
        </div>
        <div className="bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary flex flex-col items-center justify-center rounded-full px-4 py-1">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[12px] leading-[16px] font-medium">Cart</span>
        </div>
        <div className="text-on-surface-variant dark:text-on-surface flex flex-col items-center justify-center">
          <span className="material-symbols-outlined">history</span>
          <span className="text-[12px] leading-[16px] font-medium">Orders</span>
        </div>
      </nav>
    </div>
  );
}
