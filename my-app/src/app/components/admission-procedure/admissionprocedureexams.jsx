"use client";

import React from "react";
import OurPrograms from "../admissions/our_programs";

function Admissionprocedureexams() {
  return (
    <div className="admission-exams-programs">
      <OurPrograms
        customPrograms={[
          {
            id: 1,
            title: "About Kalsee",
            specialization:
              "The Kalinga Scholastic Entrance Examination (KALSEE) is a Computer-Based Test for all the streams except BBA and MBA. It is an MCQ-based exam with flexible scheduling options and no negative marking.",
            eligibility: "",
            type: "",
            coursePageUrl: "/kalsee",
            hideScholarshipLink: true,
            exploreLinkText: "Know More",
          },
          {
            id: 2,
            title: "About Kalmat",
            specialization:
              "The Kalinga Management Aptitude Test (KAL-MAT) is an online entrance exam for BBA and MBA, conducted on specific dates decided by Kalinga University. It includes two steps: An online entrance exam and a personal interview",
            eligibility: "",
            type: "",
            coursePageUrl: "/kalmat",
            hideScholarshipLink: true,
            exploreLinkText: "Know More",
          },
        ]}
        hideSearchFilter={true}
        customTitle=""
        customSubtitle=""
        maxPrograms={2}
        mobileMaxWidth={700}
      />

      {/* ✅ Scoped global fix ONLY for this block */}
      <style jsx global>{`
        /* ===============================
           MOBILE PADDING NORMALIZATION
           =============================== */
        @media (max-width: 767px) {
          /* 1️⃣ Equal top & bottom padding of the section */
          .admission-exams-programs section {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }

          /* 2️⃣ Remove empty header spacing (title/subtitle not used) */
          .admission-exams-programs .text-center.mb-5 {
            display: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* 3️⃣ Reduce excess bottom spacing from program cards */
          .admission-exams-programs .grid > div:last-child {
            margin-bottom: 0 !important;
          }
        }

        /* ===============================
           EXISTING OVERRIDES (UNCHANGED)
           =============================== */

        /* Hide "Duration : ..." */
        .admission-exams-programs p.whitespace-nowrap {
          display: none !important;
        }

        /* Hide Apply Now button */
        .admission-exams-programs
          .flex.flex-row.gap-2.md\\:gap-3
          > a:last-child {
          display: none !important;
        }

        /* Adjust button gap */
        .admission-exams-programs .flex.flex-row.gap-2.md\\:gap-3 {
          gap: 0.5rem !important;
        }
      `}</style>
    </div>
  );
}

export default Admissionprocedureexams;
