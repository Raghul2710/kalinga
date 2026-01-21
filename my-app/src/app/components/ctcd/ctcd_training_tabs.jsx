"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";
import { AccordionItem } from "../general/accordion";
import Gallery from "../general/gallery";
import SectionHeading from "../general/SectionHeading";
import FAQ from "../general/faq";
import Image from 'next/image';


function BulletList({ items }) {
    return (
        <ul className="mt-3 space-y-2 pl-4">
            {items.map((item, idx) => (
                <li
                    key={idx}
                    className="relative text-[var(--foreground)] text-[14px] md:text-[16px]"
                >
                    <p className="absolute -left-4 top-[10px] h-[6px] w-[6px] rounded-full bg-[var(--foreground)]"></p>
                    {item}
                </li>
            ))}
        </ul>
    );
}

const trainingGlimpse = [
    // Replace these URLs with your actual CTCD images (same as Figma)
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
];

// Transform trainingGlimpse to Gallery component format
const transformToGalleryImages = (images) => {
    return images.map((src, idx) => ({
        id: idx + 1,
        image: src,
        alt: `Training glimpse ${idx + 1}`
    }));
};

// Constants for Gallery component
const GALLERY_TITLE = "Glimpse";
const GALLERY_TITLE_CLASSNAME = "font-stix text-[28px] leading-[44px] text-[var(--foreground)] mb-[14px] text-center";
const GALLERY_IMAGES = transformToGalleryImages(trainingGlimpse);

// Training Projects Gallery Images
const trainingProjectsImages = [
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(5).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(6).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects-2.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects-3.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects-4.webp",
];
const TRAINING_PROJECTS_GALLERY_IMAGES = transformToGalleryImages(trainingProjectsImages);

// Training Domain Gallery Images
const trainingDomainImages = [
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(1).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(2).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(3).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(4).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-1.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-2.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-3.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-4.webp",
];
const TRAINING_DOMAIN_GALLERY_IMAGES = transformToGalleryImages(trainingDomainImages);

// Training Details Gallery Images
const trainingDetailsImages = [
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(7).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(8).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(9).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ccrc-15.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-5.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-6.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-7.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-domain-8.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(5).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/chart+(6).webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects-2.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects-3.webp",
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects-4.webp",
];
const TRAINING_DETAILS_GALLERY_IMAGES = transformToGalleryImages(trainingDetailsImages);

// Common classNames
const CARD_CLASSNAME = "rounded-[16px] bg-[var(--card-sandal)] p-[22px] md:p-[26px]";
const CARD_TITLE_CLASSNAME = "font-plus-jakarta-sans text-[24px] leading-[30px] font-medium text-[var(--button-red)]";
const CARD_TEXT_CLASSNAME = "mt-[10px] text-[var(--foreground)]";
const SECTION_TITLE_CLASSNAME = "font-stix text-2xl md:text-[30px] text-[var(--foreground)]";
const ACCORDION_TITLE_CLASSNAME = "font-plus-jakarta-sans text-[24px] leading-[30px] font-medium text-[var(--button-red)]";

// Reusable Training Glimpse Gallery component
function TrainingGlimpseGallery() {
    return (
        <div className="mt-[28px]">
            <Gallery
                images={GALLERY_IMAGES}
                title={GALLERY_TITLE}
                backgroundColor="bg-transparent"
                paddingClassName="py-0"
                titleClassName={GALLERY_TITLE_CLASSNAME}
                forceSliderOnMobile={true}
            />
        </div>
    );
}

