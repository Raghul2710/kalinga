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
    title: "Sustainable Initiatives for a Green Campus",
    description: [
        "To promote sustainability and environmental responsibility, the University is taking various green initiatives and contributing towards various United Nations Sustainable Development Goals (SDGs), particularly SDG 7 (Affordable and Clean Energy), SDG 11 (Sustainable Cities and Communities), SDG 13 (Climate Action), and SDG 15 (Life on Land).",
        "The campus features a green landscape that supports ecological balance and biodiversity, pedestrian-friendly pathways, and the use of sustainable modes of transportation like bicycles and e-vehicles. Solar panels and LED lights installed in different buildings reduce electricity consumption and promote the usage of renewable sources of energy. Various outreach activities, environmental-focused projects, and research initiatives build awareness among students and staff. ",
    ],
    imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-7.webp",
    imageAlt: "Sustainable Communities & Partnership",
};
const mainIntroContent1 = {
    title: "Our Approach to Sustainability",
    description: [
        "As a leading higher education institution, Kalinga University embraces the responsibility of contributing towards the SDGs through its core mission of education, research, and innovation. The university integrates sustainability principles into its academic programs, encouraging students to think critically, act responsibly, and develop solutions for local and global challenges. By promoting community engagement, interdisciplinary learning, and collaborative research, Kalinga University aims to create future-ready leaders who can drive positive change and support the realisation of the Sustainable Development Goals.",
        "It promotes sustainability through a holistic and collaborative approach that includes:"
    ],
    points: [
        <><strong className="text-[var(--foreground)]">Academic Integration:</strong> Incorporating Sustainable Development Goals and their principles into the curriculum, teaching, and research activities.</>,
        <><strong className="text-[var(--foreground)]">Interdisciplinary Learning:</strong> Encouraging students to address global and local challenges through innovative and problem-solving approaches.</>,
        <><strong className="text-[var(--foreground)]">Research and Innovation:</strong> Supporting research initiatives that contribute to sustainable development and responsible environmental practices.</>,
        <><strong className="text-[var(--foreground)]">Collaborative Partnerships:</strong> Collaborating with industries, government institutions, and community partners for knowledge exchange and developing impactful solutions.</>,
        <><strong className="text-[var(--foreground)]">Sustainable Campus Management:</strong> Implementing eco-friendly practices that support environmental protection and responsible resource management.</>
    ],
    imageUrl: "https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/images-2.png",
    imageAlt: "Our Approach to Sustainability",
};

const items = [
    {
        question: "Green Coverage Details",
        component: (
            <div className="w-full mt-4">
                <DataTable
                    columns={[
                        { key: "year", label: "Financial Year", widthPx: 120 },
                        { key: "campusLand", label: "Total Campus Land Area", widthPx: 200 },
                        { key: "greenCovered", label: "Approximate Green-Covered Area Within the Campus (includes lawn, trees, and hedges)", widthPx: 300 },
                        { key: "matureTrees", label: "Approximate Number of Mature Trees on the Campus (older than 10 years)", widthPx: 250 },
                        { key: "saplings", label: "Number of Saplings Planted this Year (within and outside the campus)", widthPx: 250 }
                    ]}
                    data={[
                        { year: "Unit", campusLand: "(Acres)", greenCovered: "(Acres)", matureTrees: "(Number)", saplings: "(Number)" },
                        { year: "2024-2025", campusLand: "45.000", greenCovered: "20.000", matureTrees: "7520", saplings: "7800" },
                        { year: "2023-2024", campusLand: "45.000", greenCovered: "20.000", matureTrees: "5130", saplings: "5260" },
                        { year: "2022-2023", campusLand: "34.000", greenCovered: "15.000", matureTrees: "4572", saplings: "2450" }
                    ]}
                    overflowX={true}
                    disableContainer={true}
                    className="shadow-none border border-gray-100"
                />
            </div>
        )
    }
];

