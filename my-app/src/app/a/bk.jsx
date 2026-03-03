'use client';

import React from 'react';
import FlipbookTrigger from '../components/general/FlipbookTrigger';

const pdfLinks = [
    {
        title: 'Pharmacy Magazine',
        url: 'https://cdn.kalingauniversity.ac.in/downloads/pharmacy_magazine.pdf',
        color: 'from-blue-600 to-indigo-700'
    },
    {
        title: 'NCC Newsletter',
        url: 'https://cdn.kalingauniversity.ac.in/downloads/ncc_newsletter.pdf',
        color: 'from-emerald-600 to-teal-700'
    },
    {
        title: 'University Prospectus',
        url: 'https://cdn.kalingauniversity.ac.in/downloads/prospectus.pdf',
        color: 'from-orange-500 to-red-600'
    },
    {
        title: 'Academic Calendar',
        url: 'https://cdn.kalingauniversity.ac.in/downloads/academic_calendar.pdf',
        color: 'from-purple-600 to-pink-600'
    }
];

export default function FlipbookDemoPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-stix text-gray-900 mb-4">University Publications</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our latest magazines, newsletters, and academic documents in our interactive 3D flipbook viewer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pdfLinks.map((pdf, index) => (
                        <FlipbookTrigger
                            key={index}
                            pdfUrl={pdf.url}
                            title={pdf.title}
                        >
                            <button className={`group relative h-48 w-full rounded-2xl bg-gradient-to-br ${pdf.color} p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between text-left overflow-hidden ring-1 ring-white/20`}>
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h2 className="text-xl font-bold text-white leading-tight">{pdf.title}</h2>
                                </div>
                                <div className="relative z-10 flex items-center text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                                    <span>Read Magazine</span>
                                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>

                                {/* Decorative elements */}
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                            </button>
                        </FlipbookTrigger>
                    ))}
                </div>
            </div>
        </div>
    );
}
