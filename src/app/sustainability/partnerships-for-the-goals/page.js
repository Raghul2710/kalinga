"use client";

import { useState, useEffect, useMemo } from "react";
import MainIntro from "@/app/components/about/main_intro";
import DataTable from "@/app/components/general/data-table";
import FAQ from "@/app/components/general/faq";
import PhdObjectivesPanel from "@/app/components/phd/phd-objectives";
import Campusfacilitiescard from "@/app/components/campus-facilities/campusfacilitiescard";
import SectionHeading from "@/app/components/general/SectionHeading";
import ResearchSixGridButtons from "@/app/components/research/research_six_grid-buttons";
import CustomGallery from "@/app/components/general/gallery";
import QuickLinkCard from "@/app/components/general/quick_link_card";
import VerticalTabs from "@/app/components/general/VerticalTabs";
import Image from "next/image";
import KalingaBuzzTabs from "@/app/components/kalinga-buzz/KalingaBuzzTabs";


const mainIntroContent = {
    title: "Sustainable Communities & Partnership",
    description: [
        "In alignment with the UN Sustainable Development Goal (SDG) 17: Partnerships for the Goals, Kalinga University has partnered with various National and International academic institutions, industries, government agencies, and civil society to promote knowledge exchange, resource sharing, and collective action for sustainable development. Through well-structured Memorandum of Understanding (MoUs), joint research initiatives, faculty and student exchange programs, conferences, and value-based educational activities, it offers a dynamic platform to stakeholders to address complex societal and environmental challenges. The University comprises eight academic schools (Arts and Humanities, Commerce and Management, Education, Information Technology, Law, Pharmacy, Science, Technology), each having dedicated student clubs, student branches, and academic chairs for collaborative activities. Through these platforms, students and faculty organise and participate in a wide range of academic, research, social, environmental, and community-based activities. These initiatives encourage experiential learning, societal outreach, and leadership development.",
        "Flagship initiatives, such as conferences, environmental sustainability drives, skill-development projects, and the adoption of six villages (Kotni, Kotarabhata, Kuhera, Palaud, Parshada, and Tandul), translate partnerships into tangible outcomes, including internships, incubation support, community interventions, and policy-oriented research contributions. Kalinga University's collaborations extend across academic exchanges at national and international levels, industry-linked skilling and innovation hubs, NGO partnerships for community engagement, professional certification programs, and sports and cultural partnerships.",
        "By emphasising transparency, documentation, and outcome-based reporting, the University ensures that all collaborative efforts are auditable and aligned with specific SDG targets. This structured approach enables Kalinga University to systematically map partnerships, measure impact, and report progress within its institutional SDG framework, reinforcing its commitment to sustainable, inclusive, and community-focused development, while contributing to multiple UN Sustainable Development Goals (SDGs), including SDG 17."
    ],
    imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/chart-15.webp",
    imageAlt: "Sustainable Communities & Partnership",
};

const mainIntroContent1 = {
    title: "Awareness Programs & Other Events held at Kalinga University",
    description: [
        "The University organises various awareness programs and events like workshops, expert lectures, health camps, and interactive sessions, to promote the physical and mental well-being of students and staff while developing a spirit of social responsibility. These programs cover important topics like nutrition, mental health, hygiene, stress management, lifestyle disorders, and more."
    ],
    imageUrl: "https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/images-2.png",
    imageAlt: "Awareness Programs & Other Events held at Kalinga University",
};

