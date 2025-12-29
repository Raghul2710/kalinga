"use client"

import React from 'react'
import RaipurMainIntro from '@/app/components/about-raipur/raipur_main_intro'
import NewRaipur from '@/app/components/about-raipur/new_raipur'
import Objectives from '@/app/components/about-raipur/objective'
import Highlights from '@/app/components/about-raipur/highlights'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'
import AdmissionCareer from '../components/general/admission_cta'

function page() {
  const breadcrumbData = {
    heroImage:
      "https://kalinga-university.s3.ap-south-1.amazonaws.com/about/about-banner.webp",
    pageTitle: "About Raipur",
    customBreadcrumbs: [
      { label: "Home", href: "/" },
      { label: "About Raipur", href: "/about-raipur" },
    ],
  };



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

      <AutoBreadcrumb data={breadcrumbData} />
      <RaipurMainIntro />
      <NewRaipur />
      <Objectives />
      <Highlights />
      <AdmissionCareer />
    </>
  )
}

export default page
