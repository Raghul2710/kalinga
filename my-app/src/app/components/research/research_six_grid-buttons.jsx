"use client";

import { useState, useEffect } from "react";
import GlobalArrowButton from "../general/global-arrow_button";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const defaultButtons = [
  // Left Column
  {
    id: 1,
    text: "Research, Consultancy & IPR Policy",
    href: "/ipr-cell",
  },
  {
    id: 2,
    text: "Ethics Committee Constitution",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/RESEARCH+Ethics.pdf",
  },
  {
    id: 3,
    text: "Software used for Plagiarism",
    href: "/research-resources",
  },
  {
    id: 4,
    text: "Research Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/1.+Research+Policy+(2).pdf",
  },
  {
    id: 5,
    text: "Constitution of the Ethics Board for Maintaining Research Integrity",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Constitution+of+Research+Advisory+Committee.pdf",
  },
  {
    id: 6,
    text: "Research Facilities and Resources",
    href: "/research-facilities",
  },
  // Right Column
  {
    id: 7,
    text: "Research Advisory Committee",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/Constitution+of+Research+Advisory+Committee.pdf",
  },
  {
    id: 8,
    text: "Plagiarism Policy",
    href: "/research-resources",
  },
  {
    id: 9,
    text: "Ph.D. Admissions",
    href: "/phd",
  },
  {
    id: 10,
    text: "Research Integrity & Ethics Policy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/Constitution+of+Research+Advisory+Committee.pdf",
  },
  {
    id: 11,
    text: "Constitution Of the Research Advisory Committee",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/Constitution+of+Research+Advisory+Committee.pdf",
  },
  {
    id: 12,
    text: "Doctoral Research Committee",
    href: "/phd",
  },
];

export default function ResearchSixGridButtons({ buttons = defaultButtons }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Set up PDF.js worker - use jsdelivr CDN with version that matches react-pdf
  useEffect(() => {
    // react-pdf@10.2.0 uses pdfjs-dist@5.4.296, so we need to match that version
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs`;
  }, []);

  const isPdfLink = (href) => {
    return href && href.startsWith("http") && href.toLowerCase().endsWith(".pdf");
  };

  const handleButtonClick = (e, button) => {
    if (isPdfLink(button.href)) {
      e.preventDefault();
      setSelectedPdf(button.href);
      setSelectedTitle(button.text);
      setPageNumber(1);
      setNumPages(null);
      setLoading(true);
      setError(null);
      setIsModalOpen(true);
    }
    // For non-PDF links, let the default anchor behavior handle it
  };

  const handleOpenExternal = () => {
    if (selectedPdf) {
      window.open(selectedPdf, "_blank", "noopener,noreferrer");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPdf(null);
    setSelectedTitle("");
    setPageNumber(1);
    setNumPages(null);
    setLoading(true);
    setError(null);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (error) => {
    setError("Failed to load PDF. Please try opening it in a new tab.");
    setLoading(false);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(numPages || 1, prev + 1));
  };

  return (
    <>
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buttons.map((button) => {
              const isPdf = isPdfLink(button.href);
              return (
                <div key={button.id} className="block">
                  {isPdf ? (
                    <GlobalArrowButton
                      onClick={(e) => handleButtonClick(e, button)}
                      className="!w-full h-[60px] justify-between"
                      arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                      arrowSize={29}
                    >
                      {button.text}
                    </GlobalArrowButton>
                  ) : (
                    <a
                href={button.href}
                className="block"
                      target={button.href.startsWith("http") ? "_blank" : undefined}
                      rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <GlobalArrowButton
                  className="!w-full h-[60px] justify-between"
                  arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                  arrowSize={29}
                >
                  {button.text}
                </GlobalArrowButton>
              </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PDF Flipbook Modal */}
      {isModalOpen && selectedPdf && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
              <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)] pr-4">
                {selectedTitle}
              </h3>
              <div className="flex items-center gap-3">
                {/* External Link Button */}
                <button
                  onClick={handleOpenExternal}
                  className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] transition-colors text-sm font-semibold flex items-center gap-2"
                  aria-label="Open PDF in new tab"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Open in New Tab
                </button>
                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5 transition-colors"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Flipbook Viewer */}
            <div className="w-full h-[calc(90vh-100px)] bg-gray-100 flex flex-col overflow-hidden">
              {/* Navigation Controls */}
              <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 flex-shrink-0">
                <button
                  onClick={goToPrevPage}
                  disabled={pageNumber <= 1}
                  className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Previous
                </button>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">
                    Page {pageNumber} of {numPages || "..."}
                  </span>
                </div>

                <button
                  onClick={goToNextPage}
                  disabled={pageNumber >= (numPages || 1)}
                  className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* PDF Document Viewer */}
              <div className="flex-1 overflow-y-auto overflow-x-auto w-full">
                <div className="min-h-full flex items-start justify-center p-4 md:p-6">
                  {loading && (
                    <div className="text-center py-20">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)] mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading PDF...</p>
                    </div>
                  )}
                  
                  {error && (
                    <div className="text-center p-8">
                      <p className="text-red-600 mb-4">{error}</p>
                      <button
                        onClick={handleOpenExternal}
                        className="px-4 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--lite-sand)] hover:text-[var(--button-red)] transition-colors"
                      >
                        Open in New Tab
                      </button>
                    </div>
                  )}

                  {!error && !loading && (
                    <Document
                      file={selectedPdf}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      loading={
                        <div className="text-center py-20">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--button-red)] mx-auto mb-4"></div>
                          <p className="text-gray-600">Loading PDF...</p>
                        </div>
                      }
                      className="flex flex-col items-center"
                    >
                      <div className="shadow-2xl bg-white p-2 rounded-lg my-4">
                        <Page
                          pageNumber={pageNumber}
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                          className="max-w-full h-auto"
                          width={Math.min(900, typeof window !== 'undefined' ? window.innerWidth - 80 : 900)}
      />
                      </div>
                    </Document>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

