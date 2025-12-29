"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Cards from "../ccrc/cards";

/** ✅ Reusable helper: hide Know More button for cards without link/href */
function useHideKnowMoreWithoutLink(wrapperRef, cards) {
    useLayoutEffect(() => {
        const root = wrapperRef.current;
        if (!root) return;

        // Cards.jsx renders each card as direct child div of <section>
        const cardEls = root.querySelectorAll("section > div");

        cardEls.forEach((cardEl, i) => {
            const hasLink = !!cards[i]?.link || !!cards[i]?.href;

            // Know More wrapper inside Cards.jsx:
            // <div className="absolute left-5 bottom-4 z-10">
            const btnWrap = cardEl.querySelector(".absolute.left-5.bottom-4");

            if (btnWrap) {
                btnWrap.style.display = hasLink ? "" : "none";
            }
        });
    }, [wrapperRef, cards]);
}

function Valueadditioncards() {
    const wrapperRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: "", description: "" });

    const cards = [
        {
            title: "Incubation Center",
            description:
                "Kalinga Incubation Foundation supports students’ innovative business ideas and turns them into successful business ventures.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif.png",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
            link: "/kif",
        },
        {
            title: "CTCD",
            description:
                "Our Corporate Training and Consultancy Division (CTCD) provides customised training to organisations using experiential learning methods.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/training-projects.webp",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
            link: "/ctcd", // ✅ will show Know More
        },
        {
            title: "CIF Labs",
            description:
                "Facilitating researchers and students with high-end instruments in basic, applied, and life sciences.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/modernlabrotary.webp",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
            link: "/research-facilities",
        },
        {
            title: "CoEs",
            description:
                "Our Centres of Excellence include: Electric Vehicles (Godawari Electric Motors Pvt. Ltd. - Eblu), IIoT (Technoviz Automation), Robotics, Coding, & Drones (BDS Education), AI-ML (IBM Innovation Centre for Education - ICE), MSME (IamSMEofIndia), BRIDGE Courses (BOSCH), Automobile Training Centre (JustAuto Solutions).",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-banner.webp",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
            link: "/centresofexcellence", // ✅ will show Know More
        },
        {
            title: "New Age Programs",
            description:
                "Our next-gen programs will prepare you for future career roles in the tech and creative world.",
            imageSrc:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/godawari/godawari-glimpse2.webp",
            logoSrc: "",
            subtitle: "EXPLORE MORE THAN JUST ACADEMICS",
        },
    ];

    // ✅ Pass href too (Cards.jsx uses card.href)
    const cardsForCardsComponent = cards.map((c) => ({
        ...c,
        href: c.link || null,
    }));

    // ✅ Hide Know More for non-link cards (before paint)
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

        // Only visible Know More buttons (linked cards only) will remain
        const knowMoreButtons = Array.from(
            root.querySelectorAll("button, a")
        ).filter((el) =>
            (el.textContent || "").trim().toLowerCase().includes("know more")
        );

        const idx = knowMoreButtons.indexOf(btn);

        // IMPORTANT:
        // Since we hide Know More for cards without link,
        // idx maps to "linked cards only". So we find the linked cards list.
        const linkedCards = cards.filter((c) => !!c.link);
        const picked = linkedCards[idx];
        if (!picked) return;

        // ✅ Navigate if link exists
        if (picked.link) {
            window.location.assign(picked.link);
            return;
        }

        // ✅ Else modal (not used here since button hidden for no-link)
        setModalData({
            title: picked?.title || "Details",
            description: picked?.description || "",
        });
        setOpen(true);
    };

    return (
        <>
            <style jsx global>{`
  /* ✅ Default: desktop look */
  .valueadd-cards-wrapper img {
    width: 100% !important;
    object-fit: cover !important;
    border-radius: 0.75rem;
  }

  /* ✅ Desktop */
  @media (min-width: 1024px) {
    .valueadd-cards-wrapper img {
      height: 340px !important;
    }
  }

  /* ✅ Tablet */
  @media (min-width: 641px) and (max-width: 1023px) {
    .valueadd-cards-wrapper img {
      height: 280px !important;
    }
  }

  /* ✅ Mobile: prevent squeeze/cut */
  @media (max-width: 640px) {
    .valueadd-cards-wrapper img {
      height: 220px !important;   /* reduce height */
      object-fit: cover !important; /* prevents cutting */
      padding: 6px;     /* optional: gives breathing space */
    }
  }

  .valueadd-cards-wrapper img[src=""],
  .valueadd-cards-wrapper img:not([src]) {
    display: none !important;
  }
`}</style>


            <div
                ref={wrapperRef}
                onClickCapture={handleClickCapture}
                className="valueadd-cards-wrapper"
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

export default Valueadditioncards;
