# 📦 All-in-One Flipbook Implementation Pack

This document contains **every single line of code** and **every instruction** you need to implement the PDF Flipbook trigger system on a completely new website.

---

## 🛠️ Step 1: Install Dependencies
Run this in your new project's root:
```bash
npm install react-pageflip react-pdf pdfjs-dist
```

---

## 💻 Step 2: The Code (Copy-Paste Files)

Create a folder named `components/flipbook/` and create these 5 files:

### 1. `FlipbookContext.jsx`
```javascript
'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import FlipbookModal from './FlipbookModal';

const FlipbookContext = createContext(undefined);

export const FlipbookProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');
    const [title, setTitle] = useState('');

    const openFlipbook = useCallback((url, docTitle = '') => {
        setPdfUrl(url);
        setTitle(docTitle);
        setIsOpen(true);
    }, []);

    const closeFlipbook = useCallback(() => setIsOpen(false), []);

    return (
        <FlipbookContext.Provider value={{ openFlipbook, closeFlipbook }}>
            {children}
            <FlipbookModal isOpen={isOpen} onClose={closeFlipbook} pdfUrl={pdfUrl} title={title} />
        </FlipbookContext.Provider>
    );
};

export const useFlipbook = () => {
    const context = useContext(FlipbookContext);
    if (!context) throw new Error('useFlipbook must be used within a FlipbookProvider');
    return context;
};
```

### 2. `FlipbookModal.jsx`
```javascript
'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const PDFPage = React.forwardRef((props, ref) => (
    <div className="bg-white shadow-lg overflow-hidden" ref={ref}>{props.children}</div>
));
PDFPage.displayName = 'PDFPage';

const FlipbookModal = ({ isOpen, onClose, pdfUrl, title }) => {
    const [numPages, setNumPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef(null);
    const bookRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;
        const updateWidth = () => containerRef.current && setContainerWidth(containerRef.current.offsetWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('resize', updateWidth);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const isMobile = containerWidth < 768;
    const bookWidth = isMobile ? containerWidth - 30 : (containerWidth - 100) / 2;
    const bookHeight = bookWidth * 1.41;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose}></div>
            <div className="flex-1 w-full flex items-center justify-center p-4 md:p-12 pointer-events-none" ref={containerRef}>
                <div className="bg-white/10 rounded-sm border-[4px] border-white shadow-2xl relative flex flex-col pointer-events-auto">
                    <div className="w-full bg-black/60 border-b border-white/20 px-4 py-2 flex items-center justify-between">
                        <h2 className="text-white font-medium">{title || 'Document'}</h2>
                        <button onClick={onClose} className="p-2 bg-red-800 text-white rounded">Close</button>
                    </div>
                    <div className="p-1">
                        <Document file={pdfUrl} onLoadSuccess={({numPages}) => setNumPages(numPages)}>
                            {numPages && (
                                <HTMLFlipBook width={bookWidth} height={bookHeight} size="fixed" onFlip={(e) => setCurrentPage(e.data)} ref={bookRef}>
                                    {[...Array(numPages).keys()].map((p) => (
                                        <PDFPage key={p}>
                                            <ReactPdfPage pageNumber={p+1} width={bookWidth} renderTextLayer={false} renderAnnotationLayer={false} />
                                        </PDFPage>
                                    ))}
                                </HTMLFlipBook>
                            )}
                        </Document>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FlipbookModal;
```

### 3. `FlipbookTrigger.jsx`
```javascript
'use client';
import React from 'react';
import { useFlipbook } from './FlipbookContext';

const FlipbookTrigger = ({ pdfUrl, title, children, className = '' }) => {
    const { openFlipbook } = useFlipbook();
    const handleClick = (e) => {
        e.preventDefault();
        openFlipbook(pdfUrl, title);
    };

    if (React.Children.count(children) === 1 && React.isValidElement(children)) {
        return React.cloneElement(children, {
            onClick: handleClick,
            className: `${children.props.className || ''} ${className} cursor-pointer`.trim()
        });
    }

    return (
        <div onClick={handleClick} className={`cursor-pointer ${className}`}>
            {children}
        </div>
    );
};
export default FlipbookTrigger;
```

### 4. `InlineFlipbook.jsx` (For embedding inside a page)
```javascript
'use client';
import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFPage = React.forwardRef((props, ref) => (
    <div className="bg-white shadow-lg" ref={ref}>{props.children}</div>
));
PDFPage.displayName = 'PDFPage';

const InlineFlipbook = ({ pdfUrl, title }) => {
    const [numPages, setNumPages] = useState(null);
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => containerRef.current && setWidth(containerRef.current.offsetWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const pageWidth = width > 0 ? Math.min((width - 50) / 2, 600) : 500;
    const pageHeight = pageWidth * 1.414;

    return (
        <div ref={containerRef} className="w-full bg-gray-100 p-8 rounded-xl shadow-inner">
            <Document file={pdfUrl} onLoadSuccess={({numPages}) => setNumPages(numPages)}>
                {numPages && width > 0 && (
                    <HTMLFlipBook width={pageWidth} height={pageHeight} size="stretch">
                        {[...Array(numPages).keys()].map((p) => (
                            <PDFPage key={p}>
                                <ReactPdfPage pageNumber={p+1} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
                            </PDFPage>
                        ))}
                    </HTMLFlipBook>
                )}
            </Document>
        </div>
    );
};
export default InlineFlipbook;
```

### 5. `PdfThumbnail.jsx` (First page preview)
```javascript
"use client";
import React from 'react';
import { Document, Page as ReactPdfPage, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfThumbnail({ url, className = "" }) {
    return (
        <div className={`w-full h-full bg-gray-100 ${className}`}>
            <Document file={url} loading={<div>Loading...</div>}>
                <ReactPdfPage pageNumber={1} width={400} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        </div>
    );
}
```

---

## 🚀 Step 3: Setup & Usage

### 1. Global Setup
In your `layout.js` (Next.js) or `App.js` (Vite/CRA), wrap your app:

```javascript
import { FlipbookProvider } from './components/flipbook/FlipbookContext';

export default function RootLayout({ children }) {
  return (
    <FlipbookProvider>
      {children}
    </FlipbookProvider>
  );
}
```

### 2. Using the Trigger
Wrap any link or button with `FlipbookTrigger`:

```javascript
import FlipbookTrigger from './components/flipbook/FlipbookTrigger';

<FlipbookTrigger pdfUrl="/reports/nirf-2024.pdf" title="NIRF 2024 Report">
  <button className="bg-blue-600 text-white p-2 rounded">
     Show Ranking Flipbook
  </button>
</FlipbookTrigger>
```

---

## ⚠️ Important Note
This implementation assumes you are using **Tailwind CSS**. If you are not using Tailwind, you will need to replace classes like `fixed`, `z-[9999]`, `bg-black/80`, `rounded`, and `shadow` with your own CSS styles.
