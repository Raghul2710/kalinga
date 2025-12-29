// ✅ 3) ACADEMIC CARDS (Modal + Link Navigation) — INCLUDES "Animal House"
// File: academiccards.jsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import Cards from "../ccrc/cards";

function Academiccards() {
    const wrapperRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: "", description: "" });

    const PLACEHOLDER =
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png";

    const cards = [
        {
            title: "Digital Classrooms",
            description:
                "Our classrooms have smart boards, projectors, and audio-visual tools, which make learning fun and interactive. Students actively use these tools for presentations and collaborative learning.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/digitalclassrooms.webp",
            logoSrc: "",
            subtitle: "ACADEMIC INFRASTRUCTURE",
        },
        {
            title: "Resource-Rich Library",
            description:
                "Our library is packed with the latest collection of books, journals, research papers, digital resources, magazines, and newspapers to support academic and research excellence.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/resourcerichlibrary.webp",
            logoSrc: "",
            subtitle: "ACADEMIC INFRASTRUCTURE",
            // link: "/library",
        },
        {
            title: "Modern Laboratories",
            description:
                "We have over 90+ laboratories, including language labs, central instrumentation facilities, computer labs with 1600+ high-tech systems, and advanced research labs.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/modernlabrotary.webp",
            logoSrc: "",
            subtitle: "RESEARCH & PRACTICAL LEARNING",
        },
        {
            title: "Incubation Centre",
            description:
                "Kalinga Incubation Foundation (KIF) supports students’ entrepreneurial ideas and helps transform them into successful startup ventures through mentorship, networking, and seed funding.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif.png",
            logoSrc: "",
            subtitle: "INNOVATION & STARTUPS",
            // link: "/incubation-centre",
        },
        {
            title: "Moot Court",
            description:
                "Our Moot Court provides law students with a real courtroom experience, helping them participate in trials, competitions, and practical legal training to build confidence.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/mootcourt.webp",
            logoSrc: "",
            subtitle: "LEGAL EDUCATION",
        },
        {
            title: "Centres of Excellence",
            description:
                "We collaborate with leading industry partners to offer skill-based training in EVs, IIoT, Robotics, AI & ML, MSME, Automobile Engineering, Coding, Drones, and more.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/bosch/bosch-glimpse2.webp",
            logoSrc: "",
            subtitle: "INDUSTRY COLLABORATIONS",
            link: "/centres-of-excellence",
        },
        {
            title: "Film Making Studio",
            description:
                "Our fully equipped film making studio enables students to learn script writing, acting, direction, lighting, editing, set design, camera handling, and live streaming.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/filmmakingstudio.webp",
            logoSrc: "",
            subtitle: "CREATIVE ARTS",
        },
        {
            title: "Podcast Studio",
            description:
                "The soundproof podcast studio is equipped with professional microphones and recording equipment, providing students with an ideal space for content creation.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/recording-studios.webp",
            logoSrc: "",
            subtitle: "MEDIA & COMMUNICATION",
        },
        {
            title: "Internship Programs & Hands-on Training",
            description:
                "We provide on-campus and off-campus internships along with hands-on training programs to enhance real-world skills and make students job-ready.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/education.webp",
            logoSrc: "",
            subtitle: "CAREER READINESS",
        },
        {
            title: "ERP Portal",
            description:
                "Every student has access to the ERP portal for academic curriculum, exam schedules, results, notices, transportation details, and other essential information.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/student-erp.webp",
            logoSrc: "",
            subtitle: "DIGITAL SERVICES",
            // link: "/erp-portal",
        },
        {
            title: "Animal House",
            description:
                "A safe and well-maintained animal house supports experimental studies and research in pharmacy, biotechnology, and life sciences, following strict ethical guidelines.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/animal+house.webp",
            logoSrc: "",
            subtitle: "RESEARCH FACILITIES",
            // link: "/animal-house",
        },
        {
            title: "Audio-Visual Centre",
            description:
                "The audio-visual centre offers advanced tools and resources that support interactive learning, presentations, and student projects.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/audiovisualcentre.webp",
            logoSrc: "",
            subtitle: "LEARNING SUPPORT",
        },
        {
            title: "Auditorium, Seminar Halls & Board Rooms",
            description:
                "Our digitally equipped auditorium, seminar halls, and board rooms host conferences, guest lectures, placement programs, training sessions, and campus events.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/seminar-rooms.webp",
            logoSrc: "",
            subtitle: "EVENT INFRASTRUCTURE",
            // link: "/auditorium-and-halls",
        },
        {
            title: "E-Learning Rooms (SWAYAM / MOOCs)",
            description:
                "E-learning rooms offer high-speed internet, printing facilities, and access to digital libraries, online courses, and research databases.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/elearning.webp",
            logoSrc: "",
            subtitle: "DIGITAL EDUCATION",
        },
        {
            title: "Training & Placement Cell",
            description:
                "The TnP cell conducts interview preparation, resume building, soft skills training, and organises campus placement drives for students.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alimini-meet2.webp",
            logoSrc: "",
            subtitle: "CAREER SERVICES",
            // link: "/training-and-placement",
        },
        {
            title: "Scholarships",
            description:
                "Students can avail scholarships up to 100% based on eligibility, including merit-based, sports, entrance exams, content creators, and more.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/scolarships.webp",
            logoSrc: "",
            subtitle: "STUDENT SUPPORT",
            // link: "/scholarships",
        },
        {
            title: "Research Facilities",
            description:
                "High-tech instruments, research labs, centres of excellence, IPR cell, and dedicated faculty support undergraduate, postgraduate, and Ph.D. research.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/science.webp",
            logoSrc: "",
            subtitle: "ADVANCED RESEARCH",
            // link: "/research-facilities",
        },
        {
            title: "Value Added Courses",
            description:
                "Short-term certificate courses conducted by industry experts help students enhance their skills and add value to their resumes.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/valueaddedcourses.webp",
            logoSrc: "",
            subtitle: "SKILL DEVELOPMENT",
            link: "/value-added-courses",
        },
        {
            title: "Counselling Support",
            description:
                "Experienced counsellors provide one-on-one sessions to support students facing academic stress or personal challenges.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/conselling.webp",
            logoSrc: "",
            subtitle: "STUDENT WELLBEING",
        },
        {
            title: "Recording Studio",
            description:
                "Our recording studio offers advanced tools for producing high-quality audio and video content, supporting creative expression.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/recordingstudio.webp",
            logoSrc: "",
            subtitle: "MEDIA PRODUCTION",
        },
        {
            title: "Career Development Centre",
            description:
                "The Career Development Centre guides students with job search strategies, training programs, internships, and placement opportunities.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/careerdevelopmentcentre.webp",
            logoSrc: "",
            subtitle: "PROFESSIONAL GROWTH",
        },
        {
            title: "Business Lab",
            description:
                "The business lab provides advanced systems and software to help commerce and management students master data analysis and decision-making tools.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/businesslab.webp",
            logoSrc: "",
            subtitle: "MANAGEMENT STUDIES",
        },
        {
            title: "Statistical Database Lab",
            description:
                "This lab equips students and researchers with advanced statistical analysis techniques to analyse, interpret, and present data effectively.",
            imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/research-and-statistical-database-lab1.webp",
            logoSrc: "",
            subtitle: "DATA & ANALYTICS",
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
        .academic-cards-wrapper img {
          width: 100% !important;
          height: 340px !important;
          object-fit: cover !important;
        }

        .academic-cards-wrapper img[src=""],
        .academic-cards-wrapper img:not([src]) {
          display: none !important;
        }
      `}</style>

            <div ref={wrapperRef} onClickCapture={handleClickCapture} className="academic-cards-wrapper">
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

export default Academiccards;
