'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EyeOpen from '../component/icons/EyeOpen';
import EyeClose from '../component/icons/EyeClose';
import GoogleIcon from '../component/icons/GoogleIcon';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    // Mock micro-interaction delay matching the original script
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background flex min-h-screen flex-col font-sans antialiased">
      {/* Top Navigation Anchor (Shared Component: TopAppBar) */}
      <header className="bg-background fixed top-0 z-50 w-full">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-primary text-[20px] leading-[28px] font-bold select-none"
            >
              ShopSwift
            </Link>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              className="text-on-surface-variant hover:text-secondary text-[12px] leading-[16px] font-medium transition-colors"
              href="/help"
            >
              Help
            </Link>
          </div>
        </div>
      </header>

      {/* Main Registration/Login Canvas */}
      <main className="flex flex-grow items-center justify-center px-4 pt-20 pb-10">
        <div className="flex w-full max-w-[400px] flex-col gap-4">
          {/* Branding/Identity Header */}
          <div className="mb-2 text-center md:text-left">
            <h1 className="text-primary mb-1 text-[24px] leading-[32px] font-bold">
              Sign In
            </h1>
            <p className="text-on-surface-variant text-[14px] leading-[20px]">
              Access your orders and personalized deals.
            </p>
          </div>

          {/* Main Auth Card */}
          <div className="rounded-xl border border-[#D5D9D9] bg-white p-6 shadow-sm">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="flex flex-col gap-1">
                <label
                  className="text-on-surface text-[12px] leading-[16px] font-medium"
                  htmlFor="email"
                >
                  Email or mobile phone number
                </label>
                <input
                  className="border-outline-variant focus:ring-secondary focus:border-secondary w-full rounded-lg border p-2 text-[14px] leading-[20px] transition-all outline-none focus:ring-1"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <label
                    className="text-on-surface text-[12px] leading-[16px] font-medium"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-on-tertiary-container text-[12px] leading-[16px] font-medium hover:underline"
                    href="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    className="border-outline-variant focus:ring-secondary focus:border-secondary w-full rounded-lg border p-2 pr-10 text-[14px] leading-[20px] transition-all outline-none focus:ring-1"
                    id="password"
                    name="password"
                    placeholder="Min. 8 characters"
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="text-on-surface-variant absolute top-1/2 right-3 flex -translate-y-1/2 items-center justify-center"
                    onClick={togglePasswordVisibility}
                    type="button"
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? <EyeOpen /> : <EyeClose />}
                    </span>
                  </button>
                </div>
              </div>

              {/* Primary Action Button */}
              <button
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#fe9800] py-3 text-[18px] leading-[24px] font-bold font-semibold text-[#0e1a28] shadow-sm transition-all hover:bg-[#e68a00] active:scale-95 disabled:pointer-events-none disabled:opacity-80"
                type="submit"
                disabled={isLoading}
              >
                {isLoading && (
                  <svg
                    className="h-5 w-5 animate-spin text-[#0e1a28]"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                <span>{isLoading ? 'Signing in...' : 'Sign In'}</span>
              </button>

              {/* Legal & Disclosure */}
              <p className="text-on-surface-variant mt-1 text-center text-[11px] leading-[14px] leading-relaxed font-semibold">
                By continuing, you agree to ShopSwift&apos;s{' '}
                <Link
                  className="text-on-tertiary-container hover:underline"
                  href="/conditions"
                >
                  Conditions of Use
                </Link>{' '}
                and{' '}
                <Link
                  className="text-on-tertiary-container hover:underline"
                  href="/privacy"
                >
                  Privacy Notice
                </Link>
                .
              </p>
            </form>

            {/* Section Divider */}
            <div className="relative my-4 flex items-center">
              <div className="border-outline-variant flex-grow border-t"></div>
              <span className="text-on-surface-variant mx-4 text-[11px] leading-[14px] font-semibold tracking-wider whitespace-nowrap uppercase">
                Other Sign In Options
              </span>
              <div className="border-outline-variant flex-grow border-t"></div>
            </div>

            {/* Federated Social Logins */}
            <div className="flex flex-col gap-2">
              <button
                type="button"
                className="border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container-low flex w-full items-center justify-center gap-2 rounded-lg border py-2.5 text-[12px] leading-[16px] font-medium transition-colors active:scale-[0.98]"
              >
                <GoogleIcon />
                <span>Sign In with Google</span>
              </button>
              <button
                type="button"
                className="border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container-low flex w-full items-center justify-center gap-2 rounded-lg border py-2.5 text-[12px] leading-[16px] font-medium transition-colors active:scale-[0.98]"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  apps
                </span>
                <span>Sign In with Apple</span>
              </button>
            </div>
          </div>

          {/* Secondary Workflow Access Link */}
          <div className="mt-2 flex flex-col items-center gap-2">
            <div className="relative flex w-full items-center">
              <div className="border-outline-variant flex-grow border-t"></div>
              <span className="text-on-surface-variant mx-4 text-[11px] leading-[14px] font-semibold whitespace-nowrap">
                New to ShopSwift?
              </span>
              <div className="border-outline-variant flex-grow border-t"></div>
            </div>
            <Link
              href="/signup"
              className="border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-container w-full rounded-lg border py-2.5 text-center text-[12px] leading-[16px] font-medium shadow-sm transition-colors active:scale-[0.98]"
            >
              Create your ShopSwift account
            </Link>
          </div>
        </div>
      </main>

      {/* Contextual Legal Footer */}
      <footer className="bg-surface-container-low border-outline-variant border-t py-6">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mb-2 flex justify-center gap-4">
            <Link
              className="text-on-tertiary-container text-[12px] leading-[16px] font-medium hover:underline"
              href="/conditions"
            >
              Conditions of Use
            </Link>
            <Link
              className="text-on-tertiary-container text-[12px] leading-[16px] font-medium hover:underline"
              href="/privacy"
            >
              Privacy Notice
            </Link>
            <Link
              className="text-on-tertiary-container text-[12px] leading-[16px] font-medium hover:underline"
              href="/help"
            >
              Help
            </Link>
          </div>
          <p className="text-on-surface-variant text-[11px] leading-[14px] font-semibold">
            © 2024 ShopSwift. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
