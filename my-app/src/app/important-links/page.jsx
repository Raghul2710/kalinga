"use client";

import AdmissionCareer from "../components/general/admission_cta";
import CenterOfExcellence from "../components/about/center_of_excellence";
import GlobalArrowButton from "../components/general/global-arrow_button";

/* ---------------- BREADCRUMB ---------------- */

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-front-banner02.webp",
  pageTitle: "Important Links",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Important Links", href: "/important-links" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

/* ---------------- DATA ---------------- */
const clubSections = [
  {
    id: 1,
    title: "Important Links",
    clubs: [
     
      {
        name: "University Grants Commission",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/ugc.webp",
              url: "https://www.ugc.ac.in",
      },
      {
        name: "All India Council for Technical Education",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/acite.webp",
        url: "https://www.aicte-india.org",
      },
      {
        name: "Bar Council of India",
       image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/bci.webp",
           url: "http://www.barcouncilofindia.org",
      },
      {
        name: "Pharmacy Council of India",
       image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002980.png",
        url: "https://pci.nic.in",
      },
      {
        name: "National Council for Teacher Education",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/Group+1000002978.png",
        url: "https://ncte.gov.in/Website/Index.aspx",
      },
      {
        name: "National Assessment and Accreditation Council",
       image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/nirf-logo.webp",
           url: "http://www.naac.gov.in",
      },
      {
        name: "National Institutional Ranking Framework",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/naac-logo.webp",
           url: "https://www.nirfindia.org/Home",
      },
      {
        name: "All India Survey on Higher Education",
        image:
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/accerdation/aishe.webp",
            url: "https://aishe.gov.in/aishe/home",
      },
    ],
  },
];

/* ---------------- PAGE ---------------- */

export default function Page() {
  return (
    <>
      {clubSections.map((section) => (
        <CenterOfExcellence
          key={section.id}
          title={section.title}
          description=""
          showDescription={false}
          centres={section.clubs.map((club, index) => ({
            id: index + 1,

          
            name: (
              <div className="flex flex-row items-center justify-between gap-4 w-full">
                <span>{club.name}</span>

                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(club.url, "_blank");
                  }}
                >
                 <button type="button" aria-label="Next testimonial" className="cursor-pointer w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-[var(--button-red)] text-white flex items-center justify-center hover:bg-[#A2A2A2] transition-colors flex-shrink-0"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button>
                </div>
              </div>
            ),

            title: "",
            image: club.image,
          }))}
        />
      ))}

      <AdmissionCareer />
    </>
  );
}
