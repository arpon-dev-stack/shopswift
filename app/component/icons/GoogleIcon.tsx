import React from 'react';

const GoogleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="24px"
      height="24px"
    >
      <defs>
        <linearGradient id="g-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4f46e5" />
          <stop offset="100%" stop-color="#06b6d4" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.15" />
        </filter>
      </defs>

      <rect width="100" height="100" rx="16" fill="#f8fafc" />

      <path
        d="M 75 35 
       C 70 23, 50 20, 40 28 
       C 25 40, 25 60, 40 72 
       C 52 81, 70 78, 72 65 
       L 52 65 
       L 52 53 
       L 85 53 
       L 85 80
       C 70 95, 40 95, 22 80 
       C 3 62, 3 38, 22 20 
       C 42 2, 72 5, 88 22 
       Z"
        fill="url(#g-grad)"
        filter="url(#shadow)"
      />
    </svg>
  );
};

export default GoogleIcon;
