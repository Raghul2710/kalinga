"use client";
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ResearchGrid from '../components/research-facilities/research-grid'
import AdmissionCareer from '../components/general/admission_cta'
import ResearchLab from '../components/research-facilities/research-lab'
import MainIntro from "../components/about/main_intro";
import CenterOfExcellenceMain from "../components/centresofexcellence/centreofexcellencemain";

const page = () => {
    const pathname = usePathname();

    return (
        <>
            <MainIntro
                title="Introducing Our Centres of Excellence (CoE)"
                description={[
                    "To align academic learning with industrial knowledge, we have partnered with seven leading companies that offer skill-based training to students in various high-demanding sectors like electric vehicles, drone technology, AI, cybersecurity, automobiles, and many more. We’re a leading research university, empowering students to go from textbooks to real-world innovation and become ready to stand out in the competitive job market."
                ]}
                imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfaciities-introimg1.webp"
                imageAlt="Research Facilities"
                showButton={false}
                showKnowMore={false}
                sectionClassName="py-8"
                disableClipPath={false}
            />
            <ResearchGrid />
            <ResearchLab />
            <CenterOfExcellenceMain
                breadcrumbData={{
                    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-intro.jpg",
                    pageTitle: "Centres of Excellence",
                    customBreadcrumbs: [
                        { label: "Home", href: "/" },
                        { label: "Centres of Excellence", href: "/centresofexcellence" },
                    ],
                }}
            />
            <AdmissionCareer />
        </>
    )
}

export default page