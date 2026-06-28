'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface ProductFormData {
  product_name: string;
  description: string;
  price: string;
  stock: string;
  category: string;
}

export default function AddProductForm() {
  const [formData, setFormData] = useState<ProductFormData>({
    product_name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen font-sans antialiased">
      {/* TopAppBar */}

      <div className="flex">
        {/* NavigationDrawer (Desktop Only) */}

        {/* Main Content Area */}
        <main className="mx-auto mb-20 flex-1 px-4 py-6 md:mb-0 md:max-w-4xl md:py-8">
          <div className="mb-6">
            <nav className="text-on-surface-variant mb-2 flex items-center text-[12px] leading-[16px] font-medium">
              <span>Inventory</span>
              <span className="material-symbols-outlined mx-1 text-[16px]">
                chevron_right
              </span>
              <span className="text-primary font-bold">Add New Product</span>
            </nav>
            <h2 className="text-primary text-[24px] leading-[32px] font-bold">
              Add Product
            </h2>
            <p className="text-on-surface-variant mt-1 text-[14px] leading-[20px]">
              Fill in the details below to create a new retail entry. Ensure
              information density and clarity for efficient cataloging.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              {/* Left Column: Details */}
              <div className="space-y-6 md:col-span-8">
                {/* General Info */}
                <section className="bg-surface-container-lowest border-outline-variant rounded-xl border p-4 shadow-sm transition-all duration-200">
                  <h3 className="border-outline-variant text-primary mb-4 border-b pb-2 text-[18px] leading-[24px] font-bold">
                    General Information
                  </h3>
                  <div className="space-y-4">
                    <div className="transition-transform duration-200 focus-within:scale-[1.01]">
                      <label
                        className="text-on-surface mb-1.5 block text-[12px] leading-[16px] font-bold"
                        htmlFor="product_name"
                      >
                        Product Name
                      </label>
                      <input
                        className="bg-surface-container-lowest border-outline focus:ring-secondary-container w-full rounded-lg border p-2.5 text-[14px] leading-[20px] transition-all outline-none focus:border-transparent focus:ring-2"
                        id="product_name"
                        name="product_name"
                        value={formData.product_name}
                        onChange={handleInputChange}
                        placeholder="e.g. Wireless Noise Cancelling Headphones"
                        type="text"
                        required
                      />
                    </div>
                    <div className="transition-transform duration-200 focus-within:scale-[1.01]">
                      <label
                        className="text-on-surface mb-1.5 block text-[12px] leading-[16px] font-bold"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <textarea
                        className="bg-surface-container-lowest border-outline focus:ring-secondary-container w-full rounded-lg border p-2.5 text-[14px] leading-[20px] transition-all outline-none focus:border-transparent focus:ring-2"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Highlight key features and specifications..."
                        rows={5}
                        required
                      ></textarea>
                    </div>
                  </div>
                </section>

                {/* Pricing & Inventory */}
                <section className="bg-surface-container-lowest border-outline-variant rounded-xl border p-4 shadow-sm transition-all duration-200">
                  <h3 className="border-outline-variant text-primary mb-4 border-b pb-2 text-[18px] leading-[24px] font-bold">
                    Pricing & Inventory
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="transition-transform duration-200 focus-within:scale-[1.01]">
                      <label
                        className="text-on-surface mb-1.5 block text-[12px] leading-[16px] font-bold"
                        htmlFor="price"
                      >
                        Price (USD)
                      </label>
                      <div className="relative">
                        <span className="text-on-surface-variant absolute top-1/2 left-3 -translate-y-1/2 text-[14px] font-bold">
                          $
                        </span>
                        <input
                          className="bg-surface-container-lowest border-outline focus:ring-secondary-container w-full rounded-lg border p-2.5 pl-8 text-[14px] leading-[20px] transition-all outline-none focus:border-transparent focus:ring-2"
                          id="price"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          placeholder="0.00"
                          step="0.01"
                          type="number"
                          required
                        />
                      </div>
                    </div>
                    <div className="transition-transform duration-200 focus-within:scale-[1.01]">
                      <label
                        className="text-on-surface mb-1.5 block text-[12px] leading-[16px] font-bold"
                        htmlFor="stock"
                      >
                        Stock Quantity
                      </label>
                      <input
                        className="bg-surface-container-lowest border-outline focus:ring-secondary-container w-full rounded-lg border p-2.5 text-[14px] leading-[20px] transition-all outline-none focus:border-transparent focus:ring-2"
                        id="stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        placeholder="0"
                        type="number"
                        required
                      />
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Sidebar */}
              <div className="space-y-6 md:col-span-4">
                {/* Image Upload */}
                <section className="bg-surface-container-lowest border-outline-variant rounded-xl border p-4 shadow-sm">
                  <h3 className="border-outline-variant text-primary mb-4 border-b pb-2 text-[18px] leading-[24px] font-bold">
                    Media
                  </h3>
                  <div
                    className="border-outline-variant bg-surface-container-low hover:bg-surface-container group flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      accept="image/*"
                      className="hidden"
                      id="fileUpload"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                    />
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary-container text-[48px] transition-colors">
                      add_photo_alternate
                    </span>
                    <p className="text-on-surface-variant mt-2 text-center text-[12px] leading-[16px] font-medium">
                      Click to upload product image
                    </p>
                    <p className="text-on-surface-variant mt-1 text-[10px] opacity-60">
                      PNG, JPG up to 10MB
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="bg-surface-container-high border-outline-variant relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg border">
                      {imagePreview ? (
                        <Image
                          alt="Product Preview"
                          src={imagePreview}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          alt="Product Placeholder"
                          className="object-cover opacity-20 grayscale"
                          src="/image.png"
                          fill
                        />
                      )}
                    </div>
                  </div>
                </section>

                {/* Organization */}
                <section className="bg-surface-container-lowest border-outline-variant rounded-xl border p-4 shadow-sm">
                  <h3 className="border-outline-variant text-primary mb-4 border-b pb-2 text-[18px] leading-[24px] font-bold">
                    Organization
                  </h3>
                  <div className="transition-transform duration-200 focus-within:scale-[1.01]">
                    <label
                      className="text-on-surface mb-1.5 block text-[12px] leading-[16px] font-bold"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <select
                      className="bg-surface-container-lowest border-outline focus:ring-secondary-container w-full appearance-none rounded-lg border p-2.5 text-[14px] leading-[20px] transition-all outline-none focus:border-transparent focus:ring-2"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      <option value="electronics">Electronics</option>
                      <option value="apparel">Apparel</option>
                      <option value="home">Home & Kitchen</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="sports">Sports & Outdoors</option>
                    </select>
                  </div>
                </section>
              </div>
            </div>

            {/* Form Actions */}
            <div className="border-outline-variant flex flex-col items-center justify-end gap-4 border-t pt-6 md:flex-row">
              <button
                className="text-on-surface-variant hover:bg-surface-variant w-full rounded px-10 py-3 text-[14px] leading-[20px] font-bold transition-colors active:opacity-80 md:w-auto"
                type="button"
              >
                Cancel
              </button>
              <button
                className={`flex w-full items-center justify-center gap-2 rounded px-10 py-3 text-[14px] leading-[20px] font-bold shadow-sm transition-all hover:shadow-md active:scale-[0.98] md:w-auto ${
                  submitStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : 'bg-secondary-container text-on-secondary-container hover:brightness-110'
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[20px]">
                      sync
                    </span>
                    Saving...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span className="material-symbols-outlined text-[20px]">
                      check
                    </span>
                    Saved Successfully
                  </>
                ) : (
                  'Save Product'
                )}
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="bg-surface border-outline-variant fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t py-2 shadow-md md:hidden">
        <div className="text-on-surface-variant active:bg-surface-variant/50 flex cursor-pointer flex-col items-center justify-center rounded-lg p-2">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Dashboard
          </span>
        </div>
        <div className="bg-secondary-container text-on-secondary-container flex cursor-pointer flex-col items-center justify-center rounded-full px-4 py-1">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Inventory
          </span>
        </div>
        <div className="text-on-surface-variant active:bg-surface-variant/50 flex cursor-pointer flex-col items-center justify-center rounded-lg p-2">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="text-[12px] leading-[16px] font-medium">Orders</span>
        </div>
        <div className="text-on-surface-variant active:bg-surface-variant/50 flex cursor-pointer flex-col items-center justify-center rounded-lg p-2">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[12px] leading-[16px] font-medium">
            Settings
          </span>
        </div>
      </nav>
    </div>
  );
}
