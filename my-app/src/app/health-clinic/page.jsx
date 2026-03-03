"use client";
import React, { useEffect } from 'react'
import HCIntro from '../components/health-clinic/healthclinic-intro'
import HealthClinicTable from '../components/health-clinic/healthclinic-table'
import AdmissionCareer from '../components/general/admission_cta'
import RaipurVideoSection from '../components/about-raipur/raipurvideo';





const page = () => {
  const campusVideos = [
    {
      id: 1,
      title: "Kalinga University Campus Tour",
      videoUrl: "https://youtu.be/r0tBeANR5fQ",
    },

  ];



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
      <HCIntro />
      <HealthClinicTable />
      <RaipurVideoSection
        videoId="ogUpFzbzP1c"
        thumbnail="https://cdn.kalingauniversity.ac.in/about/about-banner.webp"
        title=""
        description="" // optional
        alt="Video thumbnail"
        heightClass="h-[380px] sm:h-[420px] md:h-[520px]" // optional, keep default
        className="" // optional wrapper class
      />

      <AdmissionCareer />
    </>
  )
}

export default page