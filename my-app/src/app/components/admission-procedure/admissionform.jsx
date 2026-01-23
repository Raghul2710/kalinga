"use client";

import React from "react";
import OrganogramOfKalinga from "../about/organogram_of_kalinga";

function Admissionform() {
    const syllabusContent = {
        title: "Download Admission Form ",
        description: [""],
        buttonLabel: "Admission Form",
        href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Admission_Form.pdf",
    };

    return (
        <div className="admissionform-wrap">
            <OrganogramOfKalinga
                title={syllabusContent.title}
                description={syllabusContent.description}
                buttonLabel={syllabusContent.buttonLabel}
                href={syllabusContent.href}
                buttons={syllabusContent.buttons}
                buttonClassName="!bg-white !text-black"
                arrowClassName="!bg-[var(--dark-orange-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
                cardBackgroundColor="bg-[var(--button-red)]"
                useContainer={false}
                showImage={false}
                imageUrl={syllabusContent.imageUrl}
                imageAlt={syllabusContent.title}
            />

            {/* ✅ Override Organogram section padding ONLY inside this component */}
            <style jsx>{`
        /* Mobile only */
        @media (max-width: 767px) {
          .admissionform-wrap :global(section.py-16) {
            padding-top: 1rem !important;
            padding-bottom: 4rem !important;
          }
        }
      `}</style>
        </div>
    );
}

export default Admissionform;
