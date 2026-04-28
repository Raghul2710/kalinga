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
    title: "Waste Management",
    description: [
        "To ensure a clean, sustainable, and environmentally responsible campus, Kalinga University follows a systematic approach towards waste management. The University manages different types of waste, such as solid, liquid, electronic, and biomedical waste, promoting recycling practices among students and staff members. These efforts align with the United Nations Sustainable Development Goals, specifically SDG 6 (Clean Water and Sanitation), SDG 11 (Sustainable Cities and Communities), SDG 12 (Responsible Consumption and Production), and SDG 13 (Climate Action)."
    ],
    imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/waste-1.webp",
    imageAlt: "Waste Management",
};

const mainIntroContent1 = {
    title: "Activities to Promote Waste Management",
    description: [
        "Kalinga University conducts various waste management awareness programs, workshops, and seminars in collaboration with environmental organisations and local authorities. These initiatives encourage everyone on the campus to adopt sustainable practices such as recycling, composting, and waste segregation."
    ],
    imageUrl: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/waste-2.webp",
    imageAlt: "Activities to Promote Waste Management",
};

const items = [
    {
        question: "Waste Management Details",
        component: (
            <div className="w-full mt-4">
                <DataTable
                    columns={[
                        { key: "year", label: "Financial Year", widthPx: 120 },
                        { key: "totalSolid", label: "Total (Wet + Dry) Solid Waste Generated", widthPx: 250 },
                        { key: "horticulture", label: "Total Horticulture Waste Generated", widthPx: 220 },
                        { key: "dryGenerated", label: "Total Dry Waste Generated", widthPx: 180 },
                        { key: "wetGenerated", label: "Total Wet Waste Generated", widthPx: 180 },
                        { key: "dryRecycled", label: "Total Dry Waste Recycled", widthPx: 180 },
                        { key: "bioProcessed", label: "Total Biodegradable (Food) Waste Processed", widthPx: 240 },
                        { key: "eWaste", label: "Total Electronic Waste Generated", widthPx: 200 }
                    ]}
                    data={[
                        { year: "Unit", totalSolid: "Tons", horticulture: "Tons", dryGenerated: "Tons", wetGenerated: "Tons", dryRecycled: "Tons", bioProcessed: "Tons", eWaste: "KG" },
                        { year: "2024-2025", totalSolid: "11.10", horticulture: "0.44", dryGenerated: "0.18", wetGenerated: "0.10", dryRecycled: "0.07", bioProcessed: "0.50", eWaste: "2.00" },
                        { year: "2023-2024", totalSolid: "13.30", horticulture: "0.42", dryGenerated: "0.15", wetGenerated: "0.09", dryRecycled: "0.06", bioProcessed: "0.46", eWaste: "3.50" },
                        { year: "2022-2023", totalSolid: "6.80", horticulture: "0.40", dryGenerated: "0.13", wetGenerated: "0.09", dryRecycled: "0.05", bioProcessed: "0.43", eWaste: "3.80" }
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
    { id: 1, text: "Best Out of Waste Workshop (05th April 2024 - 07th April 2024)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/waste-management/Event+Report+-+Best+Out+of+Waste+-+2024.pdf" },
    { id: 2, text: "Agreement For Electronic Waste Recycling", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/waste-management/MOU+e-waste+Management.pdf" },
    { id: 3, text: "National seminar on Waste Optimisation and Cleaner Technology", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/waste-management/Seminar++on+Waste+Management+by+AICTE+ATAL+VAANI.pdf" },
    { id: 4, text: "Workshop on Best Out of Waste (10th May 2023 - 12th May 2023)", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/waste-management/Workshop+on+Best+out+of+Waste+-+2022+%26+2023.pdf" },
];

const policyDocuments = [
    { id: 1, text: "Waste Management", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/4-Policy-Waste-Management.pdf" },
    { id: 2, text: "Plastic Prohibition", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/5-Policy-Plastic-Prohibition.pdf" },
    { id: 4, text: "Office-Order-on-SDG-Policies", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/office-orders/Office-Order-on-SDG-Policies.pdf" },
];


const cards = [
    {
        title: "Solid Waste Management",
        description: (
            <>
                The University has established a well-structured, solid waste management system by partnering with authorised vendors who regularly collect garbage and paper waste from various collection points. These are strategically located with proper colour coding, like green for biodegradable waste, blue for recyclable waste, and yellow for other waste categories, ensuring systematic segregation of wastes. We strongly encourage everyone on the campus to use minimal plastic and promote the usage of eco-friendly products, such as paper cups and paper bags, to maintain a plastic-free campus environment.
                <br /><br />
                To manage biodegradable waste, the University has established compost pits and vermicomposting units across the campus. Green waste generated from gardens and landscape areas, such as dry leaves, pruning residues, grass clippings, and other horticulture waste, is collected and processed through vermicomposting. Wet waste collected from the cafeteria and canteen is also treated in composting and vermicomposting units to produce high-quality organic fertiliser used for campus greenery.
            </>
        ),
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/waste-1.webp",
        logoSrc: "",
        subtitle: "SOLID WASTE MANAGEMENT",
        link: "#",
    },
    {
        title: "Liquid Waste Management",
        description: (
            <>
                To ensure 100% utilisation of liquid waste on the campus, the University operates a Sewage Treatment Plant (STP) to treat wastewater for gardening and landscaping purposes.
                <br /><br />
                • Greywater from wash basins and hostels is stored and used for irrigation.<br />
                • Low-flush cisterns and water-saving taps are installed in washrooms.<br />
                • Rainwater harvesting tanks are established for water conservation.<br />
                • Plantation drives under the National Mission on Clean and Green Environment are monitored by NSS.
            </>
        ),
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/waste-2.webp",
        logoSrc: "",
        subtitle: "LIQUID WASTE MANAGEMENT",
        link: "#",
    },
    {
        title: "E-Waste Management",
        description: (
            <>
                The University follows a Standard Operating Procedure (SOP) for the safe handling and disposal of hazardous laboratory and electronic waste in a legally compliant manner.
                <br /><br />
                Departments submit outdated or non-functional electronic devices, such as monitors, keyboards, printers, and laboratory equipment, to the E-Waste Store for segregation and temporary storage.
                <br /><br />
                The University has signed MoUs with certified and authorised e-waste management vendors for scientific dismantling and recycling, preventing environmental hazards from toxic components like lead and mercury.
            </>
        ),
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/waste-3.webp",
        logoSrc: "",
        subtitle: "E-WASTE MANAGEMENT",
        link: "#",
    },
    {
        title: "Waste Recycling System",
        description: (
            <>
                The faculty, staff, and students actively participate in the recycling initiatives, such as the segregation of recyclable and non-recyclable waste materials by dumping them carefully in different labelled bins.
                <br /><br />
                Continuous awareness programs are conducted to encourage active participation in recycling activities across the campus to reduce waste generation.
            </>
        ),
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/waste-4.webp",
        logoSrc: "",
        subtitle: "WASTE RECYCLING SYSTEM",
        link: "#",
    },
    {
        title: "Biomedical Waste Management",
        description:
            "Biomedical waste generated from the University’s animal house and medical room is segregated at the point of origin using colour-coded and labelled containers. This ensures safe handling and compliance with biomedical waste management regulations. The process is monitored daily by trained personnel to maintain strict hygiene standards before being transported by authorised agencies for further treatment.",
        imageSrc: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/waste-5.webp",
        logoSrc: "",
        subtitle: "BIOMEDICAL WASTE MANAGEMENT",
        link: "#",
    }
];

const phdObjectives = [
    {
        item: "Three-Day National Seminar on Waste Management and Sustainable Practices (Management Innovations, Sustainability, Climate Impact, and Environmental Ethics) sponsored by AICTE ATAL VAANI"
    },
    {
        item: "Training Program on Waste Optimisation by Green Skill Development Program, Government of India"
    },
    {
        item: "Workshop on Best out of Waste at Regional Science Centre, Raipur, Chhattisgarh"
    },
    {
        item: "Industrial Visit on Sewage Treatment Plant, Water Purification Plant & Solid Waste Management Plant, Raipur"
    }
];

const galleryImages = [
    { id: 1, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/need-1.webp", alt: "Waste Management Need 1" },
    { id: 2, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/need-2.webp", alt: "Waste Management Need 2" },
    { id: 3, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/need-3.webp", alt: "Waste Management Need 3" },
    { id: 4, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/need-4.webp", alt: "Waste Management Need 4" },
    { id: 5, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/waste-management/need-5.webp", alt: "Waste Management Need 5" },
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
                title="Some of the programs include:"
                subtitle=""
                imageSrc="https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/images-1.png"
                phdObjectives={phdObjectives}
            />


            <div className="mt-10">
                <SectionHeading
                    title="Awareness and Capacity Building"
                    description=""
                    titleClassName="text-center"
                />
            </div>
            <ResearchSixGridButtons
                buttons={eventReports}
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
                title="Glimpses of Our Waste Management Initiatives"
            />
        </>
    );
}