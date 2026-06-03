"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCertificate, FaArrowLeft, FaCalendarCheck, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa'
import BackgroundStyle from '@/core/common/background'
import Link from 'next/link'
import Image from 'next/image'
import { experiences } from '../data/exp-data'
import { certifications } from '../../certifications/data/certifications-data'
import { events } from '@/data/event-data'
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
                                    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
                                    { id: 'events', label: 'Events & Achievements', icon: FaCalendarCheck }
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
                                    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
                                    { id: 'events', label: 'Events & Achievements', icon: FaCalendarCheck }
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
                    {(activeTab === 'experience' || activeTab === 'events') && (
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

                    {/* Events */}
                    {activeTab === 'events' && (
                        <div className="flex flex-col gap-8 w-full">
                            {/* Events List */}
                            <div className="space-y-12">
                                {events.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="relative pl-12 sm:pl-16"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute left-3 sm:left-5 top-1.5">
                                            <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-500" />
                                        </div>

                                        <div className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden
                                            border border-gray-200 dark:border-gray-700/50 
                                            hover:border-gray-300 dark:hover:border-gray-600/50 
                                            transition-all duration-300 hover:shadow-xl">

                                            {/* Event Images */}
                                            {event.images && event.images.length > 0 && (
                                                <div className="relative h-40 sm:h-48 md:h-64">
                                                    <div className="absolute inset-0 flex">
                                                        {event.images.map((image, idx) => (
                                                            <div key={idx} className="relative flex-1">
                                                                <Image
                                                                    src={image}
                                                                    alt={`${event.title} - Image ${idx + 1}`}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="p-4 sm:p-6">
                                                {/* Event Header */}
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                                                    <div>
                                                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                                            {event.title}
                                                        </h3>
                                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                            Hosted by {event.host}
                                                        </p>
                                                    </div>
                                                    {event.certificateUrl ? (
                                                        <a
                                                            href={event.certificateUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 
                                                                transition-colors duration-300 flex items-center gap-1.5 text-sm"
                                                            title="View Certificate"
                                                        >
                                                            <span className="text-xs sm:text-sm">Certificate</span>
                                                            <FaExternalLinkAlt size={12} />
                                                        </a>
                                                    ) : event.link ? (
                                                        <a
                                                            href={event.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 
                                                                transition-colors duration-300"
                                                        >
                                                            <FaExternalLinkAlt size={14} />
                                                        </a>
                                                    ) : null}
                                                </div>

                                                {/* Event Details */}
                                                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                                                    <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                        <FaCalendarAlt size={12} className="sm:text-base" />
                                                        <span>{event.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                                                        <FaMapMarkerAlt size={12} className="sm:text-base" />
                                                        <span>{event.location}</span>
                                                    </div>
                                                </div>

                                                {/* Overview */}
                                                <div className="mb-4 sm:mb-6">
                                                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2">
                                                        Overview
                                                    </h4>
                                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                                        {event.overview}
                                                    </p>
                                                </div>

                                                {/* Learning Outcomes */}
                                                <div className="mb-4 sm:mb-6">
                                                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 sm:mb-2">
                                                        Learning Outcomes
                                                    </h4>
                                                    <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                                        {event.learningOutcomes.map((outcome, idx) => (
                                                            <li key={idx}>{outcome}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </BackgroundStyle >
    )
}