const greenCoverageReports = [
    { id: 1, text: "Polythene Awareness Program", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Environmental+Awareness+Program+-+2021-22.pdf" },
    { id: 2, text: "Debate Competition/Group Discussion for Lifestyle for Environment (LiFE): Youth Parliament", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Environmental+Awareness+Program+-+2022-23.pdf" },
    { id: 3, text: "Paper Bag Distribution Campaign", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Environmental+Awareness+Program+-+2023-24+(1).pdf" },
    { id: 4, text: "Walkathon - Go Green with Olive Green", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Green+Initiatives_Jun.2024+-+Dec.2024.pdf" },
    { id: 5, text: "Tree Plantation by NSS Unit", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Green+Initiations+2022-23.pdf" },
    { id: 6, text: "Green Audit Report & Certificate (2020-2021)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Green+Audit+Report+%26+Certificate+-+2020-21+(1).pdf" },
    { id: 7, text: "Green Audit Report & Certificates (2023)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Green+Audit+Report+%26+Certificates+-+2023.pdf" },
    { id: 8, text: "Green Audit/Environmental Audit Manual", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/KU_Environment_Audit_Manual_ISO+14001.pdf" },
    { id: 9, text: "Members of the Green Audit Committee and Geotagged Photographs", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Green+Campus+Geotag+Photos.pdf" },
    { id: 10, text: "Policy Guidelines for Environmental Sustainability", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Policy+on+Environment+Sustainability.pdf" },
    { id: 11, text: "Best Practice 2 - Harmony in Action: Implementing Sustainable Development Goals for a Better World", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Best+Practice+2_Green+Coverage+(1)+(1).pdf" },
];

const eventReports = [
    { id: 1, text: "List of Plant Diversity", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Plant+Diversity+at+Kalinga+University.pdf" },
    { id: 2, text: "Plant Diversity of Kalinga University (Audited in August 2023)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Report+on+Plant+Diversity+of+Kalinga+University.pdf" },
    { id: 3, text: "Events Reports", url: "#" }
];

const eventsreportsnew = [
    { id: 1, text: "ESG & Sustainability Symposium", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Symposium+on+ESG+%26+Sustainablity.pdf" },
    { id: 2, text: "Wildlife Week Celebration", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Wildlife+Week+Celebration+2025+(1).pdf" },
    { id: 3, text: "Herbal Colour Making Workshop", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Workshop+on+Herbal+Colour+Making+2026.pdf" },
    { id: 4, text: "One-Day Workshop on Sustainable Gardening Practices: Role of Biofertilisers and Grafting", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Workshop+on+Sustainable+Gardening+Practices.pdf" },
    { id: 5, text: "World River Day", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/World+River+Day+Celebration+2025.pdf" },

];


const policyDocuments = [
    { id: 1, text: "Policy on ‘Tree Plantation and Green Cover Enhancement’ ", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/6-Policy-Tree-Plantation-and-Green-Cover-Enhancement.pdf" },
    { id: 2, text: "Policy on ‘Green Cover Protection & Management’ ", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/7-Policy-Green-Cover-Protection-Management.pdf" },
    { id: 3, text: "Policy on ‘Campus Beautification’ ", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/8-Policy-Campus-Beautification.pdf" },
    { id: 4, text: "Declaration on ‘Prevention of Tree Cutting’ ", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/10-Decleration-Prevention-Tree-Cutting.pdf" },
    { id: 5, text: "Office Order on SDG Policies ", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/Office-Order-on-SDG-Policies.pdf" },
];


const cards = [
    {
        title: "Use of Bicycles/Battery-Powered Vehicles",
        description:
            "The University strictly prohibits the entry of conventional automobiles inside the campus, and only eco-friendly vehicles, such as bicycles and battery-powered vehicles, are permitted. Students and staff members are also encouraged to use cycles for daily commuting within the campus. We have a dedicated centre of excellence - Eblu by Godawari Electric Motors Pvt. Ltd., where students learn the A-Z manufacturing and functioning of a wide range of EVs, including E-Auto, E-Cycle, E-Scooter, and E-Cargo vehicles, proving our commitment towards sustainability and innovation.",
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-1.webp",
        logoSrc: "",
        subtitle: "USE OF BICYCLES/BATTERY-POWERED VEHICLES",
        link: "#",
    },
    {
        title: "Pedestrian Friendly Pathways",
        description:
            "To promote sustainability, students, staff, and visitors can walk freely across the campus through well-planned pedestrian pathways. They are regularly maintained and bordered with lush green belts across academic blocks, administrative areas, hostels, and more. These pathways are designed to enhance the beauty of the campus while reducing the need for vehicles, thereby creating a pollution-free environment.",
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-2.webp",
        logoSrc: "",
        subtitle: "PEDESTRIAN FRIENDLY PATHWAYS",
        link: "#",
    },
    {
        title: "Landscaping with Trees and Plants",
        description:
            "The University has lush green areas and a systematic landscaping that includes native trees, shrubs, and ornamental plants. The beautifully designed gardens support biodiversity, creating a serene and peaceful academic environment. A regularly maintained pond supports the local ecosystem and also helps in groundwater recharge. Fountains and mist cooling systems are installed at different locations to create a refreshing atmosphere all around the campus. This proves our commitment to maintaining ecological balance and sustainability.",
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-3.webp",
        logoSrc: "",
        subtitle: "LANDSCAPING WITH TREES AND PLANTS",
        link: "#",
    },
    {
        title: "Energy Saving Initiatives",
        description:
            "Rooftop solar power systems are installed in different buildings to use renewable sources of energy and reduce dependence on conventional electricity. Sensor-based LED lights are installed in corridors and common areas to improve energy efficiency, and regular awareness programs are conducted on energy consumption. Further, in collaboration with the Skill Council for Green Jobs, the University is organising a Free Solar PV Installation Helper Training Program under the Green Jobs sector (NSQF Level 4).",
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-4.webp",
        logoSrc: "",
        subtitle: "ENERGY SAVING INITIATIVES",
        link: "#",
    },
    {
        title: "Plastic Free Campus",
        description:
            "To maintain a plastic-free environment, the University conducts regular awareness programs and campaigns to educate students and staff about the harmful effects of plastic usage on the environment. Banners, awareness posters, and signboards are displayed across the campus to discourage plastic usage and promote sustainable alternatives.",
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-5.webp",
        logoSrc: "",
        subtitle: "PLASTIC FREE CAMPUS",
        link: "#",
    },
    {
        title: "Activities to Promote Sustainable Initiatives for Green Campus",
        description: "Kalinga University, under its eight schools, has established different clubs to develop a sense of environmental responsibility among students and staff. These clubs conduct hands-on training programs, seminars, workshops, poster making and painting competitions, science model exhibitions, guest lectures, expert talks, and debates on topics related to environmental sustainability and climate action. Students get practical exposure through various educational trips and field visits, and the NSS team organises tree-planting drives and cleanliness campaigns.",
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-6.webp",
        logoSrc: "",
        subtitle: "ACTIVITIES TO PROMOTE SUSTAINABLE INITIATIVES",
        link: "#",
    }
];

const phdObjectives = [
    {
        item: "Awareness Programs"
    },
    {
        item: "Guest Lectures by Experts"
    },
    {
        item: "National and International Seminars/Symposium"
    },
    {
        item: "Workshops and Training Programs"
    },
    {
        item: "Conferences and Academic Events"
    },
    {
        item: "Community Outreach and Engagement Activities"
    }
];

const sustainableActivitiesObjectives = [
    { item: "Ek Ped Maa Ke Naam - A Tree Plantation & Environmental Awareness Drive" },
    { item: "Pledge on Tobacco-Free Campus, State, and India" },
    { item: "Eco Vision: Expressing Environment & Climate Change through Faces/ Henna/Posters Competition" },
    { item: "Walkathon: Go Green with Olive Green" },
    { item: "Green Army, Lions Club Friends, and Unnat Bharat Abhiyan are organising a Tree Plantation Drive" },
    { item: "Tree Plantation, by NSS Unit at Anganwadi School, Kotni" },
    { item: "Pollution Awareness Program" },
    { item: "Workshop on Herbal Colour Making" },
    { item: "International Conference SCISUSTAIN 2025: Fostering Sustainable Development Through Interdisciplinary Scientific Research" },
    { item: "Workshop on Sustainable Gardening Practices: Role of Biofertilizers and Grafting" },
    { item: "ESG & Sustainability Symposium" }
];

const galleryImages = [
    { id: 1, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-1.webp", alt: "Sustainable Campus Initiative 1" },
    { id: 2, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-2.webp", alt: "Sustainable Campus Initiative 2" },
    { id: 3, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-3.webp", alt: "Sustainable Campus Initiative 3" },
    { id: 4, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-4.webp", alt: "Sustainable Campus Initiative 4" },
    { id: 5, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-5.webp", alt: "Sustainable Campus Initiative 5" },
    // { id: 7, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-7.webp", alt: "Sustainable Campus Initiative 7" },
    // { id: 8, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-8.webp", alt: "Sustainable Campus Initiative 8" },
    // { id: 9, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-9.webp", alt: "Sustainable Campus Initiative 9" },
];


export default function GreenCampusPage() {
    return (
        <>
            <MainIntro
                title={mainIntroContent.title}
                description={mainIntroContent.description}
                imageUrl={mainIntroContent.imageUrl}
                imageAlt={mainIntroContent.imageAlt}
                showKnowMore={false}
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
            <PhdObjectivesPanel
                title="some of the program include :"
                subtitle="Kalinga University has established different clubs to develop a sense of environmental responsibility among students and staff. Some of the programs include:"
                imageSrc="https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-6.webp"
                phdObjectives={sustainableActivitiesObjectives}
            />

            <MainIntro
                title={mainIntroContent1.title}
                description={mainIntroContent1.description}
                points={mainIntroContent1.points}
                imageUrl={mainIntroContent1.imageUrl}
                imageAlt={mainIntroContent1.imageAlt}
                showKnowMore={true}
                hidePointsUntilExpanded={true}
                sectionClassName="bg-white pb-16 md:pb-24"
            />
            <PhdObjectivesPanel
                title="Awareness and Capacity Building"
                subtitle="To promote awareness and active participation among students and staff, the University regularly organises:"
                imageSrc="https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/partnerships-for-the-goals/image-g-8.webp"
                phdObjectives={phdObjectives}
                subtitle1="Through these initiatives, Kalinga University aims to develop responsible citizens, future leaders, and innovators who support a greener and sustainable future."
            />

            <div className="container mx-auto mt-16 px-4">
                <SectionHeading
                    title="Green Coverage Reports & Policies"
                    description=""
                    titleClassName="text-center"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
                    {greenCoverageReports.map((report) => (
                        <QuickLinkCard
                            key={report.id}
                            title={report.text}
                            description=""
                            showReadMore={false}
                            descriptionContainerClassName=""
                            href={report.url}
                            fullCardLink={report.url !== "#"}
                        />
                    ))}
                </div>
            </div>

            {/* <div className="mt-10">
                <SectionHeading
                    title="Plant Diversity at Kalinga University"
                    description=""
                    titleClassName="text-center"
                />
            </div>
            <ResearchSixGridButtons
                buttons={eventReports}
            /> */}
            <div className="mt-10">
                <SectionHeading
                    title="Events Reports"
                    description=""
                    titleClassName="text-center"
                />
            </div>
            <ResearchSixGridButtons
                buttons={eventsreportsnew}
            />
            <div className="mt-10">
                <SectionHeading
                    title="Policies and Office Orders"
                    description=""
                    titleClassName="text-center"
                />
            </div>
            <ResearchSixGridButtons
                buttons={policyDocuments}
            />

            <CustomGallery
                images={galleryImages}
                title="Glimpses of Our Sustainable Campus Initiatives"
            />
        </>
    );
}