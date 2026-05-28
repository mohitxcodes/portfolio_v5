"use client";

import BackgroundStyle from '@/core/common/background'
import React, { useState, useEffect } from 'react'
import { FaDesktop, FaMobileAlt, FaRobot } from 'react-icons/fa'
import { projectsData } from '../data/projects-data'
import SectionHeader from '@/core/common/section-header'
import { motion } from 'framer-motion'
import ProjectsFallback from '@/core/fallback/projects-fallback'
import ProjectCard from '../page/components/ProjectCard'

export default function ProjectsSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 700);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <ProjectsFallback />;

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

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
                <SectionHeader title="Featured Projects" link="/projects" linkText="View All Projects" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {projectsData
                        .slice(0, 6)
                        .map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                                getProjectTypeIcon={getProjectTypeIcon}
                            />
                        ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
