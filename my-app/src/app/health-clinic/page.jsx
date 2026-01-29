"use client";
import React, { useEffect } from 'react'
import HCIntro from '../components/health-clinic/healthclinic-intro'
import HealthClinicTable from '../components/health-clinic/healthclinic-table'
import AdmissionCareer from '../components/general/admission_cta'
<<<<<<< Updated upstream
import Healthclinicvideos from '../components/health-clinic/healthclinicvideos';
=======
import RaipurVideoSection from '../components/about-raipur/raipurvideo';



>>>>>>> Stashed changes

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/health-clinic/health-clinic-1.webp",
  pageTitle: "Health Clinic",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Health Clinic", href: "/health-clinic" },
  ],
};
const page = () => {
<<<<<<< Updated upstream

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);

=======
  const campusVideos = [
    {
        id: 1,
        title: "Kalinga University Campus Tour",
        videoUrl: "https://youtu.be/r0tBeANR5fQ",
    },
   
];
 
     useEffect(() => {
            if (typeof window !== 'undefined') {
              window.__breadcrumbData = breadcrumbData;
            }
          }, []); 
          
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <HCIntro />
      <HealthClinicTable />
      <Healthclinicvideos />
      <AdmissionCareer />
=======
    <HCIntro/>
    <HealthClinicTable/>
    <RaipurVideoSection
            videoId = "ogUpFzbzP1c"
            thumbnail = "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp"
            title = "Kalinga University's 24x7 Medical Facility Ensures Student Health"
            description = "" // optional
            alt = "Video thumbnail"
            heightClass = "h-[380px] sm:h-[420px] md:h-[520px]" // optional, keep default
            className = "" // optional wrapper class
        />
        
    <AdmissionCareer/>
>>>>>>> Stashed changes
    </>
  )
}

export default page