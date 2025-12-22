"use client";

import GlobalArrowButton from "../components/general/global-arrow_button";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/elearning.webp",
  pageTitle: "Annual Reports",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Annual Reports', href: '/annual-reports' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== 'undefined') {
  window.__breadcrumbData = breadcrumbData;
}


 const annualReportButtons = [
  {
    id: 0,
    text: "overall institutional development",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Website+PDFs.xlsx",
  },
  {
    id: 1,
    text: "Annual Report 2022–23 (Volume I)",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual-Report-2022-23-(Vol-1).pdf",
  },
  {
    id: 2,
    text: "Annual Report 2022–23 (Volume II)",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual+Report+2022-23+(Vol.+2).pdf",
  },
  {
    id: 3,
    text: "Annual Report 2021–22 (Volume I)",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual+Report-2021-22+(Vol.+1).pdf",
  },
  {
    id: 4,
    text: "Annual Report 2021–22 (Volume II)",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual-Report-2021-22-(Vol-2).pdf",
  },
  {
    id: 5,
    text: "Annual Report 2020–21",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/Annual-Report-2020-21.pdf",
  },
  {
    id: 6,
    text: "Annual Report 2019–20",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT+2019-20_09-01-2021.pdf",
  },
  {
    id: 7,
    text: "Annual Report 2018–19",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT+2018-19_15-01-2021.pdf",
  },
  {
    id: 8,
    text: "Annual Report 2017–18",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT+2017-18_18-01-2021.pdf",
  },
  {
    id: 9,
    text: "Annual Report 2016–17",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT_2016-17_18-01-2021.pdf",
  },
  {
    id: 10,
    text: "Annual Report 2015–16",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT_2016-17_18-01-2021.pdf",
  },
  {
    id: 11,
    text: "Annual Report 2014–15",
    href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/annual-reports/FINAL+ANNUAL+REPORT_2014-15_18-01-2021.pdf",
  },
];

export default function Page() {
  return (
    <>
    

      {/* ✅ PAGE-SPECIFIC GRID */}
      <section className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-6">

          {/* ✅ PAGE HEADING */}
          <div className="mb-10">
            <h2 >
              Annual Reports
            </h2>
            <p className="text-[16px] text-[#555] max-w-[900px] leading-relaxed">
              Our annual reports will give you a detailed overview of the University’s growth and achievements. 
              These reports show transparency, academic excellence, and overall institutional development.
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
