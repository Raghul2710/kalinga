"use client";

import React, { useEffect } from "react";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import SectionHeading from "@/app/components/general/SectionHeading";

// Breadcrumb configuration
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/academics-banner.webp",
  pageTitle: "RTI",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'RTI', href: '/RTI' }
  ]
};

export default function GetInTouch() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  return (
    <section className="py-16 mt-16 mb-30 bg-[var(--dark-blue)] lg:h-[500px] rounded-xl mx-2">
      <div className="container mx-auto px-6">

          {/* Left: Heading + info cards */}
          <div className="flex flex-col gap-6 text-white">
            <div className="mb-5 text-center">
              <SectionHeading
                title="Right To Information (RTI)"
                subtitle=""
                titleClassName="text-center mb-2 text-white"
                subtitleClassName="text-center text-sm sm:text-base text-[var(--lite-sand)] max-w-xl"
              />

              <p className="text-white text-sm sm:text-base">
                Kalinga University stays open and transparent by following the Right To Information (RTI) Act, 2005. Stakeholders can submit the RTI application, and our designated PIO will ensure a timely response to all their queries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

              {/* CARD 1: PIO */}
              <div className="bg-white rounded-xl px-5 py-5 shadow-md">
                <h3 className="font-stix !text-[22px] mb-3 mt-1 text-[var(--foreground)]">
                  Public Information Officer 
                </h3>

                <ul className="space-y-3 text-[13px] sm:text-sm text-[var(--light-text-gray)]">

                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[var(--button-red)]">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--icons)] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>

                    <p className="text-[var(--foreground)]">
                      Mrs. T. Gayatri Murty, 
                      Assistant Registrar & PIO – 
                      Kalinga University, 
                      Kotni, Near Mantralaya, 
                      Naya Raipur (C.G.), 
                      India - 492 101
                    </p>
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="text-[var(--button-red)]">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--icons)] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    <a href="tel:9303097044" className="text-[var(--foreground)]">
                      +91–9303097044
                    </a>
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="text-[var(--button-red)]">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--icons)] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>

                    <a
                      href="mailto:pio@kalingauniversity.ac.in"
                      className="text-[var(--foreground)] break-all"
                    >
                      pio@kalingauniversity.ac.in
                    </a>
                  </li>

                </ul>
              </div>

              {/* CARD 2: Appellate*/}
              <div className="bg-[var(--lite-sand)] rounded-xl px-6 py-6 shadow-md flex items-start flex-col justify-center">

                <h3 className="font-stix !text-[22px] mb-3 text-[var(--foreground)]">
                  Appellate Authority
                </h3>

                <ul className="space-y-3  text-[13px] sm:text-sm text-[var(--light-text-gray)]">

                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-[var(--button-red)]">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--icons)] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>

                    <p className="text-[var(--foreground)]">
                      Dr. Sandeep Gandhi, 
                      Registrar & Appellate Authority – 
                      Kalinga University, 
                      Kotni, Near Mantralaya, 
                      Naya Raipur (C.G.), 
                      India - 492 101
                    </p>
                  </li>

               
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--button-red)]">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--icons)] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    <a href="tel:9303097043" className="text-[var(--foreground)]">
                      +91-9303097043
                    </a>
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="text-[var(--button-red)]">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--icons)] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>

                    <a
                      href="mailto:registrar@kalingauniversity.ac.in"
                      className="text-[var(--foreground)] break-all"
                    >
                      registrar@kalingauniversity.ac.in
                    </a>
                  </li>

                </ul>
              </div>

            </div>
          </div>

          {/* Right: Form card */}
          {/* <div className="flex justify-center mt-10 lg:mt-30 lg:justify-end">

             <div className="w-full max-w-lg lg:max-w-lg bg-[var(--button-red)] rounded-2xl border-2 border-white 
              px-4 pt-2 pb-5 sm:px-5 sm:pt-4 sm:pb-7 lg:px-8 lg:py-12 shadow-2xl">


              <form className="space-y-6 sm:space-y-8 text-white">
                {["Name", "Mail", "Phone"].map((label) => (
                  <div key={label}>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none text-sm sm:text-base py-1 placeholder-white"
                      placeholder={label}
                      aria-label={label}
                    />
                  </div>
                ))}

                <div>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none text-sm sm:text-base py-1 resize-none placeholder-white"
                    placeholder="Message"
                    aria-label="Message"
                  />
                </div>

                <div className="pt-5 flex justify-center">
                  <GlobalArrowButton
                    className="!bg-white !text-[var(--foreground)] hover:!bg-gray-100 !shadow-none"
                    arrowClassName="!bg-[var(--icons)]"
                    arrowIconClassName="!text-white"
                    textClassName="!font-semibold"
                  >
                    Submit
                  </GlobalArrowButton>
                </div>

              </form>
            </div>
          </div> */}

      </div>
    </section>
  );
}
