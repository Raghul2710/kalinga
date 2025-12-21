import React from 'react'
import ResearchGrid from '../components/research-facilities/research-grid'
import ResearchCE from '../components/research-facilities/research-coe'
import AdmissionCareer from '../components/general/admission_cta'
import ResearchLab from '../components/research-facilities/research-lab'
import ResearchFacilitiesIntro from '../components/research-facilities/research-intro'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'

const page = () => {
    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/reserarch-banner.webp",
        pageTitle: "Research Facilities",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Research Facilities", href: "/research-facilities" },
        ],
    };
    return (
        <>
         <AutoBreadcrumb data={breadcrumbData} />
            <ResearchFacilitiesIntro />
            <ResearchGrid />
            <ResearchCE />
            <ResearchLab />
            <AdmissionCareer />
        </>
    )
}

export default page