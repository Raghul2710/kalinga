'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfSliderModal = ({ isOpen, onClose, pdfUrl, title, maxVisiblePages = 5, limitPages, lockAfterInitialPages = false }) => {
    const [numPages, setNumPages] = useState(null);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const initialPages = limitPages || 3;
    const [visiblePagesCount, setVisiblePagesCount] = useState(initialPages);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisiblePagesCount(initialPages);
            setIsLoadingMore(false);
        }
    }, [isOpen, initialPages]);

    useEffect(() => {
        if (!isOpen) return;

        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('resize', updateWidth);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const shouldLockPreview = Boolean(lockAfterInitialPages);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setVisiblePagesCount(initialPages);

        if (!shouldLockPreview && numPages > initialPages) {
            setIsLoadingMore(true);
            setTimeout(() => {
                setVisiblePagesCount((prev) => Math.min(prev + maxVisiblePages, numPages));
                setIsLoadingMore(false);
            }, 700);
        }
    }

    const handleScroll = (e) => {
        if (shouldLockPreview) return;
        if (isLoadingMore) return;
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollHeight - scrollTop <= clientHeight * 1.5) {
            if (numPages && visiblePagesCount < numPages) {
                setIsLoadingMore(true);
                setTimeout(() => {
                    setVisiblePagesCount(prev => Math.min(prev + maxVisiblePages, numPages));
                    setIsLoadingMore(false);
                }, 400);
            }
        }
    };

    const pageWidth = Math.min(containerWidth - 40, 800);

    return (
        <div className="fixed inset-0 z-[20000] flex flex-col items-center justify-center animate-in fade-in duration-300">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl h-[90vh] flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl z-10 mx-4">

                {/* Floating Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-[20005] bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all shadow-lg backdrop-blur-md"
                    title="Close"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* PDF List / Area */}
                <div
                    ref={containerRef}
                    onScroll={handleScroll}
                    className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-100 flex flex-col items-center gap-8 custom-scrollbar pt-20"
                >
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="flex flex-col items-center justify-center p-20">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--dark-blue)]"></div>
                                <p className="mt-4 text-[var(--dark-blue)] font-medium">Loading Preview...</p>
                            </div>
                        }
                    >
                        {numPages && Array.from(new Array(visiblePagesCount), (el, index) => {
                            return (
                                <div
                                    key={`page_${index + 1}`}
                                    className="relative shadow-xl rounded-sm overflow-hidden"
                                    style={{ width: pageWidth }}
                                >
                                    <Page
                                        pageNumber={index + 1}
                                        width={pageWidth}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                        className="bg-white"
                                    />

                                    {/* Page Number Badge */}
                                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-[10px] font-bold z-20">
                                        PAGE {index + 1}
                                    </div>
                                </div>
                            );
                        })}
                    </Document>

                    {(isLoadingMore || (shouldLockPreview && numPages > visiblePagesCount)) && (
                        <div className="flex flex-col items-center justify-center py-4">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--dark-blue)]"></div>
                            <p className="mt-2 text-sm text-[var(--dark-blue)]">Loading more pages...</p>
                        </div>
                    )}

                    {/* Final CTA */}
                    {/* <div className="flex justify-center w-full mb-12">
                        <button 
                            onClick={() => window.open(pdfUrl, '_blank')}
                            className="bg-[var(--button-red)] hover:bg-[#7a1c1d] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                        >
                            View Full PDF
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PdfSliderModal;
