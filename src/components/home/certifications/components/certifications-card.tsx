import React from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa'
import { ICertification } from '@/types/certification-types'
import { motion } from 'framer-motion'

export default function CertificationsCard({ cert, index }: { cert: ICertification, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group relative h-[10rem] sm:h-[12rem] md:h-[14rem] w-full rounded-2xl overflow-hidden cursor-pointer isolate shadow-md hover:shadow-xl transition-shadow duration-500"
        >
            {/* Background Image */}
            <Image
                src={cert.certificateImage}
                alt={cert.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-0"
            />

            {/* Gradient Overlays */}
            {/* Permanent subtle gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500" />

            {/* Hover gradient: Darkens the bottom significantly for better readability on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Top Right Icon */}
            <div className="absolute top-3 right-3 z-20 bg-black/40 backdrop-blur-md p-2 rounded-full border border-white/10">
                <div className="relative w-5 h-5">
                    <Image
                        src={cert.organizationLogo}
                        alt={cert.organization}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Content Container (Bottom Aligned) */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 z-20 flex flex-col justify-end pointer-events-none">

                {/* Title (Always Visible) */}
                <div className="mb-2">
                    <h3 className="text-xl sm:text-lg font-bold text-white tracking-tight mb-0.5 drop-shadow-md line-clamp-1">
                        {cert.title}
                    </h3>
                </div>

                {/* Rest of Content (Hidden by default, slides up and fades in on hover) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-auto">
                    <div className="overflow-hidden">
                        {/* Organization */}
                        <div className="flex items-center gap-2 mb-3 pt-2">
                            <span className="px-2 py-0.5 text-[10px] font-semibold
                                bg-white/20 backdrop-blur-sm text-white
                                rounded-full border border-white/20">
                                {cert.organization}
                            </span>
                            <span className="px-2 py-0.5 text-[10px] font-semibold
                                bg-white/10 backdrop-blur-sm text-gray-300
                                rounded-full border border-white/10">
                                {cert.issueDate}
                            </span>
                        </div>

                        {/* Action Button */}
                        <div className="flex items-center justify-between gap-3">
                            <a
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-1.5 px-3 rounded-lg text-center font-bold
                                    bg-white/90 text-gray-900 hover:bg-white active:scale-95
                                    transition-all duration-300 text-xs shadow-md flex items-center justify-center gap-2"
                            >
                                View Credential
                                <FaExternalLinkAlt className="text-[10px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Border Overlay */}
            <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 rounded-2xl transition-colors duration-500 z-30 pointer-events-none" />
        </motion.div>
    )
}
