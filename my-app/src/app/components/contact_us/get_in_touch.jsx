"use client";

import React from "react";
import GlobalArrowButton from "@/app/components/general/global-arrow_button";
import SectionHeading from "@/app/components/general/SectionHeading";

export default function GetInTouch() {
  return (
    <section className="py-16 mt-16 bg-[var(--dark-blue)] lg:h-[530px] rounded-xl mx-2">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-stretch">
          {/* Left: Heading + info cards */}
           <div className="flex flex-col gap-6 text-white">
             <div className="mb-5">
               <SectionHeading
                 title="Get in Touch"
                 subtitle=""
                 titleClassName="text-left mb-2 text-white"
                 subtitleClassName="text-left text-sm sm:text-base text-[var(--lite-sand)] max-w-xl"
               />
               <p className="max-w-xl">We’re here to help you with all your queries — from admissions and programs to collaborations and campus visits. Reach out to us, and our team will get back to you at the earliest.
               </p>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* Contact Us card */}
              <div className="bg-white rounded-xl px-5 py-5 shadow-md">
                <h3 className="font-stix !text-[22px] mb-3 text-[var(--foreground)]">
                  Contact us
                </h3>
                <ul className="space-y-3 text-[13px] sm:text-sm text-[var(--light-text-gray)]">
                  <li className="flex items-start gap-2">
                     <span className="mt-0.5 text-[var(--button-red)]">
                       {/* location icon from footer */}
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
                      Kalinga University
                      <br />
                      Kotni, Near Mantralaya,
                      Naya Raipur - 492101, Chhattisgarh, India
                    </p>
                  </li>
                  <li className="flex items-center gap-2">
                     <span className="text-[var(--button-red)]">
                       {/* phone icon from footer */}
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
                    <a href="tel:+91-9109917911" className="text-[var(--foreground)]">+91-9109917911</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[var(--button-red)]">
                      {/* email icon from footer */}
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
                      className="text-[var(--foreground)]"
                    >
                      registrar@kalingauniversity.ac.in
                    </a>
                  </li>
                </ul>
              </div>

              {/* For Admissions card */}
              <div className="bg-[var(--lite-sand)] rounded-xl px-6 py-6 shadow-md flex items-start flex-col justify-start">
                <h3 className="font-stix !text-[22px] mb-3 text-[var(--foreground)]">
                  For Admissions
                </h3>
                <ul className="space-y-3 text-[13px] sm:text-sm text-[var(--light-text-gray)]">
                  <li className="flex items-start gap-2">
                     <span className="mt-0.5 text-[var(--button-red)]">
                       {/* location icon from footer */}
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
                    <p className="text-[var(--foreground)]">
                    <a href="tel:+91-9907252100" className="text-[var(--foreground)]">+91-9907252100</a> 
                    </p>
                  </li>
                  {/* <li className="flex items-center gap-2">
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
                    <a
                      href="tel:+91-9702752100"
                      className="text-[var(--foreground)]"
                    >
                      +91-9702752100
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
                      className="text-[var(--foreground)]"
                    >
                      registrar@kalingauniversity.ac.in
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Form card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-lg bg-[var(--button-red)] rounded-2xl border-2 border-white px-5 py-8 sm:px-7 sm:py-10 lg:px-8 lg:py-12 shadow-2xl">
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
          </div>
        </div>
      </div>
    </section>
  );
}


