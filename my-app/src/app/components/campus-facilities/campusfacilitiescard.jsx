// ✅ 2) CAMPUS FACILITIES CARD (Modal + Link Navigation)
// File: campusfacilitiescard.jsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import Cards from "../ccrc/cards";

function Campusfacilitiescard() {
    const wrapperRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: "", description: "" });

    const cards = [
        {
            title: "Hostel",
            description:
                "We have fully-furnished hostels for girls and boys on campus with all necessary facilities and tight security. We ensure a comfortable and safe living environment so students never face difficulties during their stay.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/hostel.webp",
            logoSrc: "",
            subtitle: "STUDENT ACCOMMODATION",
            // link: "/campus-facilities/hostel",
        },
        {
            title: "Mess",
            description:
                "In partnership with Sodexo Food Solutions India Pvt. Ltd., separate mess facilities for boys and girls serve four nutritious meals daily—breakfast, lunch, high tea, and dinner—prepared hygienically.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/mess.webp",
            logoSrc: "",
            subtitle: "DINING FACILITIES",
            // link: "/campus-facilities/mess",
        },
        {
            title: "Canteen & Cafeteria",
            description:
                "Operated in partnership with Sodexo, our canteen and cafeterias offer regular meals, fast food, fresh juices, snacks, and ice creams at affordable prices across campus.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/canteenandcafteria.webp",
            logoSrc: "",
            subtitle: "FOOD & REFRESHMENTS",
        },
        {
            title: "Transportation Options",
            description:
                "With 30+ buses and four-wheel vehicles, we provide pick-up and drop facilities covering up to 70 km (one way). Transport is offered at minimal rates with faculty proctorial supervision.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/transport-1.jpg",
            logoSrc: "",
            subtitle: "CAMPUS CONNECTIVITY",
            // link: "/campus-facilities/transport",
        },
        {
            title: "Mini Market",
            description:
                "The on-campus mini market includes an ATM, salon, stationery store, snack shop, juice centre, and chemist—saving students time by meeting daily needs within campus.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/mini-market2.webp",
            logoSrc: "",
            subtitle: "DAILY ESSENTIALS",
        },
        {
            title: "Hostel Reading Room",
            description:
                "A spacious and quiet reading room in the hostel provides a comfortable space for individual or group study without any membership requirements.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/hostelreadingroom_campusfacility.webp",
            logoSrc: "",
            subtitle: "STUDY SPACES",
        },
        {
            title: "Health Clinic",
            description:
                "Our on-campus health clinic is staffed with an experienced doctor and nurse, offering general consultation, counselling, and emergency medical support.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Health+Clinic1.webp",
            logoSrc: "",
            subtitle: "HEALTH & WELLNESS",
        },
        {
            title: "Banking and ATM",
            description:
                "We have tie-ups with Central Bank of India and Canara Bank for education loans, along with 24-hour ATMs from ICICI and OBC banks. Multiple digital payment options are supported.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/bank-atm1.png",
            logoSrc: "",
            subtitle: "FINANCIAL SERVICES",
        },
        {
            title: "24/7 Wi-Fi Enabled Campus",
            description:
                "The entire campus is equipped with high-speed 24/7 Wi-Fi with multiple ISPs, offering up to 1 Gbps secure internet connectivity supporting LMS and academic needs.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/wifienabledcampus.webp",
            logoSrc: "",
            subtitle: "DIGITAL INFRASTRUCTURE",
        },
        {
            title: "Safety & Security",
            description:
                "Our campus is secured by an in-house security team with CCTV surveillance across hostels, parking areas, and academic buildings to ensure a safe environment.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/security1.jpg",
            logoSrc: "",
            subtitle: "CAMPUS SAFETY",
        },
        {
            title: "Art Gallery",
            description:
                "The art gallery showcases souvenirs from different countries, allowing national and international students to explore cultural diversity and global traditions.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/artgallery.webp",
            logoSrc: "",
            subtitle: "CULTURAL EXPRESSION",
        },
        {
            title: "Sanitary Napkin Vending Machines",
            description:
                "Sanitary napkin vending machines are installed in all girls’ washrooms and hostels to ensure hygiene and round-the-clock accessibility for female students.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/sanitary-napkin-vending-machines.webp",
            logoSrc: "",
            subtitle: "WOMEN WELLBEING",
            // link: "/campus-facilities/women-wellbeing",
        },
        {
            title: "Recreation Corners",
            description:
                "Our peaceful recreational corners offer students a space to relax, unwind, socialize, and take breaks from academic stress in a calm environment.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/recreation.webp",
            logoSrc: "",
            subtitle: "STUDENT LIFE",
        },
        {
            title: "Selfie Points",
            description:
                "We have picturesque selfie points across campus where students can capture memorable moments and share their experiences with friends and family.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/selfiepoints.webp",
            logoSrc: "",
            subtitle: "CAMPUS EXPERIENCE",
        },
    ];

    useEffect(() => {
        const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
        if (open) document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [open]);

    const handleClickCapture = (e) => {
        const btn = e.target?.closest?.("button, a");
        if (!btn) return;

        const label = (btn.textContent || "").trim().toLowerCase();
        if (!label.includes("know more")) return;

        e.preventDefault();

        const root = wrapperRef.current;
        if (!root) return;

        const knowMoreButtons = Array.from(root.querySelectorAll("button, a")).filter((el) =>
            (el.textContent || "").trim().toLowerCase().includes("know more")
        );

        const idx = knowMoreButtons.indexOf(btn);
        const picked = cards[idx];
        if (!picked) return;

        if (picked.link) {
            window.location.assign(picked.link);
            return;
        }

        setModalData({
            title: picked?.title || "Details",
            description: picked?.description || "",
        });
        setOpen(true);
    };

    return (
        <>
            <style jsx global>{`
        .campus-cards-wrapper img {
          width: 100% !important;
          height: 340px !important;
          object-fit: cover !important;
        }

        .campus-cards-wrapper img[src=""],
        .campus-cards-wrapper img:not([src]) {
          display: none !important;
        }
      `}</style>

            <div ref={wrapperRef} onClickCapture={handleClickCapture} className="campus-cards-wrapper">
                <Cards cards={cards} />
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
                    role="dialog"
                    aria-modal="true"
                    onMouseDown={() => setOpen(false)}
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    <div
                        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">
                                {modalData.title}
                            </h3>

                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>

                        <p className="mt-4 text-[var(--light-text-gray)] leading-relaxed">
                            {modalData.description}
                        </p>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-lg bg-[var(--button-red)] px-5 py-2 text-sm font-medium text-white"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Campusfacilitiescard;
