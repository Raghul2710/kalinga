"use client";

import React, { useEffect, useRef, useState } from "react";
import Cards from "../ccrc/cards";

const swCardsData = [
  {
    title: "Tours & Trips",
    description:
      "Every year, we organise National & International trips for a fun learning experience.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/Tours.webp",
    logoSrc: "",
    href: "/campuslife",
  },
  {
    title: "Cultural Events & Programs",
    description:
      "Every year, we organise Kalinga Utsav, Sports Day, and celebrate different cultural festivals.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/cultural-event-2.webp",
    logoSrc: "",
    href: "/news-and-events",
  },
  {
    title: "National Days Celebration",
    description:
      "We proudly celebrate National Days like Independence Day, Republic Day, and other important days.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/cultural-events.jpg",
    logoSrc: "",
    href: "/news-and-events",
  },
  {
    title: "Inclusive & Supportive Environment",
    description:
      "We support every learner regardless of their religion or nationality. Together we grow with unity, respect, and equal opportunity.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/inclusive-environment.webp",
    logoSrc: "",
    href: "/student-support",
  },
  {
    title: "International Student Support",
    description:
      "We provide a vibrant learning environment for global students where ideas are nurtured and dreams are fulfilled.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/international-student-support.webp",
    logoSrc: "",
    href: "/international-students",
  },
  {
    title: "Counselling Support",
    description:
      "We have experienced counsellors at our campus who conduct one-on-one sessions with every student. Whether they are dealing with academic stress or any other issues, a dedicated counsellor will first listen and then take necessary action.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/councelling-support.jpg",
    logoSrc: "",
    href: "/students-counselling-cell",
  },
  {
    title: "Differently-Abled Students Support",
    description:
      "Our inclusive learning environment supports individuals who need special attention and support in their academic journey and personal development.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/facilities-for-pwd-students.jpg",
    logoSrc: "",
    href: "/student-support",
  },
  {
    title: "Prevention Against Sexual Harassment",
    description:
      "We have a separate community that addresses issues and raises awareness to prevent sexual harassment cases.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sexual-harassment-prevention-committee.webp",
    logoSrc: "",
    href: "/other-committees",
  },
  {
    title: "Anti-Ragging Support",
    description:
      "We follow a ‘Zero-Tolerance Policy’ towards ragging, and we take strict action against those who violate our policy.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/anti-ragging-committee-squad.jpg",
    logoSrc: "",
    href: "/anti-ragging-cell",
  },
  {
    title: "Grievance Redressal Cell",
    description:
      "Our cell records the complaints of each student, and the experts take necessary action to solve them.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/grievance-redressal-cell.webp",
    logoSrc: "",
    href: "/grievance-redressal",
  },
  {
    title: "Health Clinic",
    description:
      "Our on-campus health clinic has an experienced doctor and nurse who ensure the well-being of our staff members and students by providing consultation and urgent care at no charge.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/health-clinic/health-clinic-1.webp",
    logoSrc: "",
    href: "/health-clinic",
  },
  {
    title: "Sanitary Napkins Vending Machines",
    description:
      "It is available in every girls’ washroom on campus and in hostels.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sanitary-napkin-vending-machines.jpeg",
    logoSrc: "",
    href: "/campus-facilities",
  },
  {
    title: "Free Health Checkup Health Camps",
    description:
      "Every year, we organise free health checkup camps for our students and faculty members in collaboration with various hospitals.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/free-health-checkup.png",
    logoSrc: "",
    href: "/health-clinic",
  },
  {
    title: "Blood Donation Camps",
    description:
      "We organise blood donation camps in which students and faculty members actively participate and support a good cause.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/blood-dontaion.jpeg",
    logoSrc: "",
    href: "/student-clubs",
  },
  {
    title: "NCC",
    description:
      "Our NCC cadets develop leadership, discipline, confidence, and a sense of responsibility.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-1.webp",
    logoSrc: "",
    href: "/Ncc",
  },
  {
    title: "NSS",
    description:
      "It encourages students to actively participate in community service and outreach programs.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-3.webp",
    logoSrc: "",
    href: "/nss",
  },
  {
    title: "Sports",
    description:
      "We have spacious Indoor & Outdoor sports centres where students play different games and become champions.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/sports-studentwelfare.jpg",
    logoSrc: "",
    href: "/sports-and-wellness-centre",
  },
  {
    title: "Hostel Facilities",
    description:
      "We have well-equipped hostels for girls and boys on our campus, where all necessary facilities are available for students.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/hostel-facilities.jpeg",
    logoSrc: "",
    href: "/hostel",
  },
  {
    title: "First Weeks",
    description:
      "Enrolling in a University is to enter into a new life, and students may initially feel lost and unsettled. We help them feel comfortable in hostels and even introduce them to their classmates and professors.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/First-weeks.webp",
    logoSrc: "",
    href: "/student-support",
  },
  {
    title: "FIRST-STEP Induction Programs",
    description:
      "Every year, we conduct FIRST-STEP Induction Programs for our freshers in which they meet with their professors, make new connections, understand college culture and policies, explore classrooms and student amenities, understand academic structure, and get motivational support for their new journey.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-welfare/induction-program.webp",
    logoSrc: "",
    href: "/student-support",
  },
  {
    title: "Scholarships",
    description:
      "Obtain up to 100% scholarships as per our eligibility criteria and make your finances more manageable. Students who face financial difficulties at the time of admission can get scholarships such as merit-based, sports-based, entrance exam, content creators, and more.",
    imageSrc:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/phd/Phd-intro.webp",
    logoSrc: "",
    href: "/scholarships",
  },
];

