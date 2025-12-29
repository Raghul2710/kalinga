"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Cards from "../ccrc/cards";

/** ✅ Reusable helper: hide Know More button for cards without link/href */
function useHideKnowMoreWithoutLink(wrapperRef, cards) {
    useLayoutEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        // Cards.jsx: each card is a direct child div of the <section>
        const cardEls = root.querySelectorAll("section > div");

        cardEls.forEach((cardEl, i) => {
            const hasLink = !!cards[i]?.link || !!cards[i]?.href;

            // Know More wrapper in Cards.jsx:
            // <div className="absolute left-5 bottom-4 z-10">
            const btnWrap = cardEl.querySelector(".absolute.left-5.bottom-4");

            if (btnWrap) btnWrap.style.display = hasLink ? "" : "none";
        });
    }, [wrapperRef, cards]);
}

export default function Studentreportcards() {
    const wrapperRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: "", description: "" });

    const cards = [
        {
            title: "Student Development Programs",
            description:
                "Includes workshops, seminars, conferences, industrial visits, guest lectures, masterclasses, hands-on training programs, hackathons (coding competitions), ideathons (business plan competitions), and more.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/arts.webp",
            logoSrc: "",
            subtitle: "SKILL & CAREER DEVELOPMENT",
        },
        {
            title: "CTCD",
            description:
                "The Corporate Training and Consultancy Division (CTCD) regularly organises expert-led masterclasses on the latest industry trends to make students job-ready professionals.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ctcd.png",
            logoSrc: "",
            subtitle: "INDUSTRY EXPOSURE",
            link: "/ctcd",
        },
        {
            title: "Academic & Non-Academic Clubs",
            description:
                "Students actively participate in departmental academic clubs as well as music, dance, arts, and literature clubs, fostering creativity and collaboration.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/academicandnonacademic.webp",
            logoSrc: "",
            subtitle: "STUDENT ENGAGEMENT",
            link: "/student-clubs"
        },
        {
            title: "Campus Placement Drives",
            description:
                "Top industries visit our campus to recruit students for competitive roles with attractive salary packages through regular campus placement drives.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/commerce-management.webp",
            logoSrc: "",
            subtitle: "PLACEMENT OPPORTUNITIES",
            link: "/placements",
        },
        {
            title: "Sustainable Campus Environment",
            description:
                "Our eco-friendly campus promotes sustainable practices in daily activities, enabling students to learn and grow in a green environment.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/sustainablecampusenv.webp",
            logoSrc: "",
            subtitle: "GREEN CAMPUS",
            link: "/campus-facilities",
        },
        {
            title: "Academic Programs",
            description:
                "Choose from 130+ academic programs across multiple streams, designed to meet industry standards and ensure student success.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/education.webp",
            logoSrc: "",
            subtitle: "DIVERSE COURSES",
            link: "/academics",
        },
        {
            title: "Career Development",
            description:
                "Our holistic learning approach includes career counselling, soft skills training, language labs, bridge courses, yoga, meditation, and competitive exam coaching.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/careerdevelopement.webp",
            logoSrc: "",
            subtitle: "HOLISTIC GROWTH",
            link: "/careers"
        },
        {
            title: "Student Welfare Services",
            description:
                "The Department of Student Welfare creates a supportive environment where students can explore interests, develop hobbies, and participate in in-house programs.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/computer.webp",
            logoSrc: "",
            subtitle: "STUDENT SUPPORT",
            link: "/student-welfare"
        },
        {
            title: "Student Feedback",
            description:
                "We value student feedback and continuously work towards improving academic quality and overall campus life experience.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/MBA.webp",
            logoSrc: "",
            subtitle: "CONTINUOUS IMPROVEMENT",
        },
        {
            title: "Mentor-Mentee System",
            description:
                "Faculty members provide personal guidance to students in academics and career development, boosting confidence and keeping them on the right path.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/mentormentee.webp",
            logoSrc: "",
            subtitle: "PERSONAL GUIDANCE",
        },
        {
            title: "Faith & Worship Facility",
            description:
                "Our inclusive campus supports all faiths, cultures, and beliefs, allowing students to freely practice their religion.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/faith.webp",
            logoSrc: "",
            subtitle: "INCLUSIVE CAMPUS",
        },
        {
            title: "Holistic Development",
            description:
                "The Career and Corporate Resource Team builds leadership and soft skills through internships, workshops, conferences, training programs, and guest lectures.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alimini-meet2.webp",
            logoSrc: "",
            subtitle: "OVERALL GROWTH",
            link: "/corporate-training-and-consultancy-division"
        },
        {
            title: "Academic Advice",
            description:
                "From choosing the right program to securing placements, our advisors provide career guidance and time management strategies.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/alumini/alimini-meet1.webp",
            logoSrc: "",
            subtitle: "CAREER GUIDANCE",
        },
        {
            title: "Parent-Teacher Meetings",
            description:
                "We conduct annual parent-teacher meetings to discuss student performance and address parental concerns.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/careerdevelopmentcentre.webp",
            logoSrc: "",
            subtitle: "PARENT ENGAGEMENT",
        },
        {
            title: "130+ Academic Programs",
            description:
                "Programs across commerce, management, arts, science, pharmacy, law, technology, IT, and education prepare students with industry-relevant knowledge.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/bg-course.webp",
            logoSrc: "",
            subtitle: "CAREER OPTIONS",
        },
        {
            title: "Bridge Courses",
            description:
                "Bridge courses in Physics, Chemistry, Maths, English, and more help students from varied academic backgrounds strengthen core concepts.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/ccrc.webp",
            logoSrc: "",
            subtitle: "ACADEMIC SUPPORT",
            link: "/value-added-course"
        },
        {
            title: "Competitive Exams Coaching",
            description:
                "We prepare students for national and international exams like GATE, GRE, GMAT, CAT, UPSC, IELTS, TOEFL, SSC, NET, and more.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp",
            logoSrc: "",
            subtitle: "EXAM PREPARATION",
        },
        {
            title: "Remedial Coaching",
            description:
                "Personalised remedial coaching supports slow learners with extra guidance while encouraging fast learners to take up advanced projects.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/placemnt-intro.webp",
            logoSrc: "",
            subtitle: "LEARNING SUPPORT",
        },
        {
            title: "New Age Programs",
            description:
                "Emerging programs in AI, ML, Cybersecurity, Data Science, Film Making, Animation & VFX, and Forensic Science bridge industry skill gaps.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/placement/placement-training-cell/placement-intro-2.webp",
            logoSrc: "",
            subtitle: "FUTURE-READY SKILLS",
            // link: "/new-age-programs",
        },
        {
            title: "TnP Cell",
            description:
                "The Training & Placement Cell conducts interview preparation, resume building, soft skills training, and organises campus placement drives.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/trainingandplacementcell.webp",
            logoSrc: "",
            subtitle: "PLACEMENT SUPPORT",
            link: "/training-and-placement-cell",
        },
    ];

    // ✅ Add href for Cards.jsx (uses card.href)
    const cardsForCardsComponent = cards.map((c) => ({
        ...c,
        href: c.link || null,
    }));

    // ✅ Hide Know More for cards without link (before paint)
    useHideKnowMoreWithoutLink(wrapperRef, cardsForCardsComponent);

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

        // Only visible Know More buttons (linked cards only) remain
        const knowMoreButtons = Array.from(root.querySelectorAll("button, a")).filter(
            (el) => (el.textContent || "").trim().toLowerCase().includes("know more")
        );

        const idx = knowMoreButtons.indexOf(btn);

        // Since we hide non-link buttons, map index over linked cards only
        const linkedCards = cards.filter((c) => !!c.link);
        const picked = linkedCards[idx];
        if (!picked) return;

        window.location.assign(picked.link);
    };

    return (
        <>
            <>
                <style jsx global>{`
    /* Default (Desktop) */
    .student-cards-wrapper img {
      width: 100% !important;
      object-fit: cover !important;
      border-radius: 0.75rem;
    }

    /* Desktop */
    @media (min-width: 1024px) {
      .student-cards-wrapper img {
        height: 340px !important;
      }
    }

    /* Tablet */
    @media (min-width: 641px) and (max-width: 1023px) {
      .student-cards-wrapper img {
        height: 280px !important;
      }
    }

    /* Mobile — PREVENT CUT / SQUEEZE */
    @media (max-width: 640px) {
      .student-cards-wrapper img {
        height: 220px !important;          /* smaller height */
        object-fit: cover    !important;    /* no cropping */
        padding: 6px;                      /* breathing room */
      }
    }

    .student-cards-wrapper img[src=""],
    .student-cards-wrapper img:not([src]) {
      display: none !important;
    }
  `}</style>
            </>


            <div
                ref={wrapperRef}
                onClickCapture={handleClickCapture}
                className="student-cards-wrapper"
            >
                <Cards cards={cardsForCardsComponent} />
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
