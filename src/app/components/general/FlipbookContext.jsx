'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import FlipbookModal from './FlipbookModal';
import { getProxyPdfUrl } from '@/app/lib/pdfProxy';

const FlipbookContext = createContext(undefined);

export const FlipbookProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState('');
    const [title, setTitle] = useState('');

    const openFlipbook = useCallback((url, docTitle = '') => {
        setPdfUrl(getProxyPdfUrl(url) || url);
        setTitle(docTitle);
        setIsOpen(true);
    }, []);

    const closeFlipbook = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <FlipbookContext.Provider value={{ openFlipbook, closeFlipbook }}>
            {children}
            <FlipbookModal
                isOpen={isOpen}
                onClose={closeFlipbook}
                pdfUrl={pdfUrl}
                title={title}
            />
        </FlipbookContext.Provider>
    );
};

export const useFlipbook = () => {
    const context = useContext(FlipbookContext);
    if (!context) {
        throw new Error('useFlipbook must be used within a FlipbookProvider');
    }
    return context;
};