export default function SwCards() {
  const wrapperRef = useRef(null);

  // kept (reference structure) – no modal/routing logic needed
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: "", description: "" });

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    if (open) document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  // ✅ Show "Know More" button ONLY for cards that have href
  useEffect(() => {
    const root = wrapperRef.current;
    if (!root) return;

    const getTitleFromCard = (cardEl) => {
      const titleEl = cardEl.querySelector("h3");
      return (titleEl?.textContent || "").trim();
    };

    const apply = () => {
      const cardEls = Array.from(
        root.querySelectorAll('.bg-\\[var\\(--card-sandal\\)\\]')
      );

      cardEls.forEach((cardEl) => {
        const title = getTitleFromCard(cardEl);
        const btnWrap = cardEl.querySelector(".absolute.left-5.bottom-4");
        if (!btnWrap) return;

        const data = swCardsData.find((c) => c.title === title);

        // ✅ only show if href exists
        btnWrap.style.display = data?.href ? "inline-flex" : "none";
      });
    };

    apply();

    const obs = new MutationObserver(() => apply());
    obs.observe(root, { childList: true, subtree: true });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section className="bg-white">
        {/* ✅ Same structure approach as Campusfacilitiescard (wrapper + scoped CSS) */}
        <style jsx global>{`
          .sw-cards-wrapper img {
            width: 100% !important;
            height: 340px !important;
            object-fit: cover !important;
          }

          @media (max-width: 768px) {
            .sw-cards-wrapper img {
              height: 260px !important;
            }
          }

          /* ✅ Fix broken small icon: hide images with empty src (logoSrc="") */
          .sw-cards-wrapper img[src=""],
          .sw-cards-wrapper img:not([src]) {
            display: none !important;
          }

          /* ✅ Move ONLY NSS image down INSIDE its container (no layout shift) */
          .sw-cards-wrapper img[src*="Nss.jpeg"] {
            transform: translateY(12px) !important;
          }
        `}</style>

        <div className="container mx-auto px-4 pt-16">
          <h2 className="text-center mb-0">Our Student Welfare Initiatives</h2>
        </div>

        <div ref={wrapperRef} className="sw-cards-wrapper">
          <Cards cards={swCardsData} />
        </div>
      </section>

      {/* (kept for reference structure; not triggered) */}
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
