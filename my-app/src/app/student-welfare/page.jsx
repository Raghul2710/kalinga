import React from 'react'
import StudentWelfareIntro from '../components/student-welface/studentwelfare-intro'
import SwdeanIntro from '../components/student-welface/swdean-into'
import SwCards from '../components/student-welface/sw-cards'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'

const page = () => {
    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "Student Welfare Services",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Student Welfare Services", href: "/student-welfare" },
        ],
    };
    return (
        <>
         <AutoBreadcrumb data={breadcrumbData} />
        <StudentWelfareIntro/>
        <SwdeanIntro/>
        <SwCards/>
        </>
    )
}

export default page