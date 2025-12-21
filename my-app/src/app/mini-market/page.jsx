import React from 'react'
import MiniMarketFacility from '../components/mini-market/minimarket-facility'
import AdmissionCareer from '../components/general/admission_cta'
import AutoBreadcrumb from '../components/layout/BreadcrumbData';

const page = () => {
   const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "Mini Market",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Mini Market", href: "/mini-market" },
        ],
    };
  return (
    <>
    <AutoBreadcrumb data={breadcrumbData} />
    <MiniMarketFacility/>
    <AdmissionCareer/>
    </>
  )
}

export default page