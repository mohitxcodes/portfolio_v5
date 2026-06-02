"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/data/hero-data';

interface SocialLinksProps {
    iconSize?: string;
    gap?: string;
}

export default function SocialLinks({ iconSize = 'w-6 h-6', gap = 'gap-5' }: SocialLinksProps) {
    return (
        <div className={`flex flex-wrap justify-center items-center ${gap}`}>
            {socialLinks.map((social, index) => (
                <div key={index} className="relative group flex flex-col items-center justify-center">
                    {/* Tooltip */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/95 dark:bg-[#111318]/95 backdrop-blur-md border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 text-xs font-bold tracking-wide px-2.5 py-1 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] whitespace-nowrap relative">
                            {social.label}
                            {/* Tooltip Arrow */}
                            <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white dark:bg-[#111318] border-b border-r border-gray-200 dark:border-gray-800 rotate-45" />
                        </div>
                    </div>

                    <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.25, color: social.hoverText, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="text-gray-500 dark:text-gray-400 transition-colors duration-300 cursor-pointer"
                        aria-label={social.label}
                    >
                        <social.icon className={iconSize} />
                    </motion.a>
                </div>
            ))}
        </div>
    );
}
