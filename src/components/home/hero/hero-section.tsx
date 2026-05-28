"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';
import { FiFileText } from 'react-icons/fi';
import BackgroundStyle from '../../../core/common/background';
import { socialLinks } from '@/data/hero-data';
import { skillCategories } from '@/data/skills-data';
import { motion } from 'framer-motion';
import HeroFallback from '@/core/fallback/hero-fallback';

// Flatten the skills data for the marquee
const allSkills = skillCategories.flatMap(category =>
    category.skills.map((skill, index) => ({
        name: skill,
        icon: category.icons[index]
    }))
);

export default function HeroSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

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
                className="relative overflow-hidden min-h-[85vh] flex flex-col justify-center pt-12 pb-4"
            >
                {/* Glowing Background Blob */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] md:w-[35rem] h-[20rem] md:h-[35rem] bg-light-accent/10 dark:bg-dark-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

                <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 w-full text-center max-w-5xl mx-auto">

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
                                className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-20 rounded-full overflow-hidden border-2 sm:border-4 border-gray-200 dark:border-white/10 shadow-xl"
                            >
                                <Image src="/profile/mohit-dp.jpeg" alt="Mohit Kumar" fill className="object-cover" />
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
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-6 mt-4">
                        <div className="flex items-center gap-5">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 dark:text-gray-400 hover:text-light-accent dark:hover:text-white transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
                        <Link
                            href="mailto:mohitxcodes@gmail.com"
                            className="text-gray-700 dark:text-gray-300 hover:text-light-accent dark:hover:text-white font-medium flex items-center gap-2 transition-colors duration-300"
                        >
                            Let&apos;s Talk <RiArrowRightLine />
                        </Link>
                        <div className="hidden sm:block w-px h-6 bg-gray-300 dark:bg-gray-700"></div>
                        <Link
                            href="/exp/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 hover:bg-gray-800 dark:bg-white/10 dark:hover:bg-white/20 text-white font-medium rounded-full transition-all duration-300 shadow-md"
                        >
                            <FiFileText className="w-4 h-4" /> Resume
                        </Link>
                    </motion.div>

                    {/* Marquee Section */}
                    <motion.div variants={itemVariants} className="w-full mt-16 sm:mt-24 flex flex-col items-center">
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
                        <div className="relative w-full max-w-[100vw] overflow-hidden flex py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-4 sm:mx-0">
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
                                    <div key={index} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-white transition-colors duration-300 font-semibold text-lg lg:text-2xl">
                                        <span className="text-3xl opacity-80">{skill.icon}</span>
                                        <span>{skill.name}</span>
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