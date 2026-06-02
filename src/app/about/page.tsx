"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  RiVerifiedBadgeFill,
  RiMapPin2Fill,
  RiMailSendLine,
  RiCalendarEventFill,
  RiAwardFill,
  RiTrophyFill,
  RiBarChartBoxLine,
  RiBrainLine,
} from "react-icons/ri";
import { FiFileText, } from "react-icons/fi";
import BackgroundStyle from "@/core/common/background";
import { socialLinks } from "@/data/hero-data";

// Skill Icons
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

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, filter: "blur(5px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const skills = [
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

  const achievements = [
    { title: "Top 10 Innovators in Tech", icon: RiTrophyFill },
    { title: "Hackathon Winner 2023", icon: RiAwardFill },
    { title: "Published Technical Writer", icon: FiFileText },
  ];

  return (
    <div className="min-h-screen  px-4 sm:px-6">
      <BackgroundStyle>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-12"
        >
          {/* Left Column - Sidebar */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/3 flex flex-col space-y-8 pt-6"
          >
            <div className="space-y-4 ">
              <div className="relative inline-block mx-auto md:mx-0 md:pl-8">
                <motion.div
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.2}
                  whileTap={{ scale: 0.95 }}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full 
                                    border-[4px] border-white dark:border-[#0F1115]
                                    shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing 
                                    transition-all duration-300 z-20 "
                >
                  <Image
                    src="/profile/mohit-dp.jpeg"
                    alt="Profile Photo"
                    width={160}
                    height={160}
                    className="object-cover object-center w-full h-full"
                    priority
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute -bottom-2 -right-8 z-30"
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
              </div>
            </div>

            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-300 md:pl-8">
              <div className="flex items-center gap-3">
                <RiVerifiedBadgeFill className="text-blue-500 w-5 h-5" />
                <span className="font-medium">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <RiCalendarEventFill className="text-emerald-500 w-5 h-5" />
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <RiMapPin2Fill className="text-red-500 w-5 h-5" />
                <span>Based in Bihar, India 🇮🇳</span>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800 md:pl-8">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Recent Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <item.icon className="w-4 h-4 text-gray-400" />
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800 md:pl-8">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:mohitxcodes@gmail.com"
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <RiMailSendLine className="w-4 h-4" />
                    Send an Email
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-2/3 flex flex-col space-y-8 pt-8"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white mb-6">
                Hi, I&apos;m Mohit Kumar,
              </h1>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                <p>
                  currently pursuing a B.Tech in Computer Science and
                  Engineering. I am a passionate{" "}
                  <strong className="font-medium text-gray-900 dark:text-white">
                    Full Stack Developer
                  </strong>{" "}
                  and{" "}
                  <strong className="font-medium text-gray-900 dark:text-white">
                    Problem Solver
                  </strong>{" "}
                  constantly exploring the intersection of design and
                  engineering.
                </p>
                <p>
                  My expertise lies in building scalable web applications using
                  modern technologies like Next.js, React, and Node.js. I take
                  pride in crafting user interfaces that are not only highly
                  functional but also visually stunning. Bridging the gap
                  between complex logic and beautiful UI is what drives me.
                </p>
                <p>
                  Beyond the tech world, I am an avid learner, always looking to
                  keep my mind sharp and stay updated with the latest industry
                  trends. I believe in writing clean, maintainable code and
                  continuously pushing my boundaries to build better digital
                  experiences.
                </p>
                <p className="pt-2 font-medium italic text-gray-900 dark:text-gray-200">
                  Let&apos;s connect, grow, and create together.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="pt-2 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group cursor-pointer"
                    onMouseEnter={(e) => {
                      const icon = e.currentTarget.querySelector('svg');
                      const text = e.currentTarget.querySelector('span');
                      if (icon) icon.style.color = skill.color;
                      if (text) text.style.color = skill.color;
                    }}
                    onMouseLeave={(e) => {
                      const icon = e.currentTarget.querySelector('svg');
                      const text = e.currentTarget.querySelector('span');
                      if (icon) icon.style.color = '';
                      if (text) text.style.color = '';
                    }}
                  >
                    <skill.icon className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-colors" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 space-y-2.5 w-fit max-w-full">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Social Links
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-theme-link inline-flex w-fit items-center gap-2.5 px-4 py-1 rounded-sm border border-gray-200 dark:border-gray-800
                      bg-gray-50 dark:bg-gray-800/50
                      text-gray-600 dark:text-gray-400
                      transition-all duration-300"
                    style={
                      {
                        "--social-hover-text": social.hoverText,
                        "--social-hover-border": social.hoverBorder,
                        "--social-hover-bg": social.hoverBg,
                      } as React.CSSProperties
                    }
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-medium whitespace-nowrap">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </BackgroundStyle>
    </div>
  );
}
