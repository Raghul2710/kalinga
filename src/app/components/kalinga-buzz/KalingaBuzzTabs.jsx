"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../general/tab";
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';
import { useFlipbook } from "../general/FlipbookContext";
import { getProxyPdfUrl } from "@/app/lib/pdfProxy";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Component to render PDF Thumbnail
function PdfThumbnail({ url, alt }) {
    return (
        <div className="w-full h-full bg-gray-100 relative overflow-hidden">
            <Document
                file={url}
                loading={
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--button-red)]"></div>
                    </div>
                }
                error={
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 p-4 text-center">
                        <span className="text-xs">Preview unavailable</span>
                    </div>
                }
                className="w-full h-full"
            >
                <ReactPdfPage
                    pageNumber={1}
                    width={400}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="w-full h-full object-cover !min-w-full !min-h-full"
                />
            </Document>
        </div>
    );
}

function NewsletterCard({ title, href }) {
    const { openFlipbook } = useFlipbook();
    const proxyUrl = href ? getProxyPdfUrl(href) : null;

    const handleClick = (e) => {
        e.preventDefault();
        if (proxyUrl) {
            openFlipbook(proxyUrl, title);
        }
    };

    return (
        <button
            onClick={handleClick}
            className="group relative w-full aspect-[3/3] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg focus:outline-none"
        >
            {/* Image Area (PDF Thumbnail) - proxy URL avoids CORS on localhost/live */}
            <div className="absolute inset-0 w-full h-full">
                <PdfThumbnail url={proxyUrl || href} alt={title} />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5">
                <div className="flex items-end justify-between gap-4">
                    {/* Title */}
                    <p className="font-plus-jakarta-sans text-white leading-tight text-left line-clamp-2 mb-1 drop-shadow-md">
                        {title}
                    </p>

                    {/* Arrow Button */}
                    <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--button-red)] text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--dark-orange-red)] shadow-lg">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
                            <path d="M7 0L5.76625 1.23375L10.6538 6.125H0V7.875H10.6538L5.76625 12.7663L7 14L14 7L7 0Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default function KalingaBuzzTabs({ year2025 }) {
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
                :global(.react-pdf__Page__canvas) {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: cover !important;
                }
                 :global(.react-pdf__Page) {
                    width: 100% !important;
                     height: 100% !important;
                }
            `}</style>

            {/* Outer dark-blue container */}
            <div className="rounded-xl bg-[var(--dark-blue)] py-16 mx-2 sm:mx-4">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="2025" className="w-full">
                        {/* CTCD-style Tabs List */}
                        <div className="flex justify-center mb-8">
                            <TabsList className="!bg-transparent w-full max-w-4xl !flex !overflow-x-auto md:!overflow-visible justify-start md:justify-center scrollbar-hide !px-4 md:!px-0">
                                <TabsTrigger
                                    value="2025"
                                    className="flex-shrink-0 min-w-[140px] md:flex-1 break-words whitespace-nowrap shadow-sm"
                                >
                                    Kalinga Buzz 2025
                                </TabsTrigger>
                                {/* <TabsTrigger
                                    value="2021"
                                    className="flex-shrink-0 min-w-[140px] md:flex-1 break-words whitespace-nowrap shadow-sm"
                                >
                                    Kalinga Buzz 2021
                                </TabsTrigger> */}
                                {/* <TabsTrigger
                                    value="2020"
                                    className="flex-shrink-0 min-w-[140px] md:flex-1 break-words whitespace-nowrap shadow-sm"
                                >
                                    Kalinga Buzz 2020
                                </TabsTrigger> */}
                                {/* <TabsTrigger
                                    value="2019"
                                    className="flex-shrink-0 min-w-[140px] md:flex-1 break-words whitespace-nowrap shadow-sm"
                                >
                                    Kalinga Buzz 2019
                                </TabsTrigger> */}
                            </TabsList>
                        </div>

                        {/* Content Container - White Card */}
                        <div className="rounded-xl bg-white p-8">
                            <TabsContent value="2025" className="mt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {year2025?.map((item) => (
                                        <NewsletterCard key={item.id} title={item.text} href={item.href} />
                                    ))}
                                </div>
                            </TabsContent>

                            {/* <TabsContent value="2021" className="mt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {year2021?.map((item) => (
                                        <NewsletterCard key={item.id} title={item.text} href={item.href} />
                                    ))}
                                </div>
                            </TabsContent> */}

                            {/* <TabsContent value="2020" className="mt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {year2020?.map((item) => (
                                        <NewsletterCard key={item.id} title={item.text} href={item.href} />
                                    ))}
                                </div>
                            </TabsContent> */}

                            {/* <TabsContent value="2019" className="mt-0">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {year2019?.map((item) => (
                                        <NewsletterCard key={item.id} title={item.text} href={item.href} />
                                    ))}
                                </div>
                            </TabsContent> */}
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
