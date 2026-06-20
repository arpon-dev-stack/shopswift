'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Focus tracking state to replicate the custom label highlights from the original design
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    // Mock micro-interaction delay
    setTimeout(() => {
      setIsLoading(false);
      alert('Account Created Successfully (Demo)');
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background relative flex min-h-screen flex-col items-center overflow-x-hidden font-sans antialiased">
      {/* Top Navigation Anchor / Branding */}
      <header className="bg-background fixed top-0 z-50 w-full">
        <div className="mx-auto flex h-14 w-full max-w-7xl items-center px-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="hover:bg-surface-container flex cursor-pointer items-center justify-center rounded-full p-1 transition-colors"
          >
            <span className="material-symbols-outlined text-primary">
              arrow_back
            </span>
          </button>
          <div className="ml-4">
            <span className="text-primary text-[20px] leading-[28px] font-bold select-none">
              ShopSwift
            </span>
          </div>
        </div>
      </header>

      {/* Main Registration Canvas */}
      <main className="z-10 flex w-full max-w-md flex-1 flex-col items-center px-4 pt-24 pb-12">
        {/* Hero Identity */}
        <div className="mb-4 w-full text-center">
          <h1 className="text-primary mb-1 text-[24px] leading-[32px] font-bold">
            Create account
          </h1>
          <p className="text-on-surface-variant text-[14px] leading-[20px]">
            Join millions of shoppers today.
          </p>
        </div>

        {/* Registration Form Card */}
        <div className="bg-surface-container-lowest border-outline-variant w-full rounded-xl border p-6 shadow-sm">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="flex flex-col gap-1">
              <label
                className={`text-[12px] leading-[16px] font-bold transition-colors ${
                  focusedField === 'name' ? 'text-secondary' : 'text-on-surface'
                }`}
                htmlFor="name"
              >
                Your name
              </label>
              <input
                className="border-outline focus:ring-secondary-container focus:border-secondary-container h-11 w-full rounded-lg border bg-white px-3 text-[14px] leading-[20px] transition-all outline-none focus:ring-1"
                id="name"
                placeholder="First and last name"
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label
                className={`text-[12px] leading-[16px] font-bold transition-colors ${
                  focusedField === 'email'
                    ? 'text-secondary'
                    : 'text-on-surface'
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border-outline focus:ring-secondary-container focus:border-secondary-container h-11 w-full rounded-lg border bg-white px-3 text-[14px] leading-[20px] transition-all outline-none focus:ring-1"
                id="email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label
                className={`text-[12px] leading-[16px] font-bold transition-colors ${
                  focusedField === 'password'
                    ? 'text-secondary'
                    : 'text-on-surface'
                }`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border-outline focus:ring-secondary-container focus:border-secondary-container h-11 w-full rounded-lg border bg-white px-3 text-[14px] leading-[20px] transition-all outline-none focus:ring-1"
                id="password"
                placeholder="At least 6 characters"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
              />
              <div className="mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-on-tertiary-container text-[14px]">
                  info
                </span>
                <p className="text-on-surface-variant text-[11px] leading-[14px] font-semibold italic">
                  Passwords must be at least 6 characters.
                </p>
              </div>
            </div>

            {/* Legal Agreement */}
            <div className="flex gap-2 pt-1">
              <div className="pt-0.5">
                <input
                  className="border-outline text-secondary focus:ring-secondary-container h-4 w-4 cursor-pointer rounded"
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
              </div>
              <label
                className="text-on-surface-variant cursor-pointer text-[14px] leading-[20px] leading-tight select-none"
                htmlFor="terms"
              >
                By creating an account, you agree to ShopSwift&apos;s{' '}
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
              </label>
            </div>

            {/* Primary CTA */}
            <button
              className="bg-secondary-container text-primary flex h-12 w-full items-center justify-center gap-2 rounded-lg text-[16px] leading-[24px] font-bold shadow-sm transition-all hover:brightness-95 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-80"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="text-primary h-5 w-5 animate-spin"
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
                  <span>Creating Account...</span>
                </>
              ) : (
                <span>Create your account</span>
              )}
            </button>
          </form>

          {/* Separation Divider */}
          <div className="relative flex items-center py-4">
            <div className="border-outline-variant flex-grow border-t"></div>
            <span className="text-on-surface-variant mx-4 flex-shrink text-[11px] leading-[14px] font-semibold tracking-widest whitespace-nowrap uppercase">
              Already have an account?
            </span>
            <div className="border-outline-variant flex-grow border-t"></div>
          </div>

          {/* Sign In Workflow Redirection Link */}
          <div className="text-center">
            <Link
              className="text-on-tertiary-container hover:text-secondary group inline-flex items-center gap-1 text-[12px] leading-[16px] font-medium hover:underline"
              href="/signin"
            >
              Sign in
              <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                chevron_right
              </span>
            </Link>
          </div>
        </div>

        {/* Dense Retail Feature Value Props */}
        <div className="mt-4 grid w-full grid-cols-2 gap-2">
          <div className="border-outline-variant bg-surface-container-low flex flex-col items-center rounded-lg border p-2 text-center">
            <span className="material-symbols-outlined text-secondary mb-1">
              local_shipping
            </span>
            <span className="text-on-surface text-[11px] leading-[14px] font-bold">
              Fast Delivery
            </span>
          </div>
          <div className="border-outline-variant bg-surface-container-low flex flex-col items-center rounded-lg border p-2 text-center">
            <span className="material-symbols-outlined text-secondary mb-1">
              verified_user
            </span>
            <span className="text-on-surface text-[11px] leading-[14px] font-bold">
              Secure Pay
            </span>
          </div>
        </div>

        {/* Footer Legal Identity Links */}
        <footer className="border-outline-variant mt-12 w-full border-t pt-8">
          <div className="text-on-tertiary-container flex justify-center gap-4 text-[11px] leading-[14px] font-semibold">
            <Link className="hover:underline" href="/conditions">
              Conditions of Use
            </Link>
            <Link className="hover:underline" href="/privacy">
              Privacy Notice
            </Link>
            <Link className="hover:underline" href="/help">
              Help
            </Link>
          </div>
          <p className="text-on-surface-variant mt-4 text-center text-[11px] leading-[14px] font-semibold opacity-70">
            © 2024, ShopSwift.com, Inc. or its affiliates
          </p>
        </footer>
      </main>

      {/* Polish Background Gradient Overlays */}
      <div className="pointer-events-none fixed bottom-0 left-0 -z-10 h-1/3 w-full opacity-10">
        <div className="from-secondary-container h-full w-full bg-gradient-to-t to-transparent"></div>
      </div>
      <div className="bg-secondary-container pointer-events-none fixed top-0 right-0 -mt-32 -mr-32 h-64 w-64 rounded-full opacity-5 blur-[100px]"></div>
      <div className="bg-tertiary-fixed-dim pointer-events-none fixed bottom-0 left-0 -mb-48 -ml-48 h-96 w-96 rounded-full opacity-5 blur-[120px]"></div>
    </div>
  );
}
