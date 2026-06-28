'use client';

import React, { useState, useEffect } from 'react';

const Toast = () => {
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [toastVisible]);

  return (
    <div
      className={`fixed right-4 bottom-20 z-[60] flex items-center gap-2 rounded-xl bg-[#0e1a28] px-4 py-2 text-white shadow-xl transition-all duration-300 ${
        toastVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <span className="text-green-400">✓</span>
      <span className="text-sm">Added to Cart</span>
    </div>
  );
};

export default Toast;
