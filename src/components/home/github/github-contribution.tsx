'use client';

import { useEffect, useState } from 'react';
import { fetchGitHubContributions } from '@/apis/fetch-github';
import type { GitHubContributions } from '@/types/github-types';
import { FaGithub, FaUsers, FaCode, FaStar } from 'react-icons/fa';
import ContributionsFallback from '@/core/fallback/contributions-fallback';
import BackgroundStyle from '../../../core/common/background';
import { motion } from 'framer-motion';

export default function GitHubContributions() {
    const [contributions, setContributions] = useState<GitHubContributions | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                // Pass undefined for year to fetch exactly the last 365 days
                const data = await fetchGitHubContributions('mohitxcodes', undefined);
                if (data) {
                    setContributions(data);
                } else {
                    setError('Failed to load contributions');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const getContributionColor = (count: number): string => {
        if (count === 0) return 'bg-gray-100 dark:bg-neutral-800/50';
        if (count < 2) return 'bg-blue-200 dark:bg-blue-900/40';
        if (count < 4) return 'bg-blue-300 dark:bg-blue-700/60';
        if (count < 6) return 'bg-blue-400 dark:bg-blue-600/80';
        return 'bg-blue-500 dark:bg-blue-500';
    };

    if (loading) return <ContributionsFallback />;
    if (error) return <div className="text-red-400 p-4 border border-red-200 rounded-lg">Error: {error}</div>;
    if (!contributions) return null;

    // Group weeks by month for dynamic month headers
    const groupedByMonth: { month: number; weeks: typeof contributions.collection.contributionCalendar.weeks }[] = [];
    let currentMonth = -1;
    let currentMonthWeeks: typeof contributions.collection.contributionCalendar.weeks = [];

    contributions.collection.contributionCalendar.weeks.forEach(week => {
        const month = new Date(week.contributionDays[0].date).getMonth();
        if (month !== currentMonth) {
            if (currentMonth !== -1) {
                groupedByMonth.push({ month: currentMonth, weeks: currentMonthWeeks });
            }
            currentMonth = month;
            currentMonthWeeks = [week];
        } else {
            currentMonthWeeks.push(week);
        }
    });
    if (currentMonthWeeks.length > 0) {
        groupedByMonth.push({ month: currentMonth, weeks: currentMonthWeeks });
    }

    return (
        <BackgroundStyle className="sm:p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl text-gray-900 dark:text-white">
                        <FaGithub className="text-2xl" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                            GitHub Activity
                        </h2>
                        <a
                            href="https://github.com/mohitxcodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                        >
                            @mohitxcodes
                        </a>
                    </div>
                </div>
                
                {/* Year display indicating last 1 year */}
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-neutral-800/50 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-800">
                    Last 365 Days
                </div>
            </div>

            {/* Contributions Grid */}
            <div className="space-y-6">
                <div className="relative overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-700">
                    <div className="min-w-max">
                        <div className="flex gap-2 md:gap-3">
                            {groupedByMonth.map((group, monthIndex) => (
                                <div key={monthIndex} className="flex flex-col gap-2">
                                    <div className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-wider h-4">
                                        {new Date(2000, group.month).toLocaleString('default', { month: 'short' })}
                                    </div>
                                    <div className="flex gap-1">
                                        {group.weeks.map((week, weekIndex) => (
                                            <div key={weekIndex} className="grid grid-rows-7 gap-1">
                                                {week.contributionDays.map((day, dayIndex) => (
                                                    <motion.div
                                                        key={`${monthIndex}-${weekIndex}-${dayIndex}`}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: (monthIndex * 0.05) + (weekIndex * 0.01) + (dayIndex * 0.005) }}
                                                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm ${getContributionColor(day.contributionCount)} 
                                                        cursor-help transition-all duration-200`}
                                                        title={`${new Date(day.date).toLocaleDateString(undefined, { dateStyle: 'long' })}: ${day.contributionCount} contributions`}
                                                        whileHover={{ scale: 1.5, borderRadius: '4px', zIndex: 10 }}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats and Legend */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-neutral-800">
                    {/* Stats */}
                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                            <FaStar className="text-orange-500 dark:text-orange-400 text-lg" />
                            <span>Contributions: {contributions.collection.contributionCalendar.totalContributions.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                            <FaCode className="text-blue-500 dark:text-blue-400 text-lg" />
                            <span>Repositories: {contributions.publicRepos.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                            <FaUsers className="text-purple-500 dark:text-purple-400 text-lg" />
                            <span>Followers: {contributions.followers.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500 dark:text-neutral-400">
                        <span>Less</span>
                        <div className="flex gap-1.5 p-1 bg-gray-50 dark:bg-neutral-800/50 rounded-lg border border-gray-100 dark:border-neutral-800">
                            <div className="w-3 h-3 rounded-[2px] bg-gray-100 dark:bg-neutral-800/50" />
                            <div className="w-3 h-3 rounded-[2px] bg-blue-200 dark:bg-blue-900/40" />
                            <div className="w-3 h-3 rounded-[2px] bg-blue-300 dark:bg-blue-700/60" />
                            <div className="w-3 h-3 rounded-[2px] bg-blue-400 dark:bg-blue-600/80" />
                            <div className="w-3 h-3 rounded-[2px] bg-blue-500 dark:bg-blue-500" />
                        </div>
                        <span>More</span>
                    </div>
                </div>
            </div>
        </BackgroundStyle>
    );
}