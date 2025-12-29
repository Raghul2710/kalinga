"use client";

import React, { useEffect } from "react";
import Academicmainintro from "@/app/components/academic-facilities/academicmainintro";
import Academiccards from "@/app/components/academic-facilities/academiccards";
import AdmissionCareer from "@/app/components/general/admission_cta";

// Breadcrumb configuration (same pattern as AboutUs)
const breadcrumbData = {
    heroImage:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/academics-banner.webp",
    pageTitle: "Academic Facilities",
    customBreadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Academic Facilities", href: "/academic-facilities" },
    ],
};

export default function AcademicFacilities() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.__breadcrumbData = breadcrumbData;
        }
    }, []);

    return (
        <>
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
            <Academicmainintro />
            <Academiccards />
            <AdmissionCareer />
        </>
    );
}
