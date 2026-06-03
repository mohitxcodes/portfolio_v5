"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';
import { FiFileText } from 'react-icons/fi';
import BackgroundStyle from '../../../core/common/background';
import SocialLinks from '@/components/common/social-links';
import { motion } from 'framer-motion';
import HeroFallback from '@/core/fallback/hero-fallback';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiReactquery,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiGithub,
  SiPostman,
  SiSpring,
} from "react-icons/si";
import { RiBarChartBoxLine, RiBrainLine } from "react-icons/ri";

const allSkills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#61DAFB" },
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "REST APIs", icon: RiBarChartBoxLine, color: "#6366F1" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "JDBC", icon: RiBarChartBoxLine, color: "#F89820" },
  { name: "Spring MVC", icon: SiSpring, color: "#6DB33F" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Java", icon: RiBrainLine, color: "#007396" },
  { name: "Git & GitHub", icon: SiGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

export default function HeroSection() {
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(false);

    // Avatar images - replace these with your actual image paths
    const avatarImages = [
        '/profile/mohit03.jpg', // Replace with third image
        '/profile/mohit-dp.jpeg',
        '/profile/mohit02.jpg', // Replace with second image
        '/profile/mohit.jpeg'
    ];

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    // Cycle through images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsImageLoading(true);
            setTimeout(() => {
                setCurrentImageIndex((prev) => (prev + 1) % avatarImages.length);
                setTimeout(() => setIsImageLoading(false), 300);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [isImageLoading]);

    if (loading) return <HeroFallback />;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, filter: 'blur(5px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <BackgroundStyle>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="relative overflow-hidden min-h-[75vh] flex flex-col justify-center "
            >

                <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 w-full text-center max-w-5xl mx-auto">

                    {/* Main Headline */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center gap-3 lg:gap-5 font-bold text-lg sm:text-xl md:text-6xl tracking-tight text-gray-900 dark:text-white"
                    >
                        {/* Line 1 */}
                        <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-5">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">Hey, I&apos;m</span>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-18 rounded-full overflow-hidden border-2 sm:border-4 border-gray-200 dark:border-white/10 shadow-xl"
                            >
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={avatarImages[currentImageIndex]}
                                        alt="Mohit Kumar"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </motion.div>
                            <span>Mohit</span>
                        </div>

                        {/* Line 2 */}
                        <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-5 mt-2 ">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">A</span>
                            <span>Full Stack Developer</span>
                        </div>

                        {/* Line 3 */}
                        <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-5 mt-2">
                            <span className="text-gray-500 dark:text-gray-400 font-medium">Building</span>
                            <span className="text-light-accent dark:text-dark-accent italic">Digital Experiences</span>
                        </div>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-sm lg:text-md text-gray-600 dark:text-gray-400 font-medium max-w-2xl mt-4"
                    >
                        I enjoy taking messy, complicated problems and making them feel effortless for users!
                    </motion.p>

                    {/* Links & CTA */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4">
                        <SocialLinks />
                        <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
                        <Link
                            href="/contact-us"
                            className="text-gray-700 dark:text-gray-300 hover:text-light-accent dark:hover:text-white font-medium flex items-center gap-2 transition-colors duration-300"
                        >
                            Let&apos;s Talk <RiArrowRightLine />
                        </Link>
                        <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/exp/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-5 py-2 text-sm font-medium 
                                    bg-gray-200/50 dark:bg-gray-800/50 text-gray-900 dark:text-white
                                    rounded-xl border border-gray-200 dark:border-gray-700
                                    overflow-hidden
                                    shadow-lg hover:shadow-xl
                                    transition-all duration-300
                                    flex items-center gap-2"
                            >
                                <span className="absolute inset-0 w-full py-16 px-24 h-full bg-white dark:bg-white transition-transform duration-750 ease-out transform translate-y-1/3 -rotate-12 -translate-x-full group-hover:translate-x-0 group-hover:translate-y-0 origin-bottom-left z-0" />
                                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-900">
                                    <FiFileText className="w-4 h-4" />
                                    <span>Resume</span>
                                    <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">
                                        →
                                    </span>
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Marquee Section */}
                    <motion.div variants={itemVariants} className="w-full mt-8 sm:mt-12 flex flex-col items-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent relative mb-10">
                            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white dark:bg-[#0f1115] px-4 text-xs text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                Scroll down
                                <span className="w-3 h-5 border-2 border-gray-400 rounded-full flex justify-center p-0.5">
                                    <motion.span
                                        animate={{ y: [0, 6, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="w-1 h-1 bg-gray-400 rounded-full"
                                    />
                                </span>
                                to see projects
                            </span>
                        </div>

                        {/* Skills Infinite Scroll Marquee */}
                        <div className="relative w-full max-w-[100vw] overflow-hidden flex pt-14 pb-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-4 sm:mx-0">
                            <motion.div
                                className="flex whitespace-nowrap gap-12 sm:gap-16 items-center px-6"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    ease: "linear",
                                    duration: 40,
                                    repeat: Infinity,
                                }}
                            >
                                {/* Double the skills list to create an infinite loop effect */}
                                {[...allSkills, ...allSkills].map((skill, index) => (
                                    <div key={index} className="relative group flex flex-col items-center justify-center">
                                        {/* Tooltip */}
                                        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white/95 dark:bg-[#111318]/95 backdrop-blur-md border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 text-xs sm:text-sm font-bold tracking-wide px-3 py-1.5 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] whitespace-nowrap relative">
                                                {skill.name}
                                                {/* Tooltip Arrow */}
                                                <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white dark:bg-[#111318] border-b border-r border-gray-200 dark:border-gray-800 rotate-45" />
                                            </div>
                                        </div>
                                        
                                        {/* Icon Container */}
                                        <motion.div
                                            whileHover={{ scale: 1.25, y: -5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            className="text-4xl sm:text-5xl text-gray-400 dark:text-gray-500 transition-colors duration-300 cursor-pointer"
                                            onMouseEnter={(e) => {
                                                const el = e.currentTarget;
                                                el.style.color = skill.color;
                                                el.style.filter = `drop-shadow(0 0 10px ${skill.color}80)`;
                                            }}
                                            onMouseLeave={(e) => {
                                                const el = e.currentTarget;
                                                el.style.color = '';
                                                el.style.filter = '';
                                            }}
                                        >
                                            <skill.icon />
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </BackgroundStyle>
    );
}