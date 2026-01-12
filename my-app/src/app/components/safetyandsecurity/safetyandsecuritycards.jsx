"use client";

import React, { useLayoutEffect, useRef } from "react";
import Cards from "../ccrc/cards";

function Safetyandsecuritycards() {
    const wrapperRef = useRef(null);

    const cards = [
        {
            title: "Well-Trained Security Team",
            description:
                "Our well-trained security guards are available 24/7 at every point, ensuring the safety of the campus at all times.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security3.jpeg",
            logoSrc: "",
            subtitle: "CAMPUS SAFETY & SECURITY",
        },
        {
            title: "CCTV Cameras",
            description:
                "We have installed high-performing cameras to capture every minute activity, even when security guards are not present.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security1.jpg",
            logoSrc: "",
            subtitle: "CAMPUS SAFETY & SECURITY",
        },
        {
            title: "Fire Extinguishers",
            description:
                "Fire extinguishers are installed at key locations in every building, which will keep everyone safe in case of emergencies.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            logoSrc: "",
            subtitle: "CAMPUS SAFETY & SECURITY",
        },
        {
            title: "Emergency Helplines",
            description:
                "In case any student faces any issue, they can immediately contact us at _______, and they will get quick support from the security team.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            logoSrc: "",
            subtitle: "CAMPUS SAFETY & SECURITY",
        },
        {
            title: "Dedicated Women’s Safety Team",
            description:
                "We’ve a special team of women who specifically guard female students on our campus.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security2.jpeg",
            logoSrc: "",
            subtitle: "CAMPUS SAFETY & SECURITY",
        },
        {
            title: "Drug-Free Campus",
            description:
                "Our professional security guards are on duty all the time to ensure that no drug is entered into our campus and take strict action against students who get involved in such activities.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
            logoSrc: "",
            subtitle: "CAMPUS SAFETY & SECURITY",
        },
    ];

    // ✅ Hide "Know More" BEFORE first paint (no flash)
    useLayoutEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        // hide the Know More buttons
        const btns = root.querySelectorAll(".absolute.left-5.bottom-4");
        btns.forEach((btn) => (btn.style.display = "none"));

        // show cards after cleanup
        root.style.visibility = "visible";
    }, []);

    return (
        <>
            <h2 className="mb-1 text-black text-left md:text-center">
                Our Security Measures
            </h2>

            <style jsx global>{`
                .campus-cards-wrapper img {
                    width: 100% !important;
                    object-fit: cover !important;
                    border-radius: 0.75rem;
                }

                @media (min-width: 1024px) {
                    .campus-cards-wrapper img {
                        height: 340px !important;
                    }
                }

                @media (min-width: 641px) and (max-width: 1023px) {
                    .campus-cards-wrapper img {
                        height: 280px !important;
                    }
                }

                @media (max-width: 640px) {
                    .campus-cards-wrapper img {
                        height: 220px !important;
                        padding: 6px;
                    }
                }

                .campus-cards-wrapper img[src=""],
                .campus-cards-wrapper img:not([src]) {
                    display: none !important;
                }
            `}</style>

            {/* ✅ Prevent flash */}
            <div
                ref={wrapperRef}
                className="campus-cards-wrapper"
                style={{ visibility: "hidden" }}
            >
                <Cards cards={cards} />
            </div>
        </>
    );
}

export default Safetyandsecuritycards;
