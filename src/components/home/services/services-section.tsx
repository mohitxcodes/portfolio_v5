"use client";

import BackgroundStyle from '@/core/common/background'
import React, { useState, useEffect } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'
import CardOverlayStyle from '@/core/common/card-overlay-style'
import ServicesFallback from '@/core/fallback/services-fallback'

export default function ServicesSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 550);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <ServicesFallback />;

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4">
                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800/50 
                        border border-gray-200 dark:border-gray-700/50 
                        hover:border-gray-300 dark:hover:border-gray-600/50 
                        shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] transform">
                    <div className="relative px-4 py-4 sm:px-6 md:px-8 md:py-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6">
                            <div className="text-center sm:text-left w-full sm:w-auto">
                                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
                                    Ready to Start Your Project?
                                </h3>
                                <p className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    Let&apos;s build something amazing together
                                </p>
                            </div>
                            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 w-full sm:w-auto">
                                <Link
                                    href="/contact-us"
                                    className="text-xs xs:text-sm group flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-1.5 bg-gray-800 hover:bg-gray-900 
                                        dark:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-white rounded-xs font-medium
                                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full xs:w-auto"
                                >
                                    Get in Touch
                                    <FaExternalLinkAlt className="w-3 h-3 xs:w-3.5 xs:h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-xs xs:text-sm group flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-1.5 bg-transparent hover:bg-gray-100 
                                        dark:bg-transparent dark:hover:bg-gray-700/50 text-gray-800 dark:text-gray-200 border border-gray-300 hover:border-gray-400 
                                        dark:border-gray-600 dark:hover:border-gray-500 rounded-xs font-medium
                                        transition-all duration-300 transform hover:scale-105 w-full xs:w-auto"
                                >
                                    View Work
                                    <FaExternalLinkAlt className="w-3 h-3 xs:w-3.5 xs:h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <CardOverlayStyle />
                </div>
            </div>
        </BackgroundStyle>
    )
}
