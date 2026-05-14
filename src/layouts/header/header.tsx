"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import {
  Home,
  Briefcase,
  User,
  Calendar,
  Mail,
  LayoutGrid,
  History,
  Terminal,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Projects", href: "/projects", icon: LayoutGrid },
    { label: "Experience", href: "/experience", icon: History },
    { label: "Portfolio", href: "/portfolio", icon: User },
    { label: "Events", href: "/events", icon: Calendar },
    { label: "Contact", href: "/contact-us", icon: Mail },
  ];

  return (
    <header className="w-full relative z-50 ">
      <div className="relative w-full  bg-transparent border-t border-b border-gray-200 dark:border-gray-600/50 ">
        <div className="max-w-5xl py-3 mx-auto px-4 sm:px-6 relative">
          {/* Vertical Lines */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-600/50" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-600/50" />

          {/* Corner Squares */}
          <div className="absolute -top-[3.5px] -left-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" />
          <div className="absolute -top-[3.5px] -right-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" />
          <div className="absolute -bottom-[3.5px] -left-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" />
          <div className="absolute -bottom-[3.5px] -right-[3.5px] w-1.5 h-1.5 bg-gray-900 dark:bg-gray-500 z-20" />

          <div className="flex items-center justify-between py-3">
            {/* Logo/Brand */}
            <Link
              href="/"
              className="md:text-lg font-bold tracking-tight uppercase
                                text-gray-900 dark:text-gray-100 
                                hover:opacity-70 transition-opacity pl-4 flex items-center gap-2.5"
            >
              <span className="hidden sm:inline">Mohit Kumar</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-2 py-1 text-sm font-medium transition-all duration-300 capitalize tracking-wide flex items-center gap-2
                                            ${
                                              isActive
                                                ? "text-gray-900 dark:text-white font-semibold"
                                                : "text-gray-500 dark:text-gray-400"
                                            }`}
                  >
                    <item.icon
                      className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-gray-900 dark:text-white" : "text-gray-400"}`}
                    />
                    <div className="relative overflow-hidden">
                      <div className="relative transition-transform duration-500 ease-spring group-hover:-translate-y-full">
                        {/* Default Text */}
                        <span className="block">{item.label}</span>
                        {/* Hover (Flip) Text */}
                        <span className="absolute top-full left-0 block w-full text-gray-900 dark:text-gray-100 font-semibold">
                          {item.label}
                        </span>
                      </div>
                    </div>

                    {/* {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gray-900 dark:bg-white"
                                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                            />
                                        )} */}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 mr-4
                                text-gray-600 hover:text-gray-900 
                                dark:text-gray-400 dark:hover:text-white
                                transition-colors duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <RiMenu3Line className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative border-l border-r border-gray-200 dark:border-gray-800">
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden overflow-hidden border-t border-gray-200 dark:border-gray-800"
              >
                <nav className="flex flex-col space-y-0 divide-y divide-gray-100 dark:divide-gray-800">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center px-4 py-4 transition-colors duration-300 uppercase text-[10px] font-bold tracking-widest gap-3
                                                            ${
                                                              isActive
                                                                ? "bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white"
                                                                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
                                                            }`}
                        >
                          <item.icon
                            className={`w-4 h-4 ${isActive ? "text-gray-900 dark:text-white" : "text-gray-500"}`}
                          />
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
