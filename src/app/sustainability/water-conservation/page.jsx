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
    title: "Water Conservation",
    description: [
        "In alignment with Sustainable Development Goal (SDG) 6: Clean Water and Sanitation, Kalinga University follows sustainable water management practices to conserve and utilise water resources through a combination of infrastructure-based and awareness-driven initiatives. A Sewage Treatment Plant is installed to treat wastewater that is used for gardening and landscape purposes. Drip irrigation systems are implemented across lawns, gardens, and green belts, reducing water wastage and promoting plant growth.",
        "In addition, rainwater harvesting and bore-well recharge systems restore groundwater and support long-term water availability. The University also conducts various water conservation awareness programs and conducts special activities on World Water Day. These measures not only conserve water resources but also encourage students and staff to become environmentally responsible."
    ],
    imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-g-2.webp",
    imageAlt: "Water Conservation",
};

const mainIntroContent1 = {
    title: "Water Conservation Awareness Programs at Kalinga University",
    description: [
        "Along with the above initiatives, Kalinga University also conducts various awareness programs throughout the year to promote responsible water management among students and staff. To highlight the significance of water conservation, the University organises various seminars, workshops, guest lectures, poster-making and slogan-writing competitions, and student-led campaigns.",
        "Special activities are held on World Water Day, including rallies, awareness drives, and pledge-taking ceremonies. Departments also arrange training sessions and discussions on water auditing and sustainable water practices."
    ],
    imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-g-3.webp",
    imageAlt: "Water Conservation Awareness Programs",
};

const items = [
    {
        question: "Water Management Details",
        component: (
            <div className="w-full mt-4">
                <DataTable
                    columns={[
                        { key: "year", label: "Financial Year", widthPx: 120 },
                        { key: "pumpsHP", label: "Total Horsepower of all Pumps Installed", widthPx: 200 },
                        { key: "rwhArea", label: "Total Rooftop Area connected to RWH", widthPx: 250 },
                        { key: "wastewaterReused", label: "Percentage of Wastewater Treated & Reused", widthPx: 220 },
                        { key: "totalTaps", label: "Total No. of Taps in the Campus", widthPx: 180 },
                        { key: "lowFlowTaps", label: "No. of Taps with Low-Flow Fixtures", widthPx: 180 },
                        { key: "totalRooftop", label: "Total Rooftop Area", widthPx: 180 }
                    ]}
                    data={[
                        { year: "Unit", pumpsHP: "HP", rwhArea: "Sq.ft", wastewaterReused: "%", totalTaps: "Number", lowFlowTaps: "Number", totalRooftop: "Sq.ft" },
                        { year: "2024-2025", pumpsHP: "120", rwhArea: "1645432.000", wastewaterReused: "82.000", totalTaps: "970", lowFlowTaps: "486", totalRooftop: "3940225" },
                        { year: "2023-2024", pumpsHP: "120", rwhArea: "1645432.000", wastewaterReused: "78.600", totalTaps: "970", lowFlowTaps: "470", totalRooftop: "3940225" },
                        { year: "2022-2023", pumpsHP: "120", rwhArea: "1502345.000", wastewaterReused: "76.000", totalTaps: "963", lowFlowTaps: "405", totalRooftop: "3940225" }
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

const conservationReports = [
    { id: 1, text: "Training Session on Rainwater Harvesting Conducted at Palaud Village", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/Report+on+Rain+Water+Harvesting+on+6th+September+2022.pdf" },
    { id: 2, text: "World River Day", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/World+River+Day+Celebration+2025.pdf" },
    { id: 3, text: "Geo-Tagged Photos", url: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/Geo+Tagged+Photos.pdf" },
];

const eventReports = [
    { id: 1, text: "Policy  – Water Conservation", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/3-Policy-Water-Conservation-and-Management.pdf" },
    { id: 2, text: "Action Plan - for Water Conservations", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/11-Action-Plan-for-Water-Conservation.pdf" },
    { id: 3, text: "Office-Order-on-SDG-Policies", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/Office-Order-on-SDG-Policies.pdf" },
];


const cards = [
    {
        title: "Sewage Treatment Plant (STP)",
        description:
            "The University follows various practices to ensure effective water management. A modern Sewage Treatment Plant (STP) is installed that treats wastewater collected from hostels, residential quarters, and academic buildings, which is recycled and reused for irrigation, landscaping, and gardening purposes, minimising the usage of freshwater. The University also encourages everyone to use water responsibly through awareness and monitoring systems.",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/water-1.webp",
        logoSrc: "",
        subtitle: "SEWAGE TREATMENT PLANT",
        link: "#",
    },
    {
        title: "Drip Irrigation",
        description:
            "To improve the water-use efficiency and contribute towards responsible water management, the University has implemented drip irrigation systems in lawns, gardens, and green belts. This system directly transfers water to the plant roots through a controlled network of pipes and emitters, ensuring proper water distribution while lowering evaporation and run-off losses.",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/water-2.webp",
        logoSrc: "",
        subtitle: "DRIP IRRIGATION",
        link: "#",
    },
    {
        title: "Rainwater Harvesting",
        description:
            "To effectively use rainwater, the University uses a rainwater harvesting system as a key measure toward sustainable water management. This system collects rainwater from rooftops and open areas and channels it into recharge pits and storage systems. It helps in restoring groundwater levels and reducing the dependence on external water sources.",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/water-3.webp",
        logoSrc: "",
        subtitle: "RAINWATER HARVESTING",
        link: "#",
    }
];

const phdObjectives = [
    { item: "Poster Making & Awareness Drive on World River Day under Puneet Sagar Abhiyaan" },
    { item: "World Water Day Celebration" },
    { item: "Awareness Campaigns World Wetlands Day" },
    { item: "Industrial Visit to Gangrel Dam, Dhamtari" }
];

const galleryImages = [
    { id: 1, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-1.webp", alt: "Water Conservation 1" },
    { id: 2, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-2.webp", alt: "Water Conservation 2" },
    { id: 3, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-3.webp", alt: "Water Conservation 3" },
    { id: 4, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-4.webp", alt: "Water Conservation 4" },
    { id: 5, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-5.webp", alt: "Water Conservation 5" },
    { id: 6, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-6.webp", alt: "Water Conservation 6" },
    { id: 6, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-g-4.webp", alt: "Water Conservation 6" },
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

            <MainIntro
                title={mainIntroContent1.title}
                description={mainIntroContent1.description}
                imageUrl={mainIntroContent1.imageUrl}
                imageAlt={mainIntroContent1.imageAlt}
                showKnowMore={false}
                sectionClassName="bg-white"
            />
            <PhdObjectivesPanel
                title="Awareness Campaigns and Outreach Programs include:"
                subtitle=""
                imageSrc="https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/Water+Conservation/w-g-1.webp"
                phdObjectives={phdObjectives}
            />

            <div className="container mx-auto mt-16 px-4">
                <SectionHeading
                    title="Water Conservation Reports"
                    description="Access detailed reports and documentation related to water management and sustainable practices at Kalinga University."
                    titleClassName="text-center"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
                    {conservationReports.map((report) => (
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

            <div className="mt-14">
                <SectionHeading
                    title="Policies and Office Orders"
                    description=""
                    titleClassName="text-center"
                />
            </div>
            <ResearchSixGridButtons
                buttons={eventReports}
            />

            <CustomGallery
                images={galleryImages}
                title="Glimpses of Our Water Conservation Initiatives"
            />
        </>
    );
}