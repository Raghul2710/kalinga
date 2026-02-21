"use client";

import React from 'react';
import SectionHeading from '../general/SectionHeading';
import GlobalArrowButton from '../general/global-arrow_button';
import Link from 'next/link';

const phdSpecializations = [
    "Biochemistry",
    "Bioinformatics",
    "Biotechnology",
    "Botany",
    "Chemistry",
    "Civil Engineering",
    "Economics",
    "Forensic Science",
    "Journalism and Mass Communication",
    "Mechanical Engineering",
    "Microbiology",
    "Pharmacy",
    "Physics",
    "Yoga",
    "Zoology"
];

export default function SpecializationCard() {
    return (
        <section className="py-16 bg-white mx-2 rounded-xl">
            <div className="container mx-auto px-2">
                <div className="text-center mb-10">
                    <SectionHeading
                        subtitle="Explore Research Areas"
                        title="Our Ph.D. Specialisations"
                        subtitleClassName="text-[var(--button-red)] text-center"
                        titleClassName="text-center"
                    />
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                        Choose from a wide range of PhD specialisations across various disciplines and embark on a journey of academic excellence and research innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {phdSpecializations.map((spec, index) => (
                        <div
                            key={index}
                            className="bg-[var(--background)] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full"
                        >
                            <div>
                                <div className="w-12 h-1 bg-[var(--button-red)] mb-6 rounded-full transition-all duration-300 group-hover:w-20" />
                                <h3 className="text-xl sm:text-2xl font-plus-jakarta-sans text-[var(--foreground)] font-semibold mb-4 leading-tight">
                                    {spec}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
                                    Pursue advanced research in <span className="text-[var(--foreground)] font-medium">{spec}</span> with access to modern laboratories, expert supervision, and a collaborative environment.
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                <Link href="/admissions" className="w-full">
                                    <GlobalArrowButton
                                        className="!bg-[var(--button-red)] !text-white w-full justify-between"
                                        arrowClassName="!bg-white"
                                        arrowIconClassName="!text-[var(--button-red)]"
                                    >
                                        Apply Now
                                    </GlobalArrowButton>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
