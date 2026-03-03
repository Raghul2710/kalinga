"use client"

import React from 'react'
import AdmissionCareer from '../components/general/admission_cta';
import Admissionproceduresteps from '../components/admission-procedure/admissionproceduresteps';
import Admissionform from '../components/admission-procedure/admissionform';
import Admissioncrackandwin from '../components/admission-procedure/admissioncrackandwin';
import Admissionprocedureexams from '../components/admission-procedure/admissionprocedureexams';
import Admissionearlybenefits from '../components/admission-procedure/admissionearlybenefits';
import Admissionhacks from '../components/admission-procedure/admissionhacks';
import MainIntro from '../components/about/main_intro';

function AdmissionProcedure() {

    const scholarshipContent = {
        title: "Scholarships & Financial Assistance",
        description: [
            "Your hard work deserves a reward.",
            "At Kalinga University, you don’t have to worry about the tuition fee as we’ve got you covered. Our scholarships are designed to help bright minds and talented students succeed in their careers. ",
            "<span style='font-weight: bold; font-size: 1.125rem;'>Who Are Eligible For Our Scholarships?</span>",
        ],
        points: [
            "Merit-based performers",
            "Students who scored 80+ percentile or above in competitive examinations",
            "State, National, and International sports champions",
            "Received awards or recognition in National and International cultural events or participated in TV reality shows",
            "Female students",
            "Physically challenged students",
            "Wards and siblings of personnel from the Indian Army, Air Force, Indian Navy, Paramilitary Forces, and Police",
            "Wards of health and hospital frontline workers",
            "National award winners",
            "Students from North-East India",
            "Siblings (valid only until the completion of the course of the elder sibling)",
            "Applicants listed in the Limca Book of Records, Golden Book of Records, or Guinness World Records",
            "Applicants with a strong social media presence",
            "Students who have published research papers, books, technology, or product innovations",
            "Wards of Kalinga University teaching and non-teaching staff"
        ],
        imageUrl: "https://cdn.kalingauniversity.ac.in/ccrc/placement.png",
        imageAlt: "Scholarships & Financial Assistance",
        knowMoreLabel: "Read More",
        extraLink: "https://cdn.kalingauniversity.ac.in/scholarships/Scholarships+2026-2027.pdf",
        extraLinkLabel: "Download Scholarship Policy"

    }

    return (

        <div>
            <style jsx global>{`
            .absolute.inset-0 > img {
                object-position: center 60% !important;
            }

            @media (max-width: 768px) {
                .absolute.inset-0 > img {
                object-position: center 5% !important;
                }
            }
            `}</style>

            <Admissionproceduresteps />
            <Admissionform />
            <Admissioncrackandwin />
            <Admissionprocedureexams />
            <Admissionearlybenefits />
            <MainIntro
                title={scholarshipContent.title}
                description={scholarshipContent.description}
                points={scholarshipContent.points}
                imageUrl={scholarshipContent.imageUrl}
                imageAlt={scholarshipContent.imageAlt}
                knowMoreLabel={scholarshipContent.knowMoreLabel}
                extraLink={scholarshipContent.extraLink}
                extraLinkLabel={scholarshipContent.extraLinkLabel}
                hidePointsUntilExpanded={true}
            />
            <Admissionhacks />
            <AdmissionCareer />
        </div>
    )
}

export default AdmissionProcedure