const items = [
    {
        question: "Sustainable Communities and Partnership Details",
        component: (
            <div className="w-full mt-4">
                <DataTable
                    columns={[
                        { key: "year", label: "Financial Year", widthPx: 120 },
                        { key: "activeInitiatives", label: "Number of Active Sustainability Initiatives involving External Communities (not events/seminars, e.g., regular waste reduction, planting, awareness drives)", widthPx: 320 },
                        { key: "studentsPlantingTrees", label: "Number of Students Exposed to Real-world Sustainability Action During the Year (Planting Trees), Inside and Outside the Campus", widthPx: 300 },
                        { key: "studentsOtherActions", label: "Number of Students Exposed to Real-world Sustainability Action During the Year (Other than Planting Trees), Inside and Outside the Campus", widthPx: 300 },
                        { key: "studentsOutsideCampus", label: "Number of Students Exposed to Real-world Sustainability Action During the Year (Outside Campus, Including all Activities)", widthPx: 280 },
                        { key: "eventsSeminars", label: "Number of Events/Seminars Organised Within and Outside the Campus to Share Sustainable Practices", widthPx: 280 }
                    ]}
                    data={[
                        { year: "Unit", activeInitiatives: "Number", studentsPlantingTrees: "Number", studentsOtherActions: "Number", studentsOutsideCampus: "Number", eventsSeminars: "Number" },
                        { year: "2024-2025", activeInitiatives: "17", studentsPlantingTrees: "3108", studentsOtherActions: "1433", studentsOutsideCampus: "2634", eventsSeminars: "39" },
                        { year: "2023-2024", activeInitiatives: "16", studentsPlantingTrees: "2394", studentsOtherActions: "1426", studentsOutsideCampus: "2010", eventsSeminars: "30" },
                        { year: "2022-2023", activeInitiatives: "10", studentsPlantingTrees: "1394", studentsOtherActions: "1264", studentsOutsideCampus: "1222", eventsSeminars: "32" }
                    ]}
                    overflowX={true}
                    disableContainer={true}
                    className="shadow-none border border-gray-100"
                />
            </div>
        )
    }
];

