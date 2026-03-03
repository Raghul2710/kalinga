"use client";

import React, { useState } from "react";
import SectionHeading from "../general/SectionHeading";

export default function RaipurVideoSection({
    videoId = "wKYgVIOYENo",
    thumbnail = "https://cdn.kalingauniversity.ac.in/about-raipur/raipur1.webp",
    title = "Smart City Raipur",
    description = "", // optional
    alt = "Video thumbnail",
    heightClass = "h-[380px] sm:h-[420px] md:h-[520px]", // optional, keep default
    className = "", // optional wrapper class
}) {
    const [play, setPlay] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const showReadMore = Boolean(description && description.trim().length > 0);

    return (
        <div className={`w-full flex justify-center pb-20 ${className}`}>
            <div className="w-full max-w-[1200px] rounded-xl md:rounded-2xl overflow-hidden relative mx-2">
                {/* If not playing → show thumbnail */}
                {!play && (
                    <img
                        src={thumbnail}
                        alt={alt}
                        className={`w-full ${heightClass} object-cover`}
                    />
                )}

                {/* If playing → show YouTube video */}
                {play && (
                    <iframe
                        className={`w-full ${heightClass}`}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={title}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )}

                {/* Overlays only when not playing */}
                {!play && <div className="absolute inset-0" />}
                {!play && isExpanded && showReadMore && (
                    <div className="absolute inset-0 bg-black/40" />
                )}
                {!play && (
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                )}

                {/* Play Button (hidden when playing) */}
                {!play && (
                    <div className="absolute inset-0 flex justify-center items-center">
                        <div
                            onClick={() => setPlay(true)}
                            className="w-14 h-14 md:w-16 md:h-16 bg-[var(--background)]/60 opacity-80 rounded-full flex justify-center items-center cursor-pointer hover:bg-[var(--background)]/40 transition mb-4 md:mb-8"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && setPlay(true)}
                            aria-label="Play video"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="var(--background)"
                                viewBox="0 0 24 24"
                                className="w-7 h-7 md:w-8 md:h-8 ml-1"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                )}

                {/* Text Content */}
                <div className="absolute bottom-6 md:bottom-10 w-full text-center px-4 md:px-6">
                    <div className="mb-2 md:mb-3">
                        <SectionHeading
                            title={title}
                            titleClassName="text-white !text-2xl md:!text-[40px]"
                        />
                    </div>

                    {showReadMore && (
                        <div className="max-w-5xl mx-auto">
                            <p
                                className={`text-white text-xs sm:text-sm md:text-base leading-relaxed ${!isExpanded ? "line-clamp-2 md:line-clamp-none" : ""
                                    }`}
                            >
                                {description}
                            </p>

                            {/* Toggle only on mobile */}
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="md:hidden mt-2 text-white text-xs font-semibold underline hover:no-underline transition-all"
                            >
                                {isExpanded ? "Read Less" : "Read More"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
