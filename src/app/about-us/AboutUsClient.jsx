"use client";

import AboutHero from "../components/about/AboutHero";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import WhoWeAre from "../components/about/who_we_are";
import OurJourney from "../components/about/our_journey";
import CenterOfExcellence from "../components/about/center_of_excellence";
import Leadership from "../components/about/leadership";
import Facility from "../components/admissions/facility";
import AccreditationRanking from "../components/home/AccreditationRanking";
import AdmissionCareer from "../components/general/admission_cta";
import FeatureCards from "../components/home/featurecard";
import AwardsScrollbar from "../components/home/awards-scrollbar";
import Map from "../components/home/global_presence-new";
import CoreValues from "../components/about/core_values";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import AdmissionSteps from "../components/admissions/admission-steps";
import VisionMissionUpdated from "../components/about/vision-mission-updated";

const aboutFaqData = [
    {
        id: 1,
        title: "Academic Council",
        columns: [
            { key: "slNo", label: "S. No.", width: "w-20" },
            { key: "member", label: "Members", width: "flex-1" }
        ],
        data: [
            { slNo: 1, member: "Vice-Chancellor, Kalinga University – Chairman of the Committee" },
            { slNo: 2, member: "Deans of Eight Faculty - Members" },
            { slNo: 3, member: "All Professors of the University Teaching Department - Members" },
            { slNo: 4, member: "Three Professors of the State/Central Universities / IITs nominated by the Chancellor - Members" },
            { slNo: 5, member: "Three representatives from amongst the Scientists/Educationalists/Technologists/Industrialists nominated by the Chancellor - Members" }
        ]
    },
    {
        id: 3,
        title: "Board Of Management",
        columns: [
            { key: "slNo", label: "S. No.", width: "w-20" },
            { key: "member", label: "Members", width: "flex-1" }
        ],
        data: [
            { slNo: 1, member: "Chairman of the Committee - Vice-Chancellor, Kalinga University" },
            { slNo: 2, member: "One Member - Nominated by Hon’ble Governor of CG" },
            { slNo: 3, member: "Three Members- Nominated by Sponsoring Body" },
            { slNo: 4, member: "Member Secretary - Registrar, Kalinga University" }
        ]
    },
    {
        id: 2,
        title: "Governing Body",
        columns: [
            { key: "slNo", label: "S. No.", width: "w-20" },
            { key: "body", label: "List Of Governing Body", width: "flex-1" }
        ],
        data: [
            { slNo: 1, body: "Chairman of the Committee - Chancellor, Kalinga University" },
            { slNo: 2, body: "Member - Vice-Chancellor, Kalinga University" },
            { slNo: 3, body: "Three Members - Nominated by the Honourable Governor of CG" },
            { slNo: 4, body: "Two Members - Nominated by the Sponsoring Body" },
            { slNo: 5, body: "Member Secretary - Registrar, Kalinga University" }
        ]
    }
];

const aboutFeatureCards = [
    {
        id: 1,
        title: 'Industry-Relevant Curriculum',
        body: 'Our curriculum is aligned with the New Education Policy 2020. All our educational programs match industry standards that equip our students with essential practical skills and updated industrial knowledge.',
        image: 'https://cdn.kalingauniversity.ac.in/icons/Industry-Relevant+Curriculum.svg',
        variant: 'gray',
    },
    {
        id: 2,
        title: 'Extensive Research Facilities',
        body: 'With 90 + Labs, including IT Labs and CIF labs, we’re Chhattisgarh’s No. 1 institute, committed to innovation and groundbreaking research facilities.',
        image: 'https://cdn.kalingauniversity.ac.in/icons/Extensive+Research+Facilities.svg',
        variant: 'amber',
    },
    {
        id: 3,
        title: 'Experienced Faculties',
        body: 'Learn from highly experienced professors of KU who are from across India and abroad. Their expertise helps students become future leaders.',
        image: 'https://cdn.kalingauniversity.ac.in/icons/Experienced+Faculties.svg',
        variant: 'gray',
    },
    {
        id: 4,
        title: 'Our Flagship Events',
        body: 'Every year, we organise memorable events and competitions where students showcase their creativity and talent and win amazing prizes.',
        image: 'https://cdn.kalingauniversity.ac.in/icons/Flagship+Events.svg',
        variant: 'amber',
    },
    {
        id: 5,
        title: 'Internships & Industrial Visits',
        body: 'All Kalinga University students are provided with internship opportunities and are encouraged to work on practical projects and visit industrial sites.',
        image: 'https://cdn.kalingauniversity.ac.in/icons/international.svg',
        variant: 'gray',
    },
];