const hospitalMoUs = [
    { id: 1, text: "City Eye Care Hospital", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/MoU+-+City+Eye+Care+Hospital_compressed.pdf" },
    { id: 2, text: "NH MMI Hospital", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/MoU+-+NH+MMI+Hospital_compressed.pdf" },
    { id: 3, text: "Ramkrishna Care Hospital", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/MoU+-+Ramkrishna+Care+Hospital+Raipur_compressed.pdf" },
    { id: 4, text: "Saptgiri Hospital", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/MoU+-+Saptgiri+Hospital_compressed.pdf" },
    { id: 5, text: "Shri Ganesh Vinayak Eye Hospital", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/MoU+-+Shri+Ganesh+Vinayak+Eye+Hospital_compressed.pdf" },
    { id: 6, text: "Urmila Memorial Hospital", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/MoU+-+Urmila+Memorial+Hospital(pdfgear.com).pdf" },
    { id: 7, text: "VY Hospital", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/MoU+-+VY+Hospital+Kamal+Vihar+Raipur(pdfgear.com).pdf" },
];

const eventReports = [
    { id: 1, text: "Women Empowerment and Skill Mastery in Rural Landscapes in Raipur, Chhattisgarh", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Best+Practice+1_Sustainable+Communities+%26+Partnership.pdf" },
    { id: 2, text: "Harmony in Action: Implementing Sustainable Development Goals for a Better World", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Best+Practice+2_Sustainable+Communities+%26+Partnership.pdf" },
    { id: 3, text: "MoU Signed with New Gurukul Education Society (NGES)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/MoU+with+NGES+reg+Skill+Development.pdf" },
    { id: 4, text: "MoU Signed with Yash Foundation, Ahmednagar, Maharashtra (NGO)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/MOU+Yash+Foundation.pdf" },
    { id: 5, text: "Unnat Bharat Abhiyan - Success Story", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Unnat+Bharat+Abhiyaan+-+Success+Story.pdf" },
];


const cards = [
    {
        title: "Outreach and Community Survey",
        description: "",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/img-1.webp",
        logoSrc: "",
        subtitle: "OUTREACH AND COMMUNITY SURVEY",
        link: "#",
    },
    {
        title: "Collaborative Online and Offline Faculty Development Programs (FDPs)",
        description: "",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/img-2.webp",
        logoSrc: "",
        subtitle: "COLLABORATIVE ONLINE AND OFFLINE FACULTY DEVELOPMENT PROGRAMS (FDPs)",
        link: "#",
    },
    {
        title: "National and International Conferences",
        description: "",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/img-3.webp",
        logoSrc: "",
        subtitle: "NATIONAL AND INTERNATIONAL CONFERENCES",
        link: "#",
    },
    {
        title: "Industrial Visits",
        description: "",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/img-4.webp",
        logoSrc: "",
        subtitle: "INDUSTRIAL VISITS",
        link: "#",
    },
    {
        title: "Other Collaborative Activities, Guest Lectures, Expert Talks, Competitions, etc.",
        description: "",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/img-5.webp",
        logoSrc: "",
        subtitle: "OTHER COLLABORATIVE ACTIVITIES",
        link: "#",
    },
    {
        title: "Alumni Meets",
        description: "",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/img-6.webp",
        logoSrc: "",
        subtitle: "ALUMNI MEETS",
        link: "#",
    },
    {
        title: "Collaborative Activities Organised through Training Programs, Summer Camps and Capacity Building Programs",
        description: "",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/img-7.webp",
        logoSrc: "",
        subtitle: "COLLABORATIVE ACTIVITIES THROUGH TRAINING PROGRAMS",
        link: "#",
    }
];

const phdObjectives = [
    {
        item: "PM Surya Ghar: Muft Bijli Yojana, Solar PV Installation Training"
    },
    {
        item: "Bhoomi-Club Donation Drive"
    },
    {
        item: "Community Clean Campaign Program"
    },
    {
        item: "Swacchotsav - Swachhata Hi Seva"
    },
    {
        item: "Rangoli Making Competition"
    },
    {
        item: "The India Rural Colloquy C.G.- Transforming Rural India (TRI) & IIM Raipur"
    },
    {
        item: "International Day of Clean Air for Blue Skies"
    },
    {
        item: "Project completed titled 'Production of Lotus Yarn from Lotus Fibre as an Aquafiber, an Innovation in Handloom Industry' under Unnat Bharat Abhiyan"
    },
    {
        item: "World Ozone Day 2024 Celebration"
    },
    {
        item: "Educational Visit to Mohrenga Forest Trail"
    },
    {
        item: "Two-Day Nature Camp at Keshkal for Celebrating Wildlife Week 2024"
    },
    {
        item: "Nukkad Naatak and Door-to-Door Campaign"
    },
    {
        item: "Community Engagement Program – Clean & Green Society Drive"
    },
    {
        item: "Paper Bag Distribution Campaign"
    },
    {
        item: "Donation Drive: Donate to Make a Difference"
    },
    {
        item: "Smart Garbage Monitoring System in Government Schools"
    },
    {
        item: "Badhte Kadam Organisation for Clothes Distribution and NGO Visit"
    },
    {
        item: "Rural and Household Survey Conducted in Adopted Villages by Kalinga University"
    },
    {
        item: "Global Peace and Sustainable Development Summit, 2023"
    },
    {
        item: "Pro-Bono Club Book donation drive"
    },
    {
        item: "Community Development Survey For Farmers, SHGs, Youth & Women"
    },
    {
        item: "Collaborative Online and Offline Faculty Development Programs (FDPs)"
    },
    {
        item: "Alumni Meets Conducted"
    },
    {
        item: "National and International Conferences, Seminars, and Symposiums Conducted"
    },
    {
        item: "Faculty Development Programs (Online and Offline) Conducted"
    },
    {
        item: "Industrial Visits Conducted for Students"
    },
    {
        item: "Guest Lectures and Expert Talks Conducted by Academic and Industry Experts"
    },
    {
        item: "Summer Camp Conducted in Various Schools"
    },
    {
        item: "Capacity-Building Programs Conducted in Various Institutes"
    }
];

const galleryImages = Array.from({ length: 14 }, (_, index) => {
    const imageNumber = index + 1;
    return {
        id: imageNumber,
        image: `https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/chart-${imageNumber}.webp`,
        alt: `Partnerships for the Goals Activity ${imageNumber}`,
    };
});

const bestPracticesTabs = [
    {
        id: "women-empowerment",
        label: "Women Empowerment and Skill Mastery",
        content: (
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">Women's Empowerment and Skill Mastery in Rural Landscapes in Raipur, Chhattisgarh</h3>
                <p className="text-gray-700 leading-relaxed">
                    Kalinga University, Naya Raipur, is committed to serving in community development by introducing a skill development centre for rural women. Kalinga University has adopted five nearby villages and is continuously serving the development of these villages. The practice is dedicated to empowering women in these villages through skill development and capacity building.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg border-b pb-2">Objectives</h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                            <li>To provide economic empowerment</li>
                            <li>To improve the quality of life of rural people through poverty alleviation</li>
                            <li>To enhance education and knowledge among village women</li>
                            <li>To support community development</li>
                            <li>To develop entrepreneurial skills</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg border-b pb-2">Key Initiatives</h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                            <li>Preparation of Hand Sanitisers & Face Masks</li>
                            <li>Tailoring and Traditional Hand Embroidery</li>
                            <li>Mushroom Cultivation training</li>
                            <li>Production of Lotus Fibre for innovation in handloom</li>
                            <li>Digital Literacy and Financial Management training</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "harmony-action",
        label: "Harmony in Action (SDG Implementation)",
        content: (
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">Harmony in Action: Implementing Sustainable Development Goals for a Better World</h3>
                <p className="text-gray-700 leading-relaxed">
                    The University adopts a comprehensive sustainability strategy that aligns with and contributes to various SDGs, including environmental protection, social equity, and economic development.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg border-b pb-2">Campus-wide Infrastructure</h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                            <li>Energy-efficient buildings and green roofs</li>
                            <li>Solar panels and Biogas plant for effective waste utilization</li>
                            <li>Sustainable transportation (cycling, electric vehicles)</li>
                            <li>Interdisciplinary Sustainability Curriculum</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg border-b pb-2">Community & Research</h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                            <li>Collaboration with industry and government for research</li>
                            <li>Community engagement via IEEE Student Branch & UBA</li>
                            <li>Sustainable procurement practices</li>
                            <li>Regular Health and Well-being programs for staff/students</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "nges-mou",
        label: "MoU with NGES",
        content: (
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">MoU Signed with New Gurukul Education Society (NGES)</h3>
                <p className="text-gray-700 leading-relaxed">
                    This strategic partnership focuses on enhancing educational reach and quality through collaborative programs, faculty exchange, and resource sharing. NGES and Kalinga University work together to bridge the gap between academic theory and practical application.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-3">Key Focus Areas:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 list-disc pl-5">
                        <li>Joint Skill Development Workshops</li>
                        <li>Teacher Training Programs</li>
                        <li>Resource Center Access</li>
                        <li>Student Counseling & Support</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: "yash-foundation",
        label: "MoU with Yash Foundation",
        content: (
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">MoU Signed with Yash Foundation, Ahmednagar, Maharashtra (NGO)</h3>
                <p className="text-gray-700 leading-relaxed">
                    A collaborative initiative aimed at social welfare, community health, and rural development. This MoU facilitates student involvement in NGO activities, providing them with real-world exposure to social challenges.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold mb-3">Activities Under Partnership:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 list-disc pl-5">
                        <li>Community Health Camps</li>
                        <li>Social Awareness Drives</li>
                        <li>Rural Internship Opportunities</li>
                        <li>Vocational Training Support</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: "uba-success",
        label: "UBA Success Story",
        content: (
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">Unnat Bharat Abhiyan - Success Story</h3>
                <p className="text-gray-700 leading-relaxed">
                    Kalinga University's adoption of six villages under the Unnat Bharat Abhiyan (UBA) scheme has led to significant transformational changes in rural development processes.
                </p>
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg border-b pb-2">Impact Highlights:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-blue-600">319</span>
                            <span className="text-xs text-blue-800">Houses Surveyed</span>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-green-600">6</span>
                            <span className="text-xs text-green-800">Adopted Villages</span>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-orange-600">$1000</span>
                            <span className="text-xs text-orange-800">IEEE Grant Received</span>
                        </div>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                        <li>Infrastructure development in Government Schools (Green Boards, Furniture, etc.)</li>
                        <li>Household surveys identifying real-world needs of villagers</li>
                        <li>Smart Garbage Monitoring System implemented via IEEE Student Branch</li>
                    </ul>
                </div>
            </div>
        )
    }
];

const newsletterAndReportsData = [
    {
        id: "Mindroid-IEEE",
        question: "Mindroid IEEE KU SB",
        answer: (
            <div className="space-y-4">
                <p className="text-gray-600 mb-4">Official newsletter showcasing legal research, student achievements, and faculty contributions.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { title: "VOLUME 4, ISSUE 2 (July 2025 - December 2025)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/ED9A19_1.pdf" },
                        { title: "VOLUME 4, ISSUE 1 (January 2025 - June 2025)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/EDE9D1_1.pdf" },
                        { title: "VOLUME 3, ISSUE 2 (July 2024 - December 2024)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/EDFFA0_1.pdf" },
                        { title: "Volume 2, Issue II (July 2023 - December 2023)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/EDITIO_3.pdf" },
                        { title: "Volume 2, Issue 1 ( January 2023 - June 2023 )", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/EDITIO_2.pdf" },
                        { title: "Volume 1, Issue 2 ( October 2022 - December 2022 )", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/EDITIO_1.pdf" },
                        { title: "VOLUME I, ISSUE I (April 2022 - September 2022)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/EDD548_1.pdf" },
                        { title: "Volume 3, Issue - I", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/EDITIO_4.pdf" }
                    ].map((issue, idx) => (
                        <a href={issue.url} target="_blank" rel="noopener noreferrer" key={idx} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:border-[var(--button-red)]/30 transition-colors cursor-pointer group">
                            <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center text-[var(--button-red)] group-hover:bg-[var(--button-red)] group-hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">{issue.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: "Vidhi-Lekh",
        question: "Vidhi Lekh Newsletter",
        answer: (
            <div className="space-y-4">
                <p className="text-gray-600 mb-4">Newsletter focusing on social justice, legal aid, and community outreach initiatives.</p>
                <div className="space-y-2">
                    {[
                        { title: "Newsletter of Probono Club under the Faculty of Law", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/VIA50D_1.pdf" },
                        { title: "Newsletter of Probono Club under the Faculty of Law | Issue No. 6 | February 2024", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/VIDHI__1.pdf" },
                        { title: "Newsletter of Probono Club under the Faculty of Law | Issue No. 5 | November 2023", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/VIDHI__2.pdf" },
                        { title: "Newsletter of Probono Club under the Faculty of Law | Issue No. 4 | August 2023", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/VIDHI__3.pdf" },
                        { title: "Newsletter of Probono Club under the Faculty of Law | Issue No. 3 | May 2023", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/VIDHI__4.pdf" },
                        { title: "Newsletter of Probono Club under the Faculty of Law | Issue No. 2 | February 2023", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/VIF0E3_1.pdf" }
                    ].map((issue, idx) => (
                        <a href={issue.url} target="_blank" rel="noopener noreferrer" key={idx} className="p-3 bg-white border border-gray-100 rounded-lg hover:shadow-sm transition-all cursor-pointer flex justify-between items-center group">
                            <span className="text-sm text-gray-700">{issue.title}</span>
                            <span className="text-[var(--button-red)] opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                    ))}
                </div>
            </div>
        )
    }
];

const detailedEventReports = [
    { title: "2nd Alumni Meet (Raipur Chapter)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/2nd-Alumni-Meet-2022.docx.pdf" },
    { title: "Two-Week Online Faculty Development Programme (FDP) On Emerging Trends in Research and Innovative Teaching Pedagogy", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/02WEEK_1.PDF" },
    { title: "3rd Alumni Meet (Raipur Chapter)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/3rd-Alumni-Meet-2023.docx.pdf" },
    { title: "Two-Week Online Faculty Development Programme (FDP) On Emerging Trends in Research and Innovative Teaching Pedagogy", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/3RDINT_1.PDF" },
    { title: "7-Day Online Faculty Development Programme (FDP)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/7DAYSO.pdf" },
    { title: "Alumni Talk – Pathways to Success: Alumni Share their Journey", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Alumni+Talk+2024.docx.pdf" },
    { title: "Guest Lecture On “Lean Start Up & Minimum Viable Product / Business Boot Camp or Mentoring Session”", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/BUSINE_1.pdf" },
    { title: "Capacity Building Workshop on “Techniques of Forensic Evidences in Crime Scene Investigation and New Criminal Laws”", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/CAPACI_1.PDF" },
    { title: "Jail Visit for Law Students (Industrial Visit)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Central+Jail+Visit+at+Raipur.docx.pdf" },
    { title: "Trainers’ Training Certification Course on RTI Act, 2005", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/CERTIF_1.PDF" },
    { title: "6 Days Online Certificate Course on Legal Drafting and Contract Drafting", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/CERTIF_2.PDF" },
    { title: "IDEATHON 5.0", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/COLLAB_1.PDF" },
    { title: "The 76th Year of the Indian Constitution Day Celebration With a Focus on “Dignity Beyond Text: POSH as an Instrument to Enforce Article 14 & 15 of the Constitution of India”", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Constitution-Day-Report-2025.docx.pdf" },
    { title: "Bhoomi-Club Donation Drive (From 10th September to 16th October, 2025)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/DONATI_1.pdf" },
    { title: "Engineers Day Celebration", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Engineers-Day-Celebration_2025.pdf" },
    { title: "Tourism Treasure Hunt 2025", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Eventon-World-Tourism-Day.pdf" },
    { title: "Open Mic: Youth Voices “A celebration of youth expression and empowerment”", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/EVENTR.pdf" },
    { title: "Global Conference on Cyber Violence and Digital Deception: Undertaking, Preventing and Responding to Technology Facilitated Crimes", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/GLOBAL_1.PDF" },
    { title: "One-Day Industrial Visit to Gangrel Dam, Dhamtari", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/IN1EB5_1.pdf" },
    { title: "ONE-DAY INDUSTRIAL VISIT” To 9M India Limited", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/INA945_1.PDF" },
    { title: "Industrial visit (Lord India Pvt. Ltd.)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/INDUST_1.pdf" },
    { title: "Industrial Visit – Marble Center India, Abhanpur", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/INDUST_2.pdf" },
    { title: "An Industrial Visit to Parle G Plant in Raipur", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/INDUST_3.pdf" },
    { title: "Industrial Visit to VNR SEEDS PVT. LTD.", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/INDUST_4.pdf" },
    { title: "Industrial Visit to Yasham Software Development Center", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Industrial+Visit+at+Yasham+Software.pdf" },
    { title: "IEEE 3rd International World Conference on Communication & Computing 2025", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Int.+Conference+-+IEEE+WCONF+2025.pdf" },
    { title: "IEEE 2nd International World Conference on Communication & Computing 2024", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Int-Conference-IEEE-WCONF-2024.pdf" },
    { title: "2nd International Conference on Chhattisgarh@2047: Transforming Education through Sustainability Innovation Inclusion & Indian Knowledge System", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/INTCON_1.pdf" },
    { title: "ICSTDTSD 2025", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/INTERN_1.PDF" },
    { title: "International Conference SciSustain 2025: Fostering Sustainable Development Through Interdisciplinary Scientific Research", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/INTERN_2.pdf" },
    { title: "Legal Aid Activity On Legal Awareness regarding Domestic Safety & Avoidance of Violence", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Legal-Aid-Activity.docx.pdf" },
    { title: "Surana & Surana Judex 3.0 Human Rights Law Moot Court competition, 2025", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Moot-Court-Competition-2025.docx.pdf" },
    { title: "National Conference on Sustainable Futures: Culture, Society and Governance in Transition", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/NATION_1.pdf" },
    { title: "National Seminar on From Vachanas to Vision: Mahatma Basaveshwara’s Ideas in Contemporary Society", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/NATION_2.pdf" },
    { title: "“Nukkad Natak Event”", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/NUKKAD_1.PDF" },
    { title: "Quiz Competition On “Indian Standard”", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/QUIZCO.pdf" },
    { title: "Report on Startup India Delegation Visit and Ideathon Awareness Session", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Startup+India+Delegation+Visit.pdf" },
    { title: "A Session on Startup Summit: Demo Day/Exhibition of Startups & Linkage with Innovation Ambassadors/Experts for Mentorship Support", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Startup-Summit-under-IIC-2025.pdf" },
    { title: "A Training Report on The Entrepreneurship Development Institute of India - EDII", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/TRAINI.pdf" },
    { title: "Guest Lecture on Innovation/Prototype Validation – Converting Innovation into a Start-up", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/Under-IIC-Activity-Guest-Lecture.pdf" },
    { title: "Donation Drive: Donate to Make a Difference (under Unnat Bharat Abhiyan)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/UNNATB_1.PDF" },
    { title: "A Report of “Workshop on Best out of Waste”", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/WORKSH_1.PDF" }
].map((report, idx) => ({
    id: idx + 1,
    text: report.title,
    url: report.url
}));

const buttons = [
    {
        id: 1,
        text: "Kalinga Buzz July 2019",
        href: "https://cdn.kalingauniversity.ac.in/buzz/July+2019.pdf",
    },
    {
        id: 2,
        text: "Kalinga Buzz August 2019",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Aug+2019.pdf",
    },
    {
        id: 3,
        text: "Kalinga Buzz September 2019",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Sep+2019.pdf",
    },
    {
        id: 4,
        text: "Kalinga Buzz October 2019",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Oct+2019.pdf",
    },
    {
        id: 5,
        text: "Kalinga Buzz November 2019",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Nov+2019.pdf",
    },
    {
        id: 6,
        text: "Kalinga Buzz December 2019",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Dec+2019.pdf",
    },
];

const buttons2 = [
    {
        id: 1,
        text: "Kalinga Buzz January 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+Jan+2020.pdf",
    },
    {
        id: 2,
        text: "Kalinga Buzz February 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+Feb+2020.pdf",
    },
    {
        id: 3,
        text: "Kalinga Buzz March 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+March+2020.pdf",
    },
    {
        id: 4,
        text: "Kalinga Buzz April 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+April+2020.pdf",
    },
    {
        id: 5,
        text: "Kalinga Buzz May 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+May+2020.pdf",
    },
    {
        id: 6,
        text: "Kalinga Buzz June 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+June+2020.pdf",
    },
    {
        id: 7,
        text: "Kalinga Buzz July 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+July+2020.pdf",
    },
    {
        id: 8,
        text: "Kalinga Buzz September 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+September+2020.pdf",
    },
    {
        id: 10,
        text: "Kalinga Buzz November 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+November+2020.pdf",
    },
    {
        id: 11,
        text: "Kalinga Buzz December 2020",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+Dec+2020.pdf",
    },
];

const buttons3 = [
    {
        id: 1,
        text: "Kalinga Buzz January 2021",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+jan+2021.pdf",
    },
    {
        id: 2,
        text: "Kalinga Buzz February 2021",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+Feb+2021.pdf",
    },
    {
        id: 3,
        text: "Kalinga Buzz April 2021",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Kalinga+Buzz+april+2021.pdf",
    },

];

const buttons4 = [
    {
        id: 1,
        text: "Kalinga Buzz January 2025",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+January+2025.pdf",
    },
    {
        id: 2,
        text: "Kalinga Buzz February 2025",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+February+2025.pdf",
    },
    {
        id: 3,
        text: "Kalinga Buzz March 2025",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+March+2025.pdf",
    },
    {
        id: 4,
        text: "Kalinga Buzz April 2025",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+April+2025.pdf",
    },
    {
        id: 5,
        text: "Kalinga Buzz May 2025",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+May+2025.pdf",
    },
    {
        id: 6,
        text: "Kalinga Buzz June 2025",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+June+2025.pdf",
    },
    {
        id: 8,
        text: "Kalinga Buzz August 2025",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+August+2025.pdf",
    },
    {
        id: 10,
        text: "Kalinga Buzz October 2025",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+October+2025.pdf",
    },
    {
        id: 11,
        text: "Kalinga Buzz November 2025",
        href: "https://cdn.kalingauniversity.ac.in/buzz/Buzz+November+2025.pdf",
    }
];


export default function PartnershipsForTheGoalsPage() {
    return (
        <>
            <MainIntro
                title={mainIntroContent.title}
                description={mainIntroContent.description}
                imageUrl={mainIntroContent.imageUrl}
                imageAlt={mainIntroContent.imageAlt}
                showKnowMore={true}
                initialCharacterLimit={300}
                sectionClassName="bg-white"
            />
            <FAQ
                items={items}
                title=""
                showHeading={false}
                variant="default"
                pyClassName="py-8"
            />
            <SectionHeading title="Our Initiatives" titleClassName="text-center mt-10" />
            <div className="mt-4">
                <Campusfacilitiescard
                    title=""
                    cards={cards}
                    showKnowMore={false}
                    titleClassName="hidden"
                />
            </div>
            {/* 
            <MainIntro
                title={mainIntroContent1.title}
                description={mainIntroContent1.description}
                imageUrl={mainIntroContent1.imageUrl}
                imageAlt={mainIntroContent1.imageAlt}
                showKnowMore={false}
                sectionClassName="bg-white"
            /> */}
            <PhdObjectivesPanel
                title="University-Led Initiatives on Sustainable Communities & Partnerships through Collaborative Programs"
                subtitle=""
                imageSrc="https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/chart-16.webp"
                phdObjectives={phdObjectives}
            />
            <div className="container mx-auto mt-16 px-4">
                {/* <SectionHeading
                    title="Tie-ups with Hospitals (MoU)"
                    description="The University has signed MoUs with renowned hospitals to ensure advanced medical treatment and support for students and staff."
                    titleClassName="text-center"
                /> */}
                {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
                    {hospitalMoUs.map((hospital) => (
                        <QuickLinkCard
                            key={hospital.id}
                            title={hospital.text}
                            description="Official Memorandum of Understanding for healthcare services and medical support."
                            showReadMore={false}
                            descriptionContainerClassName=""
                            href={hospital.url}
                            fullCardLink={hospital.url !== "#"}
                        />
                    ))}
            </div> */}
            </div >

            <div className="mt-10">
                <SectionHeading
                    title="Sustainable Communities & Partnerships Reports"
                    description=""
                    titleClassName="text-center"
                />
            </div>
            <ResearchSixGridButtons
                buttons={eventReports}
            />

            {/* <div className="container mx-auto mt-20 px-4">
                <SectionHeading
                    title="Best Practices & Strategic Partnerships"
                    description="Kalinga University engages in impactful collaborations that drive social, environmental, and educational transformation."
                    titleClassName="text-center"
                />
                <div className="mt-10">
                    <VerticalTabs
                        tabs={bestPracticesTabs}
                        defaultTabId="women-empowerment"
                    />
                </div>
            </div> */}

            <div className="container mx-auto mt-20 px-4">
                <SectionHeading
                    title="Magazines & Newsletters"
                    description=""
                    titleClassName="text-center"
                />
                <div className="mt-10">
                    <FAQ
                        items={newsletterAndReportsData}
                        showHeading={false}
                        variant="table-display"
                        pyClassName="py-0"
                    />
                </div>

                <div className="mt-10">
                    <SectionHeading
                        title="Kalinga Buzz"
                        description=""
                        titleClassName="text-center mt-10 mb-8"
                    />
                    <KalingaBuzzTabs
                        year2025={buttons4}
                        year2021={buttons3}
                        year2020={buttons2}
                        year2019={buttons}
                    />
                </div>
            </div>

            <div className="mt-10">
                <SectionHeading
                    title="Events and Reports"
                    description=""
                    titleClassName="text-center"
                />
            </div>
            <ResearchSixGridButtons
                buttons={detailedEventReports}
            />

            <CustomGallery
                images={galleryImages}
                title="Glimpses of Our Partnerships for the Goals Activities"
            />
        </>
    );
}