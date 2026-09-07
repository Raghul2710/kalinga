'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Full-screen image viewer shared by the gallery and the IQAC achievements row.
 *
 * State lives with the caller through `useImageLightbox`, so a component that
 * already tracks a selected index can drive this without duplicating the
 * keyboard handling, the scroll lock or the overlay markup.
 */

/**
 * Tracks which image is open and wires up Escape / arrow keys and the body
 * scroll lock while it is.
 *
 * @param {number} count how many images can be stepped through
 */
export function useImageLightbox(count) {
    const [index, setIndex] = useState(null);
    const isOpen = index !== null;

    const open = useCallback((next) => setIndex(next), []);
    const close = useCallback(() => setIndex(null), []);
    const showPrev = useCallback(
        () => setIndex((i) => (i === null ? i : (i - 1 + count) % count)),
        [count]
    );
    const showNext = useCallback(
        () => setIndex((i) => (i === null ? i : (i + 1) % count)),
        [count]
    );

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowLeft') showPrev();
            else if (e.key === 'ArrowRight') showNext();
        };

        document.addEventListener('keydown', onKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, close, showPrev, showNext]);

    return { index, isOpen, open, close, showPrev, showNext };
}

/** Accepts either shape the site uses for an image record. */
const sourceOf = (image) => image?.src || image?.image;

export default function ImageLightbox({
    images = [],
    index,
    onClose,
    onPrev,
    onNext,
    showTitles = false,
}) {
    // Only ever opened by a click, so the DOM is always there to portal into.
    if (index === null || index === undefined) return null;

    const current = images[index];
    if (!current) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[200000] bg-black/90 flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Close image"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white text-3xl leading-none flex items-center justify-center transition-colors"
            >
                &times;
            </button>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrev();
                        }}
                        aria-label="Previous image"
                        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-lg bg-[var(--button-red)] hover:opacity-90 text-white flex items-center justify-center shadow-md transition-opacity"
                    >
                        <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        aria-label="Next image"
                        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-lg bg-[var(--button-red)] hover:opacity-90 text-white flex items-center justify-center shadow-md transition-opacity"
                    >
                        <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </>
            )}

            {/* Plain <img> - it sizes itself to the image's own aspect ratio,
                which next/image's fill mode cannot do inside a flex overlay */}
            <img
                src={sourceOf(current)}
                alt={current.alt || ''}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[88vh] max-w-[88vw] w-auto h-auto object-contain rounded-md shadow-2xl"
            />

            {showTitles && current.title && (
                <p className="absolute bottom-6 left-0 right-0 text-center text-white text-sm px-6">
                    {current.title}
                </p>
            )}
        </div>,
        document.body
    );
}
