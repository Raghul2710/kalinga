import React from 'react'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'
import Campusfacilitymainintro from '@/app/components/campus-facilities/campusfacilitymainintro'
import Campusfacilitiescard from '../components/campus-facilities/campusfacilitiescard'
import AdmissionCareer from '../components/general/admission_cta'

function CampusFacilities() {

    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-facilities/campusmain.webp",
        pageTitle: "Campus Facilities",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Campus Facilities", href: "/campus-facilities" },
        ],
    };

    return (
        <>
            <AutoBreadcrumb data={breadcrumbData} />
            <Campusfacilitymainintro />
            <Campusfacilitiescard />
            <AdmissionCareer />
        </>
    )
}

export default CampusFacilities
