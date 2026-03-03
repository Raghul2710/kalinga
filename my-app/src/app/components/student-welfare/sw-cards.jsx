"use client";

import React, { useEffect, useRef, useState } from "react";
import Cards from "../ccrc/cards";

const swCardsData = [
  {
    title: "Tours & Trips",
    description:
      "Every year, we organise National & International trips for a fun learning experience.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/Tours.webp",
    logoSrc: "",
    href: "/campuslife",
  },
  {
    title: "Cultural Events & Programs",
    description:
      "Every year, we organise Kalinga Utsav, Sports Day, and celebrate different cultural festivals.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/cultural-event-2.webp",
    logoSrc: "",
    href: "/news-and-events",
  },
  {
    title: "National Days Celebration",
    description:
      "We proudly celebrate National Days like Independence Day, Republic Day, and other important days.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/cultural-events.jpg",
    logoSrc: "",
    href: "",
  },
  {
    title: "Inclusive & Supportive Environment",
    description:
      "We support every learner regardless of their religion or nationality. Together we grow with unity, respect, and equal opportunity.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/inclusive-environment.webp",
    logoSrc: "",
    href: "",
  },
  {
    title: "International Student Support",
    description:
      "We provide a vibrant learning environment for global students where ideas are nurtured and dreams are fulfilled.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/international-student-support.webp",
    logoSrc: "",
    href: "/international-students",
  },
  {
    title: "Counselling Support",
    description:
      "We have experienced counsellors at our campus who conduct one-on-one sessions with every student. Whether they are dealing with academic stress or any other issues, a dedicated counsellor will first listen and then take necessary action.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/councelling-support.jpg",
    logoSrc: "",
    href: "/students-counselling-cell",
  },
  {
    title: "Differently-Abled Students Support",
    description:
      "Our inclusive learning environment supports individuals who need special attention and support in their academic journey and personal development.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/facilities-for-pwd-students.jpg",
    logoSrc: "",
    href: "",
  },
  {
    title: "Prevention Against Sexual Harassment",
    description:
      "We have a separate community that addresses issues and raises awareness to prevent sexual harassment cases.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/sexual-harassment-prevention-committee.webp",
    logoSrc: "",
    href: "/other-committees",
  },
  {
    title: "Anti-Ragging Support",
    description:
      "We follow a ‘Zero-Tolerance Policy’ towards ragging, and we take strict action against those who violate our policy.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/anti-ragging-committee-squad.jpg",
    logoSrc: "",
    href: "/anti-ragging-cell",
  },
  {
    title: "Grievance Redressal Cell",
    description:
      "Our cell records the complaints of each student, and the experts take necessary action to solve them.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/grievance-redressal-cell.webp",
    logoSrc: "",
    href: "/grievance-redressal",
  },
  {
    title: "Health Clinic",
    description:
      "Our on-campus health clinic has an experienced doctor and nurse who ensure the well-being of our staff members and students by providing consultation and urgent care at no charge.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/health-clinic/health-clinic-1.webp",
    logoSrc: "",
    href: "/health-clinic",
  },
  {
    title: "Sanitary Napkins Vending Machines",
    description:
      "It is available in every girls’ washroom on campus and in hostels.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/sanitary-napkin-vending-machines.jpeg",
    logoSrc: "",
    href: "",
  },
  {
    title: "Free Health Checkup Camps",
    description:
      "Every year, we organise free health checkup camps for our students and faculty members in collaboration with various hospitals.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/free-health-checkup.png",
    logoSrc: "",
    href: "",
  },
  {
    title: "Blood Donation Camps",
    description:
      "We organise blood donation camps in which students and faculty members actively participate and support a good cause.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/blood-dontaion.jpeg",
    logoSrc: "",
    href: "",
  },
  {
    title: "NCC",
    description:
      "Our NCC cadets develop leadership, discipline, confidence, and a sense of responsibility.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/ncc/Ncc-1.webp",
    logoSrc: "",
    href: "/Ncc",
  },
  {
    title: "NSS",
    description:
      "It encourages students to actively participate in community service and outreach programs.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/ncc/Ncc-3.webp",
    logoSrc: "",
    href: "/nss",
  },
  {
    title: "Sports",
    description:
      "We have spacious Indoor & Outdoor sports centres where students play different games and become champions.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/sports-studentwelfare.jpg",
    logoSrc: "",
    href: "/sports-and-wellness-centre",
  },
  {
    title: "Hostel Facilities",
    description:
      "We have well-equipped hostels for girls and boys on our campus, where all necessary facilities are available for students.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/hostel-facilities.jpeg",
    logoSrc: "",
    href: "/hostel",
  },
  {
    title: "First Weeks",
    description:
      "Enrolling in a University is to enter into a new life, and students may initially feel lost and unsettled. We help them feel comfortable in hostels and even introduce them to their classmates and professors.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/First-weeks.webp",
    logoSrc: "",
    href: "",
  },
  {
    title: "FIRST-STEP Induction Programs",
    description:
      "Every year, we conduct FIRST-STEP Induction Programs for our freshers in which they meet with their professors, make new connections, understand college culture and policies, explore classrooms and student amenities, understand academic structure, and get motivational support for their new journey.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/induction-program.webp",
    logoSrc: "",
    href: "",
  },
  {
    title: "Scholarships",
    description:
      "Obtain up to 100% scholarships as per our eligibility criteria and make your finances more manageable. Students who face financial difficulties at the time of admission can get scholarships such as merit-based, sports-based, entrance exam, content creators, and more.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/phd/Phd-intro.webp",
    logoSrc: "",
    href: "/scholarships",
  },
  {
    title: "Young Indians",
    description:
      "Young Indians (Yi) is an integral part of the Confederation of Indian Industry (CII), India’s premier business association, formed in the year 2002, with an objective of creating a platform for young Indians to realise the dream of a developed nation. YI has over 1300 direct members in 40 city chapters. Yi has 160 members in 3 corporate chapters and engages another 12,000 members through its district chapter, Farmer Nets, and Student Nets.",
    imageSrc:
      "https://cdn.kalingauniversity.ac.in/student-welfare/young-indian.webp",
    logoSrc: "",
    href: "",
    showModal: true, // Flag to indicate this card should open a modal
    modalContent: {
      detailedDescription: "The Yi membership includes young progressive Indians between the ages of 25 & 40 years. The members comprise entrepreneurs, professionals, and progressive achievers from different walks of life. \"To become the voice of young Indians globally\" is the vision of Yi, which provides a platform for young Indians to participate in and contribute by becoming an integral part of the Indian growth story.",
      benefits: [
        "Get a Chance to interact with other successful Young Indians.",
        "An opportunity to start thinking and working for India.",
        "An experience in leadership and team building.",
        "Invaluable motivations for young minds to see how other Young achievers are making a difference.",
        "A unique networking opportunity with peers across the country.",
        "An opportunity to participate & get actively involved in the programmes organised by Yi at the Regional, National, and International levels."
      ]
    }
  },
];

