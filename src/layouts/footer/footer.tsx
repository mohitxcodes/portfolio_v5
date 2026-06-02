import React from 'react'
import Link from 'next/link'
import SocialLinks from '@/components/common/social-links'

export default function Footer() {
    return (
        <footer className="w-full relative z-40">
            <div className="relative w-full border-t border-gray-200 dark:border-gray-600/50 bg-white dark:bg-black">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 relative">
                    {/* Vertical Lines */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-600/50" />
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-600/50" />

                    {/* Top Corner Squares */}
                    <div className="absolute -top-[3.5px] -left-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" />
                    <div className="absolute -top-[3.5px] -right-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" />

                    {/* Bottom Corner Squares */}
                    {/* <div className="absolute -bottom-[3.5px] -left-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" /> */}
                    {/* <div className="absolute -bottom-[3.5px] -right-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" /> */}

                    <div className="flex flex-row justify-between items-center space-y-4 sm:space-y-0">
                        {/* Left side - Copyright and Links */}
                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                © {new Date().getFullYear()} Mohit Kumar
                            </p>
                            <div className="flex space-x-4">
                                <Link
                                    href="#"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                                    transition-colors duration-300"
                                >
                                    Privacy
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                                    transition-colors duration-300"
                                >
                                    Terms
                                </Link>
                            </div>
                        </div>

                        {/* Right side - Social Links */}
                        <SocialLinks iconSize="w-5 h-5" gap="gap-4" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
