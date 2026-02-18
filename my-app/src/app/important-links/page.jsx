"use client";

import AdmissionCareer from "../components/general/admission_cta";
import Image from "next/image";

/* ---------------- BREADCRUMB ---------------- */





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
          "https://kalinga-university.s3.ap-south-1.amazonaws.com/accreditation/nirf-logo-new.jpeg",
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
        <section key={section.id} className="py-16 bg-white relative">
          <div className="container mx-auto px-2">
            {/* Header Section */}
            <div className="text-center mb-8 md:mb-12 pt-8 md:pt-0">
              <h2 className="font-stix text-[var(--foreground)] text-2xl md:text-3xl lg:text-4xl mb-4">
                {section.title}
              </h2>
            </div>

            {/* Grid Layout - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.clubs.map((club, index) => (
                <div
                  key={index}
                  className="bg-[var(--lite-sand)] rounded-xl p-4 h-full flex flex-col relative overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="relative w-full h-[180px] mb-4 rounded-lg overflow-hidden bg-white">
                    <Image
                      src={club.image}
                      alt={club.name}
                      fill
                      className="object-contain p-5"
                    />
                  </div>

                  {/* Name with Button */}
                  <div className="flex flex-row items-center justify-between gap-4 w-full">
                    <p className="text-[16px] text-[var(--foreground)] font-plus-jakarta-sans font-semibold flex-1">
                      {club.name}
                    </p>

                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(club.url, "_blank");
                      }}
                    >
                      <button
                        type="button"
                        aria-label="Open link"
                        className="cursor-pointer text-white flex items-center justify-center transition-colors flex-shrink-0"
                      >
                        <div class="w-10 h-10 bg-[var(--button-red)] group-hover:bg-[#c41e3a] rounded-lg flex items-center justify-center transition-colors shadow-md"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"></path><path d="M7 7h10v10"></path></svg></div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <AdmissionCareer />
    </>
  );
}
