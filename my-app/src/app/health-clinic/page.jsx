import React from 'react'
import HCIntro from '../components/health-clinic/healthclinic-intro'
import HealthClinicTable from '../components/health-clinic/healthclinic-table'
import AdmissionCareer from '../components/general/admission_cta'
import AutoBreadcrumb from '../components/layout/BreadcrumbData'

const page = () => {
  const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png",
        pageTitle: "Health Clinic",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Health Clinic", href: "/health-clinic" },
        ],
    };
  return (
    <>
    <AutoBreadcrumb data={breadcrumbData} />
    <HCIntro/>
    <HealthClinicTable/>
    <AdmissionCareer/>
    </>
  )
}

export default page