"use client";
import React, { useEffect } from 'react'
import MiniMarketFacility from '../components/mini-market/minimarket-facility'
import AdmissionCareer from '../components/general/admission_cta'
import RaipurVideoSection from '../components/about-raipur/raipurvideo';



const page = () => {


  return (
    <>
      <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 40% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
      <MiniMarketFacility />
      <RaipurVideoSection
        videoId="8bqYKGqQ8XI"
        thumbnail="https://cdn.kalingauniversity.ac.in/mini-market/thumbnail.webp"
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