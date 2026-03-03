"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AdmissionCareer from "../components/general/admission_cta";
import PhdGrid from "../components/phd/phd-grid";
import PhdIntro from "../components/phd/phd-intro";
import ScholarStats from "../components/phd/scholar_stats";
import WhyChoosePhd from "../components/phd/why-phd";
import { useFlipbook } from "../components/general/FlipbookContext";
import FlipbookTrigger from "../components/general/FlipbookTrigger";
import GlobalArrowButton from "../components/general/global-arrow_button";
import ImageListItem from "@/app/components/ccrc/imagelistitem";

export default function PhdPage() {
  const pathname = usePathname();
  const { openFlipbook } = useFlipbook();

  const researchOverviewItems = [
    { id: "r1", text: "Ethics Committee Constitution" },
    { id: "r2", text: "Constitution of the Ethics Board for Maintaining Research Integrity" },
    { id: "r3", text: "Research Integrity & Ethics Policy" },
    { id: "r4", text: "Research Advisory Committee" },
    { id: "r5", text: "Constitution of the Research Advisory Committee and Departmental Research Committee" },
  ];

  const phdResources = [
    { id: 0, text: "Research Overview", href: "/research" },
    // { id: 1, text: "Ethics Committee Constitution", href: "https://cdn.kalingauniversity.ac.in/phd/Undertaking+(1).pdf" },
    { id: 2, text: "Constitution of the Ethics Board for Maintaining Research Integrity", href: "https://cdn.kalingauniversity.ac.in/research/5.+CONSTITUTION+OF+ETHICS+BOARD+FOR+MAINTAINING+RESEARCH+INTEGRITY.pdf" },
    { id: 3, text: "Research Integrity & Ethics Policy", href: "https://cdn.kalingauniversity.ac.in/phd/Undertaking+(1).pdf" },
    // { id: 4, text: "Research Advisory Committee", href: "https://cdn.kalingauniversity.ac.in/phd/Undertaking+(1).pdf" },
    { id: 5, text: "Constitution of the Research Advisory Committee and Departmental Research Committee", href: "https://cdn.kalingauniversity.ac.in/phd/Constitution+of+Research+Advisory+Committee.pdf" },
    { id: 6, text: "Ordinance No. 48", href: "https://cdn.kalingauniversity.ac.in/phd/Ordinance+No.+48+(16.09.2013).pdf" },
    { id: 7, text: "Revised Ordinance No. 48", href: "https://cdn.kalingauniversity.ac.in/phd/Amended+Ordinance+No.+48+(18.02.2022).pdf" },
    { id: 8, text: "Cover Page Format", href: "https://cdn.kalingauniversity.ac.in/phd/Kalinga+University-+Cover+Page+-Thesis.pdf" },
    { id: 9, text: "Synopsis Format", href: "https://cdn.kalingauniversity.ac.in/phd/Kalinga+University+-Synopsis+Format+-Cover+Page+(1).pdf" },
    { id: 10, text: "Summary Format", href: "https://cdn.kalingauniversity.ac.in/phd/Kalinga+University+-Summary+Format-+Cover+page.pdf" },
    { id: 11, text: "Arrangement of Thesis Content", href: "https://cdn.kalingauniversity.ac.in/phd/ARRANGEMENT+OF+THESIS+CONTENTS.pdf" },
    { id: 12, text: "Thesis Chapterization", href: "https://cdn.kalingauniversity.ac.in/phd/Kalinga+University-+Thesis+Chapterization_Final.pdf" },
    { id: 13, text: "Ph.D. Admission Policy", href: "https://cdn.kalingauniversity.ac.in/phd/2.+Admission+poilcy+(1).pdf" },
    { id: 14, text: "Detailed Syllabus of Research Methodology", href: "https://cdn.kalingauniversity.ac.in/phd/Detailed+Syllabus.pdf" },
    { id: 15, text: "Fellowship Scholarship Policy", href: "https://cdn.kalingauniversity.ac.in/phd/3.+Fellowship+Scholarship+Policy+for+Ph.D.+Scholars.pdf" },
    { id: 16, text: "Grievance Redress Policy", href: "https://cdn.kalingauniversity.ac.in/phd/6+POLICY+FOR+GRIEVANCE+REDRESS+MECHANISM+OF+SCHOLARS.pdf" },
    { id: 17, text: "Best Practices & Process Improvement", href: "https://cdn.kalingauniversity.ac.in/phd/Best+Practices+%26+Process+Improvement+(1).pdf" },
    { id: 18, text: "UGC Regulation 2022", href: "https://cdn.kalingauniversity.ac.in/phd/UGC+Regulation+2022+(1).pdf" },
    { id: 19, text: "UGC Notification Plagiarism 2018", href: "https://cdn.kalingauniversity.ac.in/phd/UGCNotification_Plagiarism_2018.pdf" },
    { id: 20, text: "UGC Regulation 2016", href: "https://cdn.kalingauniversity.ac.in/phd/UGC+Regulations+2016+(1).pdf" },
    // { id: 21, text: "Ph.D. Notification 2026", href: "https://cdn.kalingauniversity.ac.in/phd/Ph.+D.+2026+Notification.pdf" },
    { id: 23, text: "Ph.d. Scholars", href: "https://cdn.kalingauniversity.ac.in/phd/DETAILS+OF+CURRENTLY+ENROLLED+Ph.D.+SCHOLARS+(1).pdf" },
    { id: 24, text: "Ph.d. Supervisors", href: "https://cdn.kalingauniversity.ac.in/phd/DETAILS+OF+SUPERVISOR.pdf" },
    { id: 25, text: "Undertaking", href: "https://cdn.kalingauniversity.ac.in/phd/Undertaking+(1).pdf" },
  ];

  const Items = [
    {
      id: 1,
      text: "Library access to thousands of books, journals, magazines, research papers, dissertations, e-catalogues, online search tools, newspapers, and rare publications."
    },
    {
      id: 2,
      text: "SPSS software support for academic and research work."
    },
    {
      id: 3,
      text: "Online study materials including SCOPUS, LexisNexis, DELNET, DRILLBIT, TURNITIN, National Programme on Technology Enhanced Learning (NPTEL), National Digital library of India (NDLI), IRINS, and INFEED."
    },
    {
      id: 4,
      text: "CIF equipped with advanced instruments such as X-Ray Diffractometer, Viscometer, Scanning Electron Microscope, Digital pH Meter, 3D Printer, and more."
    },
    {
      id: 5,
      text: "Computer labs with high-performance computing systems and pre-installed software."
    },
    {
      id: 6,
      text: "Centres of Excellence including IBM Innovation Centre for Education, IamSMEofIndia, EBLU, BDS Education, IIoT, BOSCH, and JustAuto."
    },
    {
      id: 7,
      text: "Publication support for writing, editing, indexing, and publishing papers in UGC-CARE and Scopus-listed journals."
    },
    {
      id: 8,
      text: "IPR Support Cell assisting with patent filing, copyright support, ethics compliance, and plagiarism detection."
    },
    {
      id: 9,
      text: "Incubation Centre through Kalinga Incubation Foundation supporting startup ideas, business models, mentorship, and fund generation."
    },
    {
      id: 10,
      text: "Workshops, seminars, and competitions to showcase talent to a larger audience."
    },
    {
      id: 11,
      text: "Research grants and funding guidance for applying to grants and fellowships."
    }
  ];

  return (
    <>
      <style jsx global>{`
      .absolute.inset-0 > img {
        object-position: center 35% !important;
      }
    
      @media (max-width: 768px) {
        .absolute.inset-0 > img {
          object-position: center 5% !important;
        }
      }
    `}</style>

      <PhdIntro />
      <PhdGrid />
      <WhyChoosePhd />
      <ImageListItem
        items={Items}
        imageSrc="https://cdn.kalingauniversity.ac.in/research-resources/research-toolkit.webp"
        title="Your Research Toolkit"
        description=""
      />
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">

          {/* ✅ PAGE HEADING */}
          <div className="mb-10 text-center">
            <h2 className="font-stix  mb-2  !py-2">
              Ph.D. Resources
            </h2>
            <p className="text-[16px] text-[#555] leading-relaxed max-w-3xl mx-auto">
              Access essential documents, policies, and guidelines for your Ph.D. journey.
              From ordinances to thesis formats, everything you need is right here.
            </p>
          </div>

          {/* ✅ BUTTON GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phdResources.map((item) => {
              const isInternalLink = item.href && item.href.startsWith("/");

              if (isInternalLink) {
                return (
                  <Link key={item.id} href={item.href} className="block">
                    <GlobalArrowButton
                      className="!w-full h-[60px] justify-between"
                      arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                      arrowSize={29}
                    >
                      {item.text}
                    </GlobalArrowButton>
                  </Link>
                );
              }

              return (
                <FlipbookTrigger key={item.id} pdfUrl={item.href} title={item.text}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <GlobalArrowButton
                      className="!w-full h-[60px] justify-between"
                      arrowClassName="p-[3px] !px-2 mr-2 !py-1"
                      arrowSize={29}
                    >
                      {item.text}
                    </GlobalArrowButton>
                  </a>
                </FlipbookTrigger>
              );
            })}
          </div>

        </div>
      </section>


      <ScholarStats />
      <AdmissionCareer />
    </>
  );
}
