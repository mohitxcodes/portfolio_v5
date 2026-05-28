"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCertificate, FaArrowLeft } from 'react-icons/fa'
import BackgroundStyle from '@/core/common/background'
import Link from 'next/link'
import { experiences } from '../data/exp-data'
import { certifications } from '../../certifications/data/certifications-data'
import CertificationsCard from '../../certifications/components/certifications-card'
import ExperienceCard from '../components/exp-card'
import { IExperience } from '@/types/exp-types'
import Timeline from '@/core/common/timeline'

export default function ExperiencePage() {
    const [activeTab, setActiveTab] = useState('experience')
    const [isMobile, setIsMobile] = useState(false)

    // Check if the device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Initial check
        checkIfMobile()

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile)

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-4 ">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 
                                dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </Link>

                        {/* Tabs - Only show on desktop */}
                        {!isMobile && (
                            <div className="flex items-center gap-1 p-1 bg-gray-100/80 dark:bg-white/5 backdrop-blur-md rounded-full border border-gray-200/80 dark:border-white/10 shadow-sm relative">
                                {[
                                    { id: 'experience', label: 'Experience', icon: FaBriefcase },
                                    { id: 'certifications', label: 'Certifications', icon: FaCertificate }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`relative flex items-center px-4 py-1.5 rounded-full cursor-pointer text-xs font-semibold transition-colors duration-300 z-10
                                            ${activeTab === tab.id
                                                ? 'text-gray-900'
                                                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10'}`}
                                    >
                                        {activeTab === tab.id && (
                                            <motion.div
                                                layoutId="activeExpTabIndicator"
                                                className="absolute inset-0 bg-white dark:bg-white rounded-full shadow-sm -z-10"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <tab.icon className={`inline-block mr-1.5 relative z-10 ${activeTab === tab.id ? 'text-gray-900' : ''}`} />
                                        <span className="relative z-10">{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-4
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        dark:from-white dark:via-gray-300 dark:to-white
                        bg-clip-text text-transparent">
                        Professional Journey
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A comprehensive overview of my professional experience, certifications, and achievements
                    </p>

                    {/* Tabs - Show below description on mobile */}
                    {isMobile && (
                        <div className="flex gap-4 w-full justify-start mt-6 pb-2 overflow-x-auto scrollbar-hide">
                            <div className="flex items-center gap-1 p-1 bg-gray-100/80 dark:bg-white/5 backdrop-blur-md rounded-full border border-gray-200/80 dark:border-white/10 shadow-sm relative w-max">
                                {[
                                    { id: 'experience', label: 'Experience', icon: FaBriefcase },
                                    { id: 'certifications', label: 'Certifications', icon: FaCertificate }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`relative flex items-center px-4 py-1.5 rounded-full cursor-pointer text-xs font-semibold transition-colors duration-300 whitespace-nowrap flex-shrink-0 z-10
                                            ${activeTab === tab.id
                                                ? 'text-gray-900'
                                                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10'}`}
                                    >
                                        {activeTab === tab.id && (
                                            <motion.div
                                                layoutId="activeExpTabIndicatorMobile"
                                                className="absolute inset-0 bg-white dark:bg-white rounded-full shadow-sm -z-10"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <tab.icon className={`inline-block mr-1.5 relative z-10 ${activeTab === tab.id ? 'text-gray-900' : ''}`} />
                                        <span className="relative z-10">{tab.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>

                {/* Content */}
                <div className="relative">
                    {/* Timeline Line */}
                    {activeTab === 'experience' && (
                        <Timeline />
                    )}

                    {/* Experience */}
                    <div className="space-y-8 sm:space-y-12">
                        {activeTab === 'experience' && experiences.map((exp: IExperience, index: number) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeTab === 'certifications' && certifications.map((cert, index) => (
                            <CertificationsCard key={index} cert={cert} index={index} />
                        ))}
                    </div>

                </div>
            </div>
        </BackgroundStyle >
    )
}
