import React from 'react';
import BackgroundStyle from '@/core/common/background';

export default function HeroFallback() {
    return (
        <BackgroundStyle>
            <div className="relative overflow-hidden min-h-[75vh] flex flex-col justify-center animate-pulse">
                <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 w-full text-center max-w-5xl mx-auto">

                    {/* Main Headline Skeleton */}
                    <div className="flex flex-col items-center gap-3 lg:gap-5 w-full">
                        {/* Line 1 */}
                        <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-5">
                            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
                            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-18 rounded-full bg-gray-200 dark:bg-gray-800" />
                            <div className="h-8 sm:h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
                        </div>

                        {/* Line 2 */}
                        <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-5 mt-2">
                            <div className="h-6 w-8 bg-gray-200 dark:bg-gray-800 rounded" />
                            <div className="h-8 sm:h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded" />
                        </div>

                        {/* Line 3 */}
                        <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-5 mt-2">
                            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
                            <div className="h-8 sm:h-10 w-40 bg-gray-200 dark:bg-gray-800 rounded" />
                        </div>
                    </div>

                    {/* Subtitle Skeleton */}
                    <div className="space-y-2 w-full max-w-2xl mt-4">
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
                        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800 rounded" />
                        <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-800 rounded" />
                    </div>

                    {/* Links & CTA Skeleton */}
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
                        {/* Social Links */}
                        <div className="flex items-center gap-5">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded" />
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-gray-800"></div>

                        {/* Let's Talk */}
                        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded" />

                        {/* Divider */}
                        <div className="hidden sm:block w-px h-6 bg-gray-200 dark:bg-gray-800"></div>

                        {/* Resume Button */}
                        <div className="h-10 w-28 bg-gray-200 dark:bg-gray-800 rounded-xl" />
                    </div>

                    {/* Marquee Section Skeleton */}
                    <div className="w-full mt-8 sm:mt-12 flex flex-col items-center">
                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 relative mb-10">
                            <div className="absolute left-1/2 -translate-x-1/2 -top-3 h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
                        </div>

                        {/* Skills Marquee */}
                        <div className="relative w-full max-w-[100vw] overflow-hidden flex py-4">
                            <div className="flex whitespace-nowrap gap-12 sm:gap-16 items-center px-6">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded" />
                                        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </BackgroundStyle>
    );
}