export default function SwCards() {
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    detailedDescription: "",
    benefits: []
  });

  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    if (open) document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  // ✅ Show "Know More" button ONLY for cards that have href or showModal
  // ✅ Add click handler for modal cards
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
        const data = swCardsData.find((c) => c.title === title);

        // Find button wrapper - try multiple approaches
        let btnWrap = cardEl.querySelector(".absolute.left-5.bottom-4");

        // If not found, try finding by position classes
        if (!btnWrap) {
          const allDivs = cardEl.querySelectorAll("div");
          btnWrap = Array.from(allDivs).find(div => {
            const classes = div.className || "";
            return classes.includes("absolute") &&
              classes.includes("left-5") &&
              classes.includes("bottom-4") &&
              div.querySelector("button");
          });
        }

        if (!btnWrap) {
          // Last resort: find any div with absolute positioning that contains a button
          const absoluteDivs = cardEl.querySelectorAll("div[class*='absolute']");
          btnWrap = Array.from(absoluteDivs).find(div => div.querySelector("button"));
        }

        if (!btnWrap) {
          return;
        }

        // ✅ Show button if href exists or if it's a modal card
        if (data?.href || data?.showModal) {
          // Force visibility
          btnWrap.style.display = "inline-flex";
          btnWrap.style.visibility = "visible";
          btnWrap.style.opacity = "1";
          btnWrap.style.removeProperty("display"); // Remove any inline display:none
          btnWrap.style.display = "inline-flex"; // Set it again
          btnWrap.classList.add("sw-modal-button-visible");

          // Add click handler for modal cards
          if (data?.showModal && data?.modalContent) {
            const button = btnWrap.querySelector("button");
            if (button && !button.dataset.modalHandlerAdded) {
              // Mark as handled to avoid duplicate listeners
              button.dataset.modalHandlerAdded = "true";

              // Add modal click handler (use capture phase to run before React's handler)
              button.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                setModalData({
                  title: data.title,
                  description: data.description,
                  detailedDescription: data.modalContent.detailedDescription,
                  benefits: data.modalContent.benefits
                });
                setOpen(true);
              }, true); // Use capture phase
            }
          }
        } else {
          btnWrap.style.display = "none";
          btnWrap.classList.remove("sw-modal-button-visible");
        }
      });
    };

    // Run immediately and also after a short delay to ensure DOM is ready
    apply();

    // Use setTimeout to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      apply();
    }, 100);

    const obs = new MutationObserver(() => {
      // Debounce to avoid too many calls
      clearTimeout(timeoutId);
      setTimeout(apply, 50);
    });
    obs.observe(root, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeoutId);
      obs.disconnect();
    };
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

          /* ✅ Ensure button wrapper is visible for modal cards */
          .sw-cards-wrapper .sw-modal-button-visible,
          .sw-cards-wrapper .absolute.left-5.bottom-4.sw-modal-button-visible {
            display: inline-flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            z-index: 10 !important;
          }
          
          /* ✅ Ensure all button wrappers are visible by default, we'll hide the ones without href/modal */
          .sw-cards-wrapper .absolute.left-5.bottom-4 {
            display: inline-flex;
          }
        `}</style>

        <div className="container mx-auto px-4 pt-16">
          <h2 className="text-center mb-0">Our Student Welfare Initiatives</h2>
        </div>

        <div ref={wrapperRef} className="sw-cards-wrapper">
          <Cards cards={swCardsData} />
        </div>
      </section>

      {/* Modal Popup */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          onMouseDown={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">
                {modalData.title}
              </h3>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-black/10 px-3 py-1 text-sm hover:bg-black/5 flex-shrink-0"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-[var(--light-text-gray)] leading-relaxed font-plus-jakarta-sans">
              {/* Initial Description */}
              <p>{modalData.description}</p>

              {/* Detailed Description */}
              {modalData.detailedDescription && (
                <p className="mt-4">{modalData.detailedDescription}</p>
              )}

              {/* Benefits List */}
              {modalData.benefits && modalData.benefits.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-lg text-[var(--foreground)] mb-3">
                    The following are the benefits of being a member of the Young Indians:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    {modalData.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-[var(--button-red)] px-5 py-2 text-sm font-medium text-white hover:bg-[var(--button-red)]/90 transition-colors"
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
