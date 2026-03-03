'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const PAGE_FLIP_SOUND_URL = 'https://cdn.kalingauniversity.ac.in/sound/pageflipsound.mp3';

const PDFPage = React.forwardRef((props, ref) => {
    return (
        <div className="bg-white shadow-lg overflow-hidden" ref={ref}>
            {props.children}
        </div>
    );
});

PDFPage.displayName = 'PDFPage';

const InlineFlipbook = ({ pdfUrl, title }) => {
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageInputValue, setPageInputValue] = useState('1');
    const [pagesToRender, setPagesToRender] = useState(4);
    const [containerWidth, setContainerWidth] = useState(0);
    const isAudioUnlocked = useRef(false);
    const containerRef = useRef(null);
    const bookRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        // Preload audio
        audioRef.current = new Audio(PAGE_FLIP_SOUND_URL);
        audioRef.current.load();
    }, []);

    useEffect(() => {
        // Reset pages to render when URL changes
        setPagesToRender(4);

        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, [pdfUrl]);

    const onFlip = useCallback((e) => {
        const flippedPage = e.data;
        setCurrentPage(flippedPage);
        setPageInputValue((flippedPage + 1).toString());

        // Play page flip sound
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(err => console.debug('Audio play failed:', err));
        }

        // Lazy load: if we are within 2 pages of the end of current rendered set, load more
        if (flippedPage + 2 >= pagesToRender && pagesToRender < numPages) {
            setPagesToRender(prev => Math.min(prev + 4, numPages));
        }
    }, [pagesToRender, numPages]);

    const handlePageInputChange = (e) => {
        setPageInputValue(e.target.value);
    };

    const handlePageInputBlur = () => {
        const pageNum = parseInt(pageInputValue);
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= numPages) {
            bookRef.current.pageFlip().turnToPage(pageNum - 1);
        } else {
            setPageInputValue((currentPage + 1).toString());
        }
    };

    const handlePageInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            handlePageInputBlur();
        }
    };

    const handlePrev = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipPrev();
        }
    };

    const handleNext = () => {
        if (bookRef.current) {
            bookRef.current.pageFlip().flipNext();
        }
    };

    const handleOpenExternal = () => {
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    };

    const unlockAudio = () => {
        if (!isAudioUnlocked.current && audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                    isAudioUnlocked.current = true;
                })
                .catch(err => console.debug('Audio unlock failed:', err));
        }
    };

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // Calculate dimensions
    const isMobile = containerWidth < 768;
    const pageWidth = isMobile ? Math.min(containerWidth - 20, 400) : Math.min((containerWidth - 60) / 2, 600);
    const pageHeight = isMobile ? pageWidth * 1.41 : pageWidth * 1.41;

    return (
        <div ref={containerRef} className="w-full" onClick={unlockAudio}>
            {/* Header */}
            <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
                    {title}
                </h3>
                <button
                    onClick={handleOpenExternal}
                    className="px-3 py-1.5 text-xs md:text-sm bg-[var(--button-red)] text-white rounded-lg hover:bg-opacity-90 transition-all"
                >
                    Open in New Tab
                </button>
            </div>

            {/* Flipbook Container - No padding, fills entire space */}
            <div
                className="relative bg-gray-100 flex flex-col items-center justify-center"
                style={{ minHeight: `${pageHeight + 50}px` }}
            >
                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="flex items-center justify-center" style={{ height: `${pageHeight}px` }}>
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)] mx-auto mb-4"></div>
                                <p className="text-gray-600">Loading PDF...</p>
                            </div>
                        </div>
                    }
                    error={
                        <div className="flex items-center justify-center" style={{ height: `${pageHeight}px` }}>
                            <div className="text-center">
                                <p className="text-red-600 mb-4">Failed to load PDF</p>
                                <button
                                    onClick={handleOpenExternal}
                                    className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-opacity-90"
                                >
                                    Open PDF in New Tab
                                </button>
                            </div>
                        </div>
                    }
                >
                    {numPages && containerWidth > 0 && (
                        <div className="flex justify-center items-center w-full">
                            <HTMLFlipBook
                                ref={bookRef}
                                width={pageWidth}
                                height={pageHeight}
                                size="stretch"
                                minWidth={200}
                                maxWidth={800}
                                minHeight={300}
                                maxHeight={1200}
                                showCover={isMobile}
                                mobileScrollSupport={true}
                                onFlip={onFlip}
                                className="magazine-flipbook shadow-2xl"
                                style={{ margin: '0 auto' }}
                                drawShadow={true}
                                flippingTime={800}
                                usePortrait={isMobile}
                                startPage={0}
                                autoSize={false}
                                startZIndex={100}
                            >
                                {(() => {
                                    const pages = [...Array(numPages).keys()].map((p) => (
                                        <PDFPage key={p}>
                                            {p < pagesToRender ? (
                                                <ReactPdfPage
                                                    pageNumber={p + 1}
                                                    width={pageWidth}
                                                    renderTextLayer={false}
                                                    renderAnnotationLayer={false}
                                                    loading={
                                                        <div className="flex flex-col items-center justify-center h-full w-full bg-gray-50/50">
                                                            <div className="animate-pulse flex flex-col items-center">
                                                                <div className="h-10 w-10 bg-gray-200 rounded-full mb-2"></div>
                                                                <div className="h-2 w-20 bg-gray-200 rounded"></div>
                                                            </div>
                                                        </div>
                                                    }
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center justify-center h-full w-full bg-gray-50/30">
                                                    <div className="animate-pulse flex flex-col items-center">
                                                        <div className="h-10 w-10 bg-white/10 rounded-full mb-2 border border-gray-200"></div>
                                                        <div className="h-2 w-20 bg-white/10 rounded border border-gray-200"></div>
                                                        <p className="mt-2 text-gray-400 text-[10px] uppercase tracking-widest font-medium">Loading Page {p + 1}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </PDFPage>
                                    ));

                                    // Add a blank page if odd on desktop
                                    if (!isMobile && numPages % 2 !== 0) {
                                        pages.push(
                                            <PDFPage key="padding-page">
                                                <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center border-l border-gray-100 shadow-inner">
                                                    <div className="opacity-10">
                                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </PDFPage>
                                        );
                                    }
                                    return pages;
                                })()}
                            </HTMLFlipBook>
                        </div>
                    )}
                </Document>

                {/* Navigation Controls */}
                {numPages && (
                    <div className="mt-4 flex items-center gap-2 md:gap-4 bg-white px-3 md:px-6 py-2 md:py-3 rounded-lg shadow-lg">
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            className="px-3 md:px-4 py-1.5 md:py-2 text-sm bg-[var(--button-red)] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
                        >
                            ← Prev
                        </button>

                        <div className="flex items-center gap-1 md:gap-2">
                            <span className="text-xs md:text-sm text-gray-600">Page</span>
                            <input
                                type="text"
                                value={pageInputValue}
                                onChange={handlePageInputChange}
                                onBlur={handlePageInputBlur}
                                onKeyDown={handlePageInputKeyDown}
                                className="w-12 md:w-16 px-1 md:px-2 py-1 text-xs md:text-sm text-center border border-gray-300 rounded"
                            />
                            <span className="text-xs md:text-sm text-gray-600">of {numPages}</span>
                        </div>

                        <button
                            onClick={handleNext}
                            disabled={currentPage >= numPages - 1}
                            className="px-3 md:px-4 py-1.5 md:py-2 text-sm bg-[var(--button-red)] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
                        >
                            Next →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InlineFlipbook;
