import HeroSection from "@/components/home/hero/hero-section"
import SkillsSection from "@/components/home/skills/skills-section";
import ExperienceSection from "@/components/home/experince/landing/exp-section";
import CertificationsSection from "@/components/home/certifications/certifications-section";
import ProjectsSection from "@/components/home/projects/landing/projects-section";
import EducationSection from "@/components/home/education/education-section";
import ServicesSection from "@/components/home/services/services-section";
import GithubContribution from "@/components/home/github/github-contribution";
export default function LandingPage() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <HeroSection />
            <GithubContribution />
            {/* <SkillsSection /> */}
            <ProjectsSection />
            {/* <ExperienceSection /> */}
            <CertificationsSection />
            {/* <EducationSection /> */}
            <ServicesSection />
        </div>
    );
}