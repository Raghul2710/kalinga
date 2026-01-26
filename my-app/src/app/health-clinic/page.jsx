"use client";
import React, { useEffect } from 'react'
import HCIntro from '../components/health-clinic/healthclinic-intro'
import HealthClinicTable from '../components/health-clinic/healthclinic-table'
import AdmissionCareer from '../components/general/admission_cta'
import Healthclinicvideos from '../components/health-clinic/healthclinicvideos';

const breadcrumbData = {
  heroImage:
    "https://kalinga-university.s3.ap-south-1.amazonaws.com/health-clinic/health-clinic-1.webp",
  pageTitle: "Health Clinic",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Health Clinic", href: "/health-clinic" },
  ],
};
const page = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
  }, []);

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
      <HCIntro />
      <HealthClinicTable />
      <Healthclinicvideos />
      <AdmissionCareer />
    </>
  )
}

export default page