const aboutAccreditations = [
    { id: 4, name: "Outlook", logo: "https://cdn.kalingauniversity.ac.in/Home/outlook.webp" },
    { id: 5, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002974.png" },
    { id: 6, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002953.png" },
    { id: 7, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/accreditation/nirf-logo-new.jpeg" },
    { id: 8, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002976.png" },
    { id: 13, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002981.png" },
    { id: 14, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/logos/ieee.jpeg" },
    { id: 15, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/logos/uba.jpg" },
    { id: 16, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/logos/cii.png" },
    { id: 17, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/logos/nss.jpg" },
    { id: 18, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/logos/ncc.jpg" },
    { id: 19, name: "NIRF", logo: "https://cdn.kalingauniversity.ac.in/logos/ugc-2.png" },
];

const aboutApproval = [
    { id: 3, name: "UGC Grant", logo: "https://cdn.kalingauniversity.ac.in/Home/ugc.webp" },
    { id: 10, name: "NCTE", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002978.png" },
    { id: 12, name: "PCI", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/Group+1000002980.png" },
    { id: 12, name: "BCI", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/bci.webp" },
    { id: 12, name: "ACITE", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/acite.webp" },
    { id: 12, name: "CGG", logo: "https://cdn.kalingauniversity.ac.in/about/accerdation/cg-government.webp" },
];

const aboutQuickLinks = [
    {
        id: 1,
        title: "Student-First Approach",
        description: "Our students are always our top priority, and we are always committed to their well-being, growth, and success.",
    },
    {
        id: 2,
        title: "New-Age Programs",
        description: "Our next-gen programs, like Cinematography, Stock Market Trading, and Advanced IoT Applications.",
    },
    {
        id: 3,
        title: "Industry Aligned",
        description: "Curriculum aligned with NEP 2020 and industry standards to equip students with practical skills.",
    },
    {
        id: 4,
        title: "Research Excellence",
        description: "90+ state-of-the-art labs and SIRO recognition fostering a culture of innovation.",
    },
    {
        id: 5,
        title: "Global Exposure",
        description: "Students from 20+ countries and partnerships with international universities.",
    },
];

const universityAchievements = [
    {
        id: 1,
        stepNumber: "01",
        title: "2024-25",
        description: "NIRF Rank Band 101-150",
        backDescription: "Ranked among top 150 universities in India for the 4th consecutive year by NIRF.",
        image: "https://cdn.kalingauniversity.ac.in/common/step1.png",
    },
    {
        id: 2,
        stepNumber: "02",
        title: "2023-24",
        description: "SIRO Recognition",
        backDescription: "Recognized as a Scientific and Industrial Research Organization (SIRO) by DSIR.",
        image: "https://cdn.kalingauniversity.ac.in/common/step2.png",
    },
    {
        id: 3,
        stepNumber: "03",
        title: "2021-22",
        description: "NAAC B+ Accreditation",
        backDescription: "Accredited with B+ Grade by NAAC, reflecting our commitment to quality education.",
        image: "https://cdn.kalingauniversity.ac.in/common/step3.png",
    },
    {
        id: 4,
        stepNumber: "04",
        title: "2018-19",
        description: "Best Research University",
        backDescription: "Awarded Best University in Research & Innovation by Global Leaders Award.",
        image: "https://cdn.kalingauniversity.ac.in/common/step4.png",
    },
];

export default function AboutUsClient() {
    return (
        <div>
            <MainIntro
                title="Where Education and Purpose Align"
                subtitle="Overview of Kalinga"
                subtitleClassName="!text-blue"
                showReadMore={false}
                description={[
                    "Kalinga University, established in 2013, stands out as one of the leading private institutions that has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year. It has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education.",
                    "Kalinga University has students from across India and 29 + countries. It offers Diploma, Undergraduate, Postgraduate, and Doctoral programs in Arts and Humanities, Commerce and Management, Education, Information Technology, Law, Pharmacy, Science, and Technology."
                ]}
                imageUrl="https://cdn.kalingauniversity.ac.in/common/student.jpg"
                imageAlt="Kalinga University campus"
                showKnowMore={true}
                initialVisibleParagraphs={1}
            />
            <AccreditationRanking
                id="accreditations-approvals"
                heading="Accreditations & Associations"
                accreditations={aboutAccreditations}
            />
            <CoreValues />
            <VisionMissionUpdated id="vision-mission" />
            <WhoWeAre id="who-we-are" />
            <Leadership />
            <AccreditationRanking
                heading="Approvals & Recognitions"
                accreditations={aboutApproval}
            />
            <OurJourney />
            <CenterOfExcellence />
            <QuickLinks
                slider={true}
                links={aboutQuickLinks}
                title="What makes us Unique"
                description="At KU, you will get to explore more than just academics."
            />
            <AwardsScrollbar id="awards-accolades" />
            <FeatureCards
                title="Discover Kalinga Advantage"
                subtitle="Best Private University In India"
                cards={aboutFeatureCards}
                imageUrl="https://cdn.kalingauniversity.ac.in/common/student.jpg"
            />
            <AdmissionSteps
                steps={universityAchievements}
                title="University Achievements"
                showHeaderButton={false}
                showReadMore={true}
                showIcon={false}
            />
            <Facility />
            <Map />
            <FAQ variant="table-display" tableSections={aboutFaqData} items={[]} title="Governance Structure" id="governance-structure" />
            <AdmissionCareer />
        </div>
    );
}
