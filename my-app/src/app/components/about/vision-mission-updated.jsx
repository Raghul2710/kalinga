"use client";
import Image from "next/image";
import { useState } from "react";
import SectionHeading from "../general/SectionHeading";

// ReadMoreParagraphs component - reused or simplified
function ReadMoreParagraphs({ text, isArray = false }) {
    const [showAll, setShowAll] = useState(false);
    const toggleReadMore = () => setShowAll(!showAll);

    // Helper to render content
    const renderContent = () => {
        // Option 1: Mixed Content (Paragraphs + Points)
        if (!isArray && typeof text === 'object' && text.paragraphs && text.paragraphs.length > 0) {
            const firstPara = text.paragraphs[0];
            const remainingParas = text.paragraphs.slice(1);
            const points = text.points || [];

            return (
                <div className="space-y-4">
                    {/* Always visible first paragraph */}
                    <p className="leading-relaxed">{firstPara}</p>

                    {/* Hidden content */}
                    {showAll && (
                        <div className="space-y-4 animate-fadeIn">
                            {remainingParas.map((p, i) => (
                                <p key={`p-rem-${i}`} className="leading-relaxed">{p}</p>
                            ))}
                            {points.length > 0 && (
                                <>
                                    {text.pointsHeading && (
                                        <p className="font-bold leading-relaxed mb-2">{text.pointsHeading}</p>
                                    )}
                                    <ul className="list-disc pl-5 space-y-2">
                                        {points.map((item, idx) => (
                                            <li key={`li-${idx}`} className="pl-1 leading-relaxed text-left">{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    )}
                </div>
            );
        }

        // Option 2: Array of strings
        if (isArray && Array.isArray(text) && text.length > 0) {
            const firstItem = text[0];
            const remainingItems = text.slice(1);

            return (
                <div className="space-y-2">
                    <p className="leading-relaxed">{firstItem}</p>
                    {showAll && remainingItems.map((item, idx) => (
                        <p key={idx} className="leading-relaxed">{item}</p>
                    ))}
                </div>
            );
        }

        // Option 3: Simple String (fallback)
        return <p className="leading-relaxed">{text}</p>;
    };

    return (
        <div className="text-black">
            {renderContent()}
            <button
                onClick={toggleReadMore}
                className="mt-4 text-[var(--button-red)] font-bold hover:opacity-75 focus:outline-none"
            >
                {showAll ? "Read Less" : "Read More"}
            </button>
        </div>
    );
}

const defaultVision = "Kalinga University aims to be an outstanding institution for Talent Development and Knowledge Creation for a vibrant and inclusive society.";

const defaultMission = {
    paragraphs: [
        'The primary purpose of Kalinga University is to become a global education hub in which faculty, staff, and students can discover, examine critically, preserve, and transmit the knowledge, wisdom, and values that will ensure the survival of future generations and improve the quality of life for all.',
        'The University seeks to help students develop an understanding and appreciation for the complex cultural and physical worlds in which they live and to realise their highest potential of intellectual, physical, and human development.',
    ],
    pointsHeading: "To fulfill our mission, we:",
    points: [
        'Offer broad and balanced academic programs that are mutually reinforcing and emphasise high-quality and creative instruction at the undergraduate, graduate, professional, and postgraduate levels.',
        'Generate new knowledge through a broad array of scholarly research and creative endeavours, which provide a foundation for dealing with the immediate and long-range needs of society.',
        'Achieve leadership in each discipline, strengthen interdisciplinary studies, and pioneer new fields of learning.',
        'Promote the use of new technologies in Teaching and Research.',
        'Inculcate the right values in students for their holistic development.',
    ]
};

export default function VisionMissionUpdated({
    visionTitle = "Vision",
    missionTitle = "Mission",
    visionText = defaultVision,
    missionText = defaultMission,
    imageSrc = "https://cdn.kalingauniversity.ac.in/admission/student-img.png",
    imageAlt = "Vision and Mission Student",
}) {
    return (
        <section className="">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row md:gap-8 gap-1 items-start md:justify-center">

                    {/* Left Column: Cards */}
                    <div className="flex-1 flex flex-col gap-4 lg:pr-12 pt-0 pt-16 pb-16    ">

                        {/* Vision Card */}
                        <div className="bg-[#FFC670] rounded-[30px] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow sticky top-28 z-10">
                            <SectionHeading title={visionTitle} titleClassName="text-center mb-4" />
                            <div className="text-center">
                                {/* Vision usually short, but use component anyway or just direct text if simple */}
                                <p className="leading-relaxed text-black">{typeof visionText === 'string' ? visionText : "Vision text format error"}</p>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-[#FFC670] rounded-[30px] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative z-20">
                            <SectionHeading title={missionTitle} titleClassName="text-center mb-4" />
                            <div className="text-justify">
                                <p>
                                    <ReadMoreParagraphs text={missionText} />
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:w-[35%] flex items-center justify-center lg:items-end sticky bottom-0 self-end lg:h-fit">
                        <div className="relative w-full max-w-[400px] lg:max-w-none hidden md:block">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={500}
                                height={800}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