export default function CtcdTrainingTabs({ customTabs }) {
    const [open, setOpen] = useState(false);
    const [openTechnical, setOpenTechnical] = useState(false);

    // If customTabs is provided, render dynamic tabs
    if (customTabs && customTabs.length > 0) {
        return (
            <section className="w-full">
                <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
                {/* Outer dark-blue container */}
                <div className="rounded-xl  bg-[var(--dark-blue)] py-16 mx-2">
                    {/* Top tabs row */}
                    <div className="container mx-auto">
                        <Tabs defaultValue={customTabs[0]?.value}>
                            <TabsList className="!flex !gap-4 md:!gap-5 !bg-transparent !rounded-none !p-0 !overflow-x-auto !overflow-y-visible scrollbar-hide !px-2 md:!px-0 !pb-2 md:!pb-0">
                                {customTabs.map((tab) => (
                                    <TabsTrigger
                                        key={tab.value}
                                        value={tab.value}
                                        className="flex-shrink-0 min-w-[200px] md:min-w-[170px] md:flex-1 break-words whitespace-nowrap"
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {/* White inner panel */}
                            <div className="mt-[16px] rounded-[18px] bg-white px-3 py-[22px] md:px-[36px] md:py-[28px]">
                                {customTabs.map((tab) => (
                                    <TabsContent key={tab.value} value={tab.value}>
                                        {tab.content}
                                    </TabsContent>
                                ))}
                            </div>
                        </Tabs>
                    </div>
                </div >
            </section >
        );
    }

    return (
        <section className="w-full">
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            {/* Outer dark-blue container */}
            <div className="rounded-xl  bg-[var(--dark-blue)] py-16 mx-2">
                {/* Top tabs row (4 buttons) */}
                <div className="container mx-auto">
                    <Tabs defaultValue="domains">
                        <TabsList className="!flex !gap-4 md:!gap-5 !bg-transparent !rounded-none !p-0 !overflow-x-auto !overflow-y-visible scrollbar-hide !px-2 md:!px-0 !pb-2 md:!pb-0">
                            <TabsTrigger value="domains" className="flex-shrink-0 min-w-[200px] md:min-w-[170px] md:flex-1 break-words whitespace-nowrap">
                                Training Domains
                            </TabsTrigger>

                            <TabsTrigger value="details" className="flex-shrink-0 min-w-[180px] md:min-w-[160px] md:flex-1 break-words whitespace-nowrap">
                                Training Details
                            </TabsTrigger>

                            <TabsTrigger value="assessments" className="flex-shrink-0 min-w-[280px] md:min-w-[360px] md:flex-1 break-words whitespace-nowrap">
                                Our Behavioural and Psychometric Assessments
                            </TabsTrigger>

                            <TabsTrigger value="methodology" className="flex-shrink-0 min-w-[180px] md:min-w-[160px] md:flex-1 break-words whitespace-nowrap">
                                Methodology
                            </TabsTrigger>
                        </TabsList>

                        {/* White inner panel */}
                        <div className="mt-[16px] rounded-[18px] bg-white px-3 py-[22px] md:px-[36px] md:py-[28px]">
                            {/* TAB 1 — Training Domains (FULL pixel layout like screenshot) */}
                            <TabsContent value="domains">
                                <SectionHeading
                                    title="Training Domains"
                                    titleClassName={SECTION_TITLE_CLASSNAME}
                                />

                                <p className="mt-[10px] max-w-[980px] text-[var(--foreground)]">
                                    Our training programs are designed based on one mission, i.e., empowering organisations to utilise their PEOPLE effectively.
                                    CTCD covers a wide range of training domains under behavioural and technical competencies. Through our customised modules,
                                    we aim to build professionals who not only understand PROCESSES but also PEOPLE. They will be ready to meet the changing
                                    demands of the industries and adapt to new business challenges.
                                </p>

                                {/* Two beige cards */}
                                <div className="mt-[26px] grid gap-[22px] md:grid-cols-2">
                                    <div className={CARD_CLASSNAME}>
                                        <h3 className={CARD_TITLE_CLASSNAME}>
                                            Behavioural Topics
                                        </h3>
                                        <p className={CARD_TEXT_CLASSNAME}>
                                            Our behavioural training programs focus on building skills like creativity, teamwork, communication, stress management,
                                            leadership, emotional intelligence, and professionalism. The sessions include real-world case studies where participants
                                            learn how to build a mindset of adaptability and performance excellence that boosts organisational growth.
                                        </p>
                                        <button
                                            onClick={() => setOpen(true)}
                                            className="mt-4 rounded-lg bg-[var(--button-red)] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                                        >
                                            Read More
                                        </button>
                                    </div>

                                    <div className={CARD_CLASSNAME}>
                                        <h3 className={CARD_TITLE_CLASSNAME}>
                                            Technical Topics
                                        </h3>
                                        <p className={CARD_TEXT_CLASSNAME}>
                                            Our technical training programs emphasise skill development that is required to perform tasks smoothly and efficiently.
                                            Participants get practical training in automation tools, artificial intelligence, robotics, sustainable manufacturing practices,
                                            advanced manufacturing techniques, data analysis, and much more. They don’t just learn but build technical precision that drives
                                            operational excellence.
                                        </p>
                                        <button
                                            onClick={() => setOpenTechnical(true)}
                                            className="mt-4 rounded-lg bg-[var(--button-red)] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>

                                {/* Training Domain Gallery */}
                                <div className="mt-[28px]">
                                    <Gallery
                                        images={TRAINING_DOMAIN_GALLERY_IMAGES}
                                        title={GALLERY_TITLE}
                                        backgroundColor="bg-transparent"
                                        paddingClassName="py-0"
                                        titleClassName={GALLERY_TITLE_CLASSNAME}
                                        forceSliderOnMobile={true}
                                    />
                                </div>
                            </TabsContent>

                            {/* TAB 2 */}
                            <TabsContent value="details">
                                <SectionHeading
                                    title="Training Details"
                                    titleClassName={SECTION_TITLE_CLASSNAME}
                                />
                                <div className="space-y-8">
                                    {/* Training Duration */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Educational+Tours.svg"
                                                    alt="Training Duration"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <h3 className={CARD_TITLE_CLASSNAME}>Training Duration</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <p className={CARD_TEXT_CLASSNAME}>
                                                The duration of all proposed training programs largely depends on the training objectives of the organisation. The duration of training also depends on the level of the trainees.
                                            </p>
                                            
                                            <div>
                                                <p className="text-sm text-gray-700 font-medium mb-3">
                                                    Most training programs have a stipulated number of hours which could be delivered in the following modes:
                                                </p>
                                                <div className="space-y-2 ml-4">
                                                    {[
                                                        "Full Days (6 Hours)",
                                                        "Half Days (4 Hours)",
                                                        "A session of two hours per day"
                                                    ].map((item, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <span className="text-[var(--button-red)] mt-0.5">●</span>
                                                            <p className="text-sm text-gray-700">{item}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-600">
                                                Certain training programs are delivered on a nomination basis from the organisations for a prescheduled calendar.
                                            </p>

                                            <p className="text-sm text-gray-600">
                                                Training can also be delivered before and after office hours, depending upon the Trainer&apos;s and Trainees&apos; availability.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Training Venue */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/university.svg"
                                                    alt="Training Venue"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <h3 className={CARD_TITLE_CLASSNAME}>Training Venue</h3>
                                        </div>
                                        <p className={CARD_TEXT_CLASSNAME}>
                                            The training venue can be mutually decided. It can be delivered at our end, at your end, or at third-party venues like a hotel or a resort, depending upon the client&apos;s choice.
                                        </p>
                                        
                                        <div className="mt-6 space-y-6">
                                            {/* Our Venue */}
                                            <div>
                                                <h4 className="font-semibold text-[var(--foreground)] mb-3">If the training is conducted at our end, at the Kalinga Campus at Naya Raipur, we will be providing:</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                                                    {[
                                                        { title: "Auditorium", capacity: "150" },
                                                        { title: "Board Room - 1", capacity: "20" },
                                                        { title: "Board Room - 2", capacity: "25" },
                                                        { title: "Board Room - 3", capacity: "10" },
                                                        { title: "Board Room - 4", capacity: "30" }
                                                    ].map((room, idx) => (
                                                        <div key={idx} className="bg-white p-3 rounded-lg border border-gray-200">
                                                            <p className="font-semibold text-sm text-[var(--foreground)]">{room.title}</p>
                                                            <p className="text-xs text-gray-600 mt-1">Having a capacity of {room.capacity}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-sm text-gray-600 mb-4">
                                                    All of the above are equipped with air conditioning, Interactive Panels for projection, and soundproofing compliant.
                                                </p>
                                                
                                                <div className="space-y-2">
                                                    {[
                                                        "Computers and Laptops (if the training requires the use of computers)",
                                                        "Training Kit",
                                                        "Lush Green Gardens for outdoor activities",
                                                        "Tea / Coffee / Light Snacks and Lunch",
                                                        "Parking"
                                                    ].map((item, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <span className="text-green-600 mt-0.5">●</span>
                                                            <p className="text-sm text-gray-700">{item}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Client Venue */}
                                            <div>
                                                <h4 className="font-semibold text-[var(--foreground)] mb-3">If the Training is conducted at your end or a third venue, you have to provide:</h4>
                                                <div className="space-y-2 mb-4">
                                                    {[
                                                        "Training Hall or Board Room with sufficient capacity",
                                                        "Projection Device (Projector or TV, or Interactive Panel)*",
                                                        "White Board or Glass Board and Marker*",
                                                        "Air-conditioning",
                                                        "Tea/Coffee and Lunch for the trainer"
                                                    ].map((item, idx) => (
                                                        <div key={idx} className="flex items-center gap-2">
                                                            <span className="text-[var(--button-red)] mt-0.5">●</span>
                                                            <p className="text-sm text-gray-700">{item}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-xs text-gray-500 mb-4 italic">* If not available, can be hired and installed at your venue.</p>
                                                
                                                <div className="bg-green-50 p-4 rounded-lg">
                                                    <p className="text-sm font-semibold text-[var(--foreground)] mb-2">To be provided by us if the training is conducted at your end:</p>
                                                    <div className="space-y-1.5">
                                                        {["Trainer", "Training Kits"].map((item, idx) => (
                                                            <div key={idx} className="flex items-center gap-2">
                                                                <span className="text-green-600 mt-0.5">●</span>
                                                                <p className="text-sm text-gray-700">{item}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trainers Profile */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Experienced+Faculties.svg"
                                                    alt="Trainers Profile"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <h3 className={CARD_TITLE_CLASSNAME}>Trainers Profile</h3>
                                        </div>
                                        <p className={CARD_TEXT_CLASSNAME}>
                                            We offer trainers who have rich experience and knowledge, and considerable training experience. Depending upon the training objectives, the trainer profile will be shared, and a discussion with the trainer will be conducted offline or online if desired by the client. Only after the approval of the trainer will the training be initiated.
                                        </p>
                                    </div>

                                    {/* Training Cost */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Abundant+Scholarships.svg"
                                                    alt="Training Cost"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <h3 className={CARD_TITLE_CLASSNAME}>Training Cost</h3>
                                        </div>
                                        <p className={CARD_TEXT_CLASSNAME}>
                                            The training cost is dependent upon the Trainer, duration of the training, venue and training aids availability, which can be mutually discussed.
                                        </p>
                                    </div>

                                    {/* Government Trainings */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Community+Services.svg"
                                                    alt="Government Trainings"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <h3 className={CARD_TITLE_CLASSNAME}>Government Trainings</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <h4 className="font-semibold text-[var(--foreground)] mb-2">Police Training Initiatives:</h4>
                                                <p className={CARD_TEXT_CLASSNAME}>
                                                    It is a matter of immense pride and honour to contribute to the strengthening of our nation's law enforcement system and State Administration Body. We have collaborated with the Police Training School, Mana and the Police Training Academy, Chaudkhuri. In our inspiring sessions with officers, including Deputy Superintendents of Police (DSPs), Platoon Commandants, Subedars, Sub Inspectors, and newly recruited constables, we witness not just uniforms but their stories of sacrifice and responsibility.
                                                </p>
                                            </div>
                                            <p className={CARD_TEXT_CLASSNAME}>
                                                Our government training modules are based on leadership, conflict resolution, stress management, team building, and police-society relations. With interactive sessions and experiential activities, we help officers develop emotional balance and calm in chaos, making them an emotionally intelligent police workforce.
                                            </p>
                                            <div>
                                                <h4 className="font-semibold text-[var(--foreground)] mb-2">ADEO Training Initiatives:</h4>
                                                <p className={CARD_TEXT_CLASSNAME}>
                                                We collaborated with Thakur Pyarelal State Institute of Panchayat & Rural Development (TPSIPRD) and organised behavioural training programs for Assistant Development Extension Officers (ADEOs), helping them serve rural communities in an effective manner. The key topics were communication skills, time management, decision making, team collaboration, and delegation of responsibilities. With this, they learned to handle work pressure calmly, manage time carefully, and delegate tasks responsibly. A positive impact was also seen in their personal lives, as they shared that now they feel motivated and confident in themselves.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Our Corporate Training Projects */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industry-Relevant+Curriculum.svg"
                                                    alt="Our Corporate Training Projects"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <h3 className={CARD_TITLE_CLASSNAME}>Our Corporate Training Projects</h3>
                                        </div>
                                        
                                        {/* Projects Table */}
                                        <div className="overflow-x-auto overflow-y-auto max-h-[600px] border border-gray-200 rounded-lg">
                                            <table className="w-full border-collapse min-w-[800px]">
                                                <thead className="sticky top-0 z-10">
                                                    <tr className="bg-[var(--dark-blue)] text-white">
                                                        <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                            S.No.
                                                        </th>
                                                        <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                            Client Name
                                                        </th>
                                                        <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                            Project Title
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">1</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Entrepreneurship Development Institute of India (EDII)</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Trainers Training Program</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">2</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Robot India</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Training on Google Apps for the Employees of Robot India</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">3</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">ADORE WELDING</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Team Productivity, Self-Management, and Problem-Solving Training</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">4</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Real Ispat and Power Ltd</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Soft Skills and Workplace Behaviour, Communication and Team Collaboration, Leadership Development, and Process Improvement & Productivity Enhancement.</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">5</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Utkarsh Small Finance Bank</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Sales Training for the Employees of Utkarsh Bank</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">6</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Singhal Enterprises Pvt Ltd</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Training on Employee Wellness, Communication & Change Management</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">7</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Techno Blast Mining</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">HR Star Program</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">8</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Kalpataru Projects International Ltd</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Training Report on Supervisor Skills Training</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">9</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Sarda Energy & Minerals Ltd</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Management Development Program (Sarda Outbound Training)at Sarda Energy & Minerals Ltd</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">10</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Sarda Energy & Minerals Ltd</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Psychometric, Functional Assessment & Post Assessment for the Employees of Sarda (Talent Xibit-2)</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">11</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Sarda Energy & Minerals Ltd</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Psychometric, Functional Assessment & Post Assessment for the Employees of Sarda (Talent Xibit-1)</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">12</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Rajkiya Engineering College, Sonbhadra</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">3P Power Placement Process at Rajkiya Engineering College, Sonbhadra</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">13</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Employability Enhancement Training Program (Communication Skill & Team Building Workshop)</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">14</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Adarsh Vidyalaya Group of Schools</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Capacity Building Programme for Adarsh Vidyalaya Teachers</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">15</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Jayaswal Neco</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Utilising AI to enhance team productivity</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">16</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Robertshaw Controls Pvt Ltd</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Training on Problem Solving and Advanced Communication Skills</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">17</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Suryodaya Bank</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Training on Customer Centricity for Credit Officers & Business Excellence.</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">18</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Goeld Frozen Foods</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Developing Managerial Skills and Capabilities</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">19</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">SIMBA Group</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Management Development Program</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">20</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Ramkrishna Care Hospitals</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Patient-Centred Communication, Conflict Resolution among Staff, Emotional Well-Being, and Stress Management</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">21</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Sai Baba Hospital</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">To Reinforce Existing Skills and Competencies so that Employees become more Productive.</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">22</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Central Bank Of India</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Probationary Officers Training Program</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">23</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">GIET Ghangapatna Bhubaneswar</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Aptitude Trainer</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">24</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Kusum Smelters Pvt. Ltd.</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Leadership & Skills Development Training Program</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">25</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Godawari Power & Ispat</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Employee Development Training</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">26</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Police Training Academy Chandkhuri</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">SI & DSP Training</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">27</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Real Group</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Training for Security & Housekeeping Staff</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">28</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Shree Shankara Senior Sec. School Raipur</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Faculty Development Program</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">29</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Thakur Pyarelal State Institute of Panchayat & Rural Development (TPIPRD) in Nimora</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Time & Stress Management Training</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">30</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Police Training School Mana</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">SI & Constable Training</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">31</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Rajasthan Global Security Pvt. Ltd.</td>
                                                        <td className="px-4 py-3 text-[var(--foreground)]">Skill Development and Industry-Aligned Training Initiative</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Training Projects Gallery */}
                                        {/* <div className="mt-6">
                                            <Gallery
                                                images={TRAINING_PROJECTS_GALLERY_IMAGES}
                                                title={GALLERY_TITLE}
                                                backgroundColor="bg-transparent"
                                                paddingClassName="py-0"
                                                titleClassName={GALLERY_TITLE_CLASSNAME}
                                                forceSliderOnMobile={true}
                                            />
                                        </div> */}
                                    </div>
                                </div>

                                {/* Training Details Gallery */}
                                <div className="mt-[28px]">
                                    <Gallery
                                        images={TRAINING_DETAILS_GALLERY_IMAGES}
                                        title={GALLERY_TITLE}
                                        backgroundColor="bg-transparent"
                                        paddingClassName="py-0"
                                        titleClassName={GALLERY_TITLE_CLASSNAME}
                                        forceSliderOnMobile={true}
                                    />
                                </div>
                            </TabsContent>

                            {/* TAB 3 */}
                            <TabsContent value="assessments">
                                <SectionHeading
                                    title="Our Behavioural and Psychometric Assessments"
                                    titleClassName={SECTION_TITLE_CLASSNAME}
                                />
                                {/* Two beige cards */}
                                <div className="mt-[26px] grid gap-[22px] md:grid-cols-1">
                                    <div className={CARD_CLASSNAME}>
                                        <p className={CARD_TEXT_CLASSNAME}>
                                            A Comprehensive Analysis of Learning Styles, Behavioural (Attitude + Aptitude), and 15 Emotional Intelligence Dimensions Indicative of Personality Strengths and Areas of Improvement.
                                        </p>

                                        <p className="mt-4 text-[var(--foreground)]">
                                            Topics Covered:
                                        </p>

                                        <div className="flex flex-col gap-4 mt-6">
                                            {/* Row 1: 4 items */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                                {[
                                                    { title: "System Orientation", icon: "Global.svg" },
                                                    { title: "People Orientation", icon: "Community+Services.svg" },
                                                    { title: "Adaptability", icon: "Holistic+Development.svg" },
                                                    { title: "Readiness to Change", icon: "Improve+Employability.svg" },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="bg-[var(--card-skin)] p-4 rounded-xl flex flex-col items-center text-center gap-3 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent hover:border-[var(--button-red)]/20">
                                                        <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                            <Image
                                                                src={`https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/${item.icon}`}
                                                                alt={item.title}
                                                                width={32}
                                                                height={32}
                                                                className="w-8 h-8 object-contain"
                                                            />
                                                        </div>
                                                        <span className="font-semibold text-[var(--foreground)] text-sm md:text-base leading-tight">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Row 2: 3 items */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:w-3/4">
                                                {[
                                                    { title: "Knowledge", icon: "Wide+Range+of+Programs.svg" },
                                                    { title: "Learning Styles", icon: "Industry-Relevant+Curriculum.svg" },
                                                    { title: "Emotional Quotient", icon: "Emotional+Well-Being.svg" },
                                                ].map((item, idx) => (
                                                    <div key={idx} className="bg-[var(--card-skin)] p-4 rounded-xl flex flex-col items-center text-center gap-3 hover:shadow-lg transition-all duration-300 group cursor-pointer border border-transparent hover:border-[var(--button-red)]/20">
                                                        <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                            <Image
                                                                src={`https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/${item.icon}`}
                                                                alt={item.title}
                                                                width={32}
                                                                height={32}
                                                                className="w-8 h-8 object-contain"
                                                            />
                                                        </div>
                                                        <span className="font-semibold text-[var(--foreground)] text-sm md:text-base leading-tight">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Training Domain Gallery */}
                                <div className="mt-[28px]">
                                    <Gallery
                                        images={TRAINING_DOMAIN_GALLERY_IMAGES}
                                        title={GALLERY_TITLE}
                                        backgroundColor="bg-transparent"
                                        paddingClassName="py-0"
                                        titleClassName={GALLERY_TITLE_CLASSNAME}
                                        forceSliderOnMobile={true}
                                    />
                                </div>
                            </TabsContent>

                            {/* TAB 4 — Methodology */}
                            <TabsContent value="methodology">
                                <SectionHeading
                                    title="Methodology"
                                    titleClassName={SECTION_TITLE_CLASSNAME}
                                />

                                <p className="mt-[10px] max-w-[980px] text-[var(--foreground)]">
                                    Our training methodology is designed to ensure maximum learning effectiveness and practical application. We follow a structured approach that combines assessment, customization, and delivery to meet your organization's specific needs.
                                </p>

                                <div className="mt-[26px] space-y-6">
                                    {/* Understanding Training Needs */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Networking+Opportunities.svg"
                                                    alt="Understanding Needs"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className={CARD_TITLE_CLASSNAME}>Understanding Training or Consultancy Needs</h3>
                                                <p className={CARD_TEXT_CLASSNAME}>
                                                    Through discussions with Functional/Top Managers
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pre-Assessment */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg"
                                                    alt="Pre-Assessment"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className={CARD_TITLE_CLASSNAME}>Pre-Assessment</h3>
                                                <p className={CARD_TEXT_CLASSNAME}>
                                                    By discussions or techniques to clearly identify the problem
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mapping Training Objectives */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Wide+Range+of+Programs.svg"
                                                    alt="Mapping Objectives"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className={CARD_TITLE_CLASSNAME}>Mapping of Training Objectives</h3>
                                                <p className={CARD_TEXT_CLASSNAME}>
                                                    Clearly defining goals and expected outcomes for the training program
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Choosing Methodology */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industry-Relevant+Curriculum.svg"
                                                    alt="Choosing Methodology"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className={CARD_TITLE_CLASSNAME}>Choosing the Right Methodology</h3>
                                                <p className={CARD_TEXT_CLASSNAME}>
                                                    Selecting the most effective approach based on objectives and audience
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Training Delivery Methods */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Improve+Employability.svg"
                                                    alt="Training Delivery"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <h3 className={CARD_TITLE_CLASSNAME}>Training Delivery Methods</h3>
                                        </div>
                                        
                                        <p className="text-[var(--foreground)] mb-4">
                                            We employ a diverse range of training delivery methods to ensure effective learning:
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                            {[
                                                { title: "Instructor-Led Training", icon: "Experienced+Faculties.svg" },
                                                { title: "Interaction", icon: "Networking+Opportunities.svg" },
                                                { title: "Case Studies", icon: "Extensive+Research+Facilities.svg" },
                                                { title: "Real-Life Situations", icon: "Industrial+Visits.svg" },
                                                { title: "Gaming Exercises", icon: "Flagship+Events.svg" },
                                                { title: "Relevant Videos", icon: "100%25+Automation.svg" },
                                                { title: "Experience Sharing", icon: "Mentor-Mentee+System.svg" },
                                                { title: "Peer-to-Peer Training", icon: "Community+Services.svg" },
                                                { title: "Problem-Solving Exercises", icon: "Holistic+Development.svg" },
                                                { title: "Simulation", icon: "Global.svg" },
                                                { title: "Role Plays", icon: "Cultural+Celebrations.svg" },
                                                { title: "Sensitisation", icon: "Emotional+Well-Being.svg" }
                                            ].map((method, idx) => (
                                                <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer hover:border-[var(--button-red)]/20">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-full bg-[var(--card-skin)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                                            <Image
                                                                src={`https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/${method.icon}`}
                                                                alt={method.title}
                                                                width={24}
                                                                height={24}
                                                                className="w-6 h-6 object-contain"
                                                            />
                                                        </div>
                                                        <p className="font-semibold text-[var(--foreground)] text-sm leading-tight">
                                                            {method.title}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Open Feedback */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg"
                                                    alt="Open Feedback"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className={CARD_TITLE_CLASSNAME}>Open Feedback</h3>
                                                <p className={CARD_TEXT_CLASSNAME}>
                                                    Collecting insights and suggestions from participants to continuously improve our training programs
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Follow-Up Sessions */}
                                    <div className={CARD_CLASSNAME}>
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0">
                                                <Image
                                                    src="https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Educational+Tours.svg"
                                                    alt="Follow-Up Sessions"
                                                    width={32}
                                                    height={32}
                                                    className="w-8 h-8 object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className={CARD_TITLE_CLASSNAME}>Follow-Up Sessions</h3>
                                                <p className={CARD_TEXT_CLASSNAME}>
                                                    Ensuring sustained learning and implementation through regular follow-up and support
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div >

            {/* Behavioural Topics Modal */}
            {open && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">
                                Behavioural Topics
                            </h3>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="text-[var(--foreground)] space-y-4">
                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Effective Communication</h4>
                                <p className="ml-4 text-sm">Effective Business Communication, Public Speaking Confidence, Presentation Skills, Active Listening</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Advanced Communication for Leaders</h4>
                                <p className="ml-4 text-sm">Active Listening, Body Language, Non-Verbals, LSRW, VAK, Assertiveness, Strategic communication, leadership messaging, influencing teams, Beyond Communication (Inner Communication)</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● First Time Leaders</h4>
                                <p className="ml-4 text-sm">Leadership Fundamentals, Leadership Styles, Communication, Emotional Intelligence</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● 21st Century Leadership Skills</h4>
                                <p className="ml-4 text-sm">People Skills Managing to Leading, Collaboration, Coaching, Feedback</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Advanced Leadership</h4>
                                <p className="ml-4 text-sm">Situational and Strategic Leadership</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Customer Centricity</h4>
                                <p className="ml-4 text-sm">Understanding Customers, Needs, Query - Complaint-Escalation Handling</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Goal Setting</h4>
                                <p className="ml-4 text-sm">Categorizing & Prioritizing Goals, Mapping the Milestones, Curating the Action Plan, Building Deservability</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Deep Thinking</h4>
                                <p className="ml-4 text-sm">Concepts, Systems, Deep Thinking and Creativity, Mind Mapping</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Team Dynamics</h4>
                                <p className="ml-4 text-sm">Working in Teams Ownership, Bonding, Managing people for Results, Team Excellence, Team Synergy, Effective Team Player</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Problem Solving & Decision Making</h4>
                                <p className="ml-4 text-sm">Understanding Problems, Problem Solving Cycle, Problem Framing & Identification, Problem Solving Techniques Planning & Action, Decision Making</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Time Structuring & Professionalism</h4>
                                <p className="ml-4 text-sm">Time management, task prioritization, professionalism in the workplace</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Conflict Management & Negotiation Skills</h4>
                                <p className="ml-4 text-sm">Handling disputes, negotiation tactics, reaching win-win outcomes</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Emotional Intelligence</h4>
                                <p className="ml-4 text-sm">Self-awareness, empathy, managing emotions, Self Regulation</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Mindfulness and Empathy</h4>
                                <p className="ml-4 text-sm">Mindful practices, enhancing emotional connection, self reflection, enhancing productivity through mindfulness</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● POSH</h4>
                                <p className="ml-4 text-sm">Prevention of Sexual Harassment, legal frameworks, respectful workplace practices</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Creativity and Innovation</h4>
                                <p className="ml-4 text-sm">Fostering creativity, innovative thinking techniques, ideas on</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Project Management</h4>
                                <p className="ml-4 text-sm">Project planning, execution, risk management</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Interpersonal Relations</h4>
                                <p className="ml-4 text-sm">Building relationships, communication techniques, conflict resolution</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Professional Personality Development</h4>
                                <p className="ml-4 text-sm">Grooming, communication skills, workplace behavior</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Stress Management</h4>
                                <p className="ml-4 text-sm">Coping strategies, relaxation techniques, work-life balance</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Train The Trainer, Facilitation Techniques</h4>
                                <p className="ml-4 text-sm">Designing training, engaging participants, effective facilitation</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Resilience</h4>
                                <p className="ml-4 text-sm">Building mental strength, adapting to change, overcoming adversity</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Self Management</h4>
                                <p className="ml-4 text-sm">Self-discipline, personal growth, managing priorities</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Anger Management</h4>
                                <p className="ml-4 text-sm">Identifying triggers, calming techniques, conflict avoidance</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Motivation</h4>
                                <p className="ml-4 text-sm">Self-moving, motivational techniques, setting personal goals</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Mid Life Transition</h4>
                                <p className="ml-4 text-sm">Coping with career changes, finding purpose, personal development</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● New Age Parenting</h4>
                                <p className="ml-4 text-sm">Modern parenting techniques, emotional intelligence in parenting, communication</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Success Habits : Being Effective</h4>
                                <p className="ml-4 text-sm">Productivity habits, time management, daily planning</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Sales Excellence Masterclass</h4>
                                <p className="ml-4 text-sm">Sales techniques, customer engagement, persuasion skills</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Work Life Balance</h4>
                                <p className="ml-4 text-sm">Prioritizing, managing stress, balancing personal and professional life</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● EFT (Emotional Freedom Technique)</h4>
                                <p className="ml-4 text-sm">Tapping techniques, emotional healing, releasing stress at workplace</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Self Healing</h4>
                                <p className="ml-4 text-sm">Healing practices, self-care techniques, emotional well-being</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● From Leadership to Coaching</h4>
                                <p className="ml-4 text-sm">Coaching frameworks, communication in coaching, empowering others</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● 3P Pre-Placement Program (100-hour comprehensive training)</h4>
                                <p className="ml-4 text-sm mb-2"><strong>Aptitude:</strong> Quantitative Aptitude, Logical Reasoning, Data Interpretation, Verbal Ability, Technical Skills, Mock Tests</p>
                                <p className="ml-4 text-sm mb-2"><strong>Study:</strong> Communication Skills, Interview Preparation, Group Discussions, Personal Branding, Confidence Building, Time Management</p>
                                <p className="ml-4 text-sm mb-2"><strong>Soft Skills:</strong> Emotional Intelligence, Team Dynamics, Problem Solving, Adaptability, Leadership</p>
                                <p className="ml-4 text-sm"><strong>Placement Simulations:</strong> Mock Interviews, GDs, Resume Writing, Performance Feedback, Recruitment Process Familiarization</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Affirmations at Workplace</h4>
                                <p className="ml-4 text-sm">Positive affirmations, boosting workplace morale, enhancing confidence</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Children Counselling for Schools & Colleges</h4>
                                <p className="ml-4 text-sm">Identifying and managing emotional challenges in children, Building emotional resilience and coping strategies, Addressing behavior and academic concerns, Encouraging self-expression and self-esteem, Developing social skills and peer relationships, Addressing anxiety, fear, and phobias in children, Guidance for dealing with family or life changes</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Teachers Counselling for Schools & Colleges</h4>
                                <p className="ml-4 text-sm">Understanding child psychology in the classroom, Building positive teacher-student relationships, Techniques for managing classroom stress, Enhancing communication and empathy with students, Classroom mindfulness practices to improve focus, Addressing behavioral issues based on psychological principles, Supporting students' emotional well-being, Managing diverse emotional and learning needs of students</p>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-lg bg-[var(--button-red)] px-5 py-2 text-sm font-medium text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Technical Topics Modal */}
            {openTechnical && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setOpenTechnical(false)}
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">
                                Technical Topics
                            </h3>

                            <button
                                type="button"
                                onClick={() => setOpenTechnical(false)}
                                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="text-[var(--foreground)] space-y-4">
                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Coal Sampling through Artificial Intelligence</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Samplers Training</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Root Cause Analysis</h4>
                                <p className="ml-4 text-sm">Identifying underlying causes of problems, root cause analysis techniques (e.g., 5 Whys, Fishbone Diagram), corrective action strategies</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Automation of Civil Measurement and Billing</h4>
                                <p className="ml-4 text-sm">Digital tools for civil measurement, software-based billing systems, accuracy enhancement, reducing manual work in billing processes</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Design, Measurement</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● BRSR : Business Responsibility and Sustainability Reporting</h4>
                                <p className="ml-4 text-sm">Corporate social responsibility (CSR) framework, sustainability reporting practices, ethical business practices, stakeholder communication</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● CBAM : Carbon Border Adjustment Mechanism</h4>
                                <p className="ml-4 text-sm">Understanding carbon tariffs, emissions regulations, global trade impact, aligning with climate goals</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Contract Management</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Contract Finalization</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Implementing 6 S ( 5S + Safety )</h4>
                                <p className="ml-4 text-sm">Workplace organization, 5S principles (Sort, Set in Order, Shine, Standardize, Sustain), integrating safety measures in all processes</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Fire</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Environment</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Understanding Internal Logistics</h4>
                                <p className="ml-4 text-sm">Streamlining internal transport, warehouse management, inventory control, optimizing internal supply chain operations</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● External Logistics- GPS, Geo Fencing</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Electric and Autonomous Vehicles</h4>
                                <p className="ml-4 text-sm">Development and manufacturing of electric vehicle (EV) components, Autonomous driving technologies and their integration in manufacturing, Battery management systems and charging infrastructure</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Connected Vehicles and Telematics</h4>
                                <p className="ml-4 text-sm">Development of connected car technologies and telematics, Cybersecurity measures for connected vehicles, Data analytics for vehicle performance and customer experience enhancement</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Productivity Improvement Through Artificial Intelligence</h4>
                                <p className="ml-4 text-sm">AI applications in productivity, process automation, predictive analytics, AI-driven decision making</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Waste Reduction</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Automation and Robotics</h4>
                                <p className="ml-4 text-sm">Integration of robotic process automation (RPA) in assembly lines, Collaborative robots (cobots) for enhancing human-machine interactions, Advanced robotic welding and painting techniques</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Lean Manufacturing and Six Sigma</h4>
                                <p className="ml-4 text-sm">Implementing lean manufacturing principles to reduce waste and improve efficiency, Six Sigma methodologies for quality control and process improvement, Value stream mapping and continuous improvement strategies</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Sustainable Manufacturing Practices</h4>
                                <p className="ml-4 text-sm">Adoption of green manufacturing techniques, Energy-efficient production processes, Waste reduction and recycling programs in automobile manufacturing</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Advanced Manufacturing Techniques</h4>
                                <p className="ml-4 text-sm">Additive manufacturing (3D printing) for prototyping and production, CNC machining and other precision manufacturing techniques, Advanced forming and molding processes</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Reverse Auction Systems</h4>
                                <p className="ml-4 text-sm">Online auction principles, cost-saving strategies, e-procurement solutions, competitive bidding</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Supply Chain Management and Logistics</h4>
                                <p className="ml-4 text-sm">Optimization of supply chain networks for better efficiency, Just-in-time (JIT) inventory management systems, Advanced logistics and distribution strategies</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Understanding Import and Export Systems</h4>
                                <p className="ml-4 text-sm">International trade regulations, customs procedures, documentation, trade logistics, tariff management</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Quality Management Systems</h4>
                                <p className="ml-4 text-sm">Implementation of ISO/TS 16949 standards for quality management, Advanced quality control techniques like SPC and FMEA, Total quality management (TQM) for continuous improvement</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Regulatory Compliance and Safety Standards</h4>
                                <p className="ml-4 text-sm">Ensuring compliance with Indian and international automotive standards, Implementation of safety features and technologies, Environmental and emissions regulations compliance</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Forward Auction Systems</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Use of AI in Industrial Security</h4>
                                <p className="ml-4 text-sm">AI tools for surveillance, predictive security measures, risk assessment, automated threat detection and response</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Guards Training</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Inventory Management</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Mechanisation of Loading / Unloading</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Advanced Materials and Lightweight Design</h4>
                                <p className="ml-4 text-sm">Use of advanced materials like carbon fiber, aluminum, and composites, Lightweight strategies for improved fuel efficiency, Innovations in material processing and joining technologies</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Human-Machine Interface (HMI) and User Experience</h4>
                                <p className="ml-4 text-sm">Design and development of advanced HMI systems, Enhancing user experience through innovative interface design, Integration of augmented reality (AR) and virtual reality (VR) in vehicle interfaces</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Availability based Improvement</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Cost Reduction</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Reverse Engineering</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Y-Y Analysis</h4>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">● Data Analysis</h4>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setOpenTechnical(false)}
                                className="rounded-lg bg-[var(--button-red)] px-5 py-2 text-sm font-medium text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section >
    );
}
