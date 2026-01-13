"use client"
import React from 'react'
import StudentReportmainintro from '@/app/components/student-support/studentreportmainintro'
import AdmissionCareer from '@/app/components/general/admission_cta'
import Studentreportservices from '@/app/components/student-support/studentreportservices'
import Studentreportcards from '@/app/components/student-support/studentreportcards'


const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/student-support/studentsupportmain.webp",
  pageTitle: "Student Support",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Student Support", href: "/student-support" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

function StudentReport() {
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
      <StudentReportmainintro />
      <Studentreportservices />
      <Studentreportcards />
      <AdmissionCareer />
    </>
  )
}

export default StudentReport