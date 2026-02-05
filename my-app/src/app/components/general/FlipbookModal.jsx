'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const PAGE_FLIP_SOUND_URL = 'https://kalinga-university.s3.ap-south-1.amazonaws.com/sound/pageflipsound.mp3';

const PDFPage = React.forwardRef((props, ref) => {
    return (
        <div className="bg-white shadow-lg overflow-hidden" ref={ref}>
            {props.children}
        </div>
    );
});

PDFPage.displayName = 'PDFPage';

const FlipbookModal = ({ isOpen, onClose, pdfUrl, title }) => {
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
        if (!isOpen) return;

        // Reset state for new PDF
        setNumPages(null);
        setCurrentPage(0);
        setPageInputValue('1');
        setPagesToRender(4);

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
    }, [isOpen, pdfUrl]);

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

    if (!isOpen) return null;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const isMobile = containerWidth < 768;
    const bookWidth = isMobile ? Math.min(containerWidth - 30, 400) : Math.min(containerWidth - 100, 1000) / 2;
    const bookHeight = isMobile ? bookWidth * 1.41 : (bookWidth * 1.41) * 0.9;

    return (
        <div className="fixed inset-0 z-[20000] flex flex-col items-center justify-center animate-in fade-in duration-300">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={() => {
                    unlockAudio();
                    onClose();
                }}
            ></div>

            {/* Modal Content */}
            <div
                className="flex-1 w-full flex items-center justify-center p-4 md:p-12 pointer-events-none overflow-hidden"
                ref={containerRef}
                onClick={unlockAudio}
            >
                <div className="flex items-center justify-center w-full pointer-events-auto">
                    {/* 4px White Border Frame with Integrated Header */}
                    <div className="bg-white/10 rounded-sm border-[4px] border-white shadow-2xl relative flex flex-col overflow-hidden">

                        {/* Integrated Header Bar */}
                        <div className="w-full bg-black/60 border-b border-white/20 px-4 py-2 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <h2 className="text-white text-sm md:text-base font-medium truncate max-w-[120px] md:max-w-md">
                                    {title || 'Magazine'}
                                </h2>
                                <div className="flex items-center gap-1 text-white/70 text-xs md:text-sm">
                                    <input
                                        type="text"
                                        value={pageInputValue}
                                        onChange={handlePageInputChange}
                                        onBlur={handlePageInputBlur}
                                        onKeyDown={handlePageInputKeyDown}
                                        className="w-10 bg-white/10 border border-white/20 rounded text-center text-white focus:outline-none focus:border-white/50 transition-colors py-0.5"
                                    />
                                    <span>/ {numPages || '--'}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Navigation Controls */}
                                <div className="flex items-center bg-white/10 rounded overflow-hidden border border-white/10 mr-2">
                                    <button
                                        onClick={handlePrev}
                                        disabled={currentPage === 0}
                                        className="p-1 px-2 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors border-r border-white/10"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6"></polyline>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={numPages && currentPage >= numPages - 1}
                                        className="p-1 px-2 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </button>
                                </div>

                                {/* Action Buttons */}
                                <button
                                    onClick={handleOpenExternal}
                                    className="p-1.5 md:p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-colors"
                                    title="Open PDF in New Tab"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </button>

                                <button
                                    onClick={onClose}
                                    className="p-1.5 md:p-2 bg-[#7a1c1d] hover:bg-[#962426] text-white rounded transition-colors"
                                    title="Close"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Flipbook Content area */}
                        <div className="p-1">
                            <Document
                                file={pdfUrl}
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={
                                    <div className="flex flex-col items-center justify-center min-h-[400px] min-w-[300px]">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                                        <p className="mt-4 text-white font-medium">Preparing Flipbook...</p>
                                    </div>
                                }
                            >
                                {numPages && (
                                    <HTMLFlipBook
                                        width={bookWidth}
                                        height={bookHeight}
                                        size="fixed"
                                        minWidth={200}
                                        maxWidth={1000}
                                        minHeight={300}
                                        maxHeight={1500}
                                        maxShadowOpacity={0.5}
                                        showCover={isMobile}
                                        mobileScrollSupport={true}
                                        className="magazine-flipbook"
                                        usePortrait={isMobile}
                                        onFlip={onFlip}
                                        ref={bookRef}
                                        startZIndex={100}
                                    >
                                        {(() => {
                                            const pages = [...Array(numPages).keys()].map((p) => (
                                                <PDFPage key={p}>
                                                    {p < pagesToRender ? (
                                                        <ReactPdfPage
                                                            pageNumber={p + 1}
                                                            width={bookWidth}
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
                                                                <div className="h-10 w-10 bg-white/10 rounded-full mb-2 border border-white/20"></div>
                                                                <div className="h-2 w-20 bg-white/10 rounded border border-white/20"></div>
                                                                <p className="mt-2 text-white/40 text-[10px] uppercase tracking-widest font-medium">Loading Page {p + 1}</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </PDFPage>
                                            ));

                                            // Add a blank page if the total number of pages is odd on desktop to prevent "loading" states on spreads
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
                                )}
                            </Document>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .magazine-flipbook {
                    box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.7);
                }
            `}</style>
        </div>
    );
};

export default FlipbookModal;
