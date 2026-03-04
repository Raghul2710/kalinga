"use client";

import React from 'react';
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';
import { getProxiedPdfUrl } from '../../lib/pdf-utils';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfThumbnail({ url, alt, className = "" }) {
    return (
        <div className={`w-full h-full bg-gray-100 relative overflow-hidden ${className}`}>
            <Document
                file={getProxiedPdfUrl(url)}
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
