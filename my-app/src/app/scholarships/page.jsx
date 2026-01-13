"use client";

import { useEffect, useMemo, useState } from "react";
import MainIntro from "@/app/components/about/main_intro";
import WhyStudy from "@/app/components/department/why-study";
import ScholarshipsSlider from "../components/admissions/scholarships_slider";
import CenterOfExcellence from "../components/about/center_of_excellence";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/library/Library-1.webp",
  pageTitle: "Scholarships",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Scholarships", href: "/scholarships" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

export default function ScholarshipsPage() {
  useEffect(() => {
    const el = document.querySelector(".why-study-swiper .swiper");
    const sw = el?.swiper;
    if (!sw) return;

    let isJumping = false;

    const safeJump = (index) => {
      if (isJumping) return;
      isJumping = true;
      sw.slideTo(index, 0, false);
      requestAnimationFrame(() => {
        isJumping = false;
      });
    };

    const onReachEnd = () => safeJump(0);
    const onReachBeginning = () => safeJump(sw.slides.length - 1);

    sw.on("reachEnd", onReachEnd);
    sw.on("reachBeginning", onReachBeginning);

    return () => {
      sw.off("reachEnd", onReachEnd);
      sw.off("reachBeginning", onReachBeginning);
    };
  }, []);

  const scholarshipPolicyPdf = "https://kalinga-university.s3.ap-south-1.amazonaws.com/scholarships/SCHOLARSHIP_25-26+(4)+(1).pdf";


  const whyStudyItems = [
    { id: 1, title: "Over 5000+ top performers have been rewarded." },
    { id: 2, title: "Scholarships worth 3 Crores+ distributed." },
    { id: 3, title: "Recognising the hard work and talent of young minds." },
    { id: 4, title: "Rewarding excellence beyond academics." },
    { id: 5, title: "Fast-track your university admission process." },
    { id: 6, title: "Focus on learning instead of stressing." },
    { id: 7, title: "Helping you manage your academic budget." },
  ];

  const defaultFAQItems = [
    {
      id: 1,
      question: "When can I apply for scholarships?",
      answer:
        "As soon as you complete your 12th board exams or graduation exams, you can complete the university admission process. Our admission counsellors will check your eligibility, and if you are found eligible, you can claim a scholarship on your tuition fee.",
    },
    {
      id: 2,
      question: "How will I know if I have received a scholarship?",
      answer:
        "Students will be informed about the scholarship at the time of admission. The updated fees will be reflected in their ERP.",
    },
    {
      id: 3,
      question: "Can I get multiple scholarships?",
      answer:
        "No, students can avail themselves of only one scholarship at a time during their college admission process.",
    },
    {
      id: 4,
      question: "What are the chances of securing a scholarship?",
      answer:
        "Our scholarships are highly competitive, and we offer a limited number of scholarships. You need to act fast before all slots are filled.",
    },
    {
      id: 5,
      question: "Is there an interview process for scholarship selection?",
      answer:
        "There is no interview round for availing scholarships. You just need to meet the eligibility criteria, and we will keep you informed.",
    },
    {
      id: 6,
      question:
        "Are Kalinga University scholarships available for international students?",
      answer:
        "No, currently Kalinga University does not offer scholarships for international students.",
    },
    {
      id: 7,
      question: "Can I get a scholarship for a postgraduate program?",
      answer:
        "Yes, based on your graduation marks and KALSEE scores, you may receive a certain percentage of scholarship on your tuition fee.",
    },
    {
      id: 8,
      question: "Can I get a scholarship if I don’t have good academic marks?",
      answer:
        "If your academic marks are not strong, you may still be eligible for scholarships based on your KALSEE marks or through other exclusive scholarship schemes.",
    },
    {
      id: 9,
      question: "Does the scholarship cover hostel or living expenses?",
      answer:
        "No, scholarships do not cover hostel or living expenses. However, a good tuition fee scholarship can significantly reduce your overall academic cost.",
    },
    {
      id: 10,
      question: "Can I get a scholarship if I have a gap year in my education?",
      answer:
        "Yes, students with a gap year are still eligible for scholarships, depending on the marks secured in their academics.",
    },
  ];

  const Banks = [
    {
      id: 1,
      name: "Canara Bank",
      title:
        "Canara Bank provides education loans and financial assistance to needy and meritorious students seeking admission to Kalinga University, subject to the fulfilment of the bank’s terms, conditions, and eligibility norms.",
      image:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/scholarships/canara.webp",
    },
    {
      id: 2,
      name: "Central Bank of India",
      title:
        "Central Bank of India offers education loans and financial assistance to students pursuing studies at Kalinga University, in accordance with the bank’s guidelines and applicable norms.",
      image:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/scholarships/central-1.webp",
    },
  ];

  const scholarships = [
    {
      id: 1,
      title: "Social Scholarships",
      description:
        "Scholarships supporting special categories and social causes (as per KU policy).",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/book-logo.png",
    },
    {
      id: 2,
      title: "Merit Scholarships",
      description:
        "Scholarships based on aggregate percentage in qualifying examination.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/merit.svg",
    },
    {
      id: 3,
      title: "Entrance Exam Scholarships",
      description:
        "Scholarships based on percentile in national/state entrance & competitive exams.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/social.svg",
    },
    {
      id: 4,
      title: "Culture & Achievers Scholarships",
      description:
        "Scholarships for cultural excellence and exceptional achievements (case-to-case).",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship/scholarship-2.png",
    },
    {
      id: 5,
      title: "Siblings Scholarships",
      description:
        "Scholarships for direct blood relations of current KU students (as per policy).",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship/scholarship-3.png",
    },
    {
      id: 6,
      title: "Sports Scholarships",
      description:
        "Scholarships for participation at District/State/National/International levels.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship/sports-bg.png",
    },
    {
      id: 7,
      title: "Social Media Scholarships",
      description:
        "Scholarships for strong social media presence involved in knowledge dissemination.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship/social_media-bg.png",
    },
    {
      id: 8,
      title: "Innovation & Research Scholarships",
      description:
        "Scholarships for research publications, books, startups, and product innovation.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship/research-bg.png",
    },
    {
      id: 9,
      title: "Other Scholarships",
      description:
        "Additional KU-specific scholarships as per scholarship committee/policy.",
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/scholarship/scholarship-10bg.png",
    },
  ];

  const scholarshipPopupData = useMemo(
    () => ({
      "Social Scholarships": {
        heading: "Social Scholarships",
        intro: "Applicable on Tuition Fee (as per KU Scholarship Policy 2025–26).",
        points: [
          "Scholarship to the wards and siblings of Martyred Personnel of the Indian Army / Indian Air Force / Indian Navy / Indian Central & State paramilitary forces / Police / NCC — 50%",
          "Scholarship to the wards of serving and retired personnel of the Indian Army / Indian Air Force / Indian Navy / Indian Central & State paramilitary forces / Police / NCC — 20%",
          "Scholarship to students who are physically challenged at the time of applying — 20%",
          "Scholarship to Girl applicants — 20%",
          "Scholarship for the wards of Health and Hospital frontline workers — 20%",
          "Scholarship for the wards of Bharat Ratna / Padma Vibhushan / Padma Bhushan / Padma Shri / National Award winners — 100%",
        ],
      },
      "Merit Scholarships": {
        heading: "Merit Scholarships",
        intro:
          "Merit scholarships are based on the aggregate percentage scored in the qualifying examination (Tuition Fee waiver).",
        points: [
          "95% & Above — 100%",
          "Between 90% to 94% — 50%",
          "Between 80% to 89% — 30%",
          "Between 70% to 79% — 20%",
          "Between 60% to 69% — 15%",
          "Top 10 positions in CBSE / State Boards / IB / ICSE / Cambridge boards (2025) — 100%",
        ],
      },
      "Entrance Exam Scholarships": {
        heading: "Entrance Exam Scholarships",
        intro:
          "Applicable for students who scored well in national/state competitive & entrance exams in 2024–25 (Tuition Fee waiver).",
        points: [
          "Eligible exams include: UGAT, JEE, CAT, XAT, MAT, ATMA, CMAT, LSAT, CLAT, SAT, GMAT, NEET, GATE, NDA, NIFT, UPSC, CGPSC, GPAT, UGAT, other State PSC exams (as mentioned in policy).",
          "80 percentile and above — 50%",
          "70 to 79.99 percentile — 30%",
        ],
      },
      "Culture & Achievers Scholarships": {
        heading: "Culture & Achievers Scholarships",
        intro: "Applicable on Tuition Fee (as per policy).",
        points: [
          "Applicants who participated and secured positions/awards in recognized National/International cultural events or participated in TV reality shows (Indian Idol, India’s Got Talent, Dance India Dance, Sa Re Ga Ma Pa, Pageants, KBC, etc.) — 30%",
          "Applicants listed in Limca Book of Records / Golden Book of Records / Guinness Book of Records may be considered on a case-to-case basis (as per scholarship committee).",
        ],
      },
      "Siblings Scholarships": {
        heading: "Siblings Scholarships",
        intro:
          "Applicable only for direct blood relations of students currently studying (admitted in 2024–25 or before) in any program of Kalinga University.",
        points: [
          "20% scholarship is offered on Tuition Fee to students taking admission in Academic Session 2025–26.",
          "Valid only till completion of the course of the elder sibling (previously admitted current student).",
        ],
      },
      "Sports Scholarships": {
        heading: "Sports Scholarships",
        intro:
          "Applicable on Tuition Fee for sports participation in last 3 years.",
        points: [
          "Asiad / International level recognized sports events (team or solo) — 40%",
          "National level recognized sports events (team or solo) — 30%",
          "State level recognized sports events (team or solo) — 20%",
          "District level recognized sports events (team or solo) — 10%",
        ],
      },
      "Social Media Scholarships": {
        heading: "Social Media Scholarships",
        intro:
          "Applicants with strong social media presence (Facebook/Instagram/YouTube) involved in knowledge dissemination in Arts, Music, Social work, Technology and Culture.",
        points: [
          "50K+ subscribers/followers — 50%",
          "25K+ subscribers/followers — 30%",
          "University Scholarship Committee will recommend/reject applications based on eligibility.",
        ],
      },
      "Innovation & Research Scholarships": {
        heading: "Innovation & Research Scholarships",
        intro:
          "Decided by the University Scholarship Committee (Tuition Fee waiver).",
        points: [
          "Applicants who have published research papers, books, startups and product innovation — 50%",
        ],
      },
      "Other Scholarships": {
        heading: "Other Scholarships",
        intro: "Additional KU scholarships (Tuition Fee waiver).",
        points: [
          "Wards of Kalinga University Teaching and Non-Teaching Staff — 50%",
        ],
      },
    }),
    []
  );

  const [open, setOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState(null);
  const activeData = activeTitle ? scholarshipPopupData[activeTitle] : null;

  useEffect(() => {
    const root = document.querySelector(".scholarships-swiper");
    if (!root) return;

    const handler = (e) => {
      const slide = e.target.closest(".swiper-slide");
      if (!slide) return;

      const slides = Array.from(root.querySelectorAll(".swiper-slide"));
      const index = slides.indexOf(slide);

      // guard: only map to the real items array length
      if (index < 0 || index >= scholarships.length) return;

      const clicked = scholarships[index];
      if (!clicked?.title) return;

      setActiveTitle(clicked.title);
      setOpen(true);
    };

    root.addEventListener("click", handler);
    return () => root.removeEventListener("click", handler);
  }, [scholarships]);

  return (
    <>
      {/* Breadcrumb image position */}
      <style jsx global>{`
        .absolute.inset-0 > img {
          object-position: center 50% !important;
        }
        @media (max-width: 768px) {
          .absolute.inset-0 > img {
            object-position: center 5% !important;
          }
        }
      `}</style>



      <MainIntro
        readmore={false}
        className="items-center justify-center"
        title="Rewarding the Hard Work and Academic Excellence of Meritorious Students"
        subtitle=""
        description="We recognize the hard work of every student, and Kalinga University’s scholarships encourage them to dream bigger and confidently step forward towards their career goals."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/scholarships/scholarship-about.webp"
      />

      <div className="whyStudyWrapper">
        <WhyStudy
          items={whyStudyItems}
          sectionTitle="How KU Scholarships Are a Game-Changer"
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        />
      </div>

      {/* WhyStudy alignment styles */}
      <style jsx global>{`
        .why-study-swiper .swiper-slide > div > div {
          min-height: 180px !important;
          justify-content: center !important;
        }
        .why-study-swiper .swiper-slide > div > div > div {
          margin-left: auto !important;
          margin-right: auto !important;
          align-items: flex-start !important;
          text-align: left !important;
        }
        .why-study-swiper h4,
        .why-study-swiper p {
          text-align: left !important;
        }
        .why-study-swiper button {
          align-self: flex-start !important;
        }
      `}</style>

      {/* Slider cards */}
      <div className="hide-scholarship-cta">
        <ScholarshipsSlider
          items={scholarships}
          title="Scholarship Details Of Kalinga University"
          description=""
          ctaText="Explore Now"
          ctaHref=""
          navId=""
        />
      </div>

      {/* Hide CTA only for this page */}
      <style jsx global>{`
        .hide-scholarship-cta a.inline-flex {
          display: none !important;
        }
      `}</style>

      {/* Scholarship slider fixes (scoped ONLY to this page wrapper) */}
      <style jsx global>{`
        /* ✅ keep slide/card sizing consistent */
        .hide-scholarship-cta .scholarships-swiper .swiper-slide {
          height: auto !important;
        }

        .hide-scholarship-cta .scholarships-swiper .swiper-slide > * {
          height: 100% !important;
          display: flex !important;
        }

        .hide-scholarship-cta .scholarships-swiper .swiper-slide > * > * {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
        }

        /* ✅ Titles: consistent 2-line clamp */
        .hide-scholarship-cta .scholarships-swiper h3,
        .hide-scholarship-cta .scholarships-swiper h4 {
          min-height: 2.8em !important;
          line-height: 1.4 !important;
          display: -webkit-box !important;
          -webkit-box-orient: vertical !important;
          -webkit-line-clamp: 2 !important;
          overflow: hidden !important;
        }

        /* ✅ Description spacing */
        .hide-scholarship-cta .scholarships-swiper p {
          margin-top: 0.75rem !important;
        }

        /* ✅ Divider full width */
        .hide-scholarship-cta .scholarships-swiper hr,
        .hide-scholarship-cta .scholarships-swiper [role="separator"],
        .hide-scholarship-cta .scholarships-swiper .divider,
        .hide-scholarship-cta .scholarships-swiper [class*="divider"],
        .hide-scholarship-cta .scholarships-swiper .border-t,
        .hide-scholarship-cta .scholarships-swiper .border-b {
          width: 100% !important;
          align-self: stretch !important;
        }

        /* ✅ Keep arrow button consistently at bottom */
        .hide-scholarship-cta .scholarships-swiper a,
        .hide-scholarship-cta .scholarships-swiper button {
          margin-top: auto !important;
          align-self: flex-end !important;
        }

        /* ✅ CRITICAL FIX: stop icon/text overlap WITHOUT breaking the icon
           - force icon to stay in normal flow (no absolute/translate)
           - give consistent size + bottom spacing so text starts below */
        .hide-scholarship-cta .scholarships-swiper img {
          position: static !important;
          top: auto !important;
          left: auto !important;
          transform: none !important;

          width: 180px !important;
          height: 180px !important;
          object-fit: contain !important;

          display: block !important;
          margin: 0 auto 14px auto !important; /* space under icon */
        }

        @media (max-width: 640px) {
          .hide-scholarship-cta .scholarships-swiper img {
            width: 140px !important;
            height: 140px !important;
            margin-bottom: 12px !important;
          }
        }
      `}</style>

      {/* Popup Modal */}
      {open && activeData && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-end md:items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 md:p-10 relative mt-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 z-50 bg-white rounded-full p-1 shadow text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="space-y-4">
              <h3 className="font-stix text-2xl md:text-3xl text-[var(--foreground)]">
                {activeData.heading}
              </h3>

              <p className="text-gray-700 leading-relaxed">{activeData.intro}</p>

              <div className="bg-[var(--lite-sand)] rounded-xl p-5 md:p-6">
                <ul className="list-disc list-inside space-y-2 text-gray-800 leading-relaxed">
                  {activeData.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-gray-600 leading-relaxed">
                <p className="font-semibold text-gray-700 mb-2">
                  Terms (highlights)
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Applicable for entire course duration; applicable only on
                    Tuition Fee.
                  </li>
                  <li>Minimum 75% attendance; appear in CTs as per rules.</li>
                  <li>
                    Only one scholarship can be availed; category cannot be
                    changed once taken.
                  </li>
                  <li>
                    First-come-first-serve where seats are limited; withdrawn on
                    failure/misconduct.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <CenterOfExcellence
        centres={Banks}
        title="Bank Loan MoUs"
        description="Kalinga University has signed an MOU with Canara Bank and the Central Bank of India, which are providing financial assistance to our students during admissions. "
      />

      <FAQ items={defaultFAQItems} title="Clearing All Your Doubts" subtitle="" />
      {/* ✅ Download Scholarship Policy */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 mt-10 mb-6">
        <div className="rounded-2xl bg-[var(--lite-sand)] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="font-stix text-xl md:text-2xl text-[var(--foreground)]">
              Scholarship Policy (2025–26)
            </h3>
            <p className="mt-2 text-gray-700">
              Download the official scholarship policy document for detailed eligibility and terms.
            </p>
          </div>

          <a
            href={scholarshipPolicyPdf}
            download
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--foreground)] px-5 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            Download Policy
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3v10m0 0l4-4m-4 4l-4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 17v3h16v-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <AdmissionCareer />
    </>
  );
}
