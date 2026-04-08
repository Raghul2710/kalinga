"use client";

import { useState, useEffect, useMemo } from "react";
import MainIntro from "@/app/components/about/main_intro";
import PhdObjectivesPanel from "@/app/components/phd/phd-objectives";
import Campusfacilitiescard from "@/app/components/campus-facilities/campusfacilitiescard";
import FAQ from "@/app/components/general/faq";
import DataTable from "@/app/components/general/data-table";

const mainIntroContent = {
    title: "Sustainable Initiatives for a Green Campus",
    description: [
        "To promote sustainability and environmental responsibility, the University is taking various green initiatives and contributing towards various United Nations Sustainable Development Goals (SDGs), particularly SDG 7 (Affordable and Clean Energy), SDG 11 (Sustainable Cities and Communities), SDG 13 (Climate Action), and SDG 15 (Life on Land). The campus features a green landscape that supports ecological balance and biodiversity, pedestrian-friendly pathways, and the use of sustainable modes of transportation like bicycles and e-vehicles. Solar panels and LED lights installed in different buildings reduce electricity consumption and promote the usage of renewable sources of energy. Various outreach activities, environmental-focused projects, and research initiatives build awareness among students and staff."
    ],
    imageUrl: "https://cdn.kalingauniversity.ac.in/common/student.jpg",
    imageAlt: "Sustainable Initiatives for a Green Campus",
};

const phdObjectives = [
    {
        item: "Ek Ped Maa Ke Naam - A Tree Plantation & Environmental Awareness Drive"
    },
    {
        item: "Pledge on Tobacco-Free Campus, State, and India"
    },
    {
        item: "Eco Vision: Expressing Environment & Climate Change through Faces/ Henna/Posters Competition"
    },
    {
        item: "Walkathon: Go Green with Olive Green"
    },
    {
        item: "Green Army, Lions Club Friends, and Unnat Bharat Abhiyan are organising a Tree Plantation Drive"
    },
    {
        item: "Tree Plantation, by NSS Unit at Anganwadi School, Kotni"
    },
    {
        item: "Pollution Awareness Program"
    },
    {
        item: "Cleanliness Drive on the Occasion of Gandhi Jayanti"
    },
    {
        item: "Workshop on Herbal Colour Making"
    },
    {
        item: "International Conference SCISUSTAIN 2025: Fostering Sustainable Development Through Interdisciplinary Scientific Research"
    },
    {
        item: "Workshop on  Sustainable Gardening Practices: Role of Biofertilizers and Grafting"
    },
    {
        item: "ESG & Sustainability Symposium"
    }

];


const cards = [
    {
        title: "Use of Bicycles/Battery-Powered Vehicles",
        description:
            "The University strictly prohibits the entry of conventional automobiles inside the campus, and only eco-friendly vehicles, such as bicycles and battery-powered vehicles, are permitted. Students and staff members are also encouraged to use cycles for daily commuting within the campus. We have a dedicated centre of excellence - Eblu by Godawari Electric Motors Pvt. Ltd., where students learn the A-Z manufacturing and functioning of a wide range of EVs, including E-Auto, E-Cycle, E-Scooter, and E-Cargo vehicles, proving our commitment towards sustainability and innovation.",
        imageSrc:
            "https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-green-campus/battery-powered.webp",
        logoSrc: "",
        subtitle: "STUDENT ACCOMMODATION",
        link: "#",
    },
    {
        title: "Pedestrian Friendly Pathways",
        description:
            "To promote sustainability, students, staff, and visitors can walk freely across the campus through well-planned pedestrian pathways. They are regularly maintained and bordered with lush green belts across academic blocks, administrative areas, hostels, and more. These pathways are designed to enhance the beauty of the campus while reducing the need for vehicles, thereby creating a pollution-free environment.",
        imageSrc:
            "https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-green-campus/Pedestrian.webp",
        logoSrc: "",
        subtitle: "PEDESTRIAN FRIENDLY PATHWAYS",
        link: "#",
    },
    {
        title: "Landscaping with Trees and Plants",
        description:
            "The University has lush green areas and a systematic landscaping that includes native trees, shrubs, and ornamental plants. The beautifully designed gardens support biodiversity, creating a serene and peaceful academic environment. A regularly maintained pond supports the local ecosystem and also helps in groundwater recharge. Fountains and mist cooling systems are installed at different locations to create a refreshing atmosphere all around the campus. This proves our commitment to maintaining ecological balance and sustainability.",
        imageSrc:
            "https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-green-campus/Landscaping-1.webp",
        logoSrc: "",
        subtitle: "LANDSCAPING WITH TREES AND PLANTS",
    },
    {
        title: "Energy Saving Initiatives",
        description:
            "Rooftop solar power systems are installed in different buildings to use renewable sources of energy and reduce dependence on conventional electricity. Sensor-based LED lights are installed in corridors and common areas to improve energy efficiency, and regular awareness programs are conducted on energy consumption. Further, in collaboration with the Skill Council for Green Jobs, the University is organising a Free Solar PV Installation Helper Training Program under the Green Jobs sector (NSQF Level 4).",
        imageSrc:
            "https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-green-campus/solar.png",
        logoSrc: "",
        subtitle: "ENERGY SAVING INITIATIVES",
    },
    {
        title: "Plastic Free Campus",
        description:
            "To maintain a plastic-free environment, the University conducts regular awareness programs and campaigns to educate students and staff about the harmful effects of plastic usage on the environment. Banners, awareness posters, and signboards are displayed across the campus to discourage plastic usage and promote sustainable alternatives.",
        imageSrc:
            "https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-green-campus/plastic-free-campus.webp",
        logoSrc: "",
        subtitle: "PLASTIC FREE CAMPUS",
        link: "#",
    }
];

