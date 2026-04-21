"use client";

import { useState } from "react";
import SectionHeading from "../components/general/SectionHeading";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";

export default function NirfPage() {
    const [activeTab, setActiveTab] = useState("2026");

    const nirfData = {
        "2026": [
            { id: 1, text: "Overall", href: "https://cdn.kalingauniversity.ac.in/nirf/Kalinga-UniversityOverall-2026.pdf", useSlider: true },
            { id: 2, text: "Management", href: "#" },
            { id: 3, text: "Pharmacy", href: "https://cdn.kalingauniversity.ac.in/nirf/kalinga-university-pharamacy-2026.pdf", useSlider: true },
            { id: 4, text: "SDGs", href: "https://cdn.kalingauniversity.ac.in/nirf/Kalinga-University-SDG-2026.pdf", useSlider: true }
        ],
        "2025": [
            { id: 1, text: "Overall", href: "https://cdn.kalingauniversity.ac.in/nirf/Kalinga-University-overall-2025.pdf", useSlider: true },
            { id: 2, text: "Management", href: "#", disableFlipbook: true },
            { id: 3, text: "Pharmacy", href: "https://cdn.kalingauniversity.ac.in/nirf/Kalinga-University-pharmacy-13-jan-2025-submitted.pdf", useSlider: true },
            { id: 4, text: "SDGs", href: "https://cdn.kalingauniversity.ac.in/nirf/SDG-Kalinga-University-Raipur.pdf", useSlider: true }
        ],
        "2024": [
            { id: 1, text: "Overall", href: "https://cdn.kalingauniversity.ac.in/nirf/Kalinga-University-Raipur20240131.pdf", useSlider: true }
        ]
    };

    const TABS = ["2026", "2025", "2024"];

    return (
        <section className="w-full py-4 px-2">
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            <SectionHeading
                title="National Institutional Ranking Framework"
                titleClassName="text-center mb-8" />

            <div className="flex flex-col lg:flex-row gap-4 bg-[var(--dark-blue)] py-16 md:px-10 px-4 rounded-xl">
                {/* Vertical Tabs on Left (Horizontal Scroll on Mobile) */}
                <div className="w-full lg:w-80 flex-shrink-0">
                    <div className="rounded-[16px] bg-[var(--dark-blue)]">
                        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
                            {TABS.map((tab) => {
                                const isActive = activeTab === tab;
                                const className = `
                                    flex-shrink-0 lg:w-full text-left px-4 py-5 rounded-[8px] 
                                    font-plus-jakarta-sans text-sm md:text-base font-semibold
                                    transition-all duration-200
                                    ${isActive
                                        ? "bg-[var(--button-red)] text-white font-semibold"
                                        : "bg-[var(--lite-sand)] text-[var(--foreground)] hover:opacity-90"
                                    }
                                `;

                                return (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={className}
                                    >
                                        {tab}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Content Area - White Background */}
                <div className="flex-1 w-full">
                    <div className="rounded-[16px] bg-white p-4 md:p-5 shadow-sm h-full flex flex-col justify-center min-h-[300px]">
                        <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-8 text-center">
                            NIRF {activeTab}
                        </h2>
                        <ResearchSixGridButtons
                            buttons={nirfData[activeTab]}
                            noSection={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}