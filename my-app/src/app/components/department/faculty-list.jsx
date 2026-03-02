"use client";

import React from "react";
import SectionHeading from "../general/SectionHeading";

const FacultyCard = ({ name, designation, department }) => {
    return (
        <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group h-full relative border border-gray-100/50">
            <div>
                <h3 className="text-[var(--button-red)] text-lg mb-1 leading-snug font-plus-jakarta-sans">
                    {name}
                </h3>
                <p className="tracking-wide text-black">
                    {designation}
                </p>
                {department && (
                    <p className="tracking-wide text-black mt-1">
                        {department}
                    </p>
                )}
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-4 right-4">
                <div className="bg-[var(--button-red)] text-white w-8 h-8 flex items-center justify-center rounded-lg shadow-sm">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform -rotate-45"
                    >
                        <path
                            d="M7 0L5.76625 1.23375L10.6538 6.125H0V7.875H10.6538L5.76625 12.7663L7 14L14 7L7 0Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default function FacultyList({ items, title = "Our Faculty", description, departmentName }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <SectionHeading title={title} titleClassName="text-center !py-2" />
                </div>

                <div className="bg-[var(--dark-blue)] rounded-[32px] p-8 md:p-12 lg:p-16 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {items.map((faculty, index) => (
                            <FacultyCard
                                key={index}
                                name={faculty.name}
                                designation={faculty.designation}
                            // department={departmentName}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
