"use client"

import React, { Suspense } from 'react'
import KUFeesTabSection from '../components/ku-fees/kufeestabs'

import AdmissionCareer from '../components/general/admission_cta';

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "KU Fees",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "KU Fees", href: "/ku-fees" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

function KuFees() {

  return (
    <div>
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
      <Suspense fallback={<div className="w-full py-4 px-2">Loading...</div>}>
        <KUFeesTabSection />
      </Suspense>
      <AdmissionCareer />
    </div>
  )
}

export default KuFees