import React from 'react'
import StudentReportmainintro from '@/app/components/student-support/studentreportmainintro'
import AdmissionCareer from '@/app/components/general/admission_cta'
import Studentreportservices from '@/app/components/student-support/studentreportservices'
import Studentreportcards from '@/app/components/student-support/studentreportcards'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'

function StudentReport() {
    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/studentsupportmain.webp",
        pageTitle: "Student Support",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Student Support", href: "/student-support" },
        ],  
    };

    return (
        <>
            <AutoBreadcrumb data={breadcrumbData} />
            <StudentReportmainintro />
            <Studentreportservices />
            <Studentreportcards />
            <AdmissionCareer />
        </>
    )
}

export default StudentReport