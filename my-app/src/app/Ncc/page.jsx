import React from 'react'
import NccIntro from '../components/Ncc/ncc-intro'
import NccBenefits from '../components/Ncc/ncc-benefits'
import NccHeadMessage from '../components/Ncc/ncc-coordinator-message'
import NccVisionMission from '../components/Ncc/ncc-visionmission'
import NccEvents from '../components/Ncc/ncc-events'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'

const page = () => {

   const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "Ncc",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Ncc", href: "/Ncc" },
        ],
    };
  return (
    <>
     <AutoBreadcrumb data={breadcrumbData} />
    <NccIntro/>
    <NccBenefits/>
     <NccVisionMission/>
    <NccHeadMessage/>
    <NccEvents/>
    </>
  )
}

export default page