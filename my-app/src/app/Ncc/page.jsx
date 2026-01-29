"use client";
import React, { useEffect } from 'react'
import NccIntro from '../components/Ncc/ncc-intro'
import NccBenefits from '../components/Ncc/ncc-benefits'
import NccHeadMessage from '../components/Ncc/ncc-coordinator-message'
import NccVisionMission from '../components/Ncc/ncc-visionmission'
import NccEvents from '../components/Ncc/ncc-events'
import AdmissionCareer from '../components/general/admission_cta';
import UpcomingConferences from '../components/research/upcoming_conference';
<<<<<<< Updated upstream
import Ncctopvideo from '../components/Ncc/ncc-topvideo';
import Nccvideos from '../components/Ncc/ncc-videos';
=======
import RaipurVideoSection from '../components/about-raipur/raipurvideo';
>>>>>>> Stashed changes
const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/ncc/Ncc-3.webp",
  pageTitle: "NCC",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "NCC", href: "/ncc" },
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
<<<<<<< Updated upstream
      <Ncctopvideo />
=======
      <RaipurVideoSection
                      videoId = "u2yYHsX52Y"
                      thumbnail = "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp"
                      title = "Why Every Student Should Join NCC | Career Boost, Discipline & More Revealed"
                      description = "" // optional
                      alt = "Video thumbnail"
                      heightClass = "h-[380px] sm:h-[420px] md:h-[520px]" // optional, keep default
                      className = "" // optional wrapper class
                  />
>>>>>>> Stashed changes
      <NccBenefits />
      <Nccvideos />
      <NccVisionMission />
      <NccHeadMessage />
      <NccEvents/>
      <AdmissionCareer />
    </>
  )
}

export default page