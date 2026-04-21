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
                        { year: "2024-2025", activeInitiatives: "13", studentsPlantingTrees: "108", studentsOtherActions: "1433", studentsOutsideCampus: "4", eventsSeminars: "29" },
                        { year: "2023-2024", activeInitiatives: "16", studentsPlantingTrees: "394", studentsOtherActions: "1426", studentsOutsideCampus: "9", eventsSeminars: "30" },
                        { year: "2022-2023", activeInitiatives: "10", studentsPlantingTrees: "394", studentsOtherActions: "1264", studentsOutsideCampus: "6", eventsSeminars: "32" }
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
    { id: 1, text: "Model/Poster Exhibition on World Mental Health Day", url: "#" },
    { id: 2, text: "Guest Lecture on “Development of New Vaccines and Variants in Indian Poultry Diseases”", url: "#" },
    { id: 3, text: "Guest Lecture on Mental Health and Well-Being of Students and Teachers", url: "#" },
    { id: 4, text: "Industrial Visit to AIIMS Raipur", url: "#" },
    { id: 5, text: "Emerging Perspectives and Future Trends in Pharmaceuticals and Allied Sciences for Global Health and Well-being", url: "#" },
    { id: 6, text: "International Yoga Day", url: "#" },
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
            <div className="mt-10">
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
                <SectionHeading
                    title="Tie-ups with Hospitals (MoU)"
                    description="The University has signed MoUs with renowned hospitals to ensure advanced medical treatment and support for students and staff."
                    titleClassName="text-center"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
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
                </div>
            </div>

            <div className="mt-10">
                <SectionHeading
                    title="Event Reports"
                    description=""
                    titleClassName="text-center"
                />
            </div>
            <ResearchSixGridButtons
                buttons={eventReports}
            />

            <CustomGallery
                images={galleryImages}
                title="Glimpses of Our Partnerships for the Goals Activities"
            />
        </>
    );
}