"use client";
import React, { useEffect } from 'react'
import NccIntro from '../components/Ncc/ncc-intro'
import NccBenefits from '../components/Ncc/ncc-benefits'
import NccHeadMessage from '../components/Ncc/ncc-coordinator-message'
import NccVisionMission from '../components/Ncc/ncc-visionmission'
import NccEvents from '../components/Ncc/ncc-events'
import AdmissionCareer from '../components/general/admission_cta';
import UpcomingConferences from '../components/research/upcoming_conference';
import Ncctopvideo from '../components/Ncc/ncc-topvideo';
import Nccvideos from '../components/Ncc/ncc-videos';
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-3.webp",
  pageTitle: "National Cadet Corps",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "National Cadet Corps", href: "/Ncc" },
  ],
};
const page = () => {


  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);
  return (

    <>
      <style jsx global>{`
      .absolute.inset-0 > img {
        object-position: center 10% !important;
      }
    
      @media (max-width: 768px) {
        .absolute.inset-0 > img {
          object-position: center 5% !important;
        }
      }
    `}</style>
      <NccIntro />
      <Ncctopvideo />
      <NccBenefits />
      <Nccvideos />
      <NccVisionMission />
      <NccHeadMessage />
      <AdmissionCareer />
    </>
  )
}

export default page