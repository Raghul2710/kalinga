"use client";


import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";
import GlobalArrowButton from "../components/general/global-arrow_button";


const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/infra.webp",
  pageTitle: "Downloads",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Downloads', href: '/downloads' }
  ]
};

// Register it globally (no import needed - this pattern works automatically)
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}

const downloadsreport = [
  {
    id: 0,
    text: "Pharmacy Magazine",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/downloads/pharmacy_magazine.pdf",
  },
];

export default function Page() {
  return (
    <>
    

      {/* ✅ PAGE-SPECIFIC GRID */}
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadsreport.map((item) => (
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
