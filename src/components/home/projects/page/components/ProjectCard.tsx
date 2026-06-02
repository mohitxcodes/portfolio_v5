import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { ProjectCardProps } from '@/types/projects-types'


export default function ProjectCard({ project, index, getProjectTypeIcon }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group relative h-[10rem] sm:h-[12rem] md:h-[14rem] w-full rounded-2xl overflow-hidden cursor-pointer isolate shadow-md hover:shadow-xl transition-shadow duration-500"
        >
            {/* Background Image */}
            {project.images && project.images.length > 0 && (
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
                />
            )}

            {/* Gradient Overlays */}
            {/* Permanent subtle gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500" />

            {/* Hover gradient: Darkens the bottom significantly for better readability on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 opacity-20 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Top Right Icon */}
            <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                {getProjectTypeIcon(project.projectType)}
            </div>

            {/* Content Container (Bottom Aligned) */}
            <div className="absolute bottom-[-6px] left-0 w-full p-4 sm:p-4  z-20 flex flex-col justify-end pointer-events-none">

                {/* Title (Always Visible) */}
                <div className="">
                    <h3 className="text-sm sm:text-base font-bold text-white opacity-80  tracking-tight mb-0.5 drop-shadow-md line-clamp-1">
                        {project.title}
                    </h3>
                </div>

                {/* Rest of Content (Hidden by default, slides up and fades in on hover) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-auto">
                    <div className="overflow-hidden">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 mb-3 pt-2">
                            {project.technologies.slice(0, 3).map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-0.5 text-[10px] font-semibold
                                        bg-white/20 backdrop-blur-sm text-white
                                        rounded-full border border-white/20"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 3 && (
                                <span className="px-2 py-0.5 text-[10px] font-semibold
                                    bg-white/10 backdrop-blur-sm text-gray-300
                                    rounded-full border border-white/10"
                                >
                                    +{project.technologies.length - 3}
                                </span>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between gap-3">
                            {project.liveUrl ? (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-1.5 px-3 rounded-lg text-center font-bold
                                        bg-white/90 text-gray-900 hover:bg-white active:scale-95
                                        transition-all duration-300 text-xs shadow-md flex items-center justify-center gap-2"
                                >
                                    Live Preview
                                    <FaExternalLinkAlt className="text-[10px]" />
                                </a>
                            ) : (
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="flex-1 py-1.5 px-3 rounded-lg text-center font-bold
                                        bg-white/90 text-gray-900 hover:bg-white active:scale-95
                                        transition-all duration-300 text-xs shadow-md"
                                >
                                    View Details
                                </Link>
                            )}

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 px-2.5 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/20 transition-all duration-300 active:scale-95 flex items-center justify-center"
                                >
                                    <FaGithub className="text-sm" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Border Overlay */}
            <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 rounded-2xl transition-colors duration-500 z-30 pointer-events-none" />
        </motion.div>
    )
} 