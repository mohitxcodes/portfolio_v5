import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/layouts/header/header'
import Footer from "@/layouts/footer/footer";
import ContentWrapper from "@/core/common/content-wrapper";
import TopBar from "@/core/common/top-bar";
import InteractiveBackground from "@/components/ui/interactive-background";
import SmoothScrolling from "@/components/common/smooth-scrolling";
import FloatingContactButton from "@/components/common/floating-contact-button";
import ScrollProgress from "@/components/ui/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit Kumar - Portfolio",
  description: "Full Stack Developer specializing in Next.js, React, and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-black transition-colors duration-300`}
      >
        <ScrollProgress />
        <SmoothScrolling />
        <InteractiveBackground />
        <TopBar />
        <Header />
        <ContentWrapper>
          {children}
          <Footer />
        </ContentWrapper>
        <FloatingContactButton />
      </body>
    </html>
  );
}
