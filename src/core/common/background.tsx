import React from "react";

export default function BackgroundStyle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="w-full relative z-10">
      <div className="relative w-full border-b border-gray-200 dark:border-gray-600/50 bg-black/10 backdrop-blur-sm">
        {/* Inner Centered Container */}
        <div
          className={`relative mx-auto px-4 sm:px-6 py-6 sm:py-10 max-w-5xl ${className}`}
        >
          {/* Vertical Lines */}
          <div className="absolute left-0 -top-3 bottom-0 w-px bg-gray-200 dark:bg-gray-600/50" />
          <div className="absolute right-0 -top-3 bottom-0 w-px bg-gray-200 dark:bg-gray-600/50" />

          {/* Bottom Corner Squares */}
          <div className="absolute -bottom-[3.5px] -left-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" />
          <div className="absolute -bottom-[3.5px] -right-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" />

          {children}
        </div>
      </div>
    </div>
  );
}
