"use client"
import React, { useState, useRef, useEffect } from 'react'
import { FaDesktop, FaMobileAlt, FaRobot, FaArrowLeft } from 'react-icons/fa'
import { projectsData } from '../data/projects-data'
import BackgroundStyle from '@/core/common/background'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projectTabs } from '../data/projects-data'

export default function ProjectPage() {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
    const [activeTab, setActiveTab] = useState<string>('all')
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
    const tabsContainerRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    console.log(isMobile);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Initial check
        checkIfMobile()

        // Add event listener
        window.addEventListener('resize', checkIfMobile)

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    const getProjectTypeIcon = (type: string) => {
        switch (type) {
            case 'website':
                return <FaDesktop className="text-blue-500" />
            case 'ai':
                return <FaRobot className="text-purple-500" />
            case 'app':
                return <FaMobileAlt className="text-green-500" />
            default:
                return null
        }
    }

    const filteredProjects = activeTab === 'all'
        ? projectsData
        : projectsData.filter(project => project.projectType === activeTab)

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (selectedProject !== null) {
            const project = projectsData[selectedProject]
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
        }
    }

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (selectedProject !== null) {
            const project = projectsData[selectedProject]
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
        }
    }

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 sm:mb-10 md:mb-12"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 
                                dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Home</span>
                        </Link>

                        {/* Desktop tabs - only visible on md and above */}
                        <div className="hidden md:flex items-center gap-1 p-1 bg-gray-100/80 dark:bg-white/5 backdrop-blur-md rounded-full border border-gray-200/80 dark:border-white/10 shadow-sm relative">
                            {projectTabs.map((tab) => (
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
                                            layoutId="activeTabIndicator"
                                            className="absolute inset-0 bg-white dark:bg-white rounded-full shadow-sm -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {tab.icon && <tab.icon className={`inline-block mr-1.5 relative z-10 ${activeTab === tab.id ? 'text-gray-900' : ''}`} />}
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 sm:mt-8 mb-2 sm:mb-4
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        dark:from-white dark:via-gray-300 dark:to-white
                        bg-clip-text text-transparent">
                        My Projects
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 truncate">
                        A collection of my work in web development and AI...
                    </p>

                    {/* Mobile tabs - only visible on smaller screens */}
                    <div className="md:hidden flex justify-start pb-2">
                        <div
                            ref={tabsContainerRef}
                            className="flex items-center gap-1 p-1 bg-gray-100/80 dark:bg-white/5 backdrop-blur-md rounded-full border border-gray-200/80 dark:border-white/10 shadow-sm overflow-x-auto scrollbar-hide w-max relative"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                        >
                            {projectTabs.map((tab) => (
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
                                            layoutId="activeTabIndicatorMobile"
                                            className="absolute inset-0 bg-white dark:bg-white rounded-full shadow-sm -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {tab.icon && <tab.icon className={`inline-block mr-1.5 relative z-10 ${activeTab === tab.id ? 'text-gray-900' : ''}`} />}
                                    <span className="relative z-10">{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            getProjectTypeIcon={getProjectTypeIcon}
                        />
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject !== null && (
                <ProjectModal
                    project={projectsData[selectedProject]}
                    currentImageIndex={currentImageIndex}
                    onClose={() => setSelectedProject(null)}
                    onNextImage={nextImage}
                    onPrevImage={prevImage}
                />
            )}
        </BackgroundStyle>
    )
}
