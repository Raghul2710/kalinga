"use client";

import GlobalArrowButton from "../components/general/global-arrow_button";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-calendar/academic-calendar-banner.webp",
  pageTitle: "Voter Portal",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Voter Portal", href: "/voter-portal" },
  ],
};

// Register breadcrumb data globally
if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

export default function Page() {
  return (
    <section className="min-h-[70vh] mb-10px flex items-center justify-center bg-white py-20">
      <div className="flex flex-col items-center text-center gap-6">

        {/* Clickable Image */}
        <a
          href="https://voterportal.eci.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
 <img
  src="https://kalinga-university.s3.ap-south-1.amazonaws.com/Voter-Portal/chart.png"
  alt="Voter Portal"
  className="
    w-[360px] h-[360px]
    md:w-[1300px] md:h-auto
    object-contain
    rounded-xl shadow-md
    transition-transform duration-300
    group-hover:scale-105
  "
/>


        </a>

        {/* Register Button */}
        <a
          href="https://voterportal.eci.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlobalArrowButton
            className="px-8 py-3 text-base"
            arrowClassName="!px-2 !py-1"
            arrowSize={24}
          >
            Register
          </GlobalArrowButton>
        </a>

      </div>
    </section>
  );
}
