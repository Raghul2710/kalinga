"use client";


import React from 'react';
import SectionHeading from '../components/general/SectionHeading';
import ResearchSixGridButtons from "@/app/components/research/research_six_grid-buttons";
import MainIntro from '../components/about/main_intro';



export default function EkeedaPage() {
    const buttons = [
        {
            id: 1,
            text: "Mechanical Engineering",
            href: "https://ekeeda.com/degree-courses/mechanical-engineering",
        },
        {
            id: 2,
            text: "Civil Engineering",
            href: "https://ekeeda.com/degree-courses/civil-engineering",
        },
        {
            id: 3,
            text: "Computer Engineering",
            href: "https://ekeeda.com/degree-courses/computer-engineering",
        },
        {
            id: 4,
            text: "Electronics Engineering",
            href: "https://ekeeda.com/degree-courses/electronics-engineering",
        },
        {
            id: 5,
            text: "Electrical Engineering",
            href: "https://ekeeda.com/degree-courses/electrical-engineering",
        },
        {
            id: 6,
            text: "Electronics and Telecommunication Engineering",
            href: "https://ekeeda.com/degree-courses/electronics-and-telecommunication-engineering",
        },
        {
            id: 7,
            text: "Instrumentation Engineering",
            href: "https://ekeeda.com/degree-courses/instrumentation-engineering",
        },
        {
            id: 8,
            text: "Information Technology Engineering",
            href: "https://ekeeda.com/degree-courses/information-technology-engineering",
        },
    ];
    return (
        <>
            <MainIntro
                title="Ekeeda Digital Library"
                description={[
                    "Now explore 90000+ high-quality videos recorded by renowned experts from the Engineering Industry through Ekeeda.com",
                    "Online Learning Resources are now easily available for the students of Engineering Branches at Kalinga University through the Sponsored Digital Library by Ekeeda.com.",
                    "Every student will get a separate login to access the Digital Library with easy steps.",
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/common/ekeeda.webp"
                imageAlt="Ekeeda Digital Library"
                initialVisibleParagraphs={3}
                showReadMore={false}
            />
            <SectionHeading
                title="Informative Videos from Different Branches of Engineering"
                subtitle=""
                titleClassName="text-center"
            />
            <ResearchSixGridButtons buttons={buttons} />
            <p className="text-center pb-10">Explore - <a href="https://ekeeda.com/">Ekeeda</a></p>

        </>
    );
}
