import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { ISectionHeader } from '@/types/common-types'


export default function SectionHeader({ title, link, linkText }: ISectionHeader) {
    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100
                        relative inline-block animate-fade-in">
                {title}
                <div className="absolute -bottom-1.5 xs:-bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 
                            dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 rounded-full" />
            </h2>
            {link && (
                <Link
                    href={`${link}`}
                    className="group flex items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300
                        bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-700/50
                        rounded-xs border border-gray-200 dark:border-gray-700/50
                        transition-all duration-300 hover:shadow-md whitespace-nowrap"
                >
                    <span className="truncate">{linkText}</span>
                    <FaArrowRight className="flex-shrink-0 text-xs xs:text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
            )}
        </div>
    )
}
