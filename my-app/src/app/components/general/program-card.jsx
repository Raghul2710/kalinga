"use client";

import React, { useState } from "react";
import GlobalArrowButton from "./global-arrow_button";

export default function ProgramCard({
  program,
  onCheckEligibility,
  onApplyNow,
  onScholarshipsClick,
  onExploreProgramClick,
  href = "",
  applyNowLink = "https://admissions.kalingauniversity.ac.in/",
  exploreLinkText = "Explore Program",
  titleClassName = ""
}) {
  return (
    <div className="bg-white flex items-center justify-between rounded-xl p-4 md:p-6 relative overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Background UG Text - Top Right */}
      <div className="absolute top-2 right-2 md:top-4 md:right-4 text-6xl md:text-8xl !font-bold text-gray-200 leading-none opacity-50 z-0 font-stix">
        {program.type}
      </div>

      {/* Program Content */}
      <div className="relative z-10">
        {/* Main Red Heading - Short Name */}
        <h3 className={`text-[var(--button-red)] text-xl md:text-2xl lg:text-3xl !font-medium mb-1 font-plus-jakarta-sans normal-case ${titleClassName}`}>
          {program.shortName || program.title}
        </h3>

        {/* Full Program Name - Next line */}
        {program.shortName && (
          <p className="text-gray-600 text-sm md:text-base font-medium mb-1 font-plus-jakarta-sans">
            {program.title}
          </p>
        )}

        {/* Department Name - Following line */}
        {program.specialization && (
          <p className="text-[var(--button-red)] text-xs md:text-sm lg:text-base mb-3 md:mb-4 leading-relaxed font-plus-jakarta-sans">
            {program.specialization}
          </p>
        )}



        {/* Program Details Section */}
        <div className="mb-4 md:mb-6 md:flex  gap-5">
          {/* Duration */}
          {!program.hideDuration && (
            <p className="whitespace-nowrap">
              Duration : {program.duration}
            </p>
          )}
          {/* Eligibility */}
          {program.eligibility && (
            <p className=" whitespace-nowrap">
              Eligibility: {program.eligibility}
            </p>
          )}

          {/* Links Row */}
          <div className="flex items-center gap-3 md:gap-4 justify-start flex-wrap md:flex-nowrap mt-2 md:mt-0">
            {!program.hideScholarshipLink && (
              <a
                href="/admissions"
                onClick={(e) => {
                  if (onScholarshipsClick) {
                    e.preventDefault();
                    onScholarshipsClick(program);
                  }
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
            )}
            {/* {!program.hideExploreLink && (
                <a
                  href="/admissions"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onExploreProgramClick) onExploreProgramClick(program);
                  }}
                  className="text-[var(--button-red)] text-xs md:text-sm font-medium hover:underline flex items-center gap-1 whitespace-nowrap !text-[11px] md:!text-[12px]"
                >
                  {program.exploreLinkText || exploreLinkText}
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
              )} */}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row gap-2 md:gap-3">

          {/* Check Eligibility Button - Dark Red with white arrow in white square */}
          <a href={href} onClick={(e) => {
            e.preventDefault();
            if (program.exploreLinkText || exploreLinkText) onExploreProgramClick(program);
          }}>
            <GlobalArrowButton
              className="!bg-[var(--dark-orange-red)] !text-[var(--background)] whitespace-nowrap text-xs md:text-sm lg:text-base !h-[38px] md:!h-[40px] !rounded-lg !px-1"
              arrowClassName="!bg-[var(--background)] !px-1"
              arrowIconClassName="!text-[var(--button-red)]"
              textClassName="!text-[12px] md:!text-[14px] !px-2 md:!px-3"
              onClick={(e) => {
                e.preventDefault();
                if (onCheckEligibility) onCheckEligibility(program);
              }}
            >
              {program.exploreLinkText || exploreLinkText}
            </GlobalArrowButton>
          </a>

          {/* Apply Now Button - Dark Red with white arrow in white square */}
          <a
            href={applyNowLink}
            {...(applyNowLink.startsWith('#') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            onClick={(e) => {
              if (applyNowLink.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(applyNowLink);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }
              if (onApplyNow) onApplyNow(program);
            }}
          >
            <GlobalArrowButton
              className="!bg-[var(--button-red)] !text-[var(--background)] whitespace-nowrap !text-xs md:!text-sm lg:!text-base !h-[38px] md:!h-[40px] !rounded-lg !px-1"
              arrowClassName="!bg-[var(--background)] !px-1 !text-white"
              arrowIconClassName="!text-[var(--button-red)]"
              textClassName="!text-[12px] md:!text-[14px] !px-2 md:!px-3"
            >
              Apply Now
            </GlobalArrowButton>
          </a>
        </div>
      </div>
    </div>
  );
}

