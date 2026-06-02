"use client";

import BackgroundStyle from '@/core/common/background'
import React, { useState, useEffect } from 'react'
import { certifications } from './data/certifications-data'
import CertificationsCard from './components/certifications-card'
import SectionHeader from '@/core/common/section-header'
import { ICertification } from '@/types/certification-types'
import CertificationsFallback from '@/core/fallback/certifications-fallback'

export default function CertificationsSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 750);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <CertificationsFallback />;

    return (
        <BackgroundStyle>
            <div className="max-w-7xl mx-auto px-0 sm:px-4 py-8">
                <SectionHeader title="Licenses & Certifications" link="/experience" linkText="View All Certifications" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8">
                    {certifications.map((cert: ICertification, index: number) => (
                        <CertificationsCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </BackgroundStyle>
    )
}
