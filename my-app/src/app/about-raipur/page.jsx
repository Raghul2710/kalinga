"use client"

import React from 'react'
import RaipurMainIntro from '@/app/components/about-raipur/raipur_main_intro'
import NewRaipur from '@/app/components/about-raipur/new_raipur'
import Objectives from '@/app/components/about-raipur/objective'
import Highlights from '@/app/components/about-raipur/highlights'
import AdmissionCareer from '../components/general/admission_cta'

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
  pageTitle: "About Raipur",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "About Raipur", href: "/about-raipur" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

function page() {


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
      <RaipurMainIntro
        knowMoreLabel=''
        knowMoreHref='' />
      <NewRaipur />
      <Objectives />
      <Highlights />
      <AdmissionCareer />
    </>
  )
}

export default page
