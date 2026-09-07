'use client';

import React from "react";
import Image from "next/image";
import LogoLoop from "../gsap/LogoLoop";
import ImageLightbox, { useImageLightbox } from "../general/ImageLightbox";

export default function TwoLogo({ logos }) {
    // Hooks run before the early return so their order stays stable.
    const lightbox = useImageLightbox(logos?.length || 0);

    if (!logos || logos.length === 0) return null;

    return (
        <div className="w-full flex flex-col items-center justify-center my-8 overflow-hidden">
            {/* Centered Major Achievements Text */}
            <div className="mb-6">
                <h2 className="font-stix mb-2 text-[var(--foreground)] !py-2">
                    Major Achievements
                </h2>
            </div>

            {/* Scrolling Logos */}
            <div className="w-full relative py-2">
                <LogoLoop
                    logos={logos}
                    speed={60}
                    direction="left"
                    logoHeight={200}
                    gap={32}
                    pauseOnHover={true}
                    ariaLabel="Major Achievement Logos"
                    renderItem={(logo) => (
                        // These are certificates and rankings, so they are worth
                        // reading full size rather than at card scale.
                        <button
                            type="button"
                            // LogoLoop's second argument is a copy-scoped string key
                            // ("0-3"), not an index, and it repeats the same logo
                            // objects per copy — so resolve the real index here.
                            onClick={() => lightbox.open(logos.indexOf(logo))}
                            aria-label={`View ${logo.alt || logo.name || "achievement"} full size`}
                            className="flex items-center justify-center bg-transparent border-[1.5px] border-gray-300 rounded-xl p-4 w-64 h-48 sm:w-80 sm:h-64 shadow-sm transition-all hover:shadow-md cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-red)]"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt || logo.name || "Achievement Logo"}
                                width={logo.width || 200}
                                height={logo.height || 100}
                                className="object-contain w-auto !h-full"
                            />
                        </button>
                    )}
                />
            </div>

            <ImageLightbox
                images={logos}
                index={lightbox.index}
                onClose={lightbox.close}
                onPrev={lightbox.showPrev}
                onNext={lightbox.showNext}
            />
        </div>
    );
}
