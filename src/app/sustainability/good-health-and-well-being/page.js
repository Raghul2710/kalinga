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
    title: "Good Health and Well-Being",
    description: [
        "The University actively promotes the physical and mental health and emotional well-being of students and staff through a supportive campus environment. It has a modern gymnasium and indoor and outdoor sports facilities that encourage physical fitness, discipline, and teamwork. A dedicated yoga and wellness centre conducts yoga and meditation sessions to improve mental and emotional health. The recreation room allows students to maintain a balance between studies and leisure activities. The campus also has a medical room that provides basic healthcare services. Regular health and eye checkup camps are organised along with awareness programs on nutrition, eye checkups, stress management, hygiene, and mental health to encourage overall development. These initiatives contribute towards SDG 3: Good Health and Well-Being."
    ],
    imageUrl: "https://cdn.kalingauniversity.ac.in/sdg-cell/sdg-green-campus/sdg-images-1.webp",
    imageAlt: "Good Health and Well-Being",
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
        question: "Health and Wellness Infrastructure & Programs",
        component: (
            <div className="w-full mt-4">
                <DataTable
                    columns={[
                        { key: "year", label: "Financial Year", widthPx: 120 },
                        { key: "pedestrianArea", label: "Total Area Designated as Pedestrian/Vehicle-Restricted Zones (other than building area)", widthPx: 250 },
                        { key: "sportsArea", label: "Total Area Designated for Sports Facilities", widthPx: 220 },
                        { key: "campusArea", label: "Total Area of the Campus", widthPx: 180 },
                        { key: "yogaTwiceYear", label: "Number of People Taking Part in Yoga and Meditation Programs at least Twice a Year", widthPx: 240 },
                        { key: "yogaOnceWeek", label: "Number of People Taking Part in Yoga and Meditation Programs Once a Week", widthPx: 240 }
                    ]}
                    data={[
                        { year: "Unit", pedestrianArea: "Acres", sportsArea: "Acres", campusArea: "Acres", yogaTwiceYear: "Number", yogaOnceWeek: "Number" },
                        { year: "2024-2025", pedestrianArea: "22.000", sportsArea: "17.000", campusArea: "45.000", yogaTwiceYear: "2494", yogaOnceWeek: "220" },
                        { year: "2023-2024", pedestrianArea: "22.000", sportsArea: "17.000", campusArea: "45.000", yogaTwiceYear: "2134", yogaOnceWeek: "235" },
                        { year: "2022-2023", pedestrianArea: "10.000", sportsArea: "17.000", campusArea: "34.000", yogaTwiceYear: "1864", yogaOnceWeek: "195" }
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
    { id: 1, text: "Model/Poster Exhibition on World Mental Health Day", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Event+report+-+World+Mental+Health+Day.pdf" },
    { id: 2, text: "Guest Lecture on “Development of New Vaccines and Variants in Indian Poultry Diseases”", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Guest+Lecture+-+Development+of+New+Vaccines.pdf" },
    { id: 3, text: "Guest Lecture on Mental Health and Well-Being of Students and Teachers", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Guest+Lecture_on+Mental+Health+-+2025.pdf" },
    { id: 4, text: "Industrial Visit to AIIMS Raipur", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/Industrial+Visit+at+AIIMS+Raipur.pdf" },
    { id: 5, text: "Emerging Perspectives and Future Trends in Pharmaceuticals and Allied Sciences for Global Health and Well-being", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/International+Conference+-+Global+Health+%26+Wellbeing+-+2025.pdf" },
    { id: 6, text: "International Yoga Day", url: "https://cdn.kalingauniversity.ac.in/sdg-cell/sustainable-initiatives-for-a-green-campus/International+Yoga+Day_2025.pdf" },
];




const cards = [
    {
        title: "Medical Room Facility",
        description:
            "The University provides medical support to its students and staff members with a well-equipped medical room established on campus. With a 24×7 availability of qualified doctors and nurses, they get immediate medical assistance. It includes bed facilities for observation, essential medicines, oxygen cylinders, and other medical equipment required in an emergency situation. An ambulance service is also available for quick transportation to the nearby hospital. The University has signed MoUs with 5 hospitals, namely, Saptagiri Hospital, BALCO Hospital, VY Hospital, Urmila Memorial Hospital, and NHMMI Narayana, ensuring patients get advanced medical treatment.",
        imageSrc:
            "https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/Medical-room-facility.webp",
        logoSrc: "",
        subtitle: "MEDICAL ROOM FACILITY",
        link: "#",
    },
    {
        title: "Yoga and Wellness Centre",
        description:
            "The Department of Yoga at Kalinga University supports the physical fitness, mental health, and well-being of students and staff members. It conducts yoga sessions, meditation programs, and wellness activities in the yoga and wellness centre, helping them manage stress, improve concentration, and maintain a healthy lifestyle. Expert instructors teach different yoga asanas, breathing exercises, and relaxation techniques.",
        imageSrc:
            "https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/yoga-wellness.webp",
        logoSrc: "",
        subtitle: "YOGA AND WELLNESS CENTRE",
        link: "#",
    },
    {
        title: "Sports Facilities (Indoor & Outdoor Games)",
        description:
            "The University has a dedicated sports complex and various grounds where students play a wide range of indoor and outdoor games, such as Chess, Carom, Table Tennis, Snooker, Badminton, Cricket, Football, Basketball, Lawn Tennis, Kabaddi, Volleyball, Kho-Kho, Hockey, Handball, and more. The University organises various sports events from time to time and encourages students to participate in various State, National, and International-level competitions, helping them develop discipline and leadership skills.",
        imageSrc:
            "https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/Sports-Facilities.webp",
        logoSrc: "",
        subtitle: "SPORTS FACILITIES (INDOOR & OUTDOOR GAMES)",
        link: "#",
    },
    {
        title: "Gymnasium",
        description:
            "The campus has separate gym facilities for both boys and girls, which contain different modern fitness equipment, ensuring accessibility and a comfortable environment for all. Qualified gym trainers guide them with proper exercise techniques and workout routines.",
        imageSrc:
            "https://cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/gym.png",
        logoSrc: "",
        subtitle: "GYMNASIUM",
        link: "#",
    }
];

const phdObjectives = [
    {
        item: "Free Eye & Dental Checkup Camp"
    },
    {
        item: "Blood Donation Camp"
    },
    {
        item: "Namo Yuva Run Marathan Event-2025"
    },
    {
        item: "Guest Lecture on ‘Herpes Simplex Virus: Infection & Diagnosis’"
    },
    {
        item: "Awareness Program on Health & Wellness"
    },
    {
        item: "Doctors honoured by Kalinga University on Doctor's Day Celebration"
    },
    {
        item: "World Tourism Day Festival 2024"
    },
    {
        item: "Cancer Awareness Talk and Screening Camp"
    },
    {
        item: "Awareness Workshop on HIV/AIDS"
    },
    {
        item: "Inclusive Walkthon, Telibandha Talab, Raipur"
    },
    {
        item: "Meditation Workshop"
    },
    {
        item: "Mental Health Aspects of Gender Based Violence"
    },
    {
        item: "World Heart Day, latest health statistics from The Health Check-up Camp"
    },
    {
        item: "International Yoga Day Celebration"
    },
    {
        item: "Nasha Mukti Abhiyaan – Student Ambassador Program"
    },
    {
        item: "Online Pledge on symptoms and prevention of drug addiction"
    },
    {
        item: "4th National Pharmacovigilance Awareness on “Building ADR and Reporting Culture for Patient Safety”"
    }
];

const galleryImages = [
    { id: 1, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-1.webp", alt: "Good Health and Well-Being 1" },
    { id: 2, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-2.webp", alt: "Good Health and Well-Being 2" },
    { id: 3, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-3.webp", alt: "Good Health and Well-Being 3" },
    { id: 4, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-4.webp", alt: "Good Health and Well-Being 4" },
    { id: 5, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-5.webp", alt: "Good Health and Well-Being 5" },
    { id: 6, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-6.webp", alt: "Good Health and Well-Being 6" },
    { id: 7, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-7.webp", alt: "Good Health and Well-Being 7" },
    { id: 8, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-8.webp", alt: "Good Health and Well-Being 8" },
    { id: 9, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-9.webp", alt: "Good Health and Well-Being 9" },
    { id: 10, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-10.webp", alt: "Good Health and Well-Being 10" },
    { id: 11, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-11.webp", alt: "Good Health and Well-Being 11" },
    { id: 12, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-12.webp", alt: "Good Health and Well-Being 12" },
    { id: 13, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-13.webp", alt: "Good Health and Well-Being 13" },
    { id: 14, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-14.webp", alt: "Good Health and Well-Being 14" },
    { id: 15, image: "https://s3.ap-south-1.amazonaws.com/cdn.kalingauniversity.ac.in/sdg-cell/good-health-well-being/image-new-good-15.webp", alt: "Good Health and Well-Being 15" },
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
                            description=""
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
                title="Glimpses of Our Health and Well-Being Activities"
            />
        </>
    );
}