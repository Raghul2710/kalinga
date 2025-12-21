import React from 'react'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'
import Academicmainintro from '@/app/components/academic-facilities/academicmainintro'
import Academiccards from '@/app/components/academic-facilities/academiccards'
import AdmissionCareer from '@/app/components/general/admission_cta'

function AcademicFacilities() {

    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/academic-facilities/academicintro.webp",
        pageTitle: "Academic Facilities",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Academic Facilities", href: "/academic-facilities" },
        ],
    };

    return (
        <>
            <AutoBreadcrumb data={breadcrumbData} />
            <Academicmainintro />
            <Academiccards />
            <AdmissionCareer />
        </>
    )
}

export default AcademicFacilities