const items = [
    {
        question: "Our Approach to Sustainability",
        component: (
            <div className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                    As a leading higher education institution, Kalinga University embraces the responsibility of contributing towards the SDGs through its core mission of education, research, and innovation. The university integrates sustainability principles into its academic programs, encouraging students to think critically, act responsibly, and develop solutions for local and global challenges. By promoting community engagement, interdisciplinary learning, and collaborative research, Kalinga University aims to create future-ready leaders who can drive positive change and support the realisation of the Sustainable Development Goals. It promotes sustainability through a holistic and collaborative approach that includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed font-plus-jakarta-sans">
                    <li>Academic Integration: Incorporating Sustainable Development Goals and their principles into the curriculum, teaching, and research activities.</li>
                    <li>Interdisciplinary Learning: Encouraging students to address global and local challenges through innovative and problem-solving approaches.</li>
                    <li>Research and Innovation: Supporting research initiatives that contribute to sustainable development and responsible environmental practices.</li>
                    <li>Collaborative Partnerships: Collaborating with industries, government institutions, and community partners for knowledge exchange and developing impactful solutions.</li>
                    <li>Sustainable Campus Management: Implementing eco-friendly practices that support environmental protection and responsible resource management.</li>
                </ul>
            </div>
        )
    },
    {
        question: "Awareness and Capacity Building",
        component: (
            <div className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                    To promote awareness and active participation among students and staff, the University regularly organises:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
                    <li>Awareness Programs</li>
                    <li>Guest Lectures by Experts</li>
                    <li>National and International Seminars/Symposium</li>
                    <li>Workshops and Training Programs</li>
                    <li>Conferences and Academic Events</li>
                    <li>Community Outreach and Engagement Activities</li>

                </ul>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Through these initiatives, Kalinga University aims to develop responsible citizens, future leaders, and innovators who support a greener and sustainable future.
                </p>
            </div>
        )
    },
    {
        question: "Green Coverage Details",
        component: (
            <div className="w-full mt-4">
                <DataTable
                    columns={[
                        { key: "year", label: "Financial Year", widthPx: 140 },
                        { key: "totalArea", label: "Total Campus Land Area (Acres)", widthPx: 220 },
                        { key: "greenArea", label: "Approximate Green-Covered Area (Acres)", widthPx: 240 },
                        { key: "matureTrees", label: "Number of Mature Trees (>10 years)", widthPx: 240 },
                        { key: "saplings", label: "Saplings Planted this Year", widthPx: 200 }
                    ]}
                    data={[
                        { year: "2024-2025", totalArea: "45 +", greenArea: "20", matureTrees: "71520", saplings: "17800" },
                        { year: "2023-2024", totalArea: "45 +", greenArea: "20", matureTrees: "55130", saplings: "15260" },
                        { year: "2022-2023", totalArea: "33.98", greenArea: "10", matureTrees: "81572", saplings: "12450" }
                    ]}
                    overflowX={true}
                    disableContainer={true}
                    className="shadow-none border border-gray-100"
                />
            </div>
        )
    }
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
            <div className="mt-10">
                <Campusfacilitiescard
                    title=""
                    cards={cards}
                    showKnowMore={false}
                    titleClassName="hidden"
                />
            </div>
            <PhdObjectivesPanel
                title="Some of the programs include:"
                subtitle=""
                phdObjectives={phdObjectives}
            />
        </>
    );
}
