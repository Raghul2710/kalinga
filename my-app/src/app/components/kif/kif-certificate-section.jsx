"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '../general/SectionHeading';

const KIFCertificateSection = ({ className = "" }) => {
    const logos = [
        {
            src: "https://cdn.kalingauniversity.ac.in/kif/startup+india.png",
            alt: "Startup India"
        },
        {
            src: "https://cdn.kalingauniversity.ac.in/kif/mca.png",
            alt: "Ministry of Corporate Affairs"
        },
        {
            src: "https://cdn.kalingauniversity.ac.in/kif/msme.png",
            alt: "Ministry of MSME"
        }
    ];

    const selectionCriteria = [
        "Validation of Unique Ideas",
        "Your Solution/Product",
        "Scalability Potential",
        "Strong and well-rounded team members"
    ];

    return (
        <section className={`py-16 bg-white ${className}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col gap-8">

                        {/* Logos */}
                        <div className="flex flex-wrap justify-start gap-8 items-center">
                            {logos.map((logo, index) => (
                                <div key={index} className="relative w-32 h-20 transition-transform hover:scale-105">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        <Link
                            href="https://cdn.kalingauniversity.ac.in/kif/KIF%2BMCA_compressed_removed.pdf"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-[var(--button-red)] font-semibold text-lg hover:underline transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Ministry of Corporate Affairs Certificate
                        </Link>

                        {/* Selection Criteria */}
                        <div className="bg-[var(--lite-sand)] rounded-2xl p-6 lg:p-10 shadow-sm border border-gray-100">
                            <h3 className="mb-4">
                                Our selection criteria include:
                            </h3>
                            <ul className="space-y-3">
                                {selectionCriteria.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[var(--button-red)] flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative w-full h-[500px] lg:h-full min-h-[400px]">
                        <Image
                            src="https://cdn.kalingauniversity.ac.in/kif/k1.jpg"
                            alt="Kalinga Incubation Foundation"
                            fill
                            className="object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default KIFCertificateSection;
