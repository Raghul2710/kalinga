"use client";

import GlobalArrowButton from "../components/general/global-arrow_button";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-calendar/academic-calendar-banner.webp",
  pageTitle: "Academic Calendar",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Academic Calendar', href: '/academic-calendar' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}


 const annualReportButtons = [
  {
    id: 0,
    text: "B. Pharmacy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-calendar/Academic+Calendar+(Tentative)+2025-26+Only+for+B.+Pharmacy.pdf",
  },
  {
    id: 1,
    text: "D. Pharmacy & Pharm D (Revised)",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-calendar/Academic+Calendar+D.+Pharmacy+%26+Pharm+D+(Revised).pdf",
  },
  {
    id: 2,
    text: "Except Annual Mode & B. Pharmacy",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-calendar/Academic+Calendar+(Tentative)+2025-26+(Except+Annual+Mode+%26+B.+Pharmacy.pdf",
  },
  
];

export default function Page() {
  return (
    <>
    

      {/* ✅ PAGE-SPECIFIC GRID */}
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">

          {/* ✅ PAGE HEADING */}
          <div className="mb-10 text-center">
            <h2 className="mb-4" >
              Academic Calendar 2025-26

            </h2>
            <p className="text-[16px] text-[#555]">
              The academic calendar for the year 2025-26 covers all the academic and non-academic events scheduled throughout the year at Kalinga University. 
            </p>
          </div>

          {/* ✅ BUTTON GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {annualReportButtons.map((item) => (
              <a
                key={item.id}
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
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
