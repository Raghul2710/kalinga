"use client";

import React from "react";
import GlobalArrowButton from "./global-arrow_button";

export default function ProgramCard({
  program,
  onCheckEligibility,
  onApplyNow,
  onScholarshipsClick,
  onExploreProgramClick
}) {
  return (
    <div className="bg-white flex items-center justify-between rounded-xl p-4 md:p-4 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Background UG Text - Top Right */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 text-6xl md:text-8xl !font-bold text-gray-200 leading-none opacity-50 z-0 font-stix">
        {program.type}
      </div>

      {/* Program Content */}
      <div className="relative z-10">
        {/* Program Title - Dark Red */}
        <h3 className="text-[var(--button-red)] text-xl md:text-2xl lg:text-3xl !font-bold mb-2 font-plus-jakarta-sans">
          {program.title}
        </h3>

        {/* Specialization - Dark Gray */}
        <p className="text-[var(--button-red)] text-xs md:text-sm lg:text-base mb-3 md:mb-4 leading-relaxed font-plus-jakarta-sans">
          {program.specialization}
        </p>

        {/* Program Details Section */}
        <div className="mb-4 md:mb-6 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          {/* Duration */}
          <p className="text-[var(--light-text-gray)] !text-[11px] md:!text-[12px] whitespace-nowrap">
            Duration : {program.duration}
          </p>

          {/* Links Row */}
          <div className="flex items-center gap-3 md:gap-4 justify-start flex-wrap md:flex-nowrap">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onScholarshipsClick) onScholarshipsClick(program);
              }}
              className="text-[var(--button-red)] text-xs md:text-sm font-medium hover:underline flex items-center gap-1 whitespace-nowrap !text-[11px] md:!text-[12px]"
            >
              Scholarships
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:w-[14px] md:h-[14px]"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onExploreProgramClick) onExploreProgramClick(program);
              }}
              className="text-[var(--button-red)] text-xs md:text-sm font-medium hover:underline flex items-center gap-1 whitespace-nowrap !text-[11px] md:!text-[12px]"
            >
              Explore Program
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:w-[14px] md:h-[14px]"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-2 md:gap-3">
          {/* Check Eligibility Button - Dark Red with white arrow in white square */}
          <GlobalArrowButton
            className="!bg-[var(--dark-orange-red)] !text-[var(--background)] whitespace-nowrap text-xs md:text-sm lg:text-base !h-[38px] md:!h-[40px] !rounded-lg !px-1"
            arrowClassName="!bg-[var(--background)] !px-1"
            arrowIconClassName="!text-[var(--button-red)]"
            textClassName="!text-[12px] md:!text-[14px] !px-2 md:!px-3"
            onClick={() => onCheckEligibility && onCheckEligibility(program)}
          >
            Check Eligibility
          </GlobalArrowButton>

          {/* Apply Now Button - Dark Red with white arrow in white square */}
          <GlobalArrowButton
            className="!bg-[var(--button-red)] !text-[var(--background)] whitespace-nowrap !text-xs md:!text-sm lg:!text-base !h-[38px] md:!h-[40px] !rounded-lg !px-1"
            arrowClassName="!bg-[var(--background)] !px-1 !text-white"
            arrowIconClassName="!text-[var(--button-red)]"
            textClassName="!text-[12px] md:!text-[14px] !px-2 md:!px-3"
            onClick={() => onApplyNow && onApplyNow(program)}
          >
            Apply Now
          </GlobalArrowButton>
        </div>
      </div>
    </div>
  );
}

