"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Academicmainintro from "@/app/components/academic-facilities/academicmainintro";
import Academiccards from "@/app/components/academic-facilities/academiccards";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Academicvideo from "../components/academic-facilities/academicvideo";

export default function AcademicFacilities() {
  const pathname = usePathname();



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
      {/* <Academicvideo /> */}
      <AdmissionCareer />
    </>
  );
}
